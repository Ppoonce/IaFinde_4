export type PriceTier = 'Gratis' | 'Freemium' | 'Pago';

// Tipo "en bruto": lo que efectivamente escribimos a mano para cada herramienta.
// Los campos nuevos son opcionales para no obligar a tocar las herramientas ya existentes.
export type RawTool = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  categories: string[]; // category slugs
  subcategories?: string[]; // etiquetas de subcategoría más finas (opcional)
  tags?: string[]; // palabras clave adicionales para búsqueda y filtros
  priceTier: PriceTier;
  priceNote: string;
  website: string;
  initials: string;
  color: string; // tailwind bg color class for the badge
  features: string[];
  bestFor: string;
  targetAudience?: string[]; // público objetivo, ej. ['Estudiantes', 'Equipos de marketing']
  useCases?: string[]; // casos de uso concretos
  pros: string[];
  cons: string[];
  alternatives: string[]; // tool slugs
  editorialScore: number; // 1-5, editorial opinion, clearly labelled as demo
  freeVersion?: boolean; // si tiene versión gratuita permanente (no solo prueba)
  freeTrial?: boolean; // si ofrece prueba gratuita de un plan de pago
  lastUpdated?: string; // 'YYYY-MM', fecha de última revisión editorial del dato
  isNew?: boolean; // marcar manualmente herramientas añadidas recientemente al directorio
  // --- Monetización: preparado, pero SIN inventar programas de afiliados reales ---
  affiliate?: boolean; // true solo cuando exista un programa de afiliados verificado
  affiliateUrl?: string; // enlace de afiliado real, cuando affiliate=true
  sponsored?: boolean; // true solo cuando exista un acuerdo comercial real y declarado
  // --- SEO por herramienta (opcional; si no se indica, se genera uno por defecto) ---
  seoTitle?: string;
  seoDescription?: string;
  isDemo: true;
};

// Tipo "normalizado": el que usa el resto de la web. Rellena con valores por
// defecto derivados de los datos reales ya existentes (nunca datos inventados).
export type Tool = RawTool & {
  tags: string[];
  subcategories: string[];
  targetAudience: string[];
  useCases: string[];
  freeVersion: boolean;
  freeTrial: boolean;
  lastUpdated: string;
  isNew: boolean;
  affiliate: boolean;
  sponsored: boolean;
  seoTitle: string;
  seoDescription: string;
};

