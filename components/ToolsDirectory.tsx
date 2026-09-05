'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { tools, PriceTier } from '@/data/tools';
import { categories } from '@/data/categories';
import { searchEverything } from '@/lib/search';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';
import ToolCard from './ToolCard';

const priceTiers: PriceTier[] = ['Gratis', 'Freemium', 'Pago'];
type SortOption = 'relevancia' | 'valoracion' | 'nombre';

export default function ToolsDirectory() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [category, setCategory] = useState<string>(searchParams.get('categoria') ?? 'todas');
  const [price, setPrice] = useState<'todas' | PriceTier>('todas');
  const [sort, setSort] = useState<SortOption>('relevancia');

  const results = useMemo(() => {
    let list = query ? searchEverything(query) : tools;
    if (category !== 'todas') {
      list = list.filter((t) => t.categories.includes(category));
    }
    if (price !== 'todas') {
      list = list.filter((t) => t.priceTier === price);
    }
    if (sort === 'valoracion') {
      list = [...list].sort((a, b) => b.editorialScore - a.editorialScore);
    } else if (sort === 'nombre') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [query, category, price, sort]);

  function handleSearchChange(v: string) {
    setQuery(v);
  }

  function handleSearchBlur() {
    if (query.trim()) {
      trackEvent(AnalyticsEvents.SEARCH_SUBMIT, { query: query.trim(), source: 'directorio' });
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-4 sm:flex-row sm:items-center">
        <label htmlFor="directory-search" className="sr-only">
          Buscar herramientas
        </label>
        <input
          id="directory-search"
          type="text"
          value={query}
          onChange={(e) => handleSearchChange(e.target.value)}
          onBlur={handleSearchBlur}
          placeholder="Busca por tarea: vídeo, voz, presentaciones…"
          className="flex-1 rounded-xl border border-line px-4 py-2.5 text-sm text-ink placeholder:text-inkmuted/70 focus:outline-none"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filtrar por categoría"
          className="rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-ink"
        >
          <option value="todas">Todas las categorías</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.shortLabel}
            </option>
          ))}
        </select>

        <select
          value={price}
          onChange={(e) => setPrice(e.target.value as 'todas' | PriceTier)}
          aria-label="Filtrar por precio"
          className="rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-ink"
        >
          <option value="todas">Cualquier precio</option>
          {priceTiers.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          aria-label="Ordenar resultados"
          className="rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-ink"
        >
          <option value="relevancia">Más relevantes</option>
          <option value="valoracion">Mejor valoradas</option>
          <option value="nombre">Nombre (A-Z)</option>
        </select>
      </div>

      <p className="mt-4 text-sm text-inkmuted" role="status">
        {results.length} {results.length === 1 ? 'herramienta encontrada' : 'herramientas encontradas'}
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-dashed border-line p-8 text-center text-inkmuted">
          No hemos encontrado herramientas para esa búsqueda. Prueba con un término más general, como "vídeo" o "escritura".
        </div>
      )}
    </div>
  );
}
