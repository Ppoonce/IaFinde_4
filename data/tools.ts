export type PriceTier = 'Gratis' | 'Freemium' | 'Pago';

export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  categories: string[]; // category slugs
  priceTier: PriceTier;
  priceNote: string;
  website: string;
  initials: string;
  color: string; // tailwind bg color class for the badge
  features: string[];
  bestFor: string;
  pros: string[];
  cons: string[];
  alternatives: string[]; // tool slugs
  editorialScore: number; // 1-5, editorial opinion, clearly labelled as demo
  isDemo: true;
};

export const tools: Tool[] = [
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'Asistente conversacional de propósito general',
    description:
      'Chatbot de OpenAI capaz de responder preguntas, redactar textos, resumir documentos y ayudar con tareas de programación.',
    longDescription:
      'ChatGPT es uno de los asistentes conversacionales más usados del mundo. Permite mantener conversaciones de seguimiento, redactar y corregir textos, resumir documentos, generar ideas y ayudar con código. Tiene una versión gratuita con limitaciones de uso y planes de pago con acceso a modelos más avanzados y funciones adicionales.',
    categories: ['escritura', 'productividad', 'estudiantes', 'programacion'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito disponible; planes de pago con más capacidad',
    website: 'https://chat.openai.com',
    initials: 'GPT',
    color: 'bg-emerald-600',
    features: ['Conversación de seguimiento', 'Redacción y corrección de texto', 'Resumen de documentos', 'Ayuda con código'],
    bestFor: 'Cualquier persona que necesite un asistente de texto generalista, desde estudiantes hasta profesionales.',
    pros: ['Muy versátil para tareas variadas', 'Interfaz sencilla de usar', 'Amplio soporte de idiomas incluido el español'],
    cons: ['El plan gratuito tiene límites de uso', 'Puede cometer errores factuales que conviene verificar'],
    alternatives: ['gemini', 'claude-ai', 'perplexity'],
    editorialScore: 4.6,
    isDemo: true,
  },
  {
    slug: 'gemini',
    name: 'Gemini',
    tagline: 'Asistente de IA de Google integrado con su ecosistema',
    description:
      'Modelo conversacional de Google integrado con Gmail, Documentos y Búsqueda, útil para escritura y consulta rápida de información.',
    longDescription:
      'Gemini es el asistente de IA de Google, disponible como app independiente y también integrado en productos como Gmail, Documentos de Google o Android. Destaca por su integración con el resto de servicios de Google y por el acceso a información relativamente reciente a través de la búsqueda.',
    categories: ['escritura', 'productividad', 'estudiantes'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito disponible; suscripción de pago para funciones avanzadas',
    website: 'https://gemini.google.com',
    initials: 'GEM',
    color: 'bg-blue-600',
    features: ['Integración con Gmail y Documentos', 'Resumen de correos y archivos', 'Generación de texto e imágenes', 'Acceso a información reciente'],
    bestFor: 'Usuarios que ya trabajan dentro del ecosistema de Google y quieren IA integrada en sus herramientas diarias.',
    pros: ['Buena integración con Google Workspace', 'Acceso a información actualizada', 'Disponible en móvil y escritorio'],
    cons: ['Algunas funciones avanzadas requieren suscripción', 'La calidad puede variar según el idioma'],
    alternatives: ['chatgpt', 'claude-ai'],
    editorialScore: 4.4,
    isDemo: true,
  },
  {
    slug: 'claude-ai',
    name: 'Claude',
    tagline: 'Asistente de IA de Anthropic orientado a texto largo y análisis',
    description:
      'Asistente conversacional de Anthropic conocido por manejar documentos extensos, análisis detallado y redacción cuidada.',
    longDescription:
      'Claude es el asistente de IA desarrollado por Anthropic. Se usa habitualmente para analizar documentos largos, redactar y editar textos, resumir información y ayudar con tareas de programación. Está disponible en versión web, de escritorio y móvil, además de a través de una API para desarrolladores.',
    categories: ['escritura', 'productividad', 'programacion'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito disponible; planes de pago con más capacidad de uso',
    website: 'https://claude.ai',
    initials: 'CL',
    color: 'bg-amber-700',
    features: ['Análisis de documentos largos', 'Redacción y edición de texto', 'Generación de código', 'Modo de investigación con navegación web'],
    bestFor: 'Trabajo con documentos extensos, redacción cuidada y tareas de análisis o programación.',
    pros: ['Buen manejo de contexto largo', 'Respuestas cuidadas en redacción', 'Disponible en varias plataformas'],
    cons: ['El plan gratuito tiene límites de mensajes', 'Menor integración nativa con otras suites ofimáticas'],
    alternatives: ['chatgpt', 'gemini'],
    editorialScore: 4.6,
    isDemo: true,
  },
  {
    slug: 'perplexity',
    name: 'Perplexity',
    tagline: 'Buscador conversacional con respuestas y fuentes',
    description:
      'Motor de búsqueda con IA que responde preguntas citando sus fuentes, útil para investigación rápida.',
    longDescription:
      'Perplexity combina un buscador con un asistente conversacional: responde preguntas en lenguaje natural y muestra las fuentes de donde saca la información, lo que facilita verificar los datos. Es especialmente útil para investigación rápida y comparación de información de varias fuentes.',
    categories: ['productividad', 'estudiantes'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito disponible; suscripción de pago para más búsquedas avanzadas',
    website: 'https://www.perplexity.ai',
    initials: 'PX',
    color: 'bg-teal-600',
    features: ['Respuestas con fuentes citadas', 'Búsqueda conversacional', 'Resumen de artículos', 'Comparación de información'],
    bestFor: 'Investigación rápida cuando necesitas saber de dónde sale cada dato.',
    pros: ['Cita las fuentes de cada respuesta', 'Rápido para resolver dudas puntuales', 'Buen plan gratuito'],
    cons: ['Menos versátil que un asistente generalista para redacción larga'],
    alternatives: ['gemini', 'chatgpt'],
    editorialScore: 4.3,
    isDemo: true,
  },
  {
    slug: 'midjourney',
    name: 'Midjourney',
    tagline: 'Generador de imágenes artísticas a partir de texto',
    description:
      'Herramienta de generación de imágenes conocida por su estilo artístico y calidad visual, usada mucho en ilustración y concept art.',
    longDescription:
      'Midjourney genera imágenes a partir de descripciones de texto y es especialmente popular en ilustración, concept art y diseño visual por la calidad estética de sus resultados. Funciona principalmente a través de Discord y de su propia web, y no ofrece plan gratuito permanente.',
    categories: ['imagen', 'diseno'],
    priceTier: 'Pago',
    priceNote: 'Requiere suscripción de pago; sin plan gratuito permanente',
    website: 'https://www.midjourney.com',
    initials: 'MJ',
    color: 'bg-indigo-700',
    features: ['Generación de imágenes de alta calidad estética', 'Control de estilo y composición', 'Variaciones y mejoras de una imagen', 'Comunidad activa de prompts'],
    bestFor: 'Ilustradores, diseñadores y creadores que buscan un acabado visual muy cuidado.',
    pros: ['Resultados visuales muy pulidos', 'Comunidad grande con ejemplos de prompts', 'Actualizaciones frecuentes del modelo'],
    cons: ['No tiene plan gratuito permanente', 'Curva de aprendizaje para dominar los prompts'],
    alternatives: ['dalle', 'ideogram'],
    editorialScore: 4.5,
    isDemo: true,
  },
  {
    slug: 'dalle',
    name: 'DALL·E',
    tagline: 'Generador de imágenes de OpenAI integrado en ChatGPT',
    description:
      'Modelo de generación de imágenes de OpenAI, accesible desde ChatGPT, útil para ilustraciones rápidas y variaciones de una idea.',
    longDescription:
      'DALL·E es el modelo de generación de imágenes de OpenAI, integrado directamente en ChatGPT. Permite crear imágenes a partir de una descripción de texto y pedir cambios conversacionalmente, lo que lo hace cómodo para quien ya usa ChatGPT para otras tareas.',
    categories: ['imagen', 'diseno'],
    priceTier: 'Freemium',
    priceNote: 'Incluido con planes de ChatGPT, con límites de uso',
    website: 'https://openai.com/dall-e-3',
    initials: 'DE',
    color: 'bg-fuchsia-600',
    features: ['Generación conversacional de imágenes', 'Ediciones guiadas por chat', 'Integración directa con ChatGPT'],
    bestFor: 'Usuarios de ChatGPT que quieren generar imágenes sin cambiar de herramienta.',
    pros: ['Fácil de usar dentro del chat', 'Buena comprensión del lenguaje natural', 'No requiere aprender prompts complejos'],
    cons: ['Menor control fino de estilo comparado con herramientas especializadas'],
    alternatives: ['midjourney', 'ideogram'],
    editorialScore: 4.1,
    isDemo: true,
  },
  {
    slug: 'ideogram',
    name: 'Ideogram',
    tagline: 'Generador de imágenes con buen manejo de texto en la imagen',
    description:
      'Herramienta de generación de imágenes que destaca por escribir texto legible dentro de las composiciones, útil para carteles y logotipos.',
    longDescription:
      'Ideogram es un generador de imágenes por IA que se ha hecho conocido por su capacidad de incluir texto legible dentro de las imágenes generadas, algo que tradicionalmente ha sido un punto débil de este tipo de herramientas. Es útil para carteles, logotipos con texto o miniaturas.',
    categories: ['imagen', 'diseno'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con límite diario de generaciones',
    website: 'https://ideogram.ai',
    initials: 'ID',
    color: 'bg-rose-600',
    features: ['Texto legible dentro de la imagen', 'Plantillas para carteles y logos', 'Generación rápida'],
    bestFor: 'Crear piezas visuales que necesitan texto integrado, como carteles o miniaturas.',
    pros: ['Buen manejo de texto dentro de la imagen', 'Plan gratuito utilizable', 'Interfaz sencilla'],
    cons: ['Menos flexible para estilos artísticos muy elaborados'],
    alternatives: ['midjourney', 'dalle'],
    editorialScore: 4.0,
    isDemo: true,
  },
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    tagline: 'Generación de voz realista y clonación de voz',
    description:
      'Herramienta de síntesis de voz conocida por la naturalidad de sus voces, con opción de clonar una voz a partir de una muestra de audio.',
    longDescription:
      'ElevenLabs es una de las herramientas de referencia en generación de voz por IA. Ofrece voces predefinidas en varios idiomas, la posibilidad de clonar una voz a partir de una grabación y herramientas de doblaje que traducen y sincronizan el audio de un vídeo a otro idioma.',
    categories: ['audio', 'video'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con minutos limitados; planes de pago según volumen de uso',
    website: 'https://elevenlabs.io',
    initials: 'EL',
    color: 'bg-slate-700',
    features: ['Voces realistas en varios idiomas', 'Clonación de voz', 'Doblaje automático de vídeo', 'Conversión de texto a voz'],
    bestFor: 'Creadores de contenido, podcasters y equipos que necesitan narración o doblaje en varios idiomas.',
    pros: ['Voces muy naturales', 'Buen soporte de español', 'Herramienta de doblaje integrada'],
    cons: ['El plan gratuito tiene pocos minutos', 'La clonación de voz exige responsabilidad sobre el uso']
    ,
    alternatives: ['murf'],
    editorialScore: 4.5,
    isDemo: true,
  },
  {
    slug: 'murf',
    name: 'Murf AI',
    tagline: 'Voces en off para vídeos y presentaciones',
    description:
      'Editor de voz en off con IA orientado a vídeos corporativos, cursos online y presentaciones.',
    longDescription:
      'Murf AI está pensado para crear voces en off de forma sencilla, con un editor visual donde se ajusta el ritmo, las pausas y el énfasis del texto leído. Se usa habitualmente en vídeos corporativos, cursos online y presentaciones.',
    categories: ['audio', 'presentaciones'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito limitado; planes de pago por minutos de audio',
    website: 'https://murf.ai',
    initials: 'MU',
    color: 'bg-orange-600',
    features: ['Editor visual de voz en off', 'Control de ritmo y énfasis', 'Voces en varios idiomas', 'Sincronización con vídeo'],
    bestFor: 'Cursos online, vídeos corporativos y presentaciones narradas.',
    pros: ['Editor cómodo para ajustar la locución', 'Buena variedad de voces', 'Pensado para uso profesional'],
    cons: ['El plan gratuito es limitado para proyectos largos'],
    alternatives: ['elevenlabs'],
    editorialScore: 4.1,
    isDemo: true,
  },
  {
    slug: 'runway',
    name: 'Runway',
    tagline: 'Generación y edición de vídeo con IA',
    description:
      'Conjunto de herramientas de IA para generar vídeo a partir de texto o imagen, y para editar vídeo con efectos automáticos.',
    longDescription:
      'Runway ofrece un conjunto de herramientas de IA para generar clips de vídeo a partir de texto o de una imagen, además de funciones de edición como eliminar objetos, cambiar fondos o hacer un seguimiento de movimiento automático. Se usa tanto en producción audiovisual profesional como en contenido para redes sociales.',
    categories: ['video'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con créditos limitados; planes de pago por volumen',
    website: 'https://runwayml.com',
    initials: 'RW',
    color: 'bg-purple-700',
    features: ['Generación de vídeo desde texto o imagen', 'Eliminación de objetos', 'Edición asistida por IA', 'Efectos de movimiento'],
    bestFor: 'Creadores audiovisuales que quieren experimentar con generación de vídeo o acelerar la edición.',
    pros: ['Herramientas de generación de vídeo avanzadas', 'Funciones de edición útiles para producción real', 'Actualizaciones frecuentes'],
    cons: ['Los créditos gratuitos se agotan rápido', 'Curva de aprendizaje para sacarle partido'],
    alternatives: ['synthesia', 'capcut'],
    editorialScore: 4.3,
    isDemo: true,
  },
  {
    slug: 'synthesia',
    name: 'Synthesia',
    tagline: 'Vídeos con avatares digitales a partir de texto',
    description:
      'Herramienta que convierte un guion de texto en un vídeo narrado por un avatar digital, sin necesidad de grabar cámara ni micrófono.',
    longDescription:
      'Synthesia permite crear vídeos con un avatar digital que narra un guion escrito, en varios idiomas, sin necesidad de grabar con cámara ni contratar un actor. Se usa mucho en formación corporativa, vídeos explicativos y comunicación interna de empresas.',
    categories: ['video', 'presentaciones'],
    priceTier: 'Pago',
    priceNote: 'Sin plan gratuito permanente; planes de pago según minutos de vídeo',
    website: 'https://www.synthesia.io',
    initials: 'SY',
    color: 'bg-cyan-700',
    features: ['Avatares digitales realistas', 'Locución en varios idiomas', 'Plantillas de vídeo corporativo', 'Traducción de vídeos existentes'],
    bestFor: 'Formación corporativa y comunicación interna cuando no se puede grabar con actores reales.',
    pros: ['No requiere grabar cámara ni audio', 'Buena variedad de idiomas y avatares', 'Resultado profesional para vídeo corporativo'],
    cons: ['Sin plan gratuito permanente', 'Los avatares pueden resultar poco naturales para según qué uso'],
    alternatives: ['runway'],
    editorialScore: 4.0,
    isDemo: true,
  },
  {
    slug: 'capcut',
    name: 'CapCut',
    tagline: 'Edición de vídeo con funciones de IA para redes sociales',
    description:
      'Editor de vídeo gratuito con subtitulado automático, eliminación de fondo y herramientas de IA pensadas para contenido corto.',
    longDescription:
      'CapCut es un editor de vídeo muy usado para contenido de redes sociales, con funciones de IA como subtitulado automático, eliminación de fondo, recorte inteligente y plantillas listas para usar. Tiene versión de escritorio y móvil.',
    categories: ['video'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito muy completo; funciones premium de pago',
    website: 'https://www.capcut.com',
    initials: 'CC',
    color: 'bg-lime-700',
    features: ['Subtitulado automático', 'Eliminación de fondo', 'Plantillas para redes sociales', 'Recorte inteligente'],
    bestFor: 'Creadores de contenido para redes sociales que editan desde el móvil o el ordenador.',
    pros: ['Plan gratuito muy generoso', 'Fácil de usar desde el móvil', 'Buenas plantillas para contenido corto'],
    cons: ['Menos indicado para producciones largas o muy técnicas'],
    alternatives: ['runway'],
    editorialScore: 4.4,
    isDemo: true,
  },
  {
    slug: 'notion-ai',
    name: 'Notion AI',
    tagline: 'IA integrada en el gestor de notas y proyectos Notion',
    description:
      'Funciones de IA dentro de Notion para resumir páginas, redactar borradores y organizar información de proyectos.',
    longDescription:
      'Notion AI añade funciones de inteligencia artificial dentro de Notion: resumir una página larga, redactar un borrador a partir de unas notas, traducir texto o generar tareas a partir de una reunión. Está pensado para quien ya organiza su trabajo dentro de Notion.',
    categories: ['productividad', 'escritura'],
    priceTier: 'Pago',
    priceNote: 'Complemento de pago sobre un plan de Notion',
    website: 'https://www.notion.so/product/ai',
    initials: 'NO',
    color: 'bg-neutral-800',
    features: ['Resumen de páginas y documentos', 'Redacción de borradores', 'Generación de tareas desde notas', 'Traducción de texto'],
    bestFor: 'Equipos y personas que ya usan Notion para organizar notas y proyectos.',
    pros: ['Integrado directamente donde ya trabajas', 'Útil para resumir documentación interna', 'Ahorra tiempo en tareas repetitivas de escritura'],
    cons: ['Es un complemento de pago adicional', 'Poco útil si no usas Notion como base de trabajo'],
    alternatives: ['claude-ai'],
    editorialScore: 4.2,
    isDemo: true,
  },
  {
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    tagline: 'Autocompletado de código con IA dentro del editor',
    description:
      'Asistente de programación que sugiere líneas y funciones completas de código mientras escribes, integrado en editores como VS Code.',
    longDescription:
      'GitHub Copilot se integra directamente en editores de código como Visual Studio Code y sugiere líneas o funciones completas mientras programas, basándose en el contexto del archivo. También puede explicar fragmentos de código y ayudar a depurar errores.',
    categories: ['programacion'],
    priceTier: 'Pago',
    priceNote: 'Suscripción de pago; descuentos para estudiantes y proyectos open source verificados',
    website: 'https://github.com/features/copilot',
    initials: 'GH',
    color: 'bg-gray-900',
    features: ['Autocompletado de código en tiempo real', 'Explicación de fragmentos de código', 'Ayuda para depurar errores', 'Integración con editores populares'],
    bestFor: 'Desarrolladores que quieren acelerar la escritura de código repetitivo dentro de su editor habitual.',
    pros: ['Integración directa en el flujo de trabajo', 'Soporta muchos lenguajes de programación', 'Descuentos para estudiantes verificados'],
    cons: ['Es de pago para uso profesional continuado', 'El código sugerido siempre requiere revisión'],
    alternatives: ['chatgpt', 'claude-ai'],
    editorialScore: 4.4,
    isDemo: true,
  },
  {
    slug: 'gamma',
    name: 'Gamma',
    tagline: 'Presentaciones generadas automáticamente desde un texto',
    description:
      'Herramienta que convierte un esquema o guion de texto en una presentación con diseño ya resuelto, lista para editar.',
    longDescription:
      'Gamma genera presentaciones, documentos o páginas web a partir de un esquema de texto, aplicando automáticamente un diseño coherente. Es útil cuando necesitas una presentación rápida y no quieres empezar desde una diapositiva en blanco.',
    categories: ['presentaciones', 'diseno'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con créditos de generación limitados',
    website: 'https://gamma.app',
    initials: 'GA',
    color: 'bg-violet-600',
    features: ['Generación de diapositivas desde texto', 'Plantillas de diseño automático', 'Exportación a PDF y PowerPoint', 'Edición posterior del diseño'],
    bestFor: 'Crear una presentación rápida a partir de un guion, sin diseñar diapositiva por diapositiva.',
    pros: ['Ahorra mucho tiempo en el diseño inicial', 'Resultado visual limpio por defecto', 'Fácil de editar después'],
    cons: ['Los créditos gratuitos se agotan con el uso frecuente', 'Personalizar a fondo requiere más trabajo manual'],
    alternatives: ['canva'],
    editorialScore: 4.3,
    isDemo: true,
  },
  {
    slug: 'canva',
    name: 'Canva',
    tagline: 'Diseño gráfico con plantillas y funciones de IA',
    description:
      'Editor de diseño gráfico con plantillas para redes sociales, presentaciones y documentos, con funciones de IA como generación de imágenes y textos.',
    longDescription:
      'Canva es un editor de diseño gráfico basado en plantillas, muy usado para crear publicaciones de redes sociales, presentaciones, currículums y documentos visuales. Incorpora funciones de IA como generación de imágenes, eliminación de fondo y redacción de textos dentro del propio editor.',
    categories: ['diseno', 'presentaciones', 'marketing'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito muy completo; plan Pro de pago con más plantillas y funciones de IA',
    website: 'https://www.canva.com',
    initials: 'CV',
    color: 'bg-sky-600',
    features: ['Plantillas para redes sociales y presentaciones', 'Generación de imágenes con IA', 'Eliminación de fondo', 'Redacción de textos asistida'],
    bestFor: 'Cualquiera que necesite crear piezas visuales sin experiencia en diseño gráfico.',
    pros: ['Plan gratuito muy usable', 'Enorme biblioteca de plantillas', 'Fácil de aprender'],
    cons: ['Las funciones de IA más avanzadas requieren plan Pro'],
    alternatives: ['gamma'],
    editorialScore: 4.5,
    isDemo: true,
  },
  {
    slug: 'grammarly',
    name: 'Grammarly',
    tagline: 'Corrector gramatical y de estilo con IA',
    description:
      'Extensión y editor que corrige gramática, ortografía y estilo de escritura en tiempo real, con especial fuerza en inglés.',
    longDescription:
      'Grammarly revisa gramática, ortografía y estilo mientras escribes, tanto en su propio editor como en forma de extensión para navegador y otras aplicaciones. Es especialmente potente para textos en inglés, aunque también ofrece corrección básica en otros idiomas.',
    categories: ['escritura', 'productividad'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con corrección básica; plan Premium de pago con sugerencias avanzadas de estilo',
    website: 'https://www.grammarly.com',
    initials: 'GR',
    color: 'bg-green-700',
    features: ['Corrección gramatical en tiempo real', 'Sugerencias de estilo y tono', 'Extensión para navegador', 'Detección de plagio en plan Premium'],
    bestFor: 'Redactar en inglés con confianza, especialmente para quien no es hablante nativo.',
    pros: ['Corrección en tiempo real muy fiable en inglés', 'Se integra en muchas aplicaciones', 'Explica el motivo de cada corrección'],
    cons: ['La corrección en español es más limitada que en inglés'],
    alternatives: ['chatgpt'],
    editorialScore: 4.2,
    isDemo: true,
  },
  {
    slug: 'suno',
    name: 'Suno',
    tagline: 'Generación de canciones completas a partir de texto',
    description:
      'Herramienta que genera canciones con letra y música a partir de una descripción o un texto de letra escrito por el usuario.',
    longDescription:
      'Suno genera canciones completas, con música y voz cantada, a partir de una descripción del estilo deseado o de una letra escrita por el usuario. Se usa tanto para experimentar de forma creativa como para producir música de fondo para vídeos o proyectos personales.',
    categories: ['audio'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con generaciones limitadas al mes',
    website: 'https://suno.com',
    initials: 'SU',
    color: 'bg-pink-600',
    features: ['Generación de canciones con letra y música', 'Varios estilos musicales', 'Exportación de audio', 'Generación a partir de letra propia'],
    bestFor: 'Crear música original de forma rápida para proyectos personales o de fondo.',
    pros: ['Resultado sorprendentemente coherente para ser generado', 'Fácil de usar sin conocimientos musicales', 'Plan gratuito para probar'],
    cons: ['El plan gratuito limita el número de generaciones al mes', 'El uso comercial puede requerir plan de pago'],
    alternatives: ['elevenlabs'],
    editorialScore: 4.0,
    isDemo: true,
  },
  {
    slug: 'zapier-ai',
    name: 'Zapier (funciones de IA)',
    tagline: 'Automatización de tareas entre aplicaciones con ayuda de IA',
    description:
      'Plataforma de automatización que conecta aplicaciones entre sí, con funciones de IA para redactar pasos y resumir información automáticamente.',
    longDescription:
      'Zapier conecta aplicaciones entre sí para automatizar tareas repetitivas, como guardar automáticamente los archivos adjuntos de un correo o crear una tarea cuando llega un mensaje. Sus funciones de IA ayudan a redactar los pasos de la automatización y a resumir o clasificar información dentro del flujo.',
    categories: ['productividad', 'marketing'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con automatizaciones limitadas; planes de pago según volumen',
    website: 'https://zapier.com',
    initials: 'ZP',
    color: 'bg-orange-700',
    features: ['Conexión entre cientos de aplicaciones', 'Automatizaciones asistidas por IA', 'Resumen y clasificación de información', 'Plantillas de automatización'],
    bestFor: 'Equipos pequeños que quieren automatizar tareas repetitivas entre distintas herramientas.',
    pros: ['Conecta con un catálogo enorme de aplicaciones', 'Reduce trabajo manual repetitivo', 'No requiere saber programar'],
    cons: ['El plan gratuito limita el número de tareas automatizadas al mes'],
    alternatives: ['notion-ai'],
    editorialScore: 4.1,
    isDemo: true,
  },
];

export function getTool(slug: string) {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(categorySlug: string) {
  return tools.filter((t) => t.categories.includes(categorySlug));
}

export function searchTools(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return tools;
  return tools.filter((t) => {
    const haystack = [
      t.name,
      t.tagline,
      t.description,
      t.longDescription,
      ...t.categories,
      ...t.features,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}
