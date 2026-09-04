import Link from 'next/link';
import { categories } from '@/data/categories';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            IA<span className="text-signal">Finder</span>
          </p>
          <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-inkmuted">
            Directorio y guías independientes sobre herramientas de inteligencia artificial, en español.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Categorías</p>
          <ul className="mt-3 space-y-2">
            {categories.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <Link href={`/categorias/${cat.slug}`} className="text-sm text-inkmuted hover:text-signal">
                  {cat.shortLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Explorar</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/herramientas" className="text-sm text-inkmuted hover:text-signal">Todas las herramientas</Link></li>
            <li><Link href="/blog" className="text-sm text-inkmuted hover:text-signal">Guías</Link></li>
            <li><Link href="/comparar" className="text-sm text-inkmuted hover:text-signal">Comparativas</Link></li>
            <li><Link href="/sobre-nosotros" className="text-sm text-inkmuted hover:text-signal">Sobre nosotros</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Legal</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/politica-de-privacidad" className="text-sm text-inkmuted hover:text-signal">Política de privacidad</Link></li>
            <li><Link href="/terminos" className="text-sm text-inkmuted hover:text-signal">Términos de uso</Link></li>
            <li><Link href="/politica-de-cookies" className="text-sm text-inkmuted hover:text-signal">Política de cookies</Link></li>
            <li><Link href="/contacto" className="text-sm text-inkmuted hover:text-signal">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-5 py-6 text-center text-xs text-inkmuted">
        © {new Date().getFullYear()} IAFinder. Este sitio incluye contenido de demostración mientras el proyecto crece.
      </div>
    </footer>
  );
}
