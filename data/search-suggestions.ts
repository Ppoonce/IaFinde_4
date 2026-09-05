// Sugerencias de búsqueda: cuando alguien escribe un término amplio, le
// proponemos búsquedas más concretas relacionadas, para ayudarle a encontrar
// justo lo que necesita en vez de una lista larga y genérica.
export type SearchSuggestion = { label: string; query: string };

export const SEARCH_SUGGESTIONS: Record<string, SearchSuggestion[]> = {
  video: [
    { label: 'Generadores de vídeo', query: 'generar video' },
    { label: 'Edición de vídeo', query: 'editar video' },
    { label: 'Vídeos para redes sociales', query: 'video redes sociales' },
    { label: 'Avatares con IA', query: 'avatar video' },
  ],
  crear: [
    { label: 'Crear vídeos', query: 'video' },
    { label: 'Crear imágenes', query: 'imagen' },
    { label: 'Crear presentaciones', query: 'presentaciones' },
    { label: 'Crear voces', query: 'voz' },
  ],
  imagen: [
    { label: 'Generar imágenes', query: 'generar imagen' },
    { label: 'Eliminar fondo', query: 'eliminar fondo' },
    { label: 'Fotos de producto', query: 'fotos de producto' },
  ],
  logo: [
    { label: 'Crear logos', query: 'logo' },
    { label: 'Diseño gráfico', query: 'diseño' },
  ],
  voz: [
    { label: 'Generar voces', query: 'voz' },
    { label: 'Clonar voz', query: 'clonar voz' },
    { label: 'Texto a voz', query: 'texto a voz' },
  ],
  estudiar: [
    { label: 'IA para estudiantes', query: 'estudiantes' },
    { label: 'Resumir apuntes', query: 'resumen' },
    { label: 'Transcribir clases', query: 'transcripción' },
  ],
  programar: [
    { label: 'Asistentes de código', query: 'programación' },
    { label: 'Autocompletado de código', query: 'código' },
  ],
  presentaciones: [
    { label: 'Generar presentaciones', query: 'presentaciones' },
    { label: 'Diapositivas automáticas', query: 'diapositivas' },
  ],
  marketing: [
    { label: 'Copys para anuncios', query: 'copywriting' },
    { label: 'Contenido para redes sociales', query: 'redes sociales' },
  ],
  instagram: [
    { label: 'Contenido para Instagram', query: 'redes sociales' },
    { label: 'Diseño para redes sociales', query: 'diseño' },
    { label: 'Vídeos cortos', query: 'video redes sociales' },
  ],
  reuniones: [
    { label: 'Transcribir reuniones', query: 'reuniones' },
    { label: 'Resumen de reuniones', query: 'notas automáticas' },
  ],
};

export function getSuggestionsFor(query: string): SearchSuggestion[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const directMatch = SEARCH_SUGGESTIONS[q];
  if (directMatch) return directMatch;

  // Coincidencia parcial: si el usuario escribe "instagram content" o similar,
  // buscamos si alguna clave conocida aparece dentro de lo escrito.
  const partial = Object.keys(SEARCH_SUGGESTIONS).find((key) => q.includes(key));
  return partial ? SEARCH_SUGGESTIONS[partial] : [];
}
