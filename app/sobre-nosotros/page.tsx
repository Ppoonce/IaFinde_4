import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'Qué es IAFinder, cómo elegimos las herramientas y cómo nos financiamos.',
  alternates: { canonical: '/sobre-nosotros' },
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Sobre nosotros' }]} />
      <div className="prose-article mx-auto max-w-prose px-5 pt-6">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Sobre IAFinder</h1>
        <p className="mt-4">
          IAFinder es un directorio y centro de guías sobre herramientas de inteligencia artificial, pensado para
          ayudarte a encontrar rápido la herramienta adecuada para una tarea concreta, sin tener que probar diez
          aplicaciones distintas.
        </p>
        <h2>Cómo elegimos qué incluir</h2>
        <p>
          Priorizamos herramientas que resuelven una necesidad real y que tienen uso extendido. Este sitio está en
          construcción y, mientras crece, parte del contenido está marcado explícitamente como demostración: lo
          señalamos con claridad en cada página para que sepas qué información ya ha sido revisada a fondo.
        </p>
        <h2>Cómo nos financiamos</h2>
        <p>
          El proyecto está preparado para financiarse en el futuro con publicidad (por ejemplo, Google AdSense) y,
          más adelante, con enlaces de afiliado a herramientas SaaS. Cuando eso ocurra, lo indicaremos de forma
          visible y nunca dejaremos que un enlace patrocinado se confunda con una recomendación editorial.
        </p>
        <h2>Contacto</h2>
        <p>
          Si quieres proponer una herramienta, corregir un dato o simplemente escribirnos, visita la página de{' '}
          <a href="/contacto" className="text-signal hover:underline">
            contacto
          </a>
          .
        </p>
      </div>
    </div>
  );
}
