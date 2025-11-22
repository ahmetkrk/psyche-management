// app/api/analytics/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";
import crypto from "crypto";

// Node runtime (pg kullanıyoruz)
export const runtime = "nodejs";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// IP hash için gizli salt (env'den)
const IP_SALT = process.env.ANALYTICS_IP_SALT || "";

// Gelen event'in tipi (lib/analytics.ts ile uyumlu)
type IncomingEvent = {
  schema: string;
  schema_version: number;
  event_name: string;
  section_key: string;
  action_key: string;
  page_location: string;
  session_id: string;
  timestamp: string;
  meta?: Record<string, any>;
};

function getClientIp(req: NextRequest): string | null {
  const xfwd = req.headers.get("x-forwarded-for");
  if (xfwd) {
    const [ip] = xfwd.split(",");
    return ip?.trim() || null;
  }
  const realIp =
    req.headers.get("x-real-ip") || req.headers.get("cf-connecting-ip");
  return realIp || null;
}

function hashIp(ip: string | null): string | null {
  if (!ip || !IP_SALT) return null;
  const h = crypto.createHash("sha256");
  h.update(ip + IP_SALT);
  return h.digest("hex");
}

function isValidEvent(body: any): body is IncomingEvent {
  if (!body || typeof body !== "object") return false;

  const required = [
    "schema",
    "schema_version",
    "event_name",
    "section_key",
    "action_key",
    "page_location",
    "session_id",
    "timestamp",
  ] as const;

  for (const key of required) {
    if (!(key in body)) return false;
  }

  if (typeof body.schema !== "string") return false;
  if (typeof body.schema_version !== "number") return false;
  if (typeof body.event_name !== "string") return false;
  if (typeof body.section_key !== "string") return false;
  if (typeof body.action_key !== "string") return false;
  if (typeof body.page_location !== "string") return false;
  if (typeof body.session_id !== "string") return false;
  if (typeof body.timestamp !== "string") return false;

  return true;
}

// Sağlık kontrolü / basit debug
export function GET() {
  return NextResponse.json({ ok: true, service: "swb-analytics" });
}

export async function POST(req: NextRequest) {
  // Body'i al
  const body = await req.json().catch(() => null);

  if (!isValidEvent(body)) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 }
    );
  }

  const clientIp = getClientIp(req);
  const ipHash = hashIp(clientIp);
  const userAgent = req.headers.get("user-agent") || null;

  // Eğer DB yoksa: sadece logla, hata verme
  if (!process.env.DATABASE_URL) {
    console.info("[analytics] (no DB configured)", {
      ...body,
      ip_hash: ipHash,
      user_agent: userAgent,
    });
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const client = await pool.connect();

    try {
      await client.query(
        `
        INSERT INTO swb_events (
          schema,
          schema_version,
          event_name,
          section_key,
          action_key,
          page_location,
          session_id,
          client_timestamp,
          meta,
          ip_hash,
          user_agent
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
        `,
        [
          body.schema,
          body.schema_version,
          body.event_name,
          body.section_key,
          body.action_key,
          body.page_location,
          body.session_id,
          body.timestamp,
          body.meta || {},
          ipHash,
          userAgent,
        ]
      );
    } finally {
      client.release();
    }

    return NextResponse.json({ ok: true, stored: true });
  } catch (err) {
    console.error("[analytics] DB insert error", err);
    return NextResponse.json(
      { ok: false, error: "DB error" },
      { status: 500 }
    );
  }
}
