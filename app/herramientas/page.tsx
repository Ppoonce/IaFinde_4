import { Suspense } from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ToolsDirectory from '@/components/ToolsDirectory';

export const metadata: Metadata = {
  title: 'Todas las herramientas de IA',
  description:
    'Explora el directorio completo de herramientas de inteligencia artificial: busca por tarea, filtra por categoría y por precio.',
  alternates: { canonical: '/herramientas' },
};

export default function ToolsPage() {
  return (
    <div className="pb-20">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Herramientas' }]} />

      <div className="mx-auto max-w-6xl px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Todas las herramientas de IA
        </h1>
        <p className="mt-2 max-w-2xl text-inkmuted">
          Busca por lo que quieres hacer o filtra por categoría y precio para encontrar la herramienta adecuada.
        </p>

        <div className="mt-8">
          <Suspense fallback={<p className="text-inkmuted">Cargando…</p>}>
            <ToolsDirectory />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
