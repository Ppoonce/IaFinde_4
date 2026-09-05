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
        <p className="mt-4 text-sm text-inkmuted">Plantilla de demostración, pendiente de revisión legal.</p>

        <h2>Naturaleza del contenido</h2>
        <p>
          La información sobre herramientas de terceros se ofrece con fines informativos y puede quedar desactualizada,
          ya que las herramientas descritas cambian sus precios y funciones con frecuencia. Antes de contratar un
          plan de pago, verifica los datos actuales directamente en la web oficial de la herramienta.
        </p>
        <h2>Uso permitido</h2>
        <p>
          Puedes consultar y compartir el contenido de este sitio citando la fuente. No está permitido copiar el
          contenido de forma masiva para republicarlo en otro sitio sin autorización.
        </p>
        <h2>Enlaces de afiliado</h2>
        <p>
          Algunos enlaces hacia herramientas externas pueden ser, en el futuro, enlaces de afiliado: si contratas un
          plan a través de ellos, es posible que recibamos una comisión sin coste adicional para ti. Esto no influye
          en el contenido editorial ni en las valoraciones publicadas.
        </p>
        <h2>Limitación de responsabilidad</h2>
        <p>
          No garantizamos la disponibilidad continua del sitio ni la exactitud absoluta de la información sobre
          terceros. El uso de las herramientas enlazadas está sujeto a los términos propios de cada proveedor.
        </p>
        <p className="mt-8 rounded-lg border border-dashed border-line bg-amber-50/60 p-4 text-sm text-amber-800">
          Aviso: este texto es una plantilla genérica de demostración y no constituye asesoramiento legal.
        </p>
      </div>
    </div>
  );
}
