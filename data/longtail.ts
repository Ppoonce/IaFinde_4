export type LongtailPage = {
  slug: string; // usado en /ia-para-{slug}
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  body: { heading: string; paragraphs: string[] }[];
  categorySlug: string; // categoría relacionada para herramientas destacadas y enlaces internos
  faqs: { q: string; a: string }[];
};

export const longtailPages: LongtailPage[] = [
  {
    slug: 'crear-videos',
    seoTitle: 'IA para crear vídeos: guía y herramientas recomendadas',
    metaDescription: 'Cómo usar inteligencia artificial para crear vídeos desde cero, con y sin experiencia previa en edición.',
    h1: 'IA para crear vídeos',
    intro:
      'Crear un vídeo desde cero, sin cámara ni equipo de grabación, es hoy posible gracias a herramientas de IA que generan clips a partir de una descripción de texto o de una imagen. Aquí te explicamos qué puedes conseguir realmente y con qué herramientas.',
    body: [
      {
        heading: '¿Qué tipo de vídeo puedes crear con IA hoy?',
        paragraphs: [
          'Depende mucho del objetivo. Para redes sociales, hoy es realista generar clips cortos, añadir subtítulos automáticos y montar un vídeo completo en minutos. Para vídeos explicativos o de formación, herramientas con avatares digitales permiten crear un vídeo narrado sin grabar cámara.',
          'Para producciones más largas y cuidadas, la IA todavía funciona mejor como apoyo (generar un fragmento puntual, doblar a otro idioma, limpiar el audio) que como sustituto completo de una producción tradicional.',
        ],
      },
      {
        heading: 'Cómo empezar sin experiencia',
        paragraphs: [
          'Si nunca has editado vídeo, empieza por una herramienta con plantillas y edición guiada en vez de una con más opciones técnicas. El objetivo inicial es terminar un vídeo completo, no dominar todas las funciones.',
        ],
      },
    ],
    categorySlug: 'video',
    faqs: [
      {
        q: '¿Necesito pagar para crear un vídeo con IA?',
        a: 'No necesariamente. Varias herramientas de esta categoría tienen un plan gratuito suficiente para empezar, especialmente para vídeo corto de redes sociales.',
      },
    ],
  },
  {
    slug: 'hacer-presentaciones',
    seoTitle: 'IA para hacer presentaciones: guía y herramientas recomendadas',
    metaDescription: 'Cómo generar presentaciones con IA a partir de un guion o esquema, ahorrando el trabajo de diseño inicial.',
    h1: 'IA para hacer presentaciones',
    intro:
      'Diseñar una presentación desde una diapositiva en blanco es donde más tiempo se suele perder. Las herramientas de esta categoría generan el diseño automáticamente a partir de un esquema de texto, dejándote libre para centrarte en el contenido.',
    body: [
      {
        heading: 'De un guion a una presentación en minutos',
        paragraphs: [
          'El flujo habitual es: escribes el esquema o los puntos principales de tu presentación, la herramienta genera un diseño completo con imágenes y estructura visual coherente, y tú ajustas el resultado final.',
        ],
      },
      {
        heading: 'Cuándo conviene ajustar el resultado a mano',
        paragraphs: [
          'El resultado automático es un buen punto de partida, pero para presentaciones importantes conviene revisar y personalizar colores, tipografía e imágenes, porque el diseño genérico se nota si no se ajusta nada.',
        ],
      },
    ],
    categorySlug: 'presentaciones',
    faqs: [
      {
        q: '¿Puedo exportar la presentación a PowerPoint?',
        a: 'La mayoría de estas herramientas permiten exportar a PDF y a formato PowerPoint, aunque conviene comprobarlo en cada una porque las opciones de exportación cambian.',
      },
    ],
  },
  {
    slug: 'estudiantes',
    seoTitle: 'IA para estudiantes: guía y herramientas recomendadas',
    metaDescription: 'Cómo usar inteligencia artificial para estudiar mejor: resumir apuntes, repasar y transcribir clases.',
    h1: 'IA para estudiantes',
    intro:
      'Usada bien, la IA no reemplaza el estudio: lo hace más eficiente. Resumir un tema largo, generar preguntas de repaso o transcribir una clase grabada son usos que ahorran tiempo sin sustituir el aprendizaje real.',
    body: [
      {
        heading: 'Usos que sí ayudan a aprender',
        paragraphs: [
          'Pedir que te expliquen un concepto de otra forma cuando el libro de texto no queda claro, generar preguntas de repaso sobre un tema ya estudiado, o resumir un documento largo antes de leerlo a fondo son usos que refuerzan el aprendizaje.',
        ],
      },
      {
        heading: 'Usos que conviene evitar',
        paragraphs: [
          'Entregar como propio un trabajo generado enteramente por IA no ayuda a aprender la materia y suele ir en contra de las normas del centro educativo.',
        ],
      },
    ],
    categorySlug: 'estudiantes',
    faqs: [
      {
        q: '¿Hay IA gratis específicas para estudiantes?',
        a: 'Sí, varias herramientas de esta lista tienen un plan gratuito suficiente para uso ocasional de estudio; consulta el ranking de mejores IA gratuitas para ver más opciones.',
      },
    ],
  },
  {
    slug: 'crear-logos',
    seoTitle: 'IA para crear logos: guía y herramientas recomendadas',
    metaDescription: 'Cómo generar un logo con inteligencia artificial y qué tener en cuenta antes de usarlo como marca real.',
    h1: 'IA para crear logos',
    intro:
      'Generar un primer boceto de logo con IA es rápido y útil para explorar ideas visuales. Antes de convertirlo en la marca definitiva de un negocio, conviene revisar algunos puntos importantes.',
    body: [
      {
        heading: 'Para qué sirve bien la IA aquí',
        paragraphs: [
          'Explorar rápidamente distintos estilos visuales, combinaciones de color o composiciones antes de decidir una dirección de marca es donde la IA aporta más valor: en minutos puedes ver docenas de variaciones que a mano tomarían mucho más tiempo.',
        ],
      },
      {
        heading: 'Qué revisar antes de usarlo como marca real',
        paragraphs: [
          'Comprueba que el logo generado no se parezca demasiado a una marca existente, y ten en cuenta que registrar como marca un logo generado por IA puede tener matices legales según el país; conviene consultarlo si vas a construir un negocio serio sobre esa identidad visual.',
        ],
      },
    ],
    categorySlug: 'diseno',
    faqs: [
      {
        q: '¿Un logo hecho con IA se ve genérico?',
        a: 'Puede pasar si usas el resultado tal cual sale. Ajustar tipografía, proporciones y color a mano marca mucho la diferencia frente a un resultado sin retocar.',
      },
    ],
  },
  {
    slug: 'generar-voces',
    seoTitle: 'IA para generar voces: guía y herramientas recomendadas',
    metaDescription: 'Cómo generar narraciones y voces realistas con IA, y qué tener en cuenta sobre clonación de voz.',
    h1: 'IA para generar voces',
    intro:
      'La síntesis de voz por IA ha llegado a un nivel de naturalidad que permite narrar vídeos, doblar contenido o crear audiolibros sin grabar con un micrófono profesional.',
    body: [
      {
        heading: 'Usos más habituales',
        paragraphs: [
          'Narración de vídeos y cursos online, doblaje de contenido a otro idioma manteniendo el tono original, y conversión de artículos escritos en versión audio son los usos más comunes de esta categoría.',
        ],
      },
      {
        heading: 'Sobre la clonación de voz',
        paragraphs: [
          'Clonar tu propia voz (por ejemplo, para corregir un error de grabación sin volver a grabar) es un uso habitual y sin problema. Clonar la voz de otra persona sin su consentimiento explícito puede tener implicaciones legales según el país, así que conviene tener cuidado con ese uso.',
        ],
      },
    ],
    categorySlug: 'audio',
    faqs: [
      {
        q: '¿Las voces en español suenan tan bien como en inglés?',
        a: 'La calidad ha mejorado mucho, aunque sigue variando según la herramienta. Conviene escuchar una muestra en español antes de decidirte por un plan de pago.',
      },
    ],
  },
  {
    slug: 'editar-fotos',
    seoTitle: 'IA para editar fotos: guía y herramientas recomendadas',
    metaDescription: 'Cómo usar IA para eliminar fondos, mejorar y editar fotos rápidamente, sin experiencia en edición.',
    h1: 'IA para editar fotos',
    intro:
      'Tareas de edición que antes exigían dominar Photoshop (recortar un fondo con precisión, mejorar la resolución, retocar una imagen) hoy se resuelven de forma automática en segundos gracias a la IA.',
    body: [
      {
        heading: 'Lo que ya resuelve bien la IA',
        paragraphs: [
          'Eliminar el fondo de una foto de producto o de un retrato, generar un fondo nuevo, o mejorar la nitidez de una imagen de baja resolución son tareas donde la IA ya da resultados muy sólidos sin necesitar experiencia previa.',
        ],
      },
      {
        heading: 'Dónde todavía conviene un editor tradicional',
        paragraphs: [
          'Para retoques muy específicos y creativos (composiciones complejas, retoque de piel muy detallado) un editor tradicional sigue dando más control, aunque la IA cada vez cubre más de ese terreno.',
        ],
      },
    ],
    categorySlug: 'imagen',
    faqs: [
      {
        q: '¿Puedo editar fotos con IA desde el móvil?',
        a: 'Sí, varias de las herramientas de esta categoría tienen app móvil pensada precisamente para editar fotos tomadas con el teléfono.',
      },
    ],
  },
];

export function getLongtailPage(slug: string) {
  return longtailPages.find((p) => p.slug === slug);
}
