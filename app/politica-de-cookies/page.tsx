import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Política de cookies',
  description: 'Qué cookies usa o usará IAFinder y cómo gestionarlas.',
  alternates: { canonical: '/politica-de-cookies' },
};

export default function CookiesPage() {
  return (
    <div className="pb-20">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Política de cookies' }]} />
      <div className="prose-article mx-auto max-w-prose px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Política de cookies</h1>
        <p className="mt-4 text-sm text-inkmuted">Plantilla de demostración, pendiente de revisión legal.</p>

        <h2>Situación actual</h2>
        <p>
          En su fase actual, este sitio no instala cookies de analítica ni de publicidad. Esta página se actualizará
          en cuanto se active Google AdSense o cualquier herramienta de analítica, detallando el nombre, la finalidad
          y la duración de cada cookie.
        </p>
        <h2>Qué son las cookies</h2>
        <p>
          Las cookies son pequeños archivos que un sitio web guarda en tu navegador para recordar información entre
          visitas, como tus preferencias o, en el caso de la publicidad, tus intereses generales de navegación.
        </p>
        <h2>Cómo gestionarlas</h2>
        <p>
          Puedes bloquear o eliminar las cookies desde la configuración de tu navegador en cualquier momento. Ten en
          cuenta que bloquear ciertas cookies puede afectar al funcionamiento de algunas partes del sitio en el
          futuro.
        </p>
        <p className="mt-8 rounded-lg border border-dashed border-line bg-amber-50/60 p-4 text-sm text-amber-800">
          Aviso: este texto es una plantilla genérica de demostración y no constituye asesoramiento legal.
        </p>
      </div>
    </div>
  );
}
