/**
 * Capa mínima de analítica, pensada para no depender de ningún servicio de pago.
 *
 * CÓMO CONECTAR GOOGLE ANALYTICS (GA4) MÁS ADELANTE:
 * 1. Crea una propiedad en analytics.google.com y copia tu ID de medición (G-XXXXXXX).
 * 2. En app/layout.tsx, dentro de <head>, añade el snippet oficial de gtag.js de Google
 *    (Google te lo da tal cual al crear la propiedad).
 * 3. Ese script define window.gtag automáticamente. En cuanto exista, las llamadas a
 *    trackEvent() de aquí abajo empiezan a enviar eventos reales a GA4 sin tocar nada más.
 *
 * Mientras tanto (sin GA4 conectado), trackEvent no envía nada a ningún servidor externo:
 * en desarrollo lo muestra por consola para que puedas verificar que se dispara en el
 * momento correcto, y en producción simplemente no hace nada si window.gtag no existe.
 */

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
    return;
  }

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.info('[analytics:demo]', eventName, params);
  }
}

// Eventos ya usados en la web, documentados aquí para saber qué se puede medir
// en cuanto se conecte Google Analytics (o Plausible, Umami, etc.):
export const AnalyticsEvents = {
  TOOL_VISIT_CLICK: 'tool_visit_click', // clic en "Ver herramienta" / "Probar herramienta"
  TOOL_ANALYSIS_CLICK: 'tool_analysis_click', // clic en "Leer análisis"
  SEARCH_SUBMIT: 'search_submit', // búsqueda enviada en el directorio o en el hero
  SEARCH_SUGGESTION_CLICK: 'search_suggestion_click', // clic en una sugerencia de búsqueda
  COMPARATOR_SELECT: 'comparator_select', // selección de herramientas en el comparador
} as const;
