'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const examples = ['Crear un vídeo', 'Hacer una presentación', 'Generar una voz', 'Editar una imagen'];

export default function HeroSearch() {
  const router = useRouter();
  const [value, setValue] = useState('');

  function goToResults(term: string) {
    const q = term.trim();
    router.push(q ? `/herramientas?q=${encodeURIComponent(q)}` : '/herramientas');
  }

  return (
    <div>
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
