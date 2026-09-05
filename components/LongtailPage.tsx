import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import ToolCard from './ToolCard';
import FAQ from './FAQ';
import AdSlot from './AdSlot';
import { LongtailPage as LongtailPageType } from '@/data/longtail';
import { getCategory } from '@/data/categories';
import { getToolsByCategory } from '@/data/tools';

export default function LongtailPage({ page, path }: { page: LongtailPageType; path: string }) {
  const category = getCategory(page.categorySlug);
  const relatedTools = getToolsByCategory(page.categorySlug).slice(0, 6);

  return (
    <div className="pb-20">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: page.h1 }]} />

      <div className="mx-auto max-w-4xl px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{page.h1}</h1>
        <p className="mt-3 text-inkmuted">{page.intro}</p>

        <div className="prose-article mt-8 max-w-prose">
          {page.body.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {category && (
          <p className="mt-6 text-sm text-inkmuted">
            Consulta también la categoría completa:{' '}
            <Link href={`/categorias/${category.slug}`} className="text-signal hover:underline">
              {category.name}
            </Link>
          </p>
        )}

        <AdSlot />

        <FAQ items={page.faqs} />
      </div>

      {relatedTools.length > 0 && (
        <section className="mx-auto mt-14 max-w-6xl px-5">
          <h2 className="font-display text-2xl font-semibold text-ink">Herramientas recomendadas</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
