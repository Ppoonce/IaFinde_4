'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { getSuggestionsFor } from '@/data/search-suggestions';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

const examples = ['Crear un vídeo', 'Hacer una presentación', 'Generar una voz', 'Editar una imagen'];

export default function HeroSearch() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const suggestions = useMemo(() => getSuggestionsFor(value), [value]);

  function goToResults(term: string) {
    const q = term.trim();
    trackEvent(AnalyticsEvents.SEARCH_SUBMIT, { query: q, source: 'hero' });
    router.push(q ? `/herramientas?q=${encodeURIComponent(q)}` : '/herramientas');
  }

  return (
    <div className="relative">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          goToResults(value);
        }}
        className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-2 shadow-[0_4px_24px_rgba(21,23,28,0.06)] sm:flex-row"
      >
        <label htmlFor="hero-search" className="sr-only">
          ¿Qué quieres hacer?
        </label>
        <input
          id="hero-search"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          autoComplete="off"
          placeholder="¿Qué quieres hacer? Ej: crear un vídeo, generar una voz…"
          className="flex-1 rounded-xl bg-transparent px-4 py-3 text-base text-ink placeholder:text-inkmuted/70 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-xl bg-signal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-signaldark"
        >
          Buscar herramientas
        </button>
      </form>

      {focused && suggestions.length > 0 && (
        <div className="absolute z-20 mt-2 w-full rounded-xl border border-line bg-surface p-2 shadow-[0_8px_24px_rgba(21,23,28,0.10)]">
          <p className="px-2 pb-1 pt-1 text-xs font-medium text-inkmuted">Quizá buscas</p>
          {suggestions.map((s) => (
            <button
              key={s.label}
              type="button"
              onMouseDown={() => {
                trackEvent(AnalyticsEvents.SEARCH_SUGGESTION_CLICK, { suggestion: s.query });
                goToResults(s.query);
              }}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm text-ink hover:bg-paper"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {examples.map((ex) => (
          <button
            key={ex}
            type="button"
            onClick={() => goToResults(ex)}
            className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-inkmuted transition-colors hover:border-signal hover:text-signal"
          >
            {ex}
          </button>
        ))}
      </div>
    </div>
  );
}
