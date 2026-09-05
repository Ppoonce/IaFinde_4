import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticle } from '@/data/articles';
import { getTool } from '@/data/tools';
import Breadcrumbs from '@/components/Breadcrumbs';
import ToolCard from '@/components/ToolCard';
import FAQ from '@/components/FAQ';
import AdSlot from '@/components/AdSlot';
import { SITE_URL } from '@/app/layout';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const relatedTools = article.relatedTools.map((s) => getTool(s)).filter(Boolean);
  const related = article.relatedArticles.map((s) => getArticle(s)).filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    url: `${SITE_URL}/blog/${article.slug}`,
    author: { '@type': 'Organization', name: 'IAFinder' },
  };

  return (
    <div className="pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Guías', href: '/blog' }, { label: article.title }]} />

      <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-6 lg:grid-cols-[1fr_260px]">
        <article className="min-w-0">
          <p className="text-xs text-inkmuted">{article.publishedLabel}</p>
          <h1 className="mt-1 font-display text-3xl font-semibold text-ink sm:text-4xl">{article.title}</h1>

          <div className="mt-5 rounded-xl border border-signal/20 bg-signal/5 p-4">
            <p className="text-sm font-medium text-signaldark">Respuesta rápida</p>
            <p className="mt-1 text-sm leading-relaxed text-ink">{article.quickAnswer}</p>
          </div>

          <div className="prose-article mt-8 max-w-prose">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>

          <AdSlot />

          <FAQ items={article.faqs} />

          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="font-display text-xl font-semibold text-ink">Artículos relacionados</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {related.map((a) => (
                  <Link
                    key={a!.slug}
                    href={`/blog/${a!.slug}`}
                    className="lift-on-hover rounded-xl border border-line bg-surface p-5"
                  >
                    <h3 className="font-display text-lg font-semibold text-ink">{a!.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-xl border border-line bg-surface p-5">
              <p className="text-sm font-medium text-ink">Tabla de contenidos</p>
              <ul className="mt-3 space-y-2">
                {article.toc.map((item) => (
                  <li key={item} className="text-sm text-inkmuted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {relatedTools.length > 0 && (
              <div className="rounded-xl border border-line bg-surface p-5">
                <p className="text-sm font-medium text-ink">Herramientas mencionadas</p>
                <ul className="mt-3 space-y-3">
                  {relatedTools.map((t) => (
                    <li key={t!.slug}>
                      <Link href={`/herramientas/${t!.slug}`} className="text-sm text-signal hover:underline">
                        {t!.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>

      {relatedTools.length > 0 && (
        <section className="mx-auto mt-14 max-w-6xl px-5 lg:hidden">
          <h2 className="font-display text-2xl font-semibold text-ink">Herramientas mencionadas</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {relatedTools.map((t) => (
              <ToolCard key={t!.slug} tool={t!} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
