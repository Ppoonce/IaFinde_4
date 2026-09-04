export type Category = {
  slug: string;
  name: string;
  shortLabel: string;
  seoTitle: string;
  description: string;
  intro: string;
  faqs: { q: string; a: string }[];
};

export const categories: Category[] = [
  {
    slug: 'video',
    name: 'IA para crear y editar vídeo',
    shortLabel: 'Vídeo',
    seoTitle: 'Mejores IA para crear y editar vídeo en 2026',
    description:
      'Herramientas de inteligencia artificial para generar vídeo a partir de texto, doblar voces, subtitular y editar clips automáticamente.',
    intro:
      'Generar y editar vídeo era, hasta hace poco, un trabajo que exigía software complejo y horas de renderizado. Las herramientas de esta categoría usan IA para acortar ese proceso: desde crear un clip a partir de una frase, hasta doblar un vídeo a otro idioma o recortar automáticamente los mejores momentos de una grabación larga.',
    faqs: [
      {
        q: '¿Puedo crear un vídeo profesional solo con IA?',
        a: 'Puedes llegar muy lejos para redes sociales, presentaciones o vídeos explicativos. Para producciones cinematográficas la IA todavía se usa como apoyo, no como sustituto completo del equipo de producción.',
      },
      {
        q: '¿Necesito saber edición de vídeo para usar estas herramientas?',
        a: 'La mayoría están pensadas para gente sin experiencia previa: funcionan con plantillas, guiones de texto o grabaciones que la IA recorta y organiza automáticamente.',
      },
    ],
  },
  {
    slug: 'imagen',
    name: 'IA para generar imágenes',
    shortLabel: 'Imagen',
    seoTitle: 'Mejores IA para generar imágenes en 2026',
    description:
      'Generadores de imágenes a partir de texto, herramientas de edición asistida y utilidades para crear ilustraciones, fotos y arte digital con IA.',
    intro:
      'Los generadores de imágenes por IA han pasado de ser una curiosidad a una herramienta habitual en diseño, marketing y contenido para redes sociales. Aquí encontrarás opciones para crear imágenes desde cero a partir de una descripción, y también herramientas de edición que retocan o amplían fotos existentes.',
    faqs: [
      {
        q: '¿Puedo usar comercialmente las imágenes generadas?',
        a: 'Depende de la herramienta y del plan contratado. Revisa siempre la licencia específica del servicio antes de usar una imagen en un proyecto comercial.',
      },
      {
        q: '¿Qué diferencia hay entre un generador y un editor de imágenes con IA?',
        a: 'Un generador crea una imagen nueva a partir de una descripción de texto. Un editor con IA modifica una imagen que ya tienes: elimina objetos, cambia el fondo o mejora la resolución.',
      },
    ],
  },
  {
    slug: 'audio',
    name: 'IA para crear voces y audio',
    shortLabel: 'Audio y voz',
    seoTitle: 'Mejores IA para generar voces y audio en 2026',
    description:
      'Síntesis de voz realista, clonación de voz, transcripción automática y generación de música con inteligencia artificial.',
    intro:
      'La generación de voz por IA ha alcanzado un nivel de naturalidad que hace pocos años parecía lejano. Esta categoría reúne herramientas para narrar vídeos, doblar contenido a otros idiomas, transcribir audio y crear música o efectos de sonido.',
    faqs: [
      {
        q: '¿Las voces generadas suenan naturales en español?',
        a: 'La calidad ha mejorado mucho, aunque varía según la herramienta y el acento. Conviene probar una muestra antes de contratar un plan de pago.',
      },
      {
        q: '¿Es legal clonar una voz con IA?',
        a: 'Clonar tu propia voz o la de alguien que te ha dado permiso explícito es habitual. Clonar la voz de otra persona sin su consentimiento puede tener implicaciones legales según el país.',
      },
    ],
  },
  {
    slug: 'escritura',
    name: 'IA para escribir y redactar',
    shortLabel: 'Escritura',
    seoTitle: 'Mejores IA para escribir y redactar textos en 2026',
    description:
      'Asistentes de escritura, correctores gramaticales inteligentes y generadores de texto para blogs, emails y redes sociales.',
    intro:
      'Escribir con ayuda de IA no significa dejar que la máquina piense por ti: significa acelerar la parte mecánica (estructurar, corregir, adaptar el tono) para que puedas centrarte en la idea. Aquí tienes las herramientas más usadas para redactar, corregir y reescribir textos.',
    faqs: [
      {
        q: '¿Google penaliza el contenido escrito con IA?',
        a: 'Google penaliza el contenido de baja calidad creado para manipular el posicionamiento, sea humano o con IA, no el uso de IA en sí. Lo importante es que el contenido final aporte valor real.',
      },
      {
        q: '¿Puedo usar estas herramientas para escribir en español?',
        a: 'Sí, la mayoría de asistentes de escritura generalistas funcionan en español, aunque algunos correctores gramaticales especializados están más pulidos en inglés.',
      },
    ],
  },
  {
    slug: 'estudiantes',
    name: 'IA para estudiar',
    shortLabel: 'Estudiantes',
    seoTitle: 'Mejores IA para estudiar y hacer trabajos en 2026',
    description:
      'Herramientas de IA para resumir apuntes, crear fichas de estudio, resolver dudas y organizar el tiempo de estudio.',
    intro:
      'Estudiar con IA no debería significar copiar respuestas: las mejores herramientas de esta categoría ayudan a entender mejor un tema, resumir apuntes largos, generar preguntas de repaso o explicar un concepto de otra forma cuando el libro de texto no queda claro.',
    faqs: [
      {
        q: '¿Está permitido usar IA para hacer trabajos de clase?',
        a: 'Depende de las normas de cada centro educativo y de cada profesor. Como norma general, es más seguro usar la IA para entender y repasar, y no para entregar trabajos generados automáticamente como si fueran propios.',
      },
      {
        q: '¿Hay herramientas de IA para estudiar gratis?',
        a: 'Sí, varias de las herramientas de esta categoría tienen un plan gratuito suficiente para uso ocasional de estudio.',
      },
    ],
  },
  {
    slug: 'marketing',
    name: 'IA para marketing',
    shortLabel: 'Marketing',
    seoTitle: 'Mejores IA para marketing digital en 2026',
    description:
      'Herramientas de IA para crear campañas, redactar anuncios, analizar datos y automatizar tareas de marketing.',
    intro:
      'Los equipos de marketing usan IA sobre todo para dos cosas: producir más contenido en menos tiempo (anuncios, copys, variaciones para probar) y entender mejor los datos que ya tienen. Esta categoría cubre ambos casos.',
    faqs: [
      {
        q: '¿La IA puede sustituir a un equipo de marketing?',
        a: 'No sustituye la estrategia ni el conocimiento del negocio, pero sí acelera tareas repetitivas como redactar variantes de un anuncio o resumir resultados de una campaña.',
      },
    ],
  },
  {
    slug: 'programacion',
    name: 'IA para programar',
    shortLabel: 'Programación',
    seoTitle: 'Mejores IA para programar en 2026',
    description:
      'Asistentes de código, autocompletado inteligente y herramientas de IA para depurar y documentar software.',
    intro:
      'Los asistentes de programación con IA se han convertido en parte habitual del flujo de trabajo de muchos desarrolladores: sugieren código mientras escribes, explican fragmentos difíciles de entender y ayudan a encontrar errores.',
    faqs: [
      {
        q: '¿Es seguro usar código generado por IA en producción?',
        a: 'Puede serlo si lo revisas y pruebas como harías con código escrito por una persona. No conviene copiar y pegar sin entender qué hace.',
      },
    ],
  },
  {
    slug: 'productividad',
    name: 'IA para productividad',
    shortLabel: 'Productividad',
    seoTitle: 'Mejores IA para productividad y organización en 2026',
    description:
      'Asistentes de IA para gestionar tareas, resumir reuniones, organizar notas y automatizar trabajo repetitivo.',
    intro:
      'Esta categoría reúne herramientas que no crean un contenido concreto, sino que ordenan tu trabajo: resumen reuniones, convierten notas sueltas en documentos organizados o automatizan tareas repetitivas entre aplicaciones.',
    faqs: [
      {
        q: '¿Estas herramientas acceden a mis datos privados?',
        a: 'Muchas necesitan conectarse a tu correo, calendario o documentos para funcionar. Revisa siempre la política de privacidad antes de dar acceso a información sensible.',
      },
    ],
  },
  {
    slug: 'diseno',
    name: 'IA para diseño gráfico',
    shortLabel: 'Diseño',
    seoTitle: 'Mejores IA para diseño gráfico en 2026',
    description:
      'Herramientas de IA para crear logotipos, plantillas, artes para redes sociales y piezas de diseño sin experiencia previa.',
    intro:
      'No hace falta saber usar software de diseño profesional para crear piezas visuales decentes. Estas herramientas combinan plantillas con IA para generar logotipos, publicaciones para redes sociales o presentaciones visuales de forma guiada.',
    faqs: [
      {
        q: '¿Puedo registrar como marca un logo generado por IA?',
        a: 'Las normas varían según el país y el registro de marcas correspondiente. Conviene consultarlo con un profesional antes de basar la identidad de una empresa en un logo generado automáticamente.',
      },
    ],
  },
  {
    slug: 'presentaciones',
    name: 'IA para hacer presentaciones',
    shortLabel: 'Presentaciones',
    seoTitle: 'Mejores IA para hacer presentaciones en 2026',
    description:
      'Herramientas que generan diapositivas automáticamente a partir de un texto o esquema, con diseño ya resuelto.',
    intro:
      'Diseñar una presentación desde cero consume tiempo que muchas veces no tienes. Estas herramientas generan la estructura y el diseño de las diapositivas a partir de un guion o esquema, dejándote libre para centrarte en el contenido.',
    faqs: [
      {
        q: '¿El resultado se ve genérico?',
        a: 'Depende de cuánto edites después. Como punto de partida suelen dar un resultado limpio; personalizar colores, tipografía e imágenes marca la diferencia.',
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
