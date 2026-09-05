import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Guías sobre inteligencia artificial',
  description: 'Guías prácticas y comparativas para elegir y usar bien las herramientas de inteligencia artificial.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return (
    <div className="pb-20">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Guías' }]} />
      <div className="mx-auto max-w-6xl px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Guías sobre IA</h1>
        <p className="mt-2 max-w-2xl text-inkmuted">
          Artículos pensados para resolver una duda concreta, no para rellenar espacio.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="lift-on-hover rounded-xl border border-line bg-surface p-5"
            >
              <p className="text-xs text-inkmuted">{article.publishedLabel}</p>
              <h2 className="mt-1 font-display text-lg font-semibold text-ink">{article.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-inkmuted">{article.metaDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
