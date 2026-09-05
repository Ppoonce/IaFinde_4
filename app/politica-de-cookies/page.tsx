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
        <p className="mt-4 text-sm text-inkmuted">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}.</p>

        <h2>Situación actual</h2>
        <p>
          En su configuración actual, IAFinder no instala cookies propias de analítica ni de publicidad. Esta página
          se actualizará en cuanto se active Google AdSense o cualquier herramienta de analítica, detallando el
          nombre, la finalidad y la duración de cada cookie utilizada.
        </p>
        <h2>Qué son las cookies</h2>
        <p>
          Las cookies son pequeños archivos que un sitio web guarda en tu navegador para recordar información entre
          visitas, como tus preferencias o, en el caso de la publicidad, tus intereses generales de navegación.
        </p>
        <h2>Cookies de publicidad de terceros</h2>
        <p>
          Cuando este sitio muestre anuncios (por ejemplo, a través de Google AdSense), el proveedor del anuncio
          puede instalar sus propias cookies para personalizar los anuncios mostrados. Esas cookies las gestiona el
          proveedor de publicidad conforme a su propia política, no IAFinder directamente.
        </p>
        <h2>Cómo gestionarlas</h2>
        <p>
          Puedes bloquear o eliminar las cookies desde la configuración de tu navegador en cualquier momento. Ten en
          cuenta que bloquear ciertas cookies puede afectar al funcionamiento de algunas partes del sitio en el
          futuro.
        </p>
        <h2>Contacto</h2>
        <p>
          Para cualquier consulta sobre esta política, visita la página de{' '}
          <a href="/contacto" className="text-signal hover:underline">
            contacto
          </a>
          .
        </p>
      </div>
    </div>
  );
}
