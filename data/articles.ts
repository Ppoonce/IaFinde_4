export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  publishedLabel: string;
  quickAnswer: string;
  toc: string[];
  relatedTools: string[]; // tool slugs
  relatedArticles: string[]; // article slugs
  sections: { heading: string; body: string[] }[];
  faqs: { q: string; a: string }[];
  isDemo: true;
};

export const articles: Article[] = [
  {
    slug: 'mejores-ia-crear-videos-gratis',
    title: '7 IA gratis para crear vídeos sin experiencia',
    seoTitle: '7 mejores IA gratis para crear vídeos en 2026',
    metaDescription:
      'Comparamos las mejores herramientas de IA gratuitas para crear y editar vídeo, con casos de uso reales para redes sociales y presentaciones.',
    category: 'video',
    publishedLabel: 'Guía actualizada 2026',
    quickAnswer:
      'Para empezar sin coste, CapCut es la opción más completa para vídeo corto en redes sociales, mientras que Runway ofrece más potencia si quieres experimentar con generación de vídeo por IA usando su plan de créditos gratuitos.',
    toc: [
      '¿Qué puede hacer hoy la IA por tu vídeo?',
      'Comparativa rápida',
      'Cuándo elegir cada herramienta',
      'Ventajas y límites de crear vídeo con IA',
      'Preguntas frecuentes',
    ],
    relatedTools: ['capcut', 'runway', 'synthesia', 'elevenlabs'],
    relatedArticles: ['ia-para-editar-videos', 'chatgpt-vs-gemini'],
    sections: [
      {
        heading: '¿Qué puede hacer hoy la IA por tu vídeo?',
        body: [
          'Hasta hace poco, crear un vídeo mínimamente cuidado exigía saber usar un editor complejo. Hoy, la IA cubre buena parte de ese trabajo técnico: recorta automáticamente los mejores momentos de una grabación larga, genera subtítulos sincronizados, elimina el fondo sin pantalla verde y puede incluso crear un clip entero a partir de una frase escrita.',
          'Esto no significa que el resultado sea siempre perfecto sin intervención humana. Significa que el punto de partida es mucho más alto que hace dos años, y que alguien sin formación en edición puede llegar a un resultado presentable en poco tiempo.',
        ],
      },
      {
        heading: 'Comparativa rápida',
        body: [
          'CapCut destaca por su plan gratuito muy completo y por estar pensado para contenido corto de redes sociales, con subtitulado automático y plantillas listas para usar.',
          'Runway es la opción para quien quiere generar vídeo desde texto o imagen, no solo editar uno ya grabado; su plan gratuito incluye un número limitado de créditos para probar la generación.',
          'Synthesia resuelve un caso distinto: vídeos narrados por un avatar digital, sin necesidad de grabar cámara ni contratar a nadie, muy usado en formación corporativa.',
        ],
      },
      {
        heading: 'Cuándo elegir cada herramienta',
        body: [
          'Si vas a publicar en redes sociales de forma habitual, empieza por CapCut: el plan gratuito cubre casi todas las necesidades de edición de vídeo corto.',
          'Si tu objetivo es experimentar con generación de vídeo desde cero (a partir de texto o de una imagen), Runway es el punto de partida más razonable.',
          'Si necesitas vídeos explicativos o de formación con una persona hablando a cámara, pero no puedes grabar, Synthesia resuelve ese caso concreto, aunque no tiene plan gratuito permanente.',
        ],
      },
      {
        heading: 'Ventajas y límites de crear vídeo con IA',
        body: [
          'La principal ventaja es el tiempo: tareas que antes llevaban horas (subtitular, recortar, doblar) se resuelven en minutos.',
          'El límite más importante es el control creativo fino: para producciones con una dirección artística muy específica, la IA todavía funciona mejor como apoyo que como sustituto completo del equipo de producción.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Necesito tarjeta de crédito para probar estas herramientas gratis?',
        a: 'La mayoría de planes gratuitos mencionados no piden tarjeta de crédito para el registro básico, aunque conviene comprobarlo en cada herramienta porque las políticas cambian con el tiempo.',
      },
      {
        q: '¿Puedo combinar varias de estas herramientas en un mismo proyecto?',
        a: 'Sí, es habitual generar la voz en off con una herramienta, el vídeo con otra y montarlo todo en un editor como CapCut.',
      },
    ],
    isDemo: true,
  },
  {
    slug: 'chatgpt-vs-gemini',
    title: 'ChatGPT vs Gemini: diferencias y cuál elegir',
    seoTitle: 'ChatGPT vs Gemini en 2026: comparativa y cuál elegir',
    metaDescription:
      'Comparamos ChatGPT y Gemini en integración, precio y casos de uso para ayudarte a decidir cuál se adapta mejor a tu forma de trabajar.',
    category: 'escritura',
    publishedLabel: 'Guía actualizada 2026',
    quickAnswer:
      'Si ya trabajas dentro de Gmail y Documentos de Google, Gemini se integra de forma más natural en tu día a día. Si prefieres una herramienta independiente con un ecosistema de plugins y modelos muy usado, ChatGPT es la opción más extendida.',
    toc: [
      'Qué tienen en común',
      'Principales diferencias',
      'Precio y planes',
      'Cuál elegir según tu caso',
      'Preguntas frecuentes',
    ],
    relatedTools: ['chatgpt', 'gemini', 'claude-ai'],
    relatedArticles: ['mejores-ia-crear-videos-gratis', 'mejores-ia-gratuitas-estudiantes'],
    sections: [
      {
        heading: 'Qué tienen en común',
        body: [
          'Ambas son asistentes conversacionales generalistas: responden preguntas, redactan y corrigen texto, resumen documentos y ayudan con tareas de programación básica.',
          'Las dos ofrecen un plan gratuito con limitaciones de uso y una suscripción de pago que amplía la capacidad y da acceso a modelos más avanzados.',
        ],
      },
      {
        heading: 'Principales diferencias',
        body: [
          'Gemini está profundamente integrado en el ecosistema de Google: puede leer y resumir correos de Gmail, trabajar directamente sobre un documento de Google Docs o apoyarse en la búsqueda para dar información reciente.',
          'ChatGPT funciona como una herramienta más independiente, con un ecosistema propio de complementos y una comunidad muy grande de usuarios que comparten formas de utilizarlo.',
        ],
      },
      {
        heading: 'Precio y planes',
        body: [
          'Ambas herramientas ofrecen un nivel gratuito funcional para uso ocasional, y una suscripción de pago mensual para quien necesita más capacidad de uso o funciones avanzadas. Los precios y límites concretos cambian con frecuencia, así que conviene consultarlos directamente en la web de cada herramienta antes de decidir.',
        ],
      },
      {
        heading: 'Cuál elegir según tu caso',
        body: [
          'Si tu correo, calendario y documentos ya viven en Google Workspace, Gemini te va a ahorrar pasos porque trabaja directamente sobre esos archivos.',
          'Si prefieres una herramienta independiente de tu proveedor de correo, o ya usas ChatGPT para programación y quieres mantener todo en un mismo sitio, esa es la opción más cómoda.',
          'Si tu prioridad es analizar documentos muy largos con cuidado, vale la pena probar también Claude, que se ha especializado en ese tipo de tareas.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Puedo usar los dos a la vez?',
        a: 'Sí, muchas personas usan ambos según la tarea: por ejemplo, Gemini para trabajar sobre documentos de Google y ChatGPT para tareas de programación o redacción fuera de ese ecosistema.',
      },
      {
        q: '¿Cuál entiende mejor el español?',
        a: 'Ambas herramientas soportan español de forma sólida. Las diferencias suelen notarse más en matices de estilo que en errores de comprensión.',
      },
    ],
    isDemo: true,
  },
  {
    slug: 'mejores-ia-gratuitas-estudiantes',
    title: 'Las mejores IA gratuitas para estudiantes',
    seoTitle: 'Mejores IA gratuitas para estudiantes en 2026',
    metaDescription:
      'Herramientas de IA gratuitas para repasar apuntes, resolver dudas y organizar el estudio, explicadas de forma práctica.',
    category: 'estudiantes',
    publishedLabel: 'Guía actualizada 2026',
    quickAnswer:
      'Para resolver dudas y entender conceptos, ChatGPT o Gemini en su plan gratuito son suficientes para la mayoría de estudiantes. Para investigación con fuentes verificables, Perplexity es la opción más adecuada.',
    toc: [
      'Cómo usar la IA para estudiar sin hacer trampa',
      'Herramientas recomendadas',
      'Ejemplo de uso práctico',
      'Preguntas frecuentes',
    ],
    relatedTools: ['chatgpt', 'gemini', 'perplexity', 'notion-ai'],
    relatedArticles: ['chatgpt-vs-gemini'],
    sections: [
      {
        heading: 'Cómo usar la IA para estudiar sin hacer trampa',
        body: [
          'La forma más útil de usar IA para estudiar no es pedirle que haga el trabajo por ti, sino pedirle que te ayude a entenderlo: que te explique un concepto de otra forma, que te haga preguntas de repaso, o que resuma un tema largo en los puntos clave.',
          'Entregar como propio un trabajo generado por IA suele ir en contra de las normas de la mayoría de centros educativos, además de que no ayuda a aprender de verdad la materia.',
        ],
      },
      {
        heading: 'Herramientas recomendadas',
        body: [
          'ChatGPT y Gemini, en su versión gratuita, funcionan bien como tutor conversacional: puedes pedirles que te expliquen un tema paso a paso o que te pongan a prueba con preguntas.',
          'Perplexity es más adecuado cuando necesitas investigar un tema y quieres poder verificar de dónde sale cada dato, porque muestra las fuentes junto a la respuesta.',
          'Notion AI puede ser útil si ya organizas tus apuntes en Notion y quieres resumir automáticamente documentos largos.',
        ],
      },
      {
        heading: 'Ejemplo de uso práctico',
        body: [
          'Un uso habitual es pegar un tema del libro de texto y pedir un resumen en forma de esquema, seguido de cinco preguntas de repaso sobre ese mismo contenido. Esto convierte la lectura pasiva en un ejercicio de repaso activo.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Puedo usar estas herramientas desde el móvil?',
        a: 'Sí, ChatGPT, Gemini y Perplexity tienen aplicación móvil además de versión web.',
      },
      {
        q: '¿Estas herramientas dan siempre información correcta?',
        a: 'No siempre. Conviene contrastar datos importantes con el libro de texto o una fuente fiable, especialmente en temas técnicos o históricos.',
      },
    ],
    isDemo: true,
  },
  {
    slug: 'ia-para-editar-videos',
    title: 'Cómo editar vídeo más rápido con IA',
    seoTitle: 'Cómo editar vídeos con IA: guía práctica 2026',
    metaDescription:
      'Guía práctica sobre cómo usar IA para editar vídeo más rápido: subtitulado automático, recorte inteligente y eliminación de fondo.',
    category: 'video',
    publishedLabel: 'Guía actualizada 2026',
    quickAnswer:
      'Las tres tareas donde la IA ahorra más tiempo en edición de vídeo son: generar subtítulos automáticamente, recortar los mejores momentos de una grabación larga y eliminar el fondo sin pantalla verde.',
    toc: [
      'Las tareas de edición que más tiempo ahorra la IA',
      'Flujo de trabajo recomendado',
      'Herramientas para cada paso',
      'Preguntas frecuentes',
    ],
    relatedTools: ['capcut', 'runway', 'elevenlabs'],
    relatedArticles: ['mejores-ia-crear-videos-gratis'],
    sections: [
      {
        heading: 'Las tareas de edición que más tiempo ahorra la IA',
        body: [
          'Subtitular un vídeo a mano puede llevar más tiempo que grabarlo. El subtitulado automático con IA hace ese trabajo en segundos, y solo hace falta revisar pequeños errores.',
          'Recortar los mejores momentos de una grabación larga (una entrevista, una clase, una reunión) es otra tarea que la IA resuelve identificando los fragmentos más relevantes automáticamente.',
        ],
      },
      {
        heading: 'Flujo de trabajo recomendado',
        body: [
          'Un flujo habitual es: grabar el material en bruto, pasar el vídeo por una herramienta que genere subtítulos y recorte los mejores momentos, y terminar el ajuste fino (colores, música, ritmo) de forma manual.',
        ],
      },
      {
        heading: 'Herramientas para cada paso',
        body: [
          'Para subtitulado y recorte de contenido corto, CapCut cubre la mayoría de casos con su plan gratuito.',
          'Si necesitas generar parte del vídeo desde cero (por ejemplo, una escena que no grabaste), Runway permite generar clips a partir de texto o imagen.',
          'Si el vídeo necesita narración y no quieres grabar tu propia voz, ElevenLabs genera una voz en off realista a partir del guion escrito.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿La IA puede editar vídeo en 4K?',
        a: 'Depende de la herramienta y del plan contratado. Algunas limitan la resolución de exportación en el plan gratuito.',
      },
    ],
    isDemo: true,
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
