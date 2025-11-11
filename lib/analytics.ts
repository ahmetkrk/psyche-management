// lib/analytics.ts
export const SWB_SCHEMA = "swb";
export const SWB_SCHEMA_VERSION = 1 as const;

export type SWBEventName =
  | "virtual_page_view"
  | "click_action"
  | "scroll_depth"
  | "form_submit";

export type SWBEventMeta = Record<string, any>;

export interface SWBBaseEvent {
  schema: string;
  schema_version: number;
  event_name: SWBEventName;
  section_key: string;
  action_key: string;
  page_location: string;
  session_id: string;
  timestamp: string;
  meta?: SWBEventMeta;
}

const ANALYTICS_ENDPOINT = "/api/analytics";
const SESSION_KEY = "swb_session_id";
const UTM_KEY = "swb_utm_source_info";

function ensureDataLayer() {
  if (typeof window === "undefined") return;
  (window as any).dataLayer = (window as any).dataLayer || [];
}

function getPageLocation() {
  if (typeof window === "undefined") return "";
  return window.location.href;
}

function getOrCreateSessionId() {
  if (typeof window === "undefined") return "";
  let sid = window.localStorage.getItem(SESSION_KEY);
  if (!sid) {
    sid = crypto.randomUUID();
    window.localStorage.setItem(SESSION_KEY, sid);
  }
  return sid;
}

function captureUTMOnce() {
  if (typeof window === "undefined") return;
  const existing = window.localStorage.getItem(UTM_KEY);
  if (existing) return;
  const url = new URL(window.location.href);
  const utm_source = url.searchParams.get("utm_source");
  const utm_medium = url.searchParams.get("utm_medium");
  const utm_campaign = url.searchParams.get("utm_campaign");
  if (utm_source || utm_medium || utm_campaign) {
    window.localStorage.setItem(
      UTM_KEY,
      JSON.stringify({
        utm_source,
        utm_medium,
        utm_campaign,
        first_seen: new Date().toISOString(),
      })
    );
  }
}

function getStoredUTM(): Record<string, any> | undefined {
  if (typeof window === "undefined") return;
  const raw = window.localStorage.getItem(UTM_KEY);
  if (!raw) return;
  try {
    return JSON.parse(raw);
  } catch {
    return;
  }
}

export function swbTrackEvent(
  event_name: SWBEventName,
  section_key: string,
  action_key: string,
  meta: SWBEventMeta = {}
) {
  if (typeof window === "undefined") return;

  captureUTMOnce();

  const payload: SWBBaseEvent = {
    schema: SWB_SCHEMA,
    schema_version: SWB_SCHEMA_VERSION,
    event_name,
    section_key,
    action_key,
    page_location: getPageLocation(),
    session_id: getOrCreateSessionId(),
    timestamp: new Date().toISOString(),
    meta: {
      ...meta,
      ...(getStoredUTM() || {}),
    },
  };

  ensureDataLayer();
  (window as any).dataLayer.push({
    event: payload.event_name,
    ...payload,
  });

  try {
    fetch(ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch (e) {}
}

export function swbTrackPage(section_key: string, meta: SWBEventMeta = {}) {
  swbTrackEvent("virtual_page_view", section_key, "page_view", meta);
}

export function swbTrackClick(section_key: string, action_key: string, meta: SWBEventMeta = {}) {
  swbTrackEvent("click_action", section_key, action_key, meta);
}

export function swbTrackScroll(section_key: string, depth: number) {
  swbTrackEvent("scroll_depth", section_key, "scroll", { depth });
}

export function mapPathToSection(path: string): string {
  if (path === "/") return "iam";
  if (path.startsWith("/insightlab")) return "insidelab";
  if (path.startsWith("/studio")) return "studio";
  if (path.startsWith("/echoes")) return "echoes";
  if (path.startsWith("/contact")) return "contact";
  if (path.startsWith("/flow")) return "flow";
  if (path.startsWith("/academy")) return "academy";
  if (path.startsWith("/vault")) return "vault";
  return "iam";
}
