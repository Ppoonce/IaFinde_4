import Breadcrumbs from './Breadcrumbs';
import ToolCard from './ToolCard';
import FAQ from './FAQ';
import AdSlot from './AdSlot';
import { Ranking } from '@/data/rankings';
import { SITE_URL } from '@/app/layout';

export default function RankingPage({ ranking, path }: { ranking: Ranking; path: string }) {
  const rankedTools = ranking.getTools();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: ranking.title,
    itemListElement: rankedTools.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/herramientas/${t.slug}`,
      name: t.name,
    })),
  };

  return (
    <div className="pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Mejores IA', href: '/mejores-ias' }, { label: ranking.title }]} />

      <div className="mx-auto max-w-6xl px-5 pt-6">
        <p className="inline-block rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-inkmuted">
          Ranking editorial de IAFinder, elaborado con criterios propios
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{ranking.title}</h1>
        <p className="mt-3 max-w-2xl text-inkmuted">{ranking.intro}</p>

        {rankedTools.length > 0 ? (
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rankedTools.map((tool, i) => (
              <li key={tool.slug} className="relative">
                <span className="absolute -left-2 -top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <ToolCard tool={tool} />
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-8 text-inkmuted">Estamos preparando este ranking. Vuelve pronto.</p>
        )}

        <AdSlot />

        <FAQ items={ranking.faqs} />
      </div>
    </div>
  );
}
