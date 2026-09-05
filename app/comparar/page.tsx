import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComparatorPicker from '@/components/ComparatorPicker';
import { comparisons } from '@/data/comparisons';
import { getTool } from '@/data/tools';

export const metadata: Metadata = {
  title: 'Comparativas de herramientas de IA',
  description: 'Compara herramientas de inteligencia artificial cara a cara para ayudarte a elegir.',
  alternates: { canonical: '/comparar' },
};

export default function ComparisonsPage() {
  return (
    <div className="pb-20">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Comparativas' }]} />
      <div className="mx-auto max-w-6xl px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Comparativas</h1>
        <p className="mt-2 max-w-2xl text-inkmuted">
          Elige tú mismo qué herramientas comparar, o consulta una de nuestras comparativas ya preparadas.
        </p>

        <section className="mt-8">
          <h2 className="font-display text-xl font-semibold text-ink">Comparador rápido</h2>
          <div className="mt-4">
            <ComparatorPicker />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-ink">Comparativas destacadas</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {comparisons.map((c) => {
              const a = getTool(c.toolA);
              const b = getTool(c.toolB);
              return (
                <Link
                  key={c.slug}
                  href={`/comparar/${c.slug}`}
                  className="lift-on-hover rounded-xl border border-line bg-surface p-5"
                >
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {a?.name} vs {b?.name}
                  </h3>
                  <p className="mt-2 text-sm text-inkmuted">{c.intro}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
