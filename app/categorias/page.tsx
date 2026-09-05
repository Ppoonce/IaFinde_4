import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { categories } from '@/data/categories';
import { getToolsByCategory } from '@/data/tools';

export const metadata: Metadata = {
  title: 'Categorías de herramientas de IA',
  description: 'Explora herramientas de inteligencia artificial organizadas por categoría: vídeo, imagen, audio, escritura, programación y más.',
  alternates: { canonical: '/categorias' },
};

export default function CategoriesPage() {
  return (
    <div className="pb-20">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Categorías' }]} />
      <div className="mx-auto max-w-6xl px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Categorías de herramientas de IA</h1>
        <p className="mt-2 max-w-2xl text-inkmuted">
          Cada categoría reúne herramientas pensadas para una misma necesidad, con una guía introductoria y preguntas frecuentes.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const count = getToolsByCategory(cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/categorias/${cat.slug}`}
                className="lift-on-hover rounded-xl border border-line bg-surface p-5"
              >
                <h2 className="font-display text-lg font-semibold text-ink">{cat.name}</h2>
                <p className="mt-2 text-sm text-inkmuted">{cat.description}</p>
                <p className="mt-3 text-xs text-inkmuted">{count} herramientas</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
