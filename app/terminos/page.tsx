import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Términos de uso',
  description: 'Condiciones de uso del sitio IAFinder.',
  alternates: { canonical: '/terminos' },
};

export default function TermsPage() {
  return (
    <div className="pb-20">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Términos de uso' }]} />
      <div className="prose-article mx-auto max-w-prose px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Términos de uso</h1>
        <p className="mt-4 text-sm text-inkmuted">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}.</p>

        <h2>Naturaleza del contenido</h2>
        <p>
          La información sobre herramientas de terceros se ofrece con fines informativos y puede quedar
          desactualizada, ya que las herramientas descritas cambian sus precios y funciones con frecuencia. Antes de
          contratar un plan de pago, verifica los datos actuales directamente en la web oficial de la herramienta.
        </p>
        <h2>Uso permitido</h2>
        <p>
          Puedes consultar y compartir el contenido de este sitio citando la fuente. No está permitido copiar el
          contenido de forma masiva para republicarlo en otro sitio sin autorización.
        </p>
        <h2>Enlaces de afiliado</h2>
        <p>
          Algunos enlaces hacia herramientas externas en este sitio son, o pueden llegar a ser, enlaces de afiliado:
          si contratas un plan a través de ellos, IAFinder puede recibir una comisión sin coste adicional para ti.
          Esto no influye en el contenido editorial ni en las valoraciones publicadas.
        </p>
        <h2>Limitación de responsabilidad</h2>
        <p>
          No garantizamos la disponibilidad continua del sitio ni la exactitud absoluta de la información sobre
          terceros. El uso de las herramientas enlazadas está sujeto a los términos propios de cada proveedor.
        </p>
        <h2>Contacto</h2>
        <p>
          Para cualquier consulta sobre estos términos, visita la página de{' '}
          <a href="/contacto" className="text-signal hover:underline">
            contacto
          </a>
          .
        </p>
      </div>
    </div>
  );
}
