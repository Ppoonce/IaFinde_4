import { tools, Tool } from '@/data/tools';
import { categories } from '@/data/categories';

// Palabras habituales que la gente escribe en el buscador,
// mapeadas a la categoría con la que de verdad se corresponden.
const SYNONYMS: Record<string, string> = {
  video: 'video',
  vídeo: 'video',
  videos: 'video',
  editar: 'video',
  imagen: 'imagen',
  imagenes: 'imagen',
  imágenes: 'imagen',
  foto: 'imagen',
  fotos: 'imagen',
  logo: 'diseno',
  logos: 'diseno',
  voz: 'audio',
  voces: 'audio',
  audio: 'audio',
  música: 'audio',
  musica: 'audio',
  podcast: 'audio',
  escribir: 'escritura',
  redactar: 'escritura',
  texto: 'escritura',
  estudiar: 'estudiantes',
  estudiantes: 'estudiantes',
  examen: 'estudiantes',
  apuntes: 'estudiantes',
  marketing: 'marketing',
  anuncios: 'marketing',
  programar: 'programacion',
  código: 'programacion',
  codigo: 'programacion',
  programación: 'programacion',
  productividad: 'productividad',
  organizar: 'productividad',
  reuniones: 'productividad',
  diseño: 'diseno',
  diseno: 'diseno',
  presentacion: 'presentaciones',
  presentación: 'presentaciones',
  presentaciones: 'presentaciones',
  diapositivas: 'presentaciones',
  gratis: '__gratis__',
  gratuita: '__gratis__',
  gratuitas: '__gratis__',
};

export function searchEverything(rawQuery: string): Tool[] {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return tools;

  const matchedCategorySlug = SYNONYMS[q];

  return tools.filter((t) => {
    if (matchedCategorySlug === '__gratis__') {
      return t.priceTier === 'Gratis' || t.priceTier === 'Freemium';
    }
    if (matchedCategorySlug && t.categories.includes(matchedCategorySlug)) {
      return true;
    }
    const haystack = [
      t.name,
      t.tagline,
      t.description,
      t.longDescription,
      ...t.categories.map((c) => categories.find((cat) => cat.slug === c)?.name ?? c),
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
