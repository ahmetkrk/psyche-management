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

const isBrowser = typeof window !== "undefined";

/**
 * localStorage güvenli okuma
 */
function safeGetItem(key: string): string | null {
  if (!isBrowser) return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * localStorage güvenli yazma
 */
function safeSetItem(key: string, value: string) {
  if (!isBrowser) return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // storage kapalı / quota dolu vs. ise sessiz geç
  }
}

/**
 * dataLayer'ı garantiye al
 */
function ensureDataLayer() {
  if (!isBrowser) return;
  (window as any).dataLayer = (window as any).dataLayer || [];
}

/**
 * Şu anki tam URL
 */
function getPageLocation() {
  if (!isBrowser) return "";
  return window.location.href;
}

/**
 * crypto.randomUUID + fallback
 */
function createSessionId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  // Eski tarayıcılar için basit fallback
  return (
    Math.random().toString(36).slice(2) +
    "-" +
    Date.now().toString(36) +
    "-" +
    Math.random().toString(36).slice(2)
  );
}

/**
 * Session ID üret / oku
 */
function getOrCreateSessionId() {
  if (!isBrowser) return "";
  let sid = safeGetItem(SESSION_KEY);
  if (!sid) {
    sid = createSessionId();
    safeSetItem(SESSION_KEY, sid);
  }
  return sid;
}

/**
 * UTM parametrelerini sadece ilk gelişte yakala
 */
function captureUTMOnce() {
  if (!isBrowser) return;

  const existing = safeGetItem(UTM_KEY);
  if (existing) return;

  let url: URL;
  try {
    url = new URL(window.location.href);
  } catch {
    return;
  }

  const utm_source = url.searchParams.get("utm_source");
  const utm_medium = url.searchParams.get("utm_medium");
  const utm_campaign = url.searchParams.get("utm_campaign");

  if (utm_source || utm_medium || utm_campaign) {
    const payload = JSON.stringify({
      utm_source,
      utm_medium,
      utm_campaign,
      first_seen: new Date().toISOString(),
    });
    safeSetItem(UTM_KEY, payload);
  }
}

/**
 * localStorage'daki UTM bilgisini oku
 */
function getStoredUTM(): Record<string, any> | undefined {
  if (!isBrowser) return;
  const raw = safeGetItem(UTM_KEY);
  if (!raw) return;
  try {
    return JSON.parse(raw);
  } catch {
    return;
  }
}

/**
 * Core event tracker
 */
export function swbTrackEvent(
  event_name: SWBEventName,
  section_key: string,
  action_key: string,
  meta: SWBEventMeta = {}
) {
  if (!isBrowser) return;

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

  // GTM / dataLayer
  ensureDataLayer();
  (window as any).dataLayer.push({
    event: payload.event_name,
    ...payload,
  });

  // Backend'e gönder
  try {
    fetch(ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // fetch hata verirse sessiz geç
  }
}

/**
 * Sayfa görüntüleme
 */
export function swbTrackPage(section_key: string, meta: SWBEventMeta = {}) {
  swbTrackEvent("virtual_page_view", section_key, "page_view", meta);
}

/**
 * Click event
 */
export function swbTrackClick(
  section_key: string,
  action_key: string,
  meta: SWBEventMeta = {}
) {
  swbTrackEvent("click_action", section_key, action_key, meta);
}

/**
 * Scroll depth
 */
export function swbTrackScroll(section_key: string, depth: number) {
  swbTrackEvent("scroll_depth", section_key, "scroll", { depth });
}

/**
 * URL → section mapping
 */
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
