import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Cómo trata IAFinder los datos de las personas que visitan el sitio.',
  alternates: { canonical: '/politica-de-privacidad' },
};

export default function PrivacyPage() {
  return (
    <div className="pb-20">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Política de privacidad' }]} />
      <div className="prose-article mx-auto max-w-prose px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Política de privacidad</h1>
        <p className="mt-4 text-sm text-inkmuted">Última actualización: plantilla de demostración, pendiente de revisión legal.</p>

        <h2>Qué información recogemos</h2>
        <p>
          Actualmente este sitio no recoge datos personales a través de formularios. Cuando se active publicidad
          (por ejemplo, Google AdSense) o analítica de tráfico, esta sección se actualizará para explicar qué
          cookies o identificadores se usan y con qué finalidad.
        </p>
        <h2>Publicidad</h2>
        <p>
          Si en el futuro se muestran anuncios de terceros, esos proveedores pueden usar cookies para mostrar
          anuncios relevantes según tus visitas a este y otros sitios. Podrás gestionar tus preferencias desde la
          configuración de cookies del navegador o, cuando esté disponible, desde nuestro panel de preferencias.
        </p>
        <h2>Enlaces a terceros</h2>
        <p>
          Este sitio enlaza a páginas de herramientas externas. No somos responsables de las prácticas de privacidad
          de esos sitios; te recomendamos revisar su propia política antes de facilitarles datos personales.
        </p>
        <h2>Contacto</h2>
        <p>
          Para cualquier consulta sobre esta política, visita la página de{' '}
          <a href="/contacto" className="text-signal hover:underline">
            contacto
          </a>
          .
        </p>
        <p className="mt-8 rounded-lg border border-dashed border-line bg-amber-50/60 p-4 text-sm text-amber-800">
          Aviso: este texto es una plantilla genérica de demostración y no constituye asesoramiento legal. Antes de
          publicar el sitio, revísalo con un profesional legal para adaptarlo a tu jurisdicción y a las herramientas
          concretas que utilices (por ejemplo, tu proveedor de analítica o de publicidad).
        </p>
      </div>
    </div>
  );
}
