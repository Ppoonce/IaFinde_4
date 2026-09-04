import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategory } from '@/data/categories';
import { getToolsByCategory } from '@/data/tools';
import { articles } from '@/data/articles';
import Breadcrumbs from '@/components/Breadcrumbs';
import ToolCard from '@/components/ToolCard';
import FAQ from '@/components/FAQ';
import AdSlot from '@/components/AdSlot';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getCategory(params.slug);
  if (!category) return {};
  return {
    title: category.seoTitle,
    description: category.description,
    alternates: { canonical: `/categorias/${category.slug}` },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const categoryTools = getToolsByCategory(category.slug);
  const relatedArticles = articles.filter((a) => a.category === category.slug);
  const otherCategories = categories.filter((c) => c.slug !== category.slug).slice(0, 5);

  return (
    <div className="pb-20">
      <Breadcrumbs
        items={[
          { label: 'Inicio', href: '/' },
          { label: 'Categorías', href: '/categorias' },
          { label: category.shortLabel },
        ]}
      />

      <div className="mx-auto max-w-6xl px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{category.name}</h1>
        <p className="mt-3 max-w-2xl text-inkmuted">{category.intro}</p>

        <section className="mt-8">
          <h2 className="font-display text-xl font-semibold text-ink">
            Herramientas de {category.shortLabel.toLowerCase()}
          </h2>
          {categoryTools.length > 0 ? (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-inkmuted">Estamos añadiendo herramientas para esta categoría.</p>
          )}
        </section>

        <AdSlot />

        {relatedArticles.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink">Guías relacionadas</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="rounded-xl border border-line bg-surface p-5 hover:shadow-[0_2px_16px_rgba(21,23,28,0.06)]"
                >
                  <h3 className="font-display text-lg font-semibold text-ink">{a.title}</h3>
                  <p className="mt-2 text-sm text-inkmuted">{a.metaDescription}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <FAQ items={category.faqs} />

        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold text-ink">Otras categorías</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/categorias/${c.slug}`}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-inkmuted hover:border-signal hover:text-signal"
              >
                {c.shortLabel}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
