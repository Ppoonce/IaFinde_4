import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { comparisons } from '@/data/comparisons';
import { getTool } from '@/data/tools';

export const metadata: Metadata = {
  title: 'Comparativas de herramientas de IA',
  description: 'Comparamos cara a cara herramientas de inteligencia artificial para ayudarte a elegir.',
  alternates: { canonical: '/comparar' },
};

export default function ComparisonsPage() {
  return (
    <div className="pb-20">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Comparativas' }]} />
      <div className="mx-auto max-w-6xl px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Comparativas</h1>
        <p className="mt-2 max-w-2xl text-inkmuted">Tablas cara a cara para decidir entre dos herramientas parecidas.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {comparisons.map((c) => {
            const a = getTool(c.toolA);
            const b = getTool(c.toolB);
            return (
              <Link
                key={c.slug}
                href={`/comparar/${c.slug}`}
                className="rounded-xl border border-line bg-surface p-5 hover:shadow-[0_2px_16px_rgba(21,23,28,0.06)]"
              >
                <h2 className="font-display text-lg font-semibold text-ink">
                  {a?.name} vs {b?.name}
                </h2>
                <p className="mt-2 text-sm text-inkmuted">{c.intro}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
