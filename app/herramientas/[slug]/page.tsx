import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { tools, getTool } from '@/data/tools';
import { categories } from '@/data/categories';
import Breadcrumbs from '@/components/Breadcrumbs';
import PriceBadge from '@/components/PriceBadge';
import ToolCard from '@/components/ToolCard';
import FAQ from '@/components/FAQ';
import AdSlot from '@/components/AdSlot';
import { SITE_URL } from '@/app/layout';

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = getTool(params.slug);
  if (!tool) return {};
  return {
    title: `${tool.name}: análisis, precio y alternativas`,
    description: tool.description,
    alternates: { canonical: `/herramientas/${tool.slug}` },
    openGraph: {
      title: `${tool.name}: análisis, precio y alternativas`,
      description: tool.description,
    },
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getTool(params.slug);
  if (!tool) notFound();

  const alternatives = tool.alternatives.map((slug) => getTool(slug)).filter(Boolean) as typeof tools;
  const toolCategories = categories.filter((c) => tool.categories.includes(c.slug));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    applicationCategory: 'AI Application',
    description: tool.description,
    url: `${SITE_URL}/herramientas/${tool.slug}`,
    offers: {
      '@type': 'Offer',
      price: tool.priceTier === 'Gratis' ? '0' : undefined,
      priceCurrency: 'USD',
      description: tool.priceNote,
    },
  };

  const faqs = [
    { q: `¿${tool.name} tiene plan gratuito?`, a: tool.priceNote },
    { q: `¿Para quién es ${tool.name}?`, a: tool.bestFor },
  ];

  return (
    <div className="pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs
        items={[
          { label: 'Inicio', href: '/' },
          { label: 'Herramientas', href: '/herramientas' },
          { label: tool.name },
        ]}
      />

      <article className="mx-auto max-w-4xl px-5 pt-6">
        <p className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 inline-block border border-amber-200">
          Contenido de demostración — datos editoriales, no verificados con la empresa
        </p>

        <div className="mt-4 flex items-start gap-4">
          <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-white ${tool.color}`}>
            {tool.initials}
          </div>
          <div>
            <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{tool.name}</h1>
            <p className="mt-1 text-lg text-inkmuted">{tool.tagline}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <PriceBadge tier={tool.priceTier} />
          {toolCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/categorias/${c.slug}`}
              className="rounded-full border border-line px-2.5 py-0.5 text-xs text-inkmuted hover:border-signal hover:text-signal"
            >
              {c.shortLabel}
            </Link>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-signal"
          >
            Ver herramienta
          </a>
          <span className="flex items-center text-sm text-inkmuted">{tool.priceNote}</span>
        </div>

        <div className="prose-article mt-10 max-w-prose">
          <p>{tool.longDescription}</p>
        </div>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold text-ink">Funciones principales</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {tool.features.map((f) => (
              <li key={f} className="rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink">
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Ventajas</h2>
            <ul className="mt-3 space-y-2">
              {tool.pros.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-inkmuted">
                  <span className="text-emerald-600">＋</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Desventajas</h2>
            <ul className="mt-3 space-y-2">
              {tool.cons.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-inkmuted">
                  <span className="text-amber-700">－</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink">¿Para quién es {tool.name}?</h2>
          <p className="mt-3 text-inkmuted">{tool.bestFor}</p>
        </section>

        <AdSlot />

        <FAQ items={faqs} />
      </article>

      {alternatives.length > 0 && (
        <section className="mx-auto mt-14 max-w-6xl px-5">
          <h2 className="font-display text-2xl font-semibold text-ink">Herramientas similares</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {alternatives.map((alt) => (
              <ToolCard key={alt.slug} tool={alt} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
