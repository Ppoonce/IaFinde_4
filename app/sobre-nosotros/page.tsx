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
          IAFinder es un directorio editorial independiente sobre herramientas de inteligencia artificial. Nuestro
          objetivo es ayudarte a encontrar rápido la herramienta adecuada para una tarea concreta, sin tener que
          probar diez aplicaciones distintas ni perder tiempo comparando webs de marketing.
        </p>
        <h2>Cómo elegimos qué incluir</h2>
        <p>
          Priorizamos herramientas de uso extendido que resuelven una necesidad real. Cada ficha se redacta a partir
          de la información pública disponible en el sitio oficial de cada herramienta y de pruebas propias del
          equipo editorial; cuando un dato concreto (precio, límite de un plan, disponibilidad de una función) no
          está confirmado, lo indicamos así en vez de inventarlo.
        </p>
        <h2>Nuestras valoraciones</h2>
        <p>
          Las puntuaciones y los rankings que publicamos reflejan la opinión editorial del equipo de IAFinder,
          basada en criterios como facilidad de uso, relación entre precio y funciones, y calidad del plan gratuito
          cuando existe. No son una encuesta a usuarios ni una medición de popularidad externa, y lo dejamos
          indicado en cada ranking.
        </p>
        <h2>Cómo nos financiamos</h2>
        <p>
          IAFinder se financia mediante publicidad (por ejemplo, Google AdSense) y, en algunos casos, enlaces de
          afiliado hacia herramientas de terceros: si contratas un plan a través de uno de esos enlaces, podemos
          recibir una comisión sin coste adicional para ti. Cuando un enlace es de afiliado lo señalamos de forma
          visible, y esa relación comercial nunca determina qué herramientas incluimos ni qué valoración les damos.
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
