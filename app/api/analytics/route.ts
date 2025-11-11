import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 60;
const buckets = new Map<string, { count: number; ts: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = buckets.get(ip);
  if (!entry) {
    buckets.set(ip, { count: 1, ts: now });
    return false;
  }
  if (now - entry.ts > RATE_LIMIT_WINDOW_MS) {
    buckets.set(ip, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

let pgPool: any = null;
async function getPgPool() {
  if (pgPool) return pgPool;
  const { Pool } = await import("pg");
  pgPool = new Pool({ connectionString: process.env.DATABASE_URL });
  return pgPool;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";
  if (ip && isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch (err) {
    console.error("analytics_invalid_json", err);
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const required = [
    "schema",
    "schema_version",
    "event_name",
    "section_key",
    "action_key",
    "page_location",
    "session_id",
    "timestamp",
  ];
  const missing = required.filter((k) => !body[k]);
  if (missing.length) {
    console.error("analytics_invalid_event_missing_fields", { missing, body });
    return NextResponse.json({ ok: false, error: "missing_fields", missing }, { status: 400 });
  }

  if (process.env.DATABASE_URL) {
    try {
      const pool = await getPgPool();
      await pool.query(
        `INSERT INTO swb_events
          (schema, schema_version, event, section_key, action_key, page_location, session_id, timestamp, meta)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
        [
          body.schema,
          body.schema_version,
          body.event_name,
          body.section_key,
          body.action_key,
          body.page_location,
          body.session_id,
          body.timestamp,
          body.meta ?? {},
        ]
      );
    } catch (err) {
      console.error("analytics_db_write_error", err);
    }
  } else {
    console.info("analytics_event", body);
  }

  return NextResponse.json({ ok: true });
}
