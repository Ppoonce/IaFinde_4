import Link from 'next/link';
import HeroSearch from '@/components/HeroSearch';
import ToolCard from '@/components/ToolCard';
import AdSlot from '@/components/AdSlot';
import Reveal from '@/components/Reveal';
import { categories } from '@/data/categories';
import {
  getPopularTools,
  getNewTools,
  getTopRatedTools,
  getFreeTools,
  getToolsForAudience,
  getToolsByCategories,
} from '@/data/tools';
import { articles } from '@/data/articles';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './layout';

export default function HomePage() {
  const homeSections = [
    { emoji: '🔥', title: 'Herramientas populares', subtitle: 'Las mejor valoradas del directorio ahora mismo.', tools: getPopularTools(6), href: '/mejores-ias' },
    { emoji: '🆕', title: 'Nuevas en el directorio', subtitle: 'Incorporaciones recientes al catálogo.', tools: getNewTools(6), href: '/herramientas' },
    { emoji: '⭐', title: 'Mejor valoradas', subtitle: 'Según nuestra valoración editorial independiente.', tools: getTopRatedTools(6), href: '/mejores-ias' },
    { emoji: '🆓', title: 'Mejores gratuitas', subtitle: 'Con versión gratuita permanente, no solo prueba.', tools: getFreeTools(6), href: '/mejores-ias-gratis' },
    { emoji: '🎓', title: 'Para estudiantes', subtitle: 'Estudiar, repasar y organizar apuntes.', tools: getToolsForAudience('estudiante', 6), href: '/mejores-ias-para-estudiantes' },
    { emoji: '💼', title: 'Para negocios', subtitle: 'Marketing, productividad y automatización.', tools: getToolsByCategories(['marketing', 'productividad'], 6), href: '/mejores-ias-para-negocios' },
    { emoji: '🎨', title: 'Para creatividad', subtitle: 'Imagen, diseño y vídeo.', tools: getToolsByCategories(['diseno', 'imagen', 'video'], 6), href: '/categorias' },
  ].filter((s) => s.tools.length > 0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/herramientas?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              'radial-gradient(600px circle at 20% 0%, rgba(67,56,202,0.10), transparent 60%), radial-gradient(500px circle at 85% 15%, rgba(201,121,28,0.08), transparent 55%)',
          }}
        />
        <div className="mx-auto max-w-4xl px-5 pb-10 pt-16 text-center sm:pt-24">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            Encuentra la IA perfecta para cualquier tarea.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-inkmuted">
            Descubre, compara y aprende a utilizar las mejores herramientas de inteligencia artificial, organizadas por lo que realmente necesitas hacer.
          </p>

          <div className="mx-auto mt-8 max-w-2xl text-left">
            <HeroSearch />
          </div>
        </div>
      </section>

      <section aria-labelledby="categorias-populares" className="mx-auto max-w-6xl px-5 pb-16">
        <h2 id="categorias-populares" className="sr-only">
          Categorías populares
        </h2>
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categorias/${cat.slug}`}
              className="press-feedback rounded-full border border-line bg-surface px-4 py-2 text-sm text-inkmuted transition-colors hover:border-signal hover:text-signal"
            >
              {cat.shortLabel}
            </Link>
          ))}
        </div>
      </section>

      {homeSections.map((section, i) => (
        <Reveal key={section.title}>
          <section className="mx-auto max-w-6xl px-5 pb-16">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  <span aria-hidden="true">{section.emoji}</span> {section.title}
                </h2>
                <p className="mt-1 text-inkmuted">{section.subtitle}</p>
              </div>
              <Link href={section.href} className="hidden shrink-0 text-sm font-medium text-signal hover:underline sm:block">
                Ver todas
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>

            <Link href={section.href} className="mt-6 block text-center text-sm font-medium text-signal hover:underline sm:hidden">
              Ver todas
            </Link>

            {i === 1 && (
              <div className="mt-10">
                <AdSlot />
              </div>
            )}
          </section>
        </Reveal>
      ))}

      <Reveal>
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Últimas guías</h2>
              <p className="mt-1 text-inkmuted">Comparativas y guías prácticas para elegir bien.</p>
            </div>
            <Link href="/blog" className="hidden shrink-0 text-sm font-medium text-signal hover:underline sm:block">
              Ver todas
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {articles.slice(0, 4).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="lift-on-hover rounded-xl border border-line bg-surface p-5"
              >
                <p className="text-xs text-inkmuted">{article.publishedLabel}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{article.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-inkmuted">{article.metaDescription}</p>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-line bg-surface py-16">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="font-display text-2xl font-semibold text-ink">Cómo funciona IAFinder</h2>
            <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
              <div>
                <p className="font-display text-lg font-semibold text-ink">1. Busca</p>
                <p className="mt-1 text-sm text-inkmuted">Escribe lo que necesitas hacer, no el nombre de una herramienta.</p>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ink">2. Compara</p>
                <p className="mt-1 text-sm text-inkmuted">Revisa precio, funciones y opiniones editoriales antes de decidir.</p>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ink">3. Aprende</p>
                <p className="mt-1 text-sm text-inkmuted">Lee una guía práctica para sacarle partido desde el primer día.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
