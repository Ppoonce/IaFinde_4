import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Cómo ponerte en contacto con el equipo de IAFinder.',
  alternates: { canonical: '/contacto' },
};

export default function ContactPage() {
  return (
    <div className="pb-20">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]} />
      <div className="mx-auto max-w-2xl px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Contacto</h1>
        <p className="mt-4 text-inkmuted">
          Escríbenos si quieres proponer una herramienta para el directorio, avisarnos de un dato desactualizado o
          plantear una colaboración.
        </p>

        <dl className="mt-8 space-y-4 rounded-xl border border-line bg-surface p-6">
          <div>
            <dt className="text-sm font-medium text-ink">Correo electrónico</dt>
            <dd className="text-sm text-inkmuted">hola@iafinder.example (dirección de demostración)</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-ink">Tiempo de respuesta habitual</dt>
            <dd className="text-sm text-inkmuted">De 2 a 5 días laborables</dd>
          </div>
        </dl>

        <p className="mt-6 text-xs text-inkmuted">
          Nota: esta dirección de correo es un marcador de posición del proyecto en su fase de demostración. Sustitúyela
          por una dirección real antes de publicar el sitio.
        </p>
      </div>
    </div>
  );
}
