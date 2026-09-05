import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { comparisons, getComparison } from '@/data/comparisons';
import { getTool } from '@/data/tools';
import Breadcrumbs from '@/components/Breadcrumbs';
import PriceBadge from '@/components/PriceBadge';
import ToolLogo from '@/components/ToolLogo';
import AdSlot from '@/components/AdSlot';

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const comparison = getComparison(params.slug);
  if (!comparison) return {};
  return {
    title: comparison.title,
    description: comparison.intro,
    alternates: { canonical: `/comparar/${comparison.slug}` },
  };
}

export default function ComparisonPage({ params }: { params: { slug: string } }) {
  const comparison = getComparison(params.slug);
  if (!comparison) notFound();

  const toolA = getTool(comparison.toolA);
  const toolB = getTool(comparison.toolB);
  if (!toolA || !toolB) notFound();

  return (
    <div className="pb-20">
      <Breadcrumbs
        items={[
          { label: 'Inicio', href: '/' },
          { label: 'Comparativas', href: '/comparar' },
          { label: comparison.title },
        ]}
      />

      <div className="mx-auto max-w-4xl px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{comparison.title}</h1>
        <p className="mt-3 text-inkmuted">{comparison.intro}</p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {[toolA, toolB].map((tool) => (
            <div key={tool.slug} className="rounded-xl border border-line bg-surface p-4 text-center">
              <div className="mx-auto">
                <ToolLogo tool={tool} size={48} rounded="rounded-lg" />
              </div>
              <p className="mt-2 font-display font-semibold text-ink">{tool.name}</p>
              <div className="mt-1 flex justify-center">
                <PriceBadge tier={tool.priceTier} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line bg-surface text-left">
                <th className="p-3 font-medium text-inkmuted">Aspecto</th>
                <th className="p-3 font-medium text-ink">{toolA.name}</th>
                <th className="p-3 font-medium text-ink">{toolB.name}</th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0">
                  <td className="p-3 text-inkmuted">{row.label}</td>
                  <td className="p-3 text-ink">{row.a}</td>
                  <td className="p-3 text-ink">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSlot />

        <section className="mt-4">
          <h2 className="font-display text-xl font-semibold text-ink">Veredicto</h2>
          <p className="mt-3 text-inkmuted">{comparison.verdict}</p>
        </section>
      </div>
    </div>
  );
}
