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
        <p className="mt-4 text-sm text-inkmuted">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}.</p>

        <h2>Qué información recogemos</h2>
        <p>
          IAFinder no requiere registro para navegar por el sitio y no recoge datos personales a través de
          formularios propios. Si en el futuro se activa publicidad (por ejemplo, Google AdSense) o una herramienta
          de analítica de tráfico, esta política se actualizará para detallar exactamente qué cookies o
          identificadores se usan y con qué finalidad.
        </p>
        <h2>Publicidad</h2>
        <p>
          Si este sitio muestra anuncios de terceros, esos proveedores pueden usar cookies u otras tecnologías
          similares para mostrar anuncios relevantes según tu actividad en este y otros sitios web. Puedes gestionar
          tus preferencias de publicidad desde la configuración de tu navegador o, cuando esté disponible, desde el
          panel de preferencias de cookies del sitio.
        </p>
        <h2>Enlaces de afiliado</h2>
        <p>
          Algunos enlaces hacia herramientas de terceros en este sitio pueden ser enlaces de afiliado: si contratas
          un plan a través de ellos, IAFinder puede recibir una comisión, sin coste adicional para ti. Esta relación
          comercial no influye en el contenido editorial ni en las valoraciones publicadas, y no implica que
          compartamos tus datos personales con esos terceros más allá de lo habitual en cualquier redirección web.
        </p>
        <h2>Enlaces a sitios externos</h2>
        <p>
          Este sitio enlaza a páginas de herramientas externas. No somos responsables de las prácticas de privacidad
          de esos sitios; te recomendamos revisar su propia política antes de facilitarles datos personales.
        </p>
        <h2>Tus derechos</h2>
        <p>
          Si en algún momento tratamos datos personales tuyos (por ejemplo, a través de un formulario de contacto),
          puedes solicitarnos acceder a ellos, corregirlos o eliminarlos escribiendo a la dirección indicada en la
          página de contacto.
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