const rawTools: RawTool[] = [
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
  {
    slug: 'descript',
    name: 'Descript',
    tagline: 'Edición de vídeo y audio editando el texto de la transcripción',
    description:
      'Editor de vídeo y podcast que funciona editando la transcripción del audio: borrar una palabra del texto borra ese fragmento del audio o vídeo.',
    longDescription:
      'Descript transcribe automáticamente un vídeo o audio y permite editarlo como si fuera un documento de texto: borrar, mover o corregir palabras en la transcripción modifica directamente el archivo multimedia. Incluye también eliminación de muletillas, clonación de voz propia para corregir errores de grabación sin volver a grabar, y herramientas básicas de edición de vídeo.',
    categories: ['video', 'audio', 'productividad'],
    subcategories: ['Edición de podcast', 'Transcripción'],
    tags: ['transcripción', 'podcast', 'edición por texto', 'eliminar muletillas'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con minutos de transcripción limitados; planes de pago según volumen',
    website: 'https://www.descript.com',
    initials: 'DS',
    color: 'bg-violet-700',
    features: ['Edición de vídeo/audio mediante el texto', 'Eliminación automática de muletillas', 'Transcripción automática', 'Clonación de voz propia para correcciones'],
    bestFor: 'Creadores de podcast y vídeo que quieren editar más rápido trabajando sobre el texto en vez del timeline.',
    targetAudience: ['Podcasters', 'Creadores de vídeo', 'Equipos de contenido'],
    useCases: ['Editar un podcast eliminando silencios y muletillas', 'Transcribir una entrevista para un artículo', 'Corregir un error de grabación sin re-grabar'],
    pros: ['Edición muy intuitiva para quien no domina un editor tradicional', 'Ahorra mucho tiempo en podcast', 'Buena transcripción automática'],
    cons: ['El plan gratuito limita minutos de transcripción al mes', 'Menos potente que un editor de vídeo profesional para efectos avanzados'],
    alternatives: ['capcut', 'runway'],
    editorialScore: 4.3,
    freeVersion: true,
    freeTrial: false,
    isDemo: true,
  },
  {
    slug: 'otter-ai',
    name: 'Otter.ai',
    tagline: 'Transcripción y resumen automático de reuniones',
    description:
      'Asistente que se conecta a videollamadas para transcribir en tiempo real, resumir la reunión y generar una lista de tareas.',
    longDescription:
      'Otter.ai se integra con plataformas de videollamada para transcribir la conversación en tiempo real, generar un resumen automático al finalizar y extraer los puntos de acción mencionados. Es habitual en equipos que quieren evitar tomar notas manualmente durante reuniones.',
    categories: ['productividad'],
    subcategories: ['Transcripción de reuniones'],
    tags: ['reuniones', 'transcripción', 'notas automáticas', 'resumen'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con minutos de transcripción limitados al mes',
    website: 'https://otter.ai',
    initials: 'OT',
    color: 'bg-sky-700',
    features: ['Transcripción en tiempo real', 'Resumen automático de la reunión', 'Extracción de tareas mencionadas', 'Integración con Zoom, Google Meet y Teams'],
    bestFor: 'Equipos que hacen muchas reuniones y quieren un registro escrito sin tomar notas a mano.',
    targetAudience: ['Equipos de trabajo', 'Periodistas', 'Estudiantes en clases grabadas'],
    useCases: ['Registrar una reunión de trabajo y compartir el resumen', 'Transcribir una entrevista', 'Repasar una clase grabada'],
    pros: ['Ahorra tiempo de toma de notas', 'Buena precisión de transcripción en inglés', 'Se integra directo en la videollamada'],
    cons: ['El plan gratuito limita minutos al mes', 'La precisión en español es más variable que en inglés'],
    alternatives: ['notion-ai'],
    editorialScore: 4.1,
    freeVersion: true,
    isDemo: true,
  },
  {
    slug: 'jasper',
    name: 'Jasper',
    tagline: 'Generación de contenido de marketing a escala',
    description:
      'Plataforma de escritura con IA orientada a equipos de marketing, con plantillas para anuncios, emails y contenido de marca consistente.',
    longDescription:
      'Jasper está pensado para equipos de marketing que necesitan producir mucho contenido manteniendo un tono de marca consistente: anuncios, publicaciones de blog, emails y copys para redes sociales, con plantillas específicas para cada formato y la posibilidad de definir guías de estilo de marca.',
    categories: ['marketing', 'escritura'],
    subcategories: ['Copywriting', 'Contenido de marca'],
    tags: ['marketing', 'copywriting', 'anuncios', 'contenido de marca'],
    priceTier: 'Pago',
    priceNote: 'Sin plan gratuito permanente; suscripción de pago según número de usuarios',
    website: 'https://www.jasper.ai',
    initials: 'JA',
    color: 'bg-orange-600',
    features: ['Plantillas para anuncios y emails', 'Guías de estilo de marca', 'Colaboración en equipo', 'Generación de contenido en varios idiomas'],
    bestFor: 'Equipos de marketing que producen contenido de forma constante y necesitan mantener un tono de marca.',
    targetAudience: ['Equipos de marketing', 'Agencias de publicidad'],
    useCases: ['Redactar variantes de un anuncio para probar', 'Escribir una serie de emails de campaña', 'Mantener el tono de marca en varios canales'],
    pros: ['Pensado específicamente para equipos, no solo individuos', 'Buenas plantillas para formatos de marketing', 'Permite definir una guía de marca reutilizable'],
    cons: ['Sin plan gratuito permanente', 'Puede ser más de lo que necesita un usuario individual'],
    alternatives: ['copy-ai', 'chatgpt'],
    editorialScore: 4.0,
    freeVersion: false,
    freeTrial: true,
    isDemo: true,
  },
  {
    slug: 'copy-ai',
    name: 'Copy.ai',
    tagline: 'Generador de copys cortos para marketing y redes sociales',
    description:
      'Herramienta enfocada en generar textos cortos de marketing: descripciones de producto, copys de anuncios y publicaciones para redes sociales.',
    longDescription:
      'Copy.ai genera textos de marketing de formato corto a partir de una breve descripción del producto o la campaña: descripciones de producto para tiendas online, copys de anuncios, asuntos de email y publicaciones para redes sociales. Ofrece un plan gratuito con un número limitado de palabras generadas al mes.',
    categories: ['marketing', 'escritura'],
    subcategories: ['Copywriting'],
    tags: ['marketing', 'copywriting', 'redes sociales', 'ecommerce'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con límite de palabras generadas al mes',
    website: 'https://www.copy.ai',
    initials: 'CP',
    color: 'bg-red-600',
    features: ['Plantillas para copys cortos', 'Descripciones de producto', 'Asuntos de email', 'Publicaciones para redes sociales'],
    bestFor: 'Tiendas online y creadores que necesitan muchos textos cortos de marketing rápido.',
    targetAudience: ['Ecommerce', 'Freelancers de marketing', 'Pequeños negocios'],
    useCases: ['Escribir descripciones de producto para una tienda online', 'Generar variantes de un asunto de email', 'Redactar publicaciones cortas para redes sociales'],
    pros: ['Plan gratuito utilizable para necesidades puntuales', 'Rápido para textos cortos', 'Fácil de usar sin curva de aprendizaje'],
    cons: ['Menos adecuado para textos largos y elaborados', 'El límite gratuito de palabras se agota rápido con uso frecuente'],
    alternatives: ['jasper', 'chatgpt'],
    editorialScore: 3.9,
    freeVersion: true,
    isDemo: true,
  },
  {
    slug: 'adobe-express',
    name: 'Adobe Express',
    tagline: 'Diseño gráfico rápido respaldado por Adobe',
    description:
      'Editor de diseño gráfico basado en plantillas de Adobe, con funciones de IA para generación de imágenes y eliminación de fondo.',
    longDescription:
      'Adobe Express es la herramienta de diseño gráfico simplificado de Adobe, pensada para crear publicaciones de redes sociales, presentaciones y piezas de marketing a partir de plantillas, sin necesitar experiencia en Photoshop o Illustrator. Incorpora funciones de IA como generación de imágenes y eliminación de fondo, apoyadas en la tecnología de Adobe Firefly.',
    categories: ['diseno', 'marketing', 'presentaciones'],
    subcategories: ['Plantillas de diseño'],
    tags: ['diseño gráfico', 'plantillas', 'redes sociales', 'firefly'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito disponible; plan Premium de pago con más plantillas y contenido de stock',
    website: 'https://www.adobe.com/express',
    initials: 'AE',
    color: 'bg-red-700',
    features: ['Plantillas de diseño para redes sociales', 'Generación de imágenes con Adobe Firefly', 'Eliminación de fondo', 'Banco de imágenes y fuentes integrado'],
    bestFor: 'Quien ya confía en el ecosistema Adobe y quiere una alternativa más simple que Photoshop.',
    targetAudience: ['Pequeños negocios', 'Creadores de contenido', 'Equipos de marketing'],
    useCases: ['Crear una publicación para Instagram desde una plantilla', 'Eliminar el fondo de una foto de producto', 'Generar una imagen para una publicación de blog'],
    pros: ['Respaldado por la tecnología y el banco de recursos de Adobe', 'Plan gratuito funcional', 'Buena integración si ya usas otras apps de Adobe'],
    cons: ['Las funciones más avanzadas requieren plan Premium', 'Menos plantillas que Canva en algunas categorías'],
    alternatives: ['canva'],
    editorialScore: 4.2,
    freeVersion: true,
    isDemo: true,
  },
  {
    slug: 'remove-bg',
    name: 'Remove.bg',
    tagline: 'Eliminación automática de fondo en imágenes',
    description:
      'Herramienta especializada únicamente en eliminar el fondo de una imagen de forma automática, en segundos.',
    longDescription:
      'Remove.bg hace una sola cosa y la hace bien: quitar el fondo de una foto automáticamente, sin necesidad de seleccionar manualmente el contorno del objeto o la persona. Se usa mucho para fotos de producto, retratos para currículum o materiales de marketing.',
    categories: ['imagen', 'diseno'],
    subcategories: ['Edición de fotos'],
    tags: ['eliminar fondo', 'fotos de producto', 'edición rápida'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con resolución reducida; pago por imagen o por suscripción para alta resolución',
    website: 'https://www.remove.bg',
    initials: 'RB',
    color: 'bg-emerald-700',
    features: ['Eliminación automática de fondo', 'Descarga en alta resolución (de pago)', 'API para integrarlo en otras herramientas', 'Procesamiento en segundos'],
    bestFor: 'Fotos de producto para ecommerce y retratos que necesitan fondo transparente rápido.',
    targetAudience: ['Ecommerce', 'Diseñadores', 'Creadores de contenido'],
    useCases: ['Preparar fotos de producto para una tienda online', 'Quitar el fondo de una foto de perfil', 'Preparar imágenes para un catálogo'],
    pros: ['Muy rápido y sencillo, una sola función bien resuelta', 'Buena calidad de recorte automático', 'Tiene API para integraciones'],
    cons: ['La versión gratuita entrega resolución reducida', 'No incluye otras funciones de edición más allá del recorte'],
    alternatives: ['photoroom', 'canva'],
    editorialScore: 4.2,
    freeVersion: true,
    isDemo: true,
  },
  {
    slug: 'photoroom',
    name: 'Photoroom',
    tagline: 'Edición de fotos de producto con IA',
    description:
      'App de edición de fotos orientada a producto: elimina fondos, genera fondos nuevos y prepara imágenes para tiendas online.',
    longDescription:
      'Photoroom combina eliminación de fondo con generación de fondos nuevos mediante IA, pensado especialmente para fotos de producto de ecommerce y catálogos. Permite pasar de una foto tomada con el móvil a una imagen con aspecto de catálogo profesional en pocos pasos.',
    categories: ['imagen', 'marketing'],
    subcategories: ['Fotografía de producto'],
    tags: ['ecommerce', 'fotos de producto', 'eliminar fondo', 'catálogo'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con marca de agua; planes de pago sin marca de agua y en alta resolución',
    website: 'https://www.photoroom.com',
    initials: 'PR',
    color: 'bg-lime-700',
    features: ['Eliminación y generación de fondos', 'Plantillas para catálogo de producto', 'App móvil y web', 'Procesamiento por lotes en planes de pago'],
    bestFor: 'Pequeños vendedores online que fotografían sus productos con el móvil y necesitan un acabado profesional.',
    targetAudience: ['Vendedores online', 'Pequeños negocios', 'Creadores de contenido de producto'],
    useCases: ['Convertir una foto de móvil en una imagen de catálogo', 'Generar variantes de fondo para un mismo producto', 'Procesar muchas fotos de producto de una vez'],
    pros: ['Pensado específicamente para fotos de producto', 'App móvil cómoda para fotografiar y editar al momento', 'Resultados de aspecto profesional sin experiencia previa'],
    cons: ['El plan gratuito añade marca de agua', 'El procesamiento por lotes requiere plan de pago'],
    alternatives: ['remove-bg', 'canva'],
    editorialScore: 4.1,
    freeVersion: true,
    isDemo: true,
  },
  {
    slug: 'leonardo-ai',
    name: 'Leonardo.Ai',
    tagline: 'Generación de imágenes con control fino de estilo',
    description:
      'Generador de imágenes por IA con modelos entrenados para distintos estilos (concept art, iconos, texturas de videojuego) y buen control de parámetros.',
    longDescription:
      'Leonardo.Ai es un generador de imágenes que ofrece varios modelos especializados según el estilo buscado (arte conceptual, iconos, texturas, ilustración), pensado originalmente para necesidades de estudios de videojuegos y que se ha extendido a un uso más general de creación visual.',
    categories: ['imagen', 'diseno'],
    subcategories: ['Concept art', 'Iconos y texturas'],
    tags: ['generación de imágenes', 'concept art', 'videojuegos', 'iconos'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con créditos diarios limitados',
    website: 'https://leonardo.ai',
    initials: 'LE',
    color: 'bg-indigo-600',
    features: ['Varios modelos según estilo visual', 'Control fino de parámetros de generación', 'Generación de texturas e iconos', 'Comunidad de prompts compartidos'],
    bestFor: 'Diseñadores de videojuegos e ilustradores que necesitan control fino sobre el estilo generado.',
    targetAudience: ['Estudios de videojuegos', 'Ilustradores', 'Diseñadores de producto'],
    useCases: ['Generar arte conceptual para un videojuego', 'Crear iconos con un estilo consistente', 'Producir texturas para un proyecto 3D'],
    pros: ['Buena variedad de modelos especializados', 'Créditos gratuitos diarios utilizables', 'Comunidad activa con prompts de ejemplo'],
    cons: ['Curva de aprendizaje para aprovechar los distintos modelos', 'Los créditos gratuitos limitan el uso intensivo'],
    alternatives: ['midjourney', 'ideogram'],
    editorialScore: 4.2,
    freeVersion: true,
    isDemo: true,
  },
  {
    slug: 'play-ht',
    name: 'PlayHT',
    tagline: 'Texto a voz con foco en podcasts y artículos narrados',
    description:
      'Servicio de conversión de texto a voz con voces en varios idiomas, orientado a narrar artículos, podcasts y contenido educativo.',
    longDescription:
      'PlayHT convierte texto en audio narrado con voces realistas en varios idiomas y acentos, con funciones pensadas para convertir artículos de blog en podcast o narrar contenido educativo. Ofrece una API para integrarlo en otras aplicaciones.',
    categories: ['audio'],
    subcategories: ['Texto a voz'],
    tags: ['texto a voz', 'podcast', 'narración'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con minutos limitados al mes',
    website: 'https://play.ht',
    initials: 'PH',
    color: 'bg-cyan-600',
    features: ['Conversión de texto a voz', 'Voces en varios idiomas y acentos', 'API para integraciones', 'Conversión de artículos a audio'],
    bestFor: 'Convertir contenido escrito (artículos, guiones) en audio narrado de forma rápida.',
    targetAudience: ['Blogueros', 'Creadores de contenido educativo', 'Desarrolladores que integran voz vía API'],
    useCases: ['Convertir un artículo de blog en versión audio', 'Narrar material educativo', 'Integrar voz sintética en una app propia'],
    pros: ['Buena variedad de voces e idiomas', 'API disponible para integraciones', 'Plan gratuito para probar'],
    cons: ['Los minutos gratuitos son limitados', 'La naturalidad varía según el idioma elegido'],
    alternatives: ['elevenlabs', 'murf'],
    editorialScore: 3.9,
    freeVersion: true,
    isDemo: true,
  },
  {
    slug: 'speechify',
    name: 'Speechify',
    tagline: 'Convierte texto y documentos en audio para escuchar',
    description:
      'App que lee en voz alta artículos, PDFs y libros, pensada para estudiar o consumir contenido escrito mientras haces otra cosa.',
    longDescription:
      'Speechify convierte texto de artículos, PDFs, correos y libros en audio, para poder escucharlos en vez de leerlos. Se usa mucho para estudiar (repasar apuntes escuchándolos), para personas con dificultades de lectura, o simplemente para aprovechar tiempos muertos como desplazamientos.',
    categories: ['estudiantes', 'productividad'],
    subcategories: ['Lectura en voz alta'],
    tags: ['texto a voz', 'estudiar', 'accesibilidad', 'pdf'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con voces básicas; plan Premium con voces más naturales y funciones extra',
    website: 'https://speechify.com',
    initials: 'SP',
    color: 'bg-blue-700',
    features: ['Lectura en voz alta de artículos y PDFs', 'Ajuste de velocidad de lectura', 'App móvil y extensión de navegador', 'Resumen de textos largos en planes de pago'],
    bestFor: 'Estudiar escuchando apuntes o repasar documentos largos sin tener que leerlos con la vista.',
    targetAudience: ['Estudiantes', 'Personas con dificultades de lectura', 'Profesionales con poco tiempo para leer'],
    useCases: ['Escuchar un PDF de apuntes mientras haces otra tarea', 'Repasar un artículo largo en el trayecto al trabajo', 'Facilitar la lectura a personas con dislexia'],
    pros: ['Útil como apoyo de accesibilidad', 'Fácil de usar desde el móvil', 'Buen plan gratuito para uso básico'],
    cons: ['Las voces más naturales están en el plan de pago', 'La comprensión por audio no sustituye siempre la lectura activa'],
    alternatives: ['elevenlabs'],
    editorialScore: 4.0,
    freeVersion: true,
    isDemo: true,
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    tagline: 'Editor de código construido alrededor de la IA',
    description:
      'Editor de código (basado en VS Code) diseñado desde cero para trabajar con asistencia de IA en todo el flujo de programación.',
    longDescription:
      'Cursor es un editor de código, compatible con extensiones de VS Code, construido específicamente para integrar IA en todo el flujo de trabajo: autocompletado consciente de todo el proyecto, edición de varios archivos a la vez a partir de una instrucción en lenguaje natural, y un chat con contexto del código abierto.',
    categories: ['programacion'],
    subcategories: ['Editores de código con IA'],
    tags: ['programación', 'editor de código', 'autocompletado'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con límite de solicitudes de IA al mes; plan de pago con más capacidad',
    website: 'https://www.cursor.com',
    initials: 'CU',
    color: 'bg-neutral-900',
    features: ['Autocompletado consciente de todo el proyecto', 'Edición de varios archivos a la vez con IA', 'Chat con contexto del código', 'Compatible con extensiones de VS Code'],
    bestFor: 'Desarrolladores que quieren un editor pensado desde el inicio para trabajar con IA, no un complemento añadido.',
    targetAudience: ['Desarrolladores individuales', 'Equipos de producto técnico'],
    useCases: ['Refactorizar varios archivos a la vez con una instrucción', 'Entender rápido una base de código nueva', 'Acelerar tareas repetitivas de programación'],
    pros: ['Pensado desde cero para IA, no un plugin añadido', 'Compatible con extensiones ya conocidas de VS Code', 'Buen manejo de contexto de proyecto completo'],
    cons: ['El plan gratuito limita las solicitudes de IA al mes', 'Migrar la configuración desde otro editor lleva algo de tiempo'],
    alternatives: ['github-copilot'],
    editorialScore: 4.4,
    freeVersion: true,
    isNew: true,
    isDemo: true,
  },
  {
    slug: 'tome',
    name: 'Tome',
    tagline: 'Presentaciones e historias visuales generadas con IA',
    description:
      'Herramienta que genera presentaciones y páginas narrativas a partir de un tema o guion, con un enfoque visual muy cuidado.',
    longDescription:
      'Tome genera presentaciones y formatos narrativos (como propuestas comerciales o historias visuales) a partir de un tema, con un diseño automático cuidado y la opción de generar imágenes para acompañar cada sección.',
    categories: ['presentaciones', 'diseno'],
    subcategories: ['Storytelling visual'],
    tags: ['presentaciones', 'storytelling', 'propuestas comerciales'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con generaciones limitadas al mes',
    website: 'https://tome.app',
    initials: 'TM',
    color: 'bg-fuchsia-700',
    features: ['Generación de presentaciones desde un tema', 'Generación de imágenes integrada', 'Formatos narrativos además de diapositivas clásicas', 'Exportación y compartición por enlace'],
    bestFor: 'Propuestas comerciales y presentaciones que buscan un formato más visual y narrativo que una diapositiva tradicional.',
    targetAudience: ['Equipos de ventas', 'Startups', 'Creadores de contenido'],
    useCases: ['Crear una propuesta comercial visual', 'Generar una presentación rápida sobre un tema nuevo', 'Compartir una historia de producto de forma visual'],
    pros: ['Resultado visual muy cuidado por defecto', 'Formatos distintos a la diapositiva clásica', 'Fácil de compartir por enlace'],
    cons: ['Los créditos gratuitos limitan el uso frecuente', 'Menos control manual fino que un editor de diapositivas tradicional'],
    alternatives: ['gamma', 'canva'],
    editorialScore: 4.0,
    freeVersion: true,
    isDemo: true,
  },
  {
    slug: 'beautiful-ai',
    name: 'Beautiful.ai',
    tagline: 'Diapositivas que se autoajustan al añadir contenido',
    description:
      'Editor de presentaciones donde el diseño de cada diapositiva se reajusta automáticamente al añadir o quitar contenido, evitando desajustes visuales.',
    longDescription:
      'Beautiful.ai es un editor de presentaciones cuya particularidad es que las plantillas se comportan como "diseño inteligente": al añadir o quitar texto e imágenes, los elementos de la diapositiva se reajustan automáticamente para mantener un resultado equilibrado, sin que el usuario tenga que mover manualmente cada elemento.',
    categories: ['presentaciones'],
    subcategories: ['Diseño automático de diapositivas'],
    tags: ['presentaciones', 'diseño automático', 'diapositivas'],
    priceTier: 'Pago',
    priceNote: 'Prueba gratuita limitada; sin plan gratuito permanente',
    website: 'https://www.beautiful.ai',
    initials: 'BA',
    color: 'bg-teal-700',
    features: ['Diseño de diapositivas que se autoajusta', 'Plantillas para distintos tipos de presentación', 'Biblioteca de diapositivas de marca para equipos', 'Modo presentador'],
    bestFor: 'Quien presenta con frecuencia y quiere evitar el trabajo manual de reajustar el diseño en cada cambio.',
    targetAudience: ['Consultores', 'Equipos de ventas', 'Profesionales que presentan con frecuencia'],
    useCases: ['Mantener una presentación ordenada mientras se edita rápido', 'Crear una biblioteca de diapositivas de marca para un equipo', 'Preparar una presentación de última hora sin descuidar el diseño'],
    pros: ['El ajuste automático ahorra tiempo real de maquetación', 'Buen resultado visual sin ser diseñador', 'Útil para equipos con biblioteca de marca compartida'],
    cons: ['Sin plan gratuito permanente, solo prueba', 'Menos libertad creativa que un editor totalmente manual'],
    alternatives: ['gamma', 'tome'],
    editorialScore: 4.0,
    freeVersion: false,
    freeTrial: true,
    isDemo: true,
  },
  {
    slug: 'quillbot',
    name: 'QuillBot',
    tagline: 'Parafraseo y corrección de textos académicos',
    description:
      'Herramienta de parafraseo que reescribe un texto manteniendo el significado, junto con corrector gramatical y detector de plagio.',
    longDescription:
      'QuillBot reescribe un texto dado ofreciendo distintos modos (más formal, más simple, más corto) manteniendo el significado original. Se usa mucho en contexto académico para reformular ideas propias, junto con sus herramientas de corrección gramatical, resumen de textos y comprobación de similitud con otras fuentes.',
    categories: ['escritura', 'estudiantes'],
    subcategories: ['Parafraseo'],
    tags: ['parafrasear', 'estudiantes', 'corrector', 'resumen'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con límite de palabras por parafraseo; plan Premium sin ese límite',
    website: 'https://quillbot.com',
    initials: 'QB',
    color: 'bg-purple-600',
    features: ['Parafraseo en varios modos', 'Corrector gramatical', 'Resumen automático de textos', 'Comprobación de similitud con otras fuentes'],
    bestFor: 'Estudiantes y redactores que quieren reformular sus propias ideas o revisar la redacción de un texto.',
    targetAudience: ['Estudiantes universitarios', 'Redactores no nativos de un idioma'],
    useCases: ['Reformular un párrafo propio con otro estilo', 'Resumir un texto largo para estudiar', 'Revisar la gramática de un trabajo académico'],
    pros: ['Útil para practicar distintas formas de expresar una idea', 'Incluye corrector y resumen en la misma herramienta', 'Plan gratuito funcional para uso ocasional'],
    cons: ['El plan gratuito limita las palabras por uso', 'No sustituye entender y redactar la idea de forma propia'],
    alternatives: ['grammarly'],
    editorialScore: 3.9,
    freeVersion: true,
    isDemo: true,
  },
  {
    slug: 'fireflies-ai',
    name: 'Fireflies.ai',
    tagline: 'Grabación, transcripción y búsqueda dentro de reuniones',
    description:
      'Asistente que graba y transcribe reuniones automáticamente, y permite buscar palabras clave dentro de conversaciones pasadas.',
    longDescription:
      'Fireflies.ai se conecta a las videollamadas para grabar, transcribir y resumir automáticamente, con la particularidad de permitir buscar por palabra clave dentro del historial de todas las reuniones grabadas, útil para recuperar un dato mencionado hace semanas sin volver a ver la grabación completa.',
    categories: ['productividad'],
    subcategories: ['Transcripción de reuniones'],
    tags: ['reuniones', 'transcripción', 'búsqueda', 'notas automáticas'],
    priceTier: 'Freemium',
    priceNote: 'Plan gratuito con almacenamiento e historial limitados',
    website: 'https://fireflies.ai',
    initials: 'FF',
    color: 'bg-amber-600',
    features: ['Grabación y transcripción automática', 'Búsqueda por palabra clave en el historial', 'Resumen automático de reuniones', 'Integración con Zoom, Meet y Slack'],
    bestFor: 'Equipos que necesitan encontrar rápido algo que se dijo en una reunión pasada.',
    targetAudience: ['Equipos de ventas', 'Equipos de producto', 'Managers con muchas reuniones'],
    useCases: ['Buscar qué se acordó sobre un tema en una reunión de hace semanas', 'Compartir el resumen de una reunión con quien no pudo asistir', 'Mantener un historial buscable de decisiones tomadas en reuniones'],
    pros: ['La búsqueda dentro del historial es muy útil en equipos grandes', 'Se integra con las plataformas de videollamada más comunes', 'Resumen automático razonablemente fiable'],
    cons: ['El plan gratuito limita el historial disponible', 'Requiere que todos en la reunión acepten ser grabados'],
    alternatives: ['otter-ai', 'notion-ai'],
    editorialScore: 4.0,
    freeVersion: true,
    isDemo: true,
  },
];

// Convierte una RawTool (lo que escribimos a mano) en una Tool completa,
// rellenando los campos nuevos con valores por defecto DERIVADOS de datos
// que ya existían (nunca información inventada de la nada).
function normalizeTool(raw: RawTool): Tool {
  return {
    ...raw,
    tags: raw.tags ?? [],
    subcategories: raw.subcategories ?? [],
    targetAudience: raw.targetAudience ?? [],
    useCases: raw.useCases ?? [],
    freeVersion: raw.freeVersion ?? (raw.priceTier === 'Gratis' || raw.priceTier === 'Freemium'),
    freeTrial: raw.freeTrial ?? false,
    lastUpdated: raw.lastUpdated ?? '2026-01',
    isNew: raw.isNew ?? false,
    affiliate: raw.affiliate ?? false,
    sponsored: raw.sponsored ?? false,
    seoTitle: raw.seoTitle ?? `${raw.name}: análisis, precio y alternativas`,
    seoDescription: raw.seoDescription ?? raw.description,
  };
}

export const tools: Tool[] = rawTools.map(normalizeTool);

// --- Monetización ---------------------------------------------------------
// Centraliza aquí la lógica de qué enlace usar para "Ver herramienta" / "Probar herramienta".
// Mientras `affiliate` sea false (caso de todas las herramientas por ahora, porque
// no tenemos ningún programa de afiliados verificado), se usa siempre el enlace oficial.
// El día que se confirme un acuerdo real, basta con poner affiliate: true y
// affiliateUrl: '...' en el dato de esa herramienta — no hay que tocar ningún componente.
export function getToolLink(tool: Tool): { href: string; rel: string; isAffiliate: boolean } {
  if (tool.affiliate && tool.affiliateUrl) {
    return { href: tool.affiliateUrl, rel: 'sponsored noopener noreferrer', isAffiliate: true };
  }
  return { href: tool.website, rel: 'nofollow noopener noreferrer', isAffiliate: false };
}

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
      ...t.subcategories,
      ...t.tags,
      ...t.features,
      ...t.targetAudience,
      ...t.useCases,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

// --- Helpers para secciones de la portada y páginas de ranking ------------

export function getPopularTools(limit = 6): Tool[] {
  // "Populares" = mejor valoradas editorialmente, como aproximación honesta
  // mientras no haya datos reales de tráfico/clics conectados (ver analytics).
  return [...tools].sort((a, b) => b.editorialScore - a.editorialScore).slice(0, limit);
}

export function getNewTools(limit = 6): Tool[] {
  return tools.filter((t) => t.isNew).slice(0, limit);
}

export function getTopRatedTools(limit = 6): Tool[] {
  return [...tools].sort((a, b) => b.editorialScore - a.editorialScore).slice(0, limit);
}

export function getFreeTools(limit = 6): Tool[] {
  return tools.filter((t) => t.freeVersion).slice(0, limit);
}

export function getToolsForAudience(keyword: string, limit = 6): Tool[] {
  const k = keyword.toLowerCase();
  return tools
    .filter((t) => t.targetAudience.some((a) => a.toLowerCase().includes(k)))
    .slice(0, limit);
}

export function getToolsByCategories(categorySlugs: string[], limit?: number): Tool[] {
  const list = tools.filter((t) => t.categories.some((c) => categorySlugs.includes(c)));
  return typeof limit === 'number' ? list.slice(0, limit) : list;
}
