export type AnalyticsEventName = 
  | "contact_form_open"
  | "contact_form_submit"
  | "quote_request"
  | "whatsapp_click"
  | "service_cta_click";

/**
 * Sends event data to the analytics provider (e.g. GA4, Plausible, Mixpanel).
 * IMPORTANT: Never send PII (Personal Identifiable Information) like name, email, or phone.
 */
export function trackEvent(eventName: AnalyticsEventName, payload?: Record<string, string | undefined>) {
  if (typeof window !== "undefined") {
    // 1. Log to console for development verification
    console.log(`📊 [Analytics] Event: ${eventName}`, payload || {});

    // 2. Integration stub for providers:
    
    // Google Analytics (GA4) Example:
    // if (window.gtag) { window.gtag("event", eventName, payload); }
    
    // Plausible Analytics Example:
    // if (window.plausible) { window.plausible(eventName, { props: payload }); }
    
    // Meta/Facebook Pixel Example:
    // if (window.fbq) { window.fbq("trackCustom", eventName, payload); }
  }
}
