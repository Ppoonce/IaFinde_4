export type Comparison = {
  slug: string;
  toolA: string; // tool slug
  toolB: string; // tool slug
  title: string;
  intro: string;
  rows: { label: string; a: string; b: string }[];
  verdict: string;
  isDemo: true;
};

export const comparisons: Comparison[] = [
  {
    slug: 'chatgpt-vs-gemini',
    toolA: 'chatgpt',
    toolB: 'gemini',
    title: 'ChatGPT vs Gemini',
    intro:
      'Dos de los asistentes conversacionales más usados, con enfoques distintos: uno independiente y muy extendido, el otro integrado en el ecosistema de Google.',
    rows: [
      { label: 'Plan gratuito', a: 'Sí, con límites de uso', b: 'Sí, con límites de uso' },
      { label: 'Integración con otras apps', a: 'Ecosistema propio de complementos', b: 'Integrado con Gmail y Documentos de Google' },
      { label: 'Acceso a información reciente', a: 'Sí, en planes con navegación activada', b: 'Sí, apoyado en la búsqueda de Google' },
      { label: 'Generación de imágenes', a: 'Sí, integrada (DALL·E)', b: 'Sí, integrada' },
      { label: 'Mejor para', a: 'Uso generalista independiente', b: 'Quien ya trabaja en Google Workspace' },
    ],
    verdict:
      'Si tu flujo de trabajo ya vive en Gmail y Google Docs, Gemini te ahorra pasos. Si prefieres una herramienta independiente de tu proveedor de correo, o valoras el ecosistema de complementos, ChatGPT es la opción más extendida.',
    isDemo: true,
  },
  {
    slug: 'midjourney-vs-dalle',
    toolA: 'midjourney',
    toolB: 'dalle',
    title: 'Midjourney vs DALL·E',
    intro:
      'Dos generadores de imágenes con filosofías distintas: uno centrado en resultado artístico y control fino, el otro pensado para generar imágenes conversando dentro de ChatGPT.',
    rows: [
      { label: 'Plan gratuito', a: 'No, requiere suscripción', b: 'Incluido con límites en planes de ChatGPT' },
      { label: 'Forma de uso', a: 'Discord o web propia', b: 'Dentro de la conversación de ChatGPT' },
      { label: 'Control de estilo', a: 'Muy alto, con parámetros avanzados', b: 'Más sencillo, guiado por conversación' },
      { label: 'Curva de aprendizaje', a: 'Media-alta', b: 'Baja' },
      { label: 'Mejor para', a: 'Ilustración y concept art muy cuidado', b: 'Generar imágenes rápido sin aprender prompts complejos' },
    ],
    verdict:
      'Si buscas el máximo acabado visual y no te importa aprender a escribir buenos prompts, Midjourney da resultados más pulidos. Si ya usas ChatGPT y quieres generar una imagen sin salir de la conversación, DALL·E es más cómodo.',
    isDemo: true,
  },
  {
    slug: 'claude-vs-chatgpt',
    toolA: 'claude-ai',
    toolB: 'chatgpt',
    title: 'Claude vs ChatGPT',
    intro:
      'Dos asistentes conversacionales generalistas, con Claude históricamente más enfocado en documentos largos y ChatGPT como el más extendido y con mayor ecosistema de complementos.',
    rows: [
      { label: 'Plan gratuito', a: 'Sí, con límites de mensajes', b: 'Sí, con límites de uso' },
      { label: 'Manejo de documentos largos', a: 'Punto fuerte histórico de Claude', b: 'Bueno, mejora en versiones recientes' },
      { label: 'Ecosistema de complementos', a: 'Más reducido', b: 'Muy amplio, con muchos plugins de terceros' },
      { label: 'Generación de imágenes', a: 'No integrada directamente', b: 'Sí, integrada (DALL·E)' },
      { label: 'Mejor para', a: 'Análisis y redacción sobre documentos extensos', b: 'Uso generalista con más integraciones' },
    ],
    verdict:
      'Si tu trabajo gira en torno a analizar o redactar sobre documentos largos, vale la pena probar Claude. Si buscas el ecosistema más grande de plugins y generación de imágenes integrada, ChatGPT es la opción más completa hoy por hoy.',
    isDemo: true,
  },
  {
    slug: 'canva-vs-adobe-express',
    toolA: 'canva',
    toolB: 'adobe-express',
    title: 'Canva vs Adobe Express',
    intro:
      'Dos editores de diseño gráfico basados en plantillas: Canva con la biblioteca de plantillas más grande del mercado, Adobe Express respaldado por el ecosistema y la tecnología de Adobe.',
    rows: [
      { label: 'Plan gratuito', a: 'Sí, muy completo', b: 'Sí, disponible' },
      { label: 'Cantidad de plantillas', a: 'Catálogo muy amplio', b: 'Catálogo algo más reducido' },
      { label: 'Generación de imágenes con IA', a: 'Sí, integrada', b: 'Sí, con Adobe Firefly' },
      { label: 'Integración con otro software', a: 'Ecosistema propio', b: 'Se integra con Photoshop e Illustrator' },
      { label: 'Mejor para', a: 'Uso generalista con la mayor variedad de plantillas', b: 'Quien ya usa el ecosistema Adobe' },
    ],
    verdict:
      'Si buscas la mayor variedad de plantillas y una curva de aprendizaje mínima, Canva sigue siendo la opción más popular. Si ya trabajas con Photoshop o Illustrator y quieres algo que se integre con ese flujo, Adobe Express tiene sentido.',
    isDemo: true,
  },
];

export function getComparison(slug: string) {
  return comparisons.find((c) => c.slug === slug);
}
