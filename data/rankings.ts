import { tools, Tool, getFreeTools, getToolsForAudience, getTopRatedTools, getToolsByCategories } from './tools';

export type Ranking = {
  slug: string; // usado como /mejores-ias-{slug} excepto el ranking general 'general'
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  faqs: { q: string; a: string }[];
  getTools: () => Tool[];
};

export const rankings: Ranking[] = [
  {
    slug: 'general',
    title: 'Las mejores IA de 2026',
    seoTitle: 'Las mejores herramientas de IA de 2026',
    metaDescription:
      'Ranking editorial de las herramientas de inteligencia artificial mejor valoradas del directorio, actualizado a medida que se revisan más herramientas.',
    intro:
      'Este ranking recoge las herramientas mejor valoradas de todo el directorio, según nuestra valoración editorial (demo). No es una encuesta a usuarios reales todavía, sino un criterio editorial que iremos sustituyendo por datos de uso reales a medida que la web crezca.',
    faqs: [
      {
        q: '¿Cómo se elabora este ranking?',
        a: 'Por ahora, ordenando las herramientas según la valoración editorial interna del directorio. Es un punto de partida, no una medición de popularidad real entre usuarios.',
      },
    ],
    getTools: () => getTopRatedTools(12),
  },
  {
    slug: 'gratis',
    title: 'Las mejores IA gratuitas',
    seoTitle: 'Las mejores IA gratuitas en 2026',
    metaDescription: 'Herramientas de inteligencia artificial con una versión gratuita realmente utilizable, no solo una prueba de unos días.',
    intro:
      'Aquí solo aparecen herramientas con una versión gratuita permanente (no una simple prueba de unos días). Ordenadas por valoración editorial dentro de ese grupo.',
    faqs: [
      {
        q: '¿"Gratis" significa gratis para siempre?',
        a: 'Significa que la herramienta ofrece un plan gratuito permanente, normalmente con límites de uso. Revisa la ficha de cada herramienta para ver el detalle exacto.',
      },
    ],
    getTools: () => getFreeTools(12),
  },
  {
    slug: 'para-estudiantes',
    title: 'Las mejores IA para estudiantes',
    seoTitle: 'Las mejores IA para estudiantes en 2026',
    metaDescription: 'Herramientas de inteligencia artificial pensadas para estudiar, repasar y organizar apuntes.',
    intro:
      'Selección de herramientas especialmente útiles para estudiar: resumir apuntes, repasar con preguntas, transcribir clases o escuchar material en vez de leerlo.',
    faqs: [
      {
        q: '¿Es aceptable usar estas IA para hacer trabajos de clase?',
        a: 'Depende de las normas de cada centro. Como norma general, son más seguras para entender y repasar que para generar trabajos completos que se entregan como propios.',
      },
    ],
    getTools: () => {
      const byAudience = getToolsForAudience('estudiante', 12);
      const byCategory = getToolsByCategories(['estudiantes']);
      const merged = [...byAudience, ...byCategory].filter((t, i, arr) => arr.findIndex((x) => x.slug === t.slug) === i);
      return merged.slice(0, 12);
    },
  },
  {
    slug: 'para-negocios',
    title: 'Las mejores IA para negocios',
    seoTitle: 'Las mejores IA para negocios y pequeñas empresas en 2026',
    metaDescription: 'Herramientas de inteligencia artificial útiles para marketing, productividad y automatización en pequeños negocios.',
    intro:
      'Herramientas pensadas para negocios: automatizar tareas repetitivas, producir contenido de marketing y ganar tiempo en tareas administrativas.',
    faqs: [
      {
        q: '¿Necesito un equipo técnico para usar estas herramientas?',
        a: 'La mayoría están pensadas para que las use directamente el propio negocio, sin necesitar un equipo técnico dedicado.',
      },
    ],
    getTools: () => getToolsByCategories(['marketing', 'productividad'], 12),
  },
  {
    slug: 'para-crear-videos',
    title: 'Las mejores IA para crear vídeos',
    seoTitle: 'Las mejores IA para crear vídeos en 2026',
    metaDescription: 'Herramientas de inteligencia artificial para generar, editar y narrar vídeos, con y sin experiencia previa.',
    intro:
      'Desde generar un clip desde texto hasta subtitular y editar automáticamente contenido para redes sociales: este ranking reúne las mejores opciones para vídeo del directorio.',
    faqs: [
      {
        q: '¿Cuál elijo si nunca he editado vídeo?',
        a: 'Empieza por una herramienta con plantillas y edición guiada; en las fichas de cada herramienta indicamos para quién es más adecuada.',
      },
    ],
    getTools: () => getToolsByCategories(['video'], 12),
  },
];

export function getRanking(slug: string) {
  return rankings.find((r) => r.slug === slug);
}
