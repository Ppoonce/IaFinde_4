import Link from 'next/link';

const navLinks = [
  { href: '/herramientas', label: 'Herramientas' },
  { href: '/categorias', label: 'Categorías' },
  { href: '/mejores-ias', label: 'Mejores IA' },
  { href: '/blog', label: 'Guías' },
  { href: '/comparar', label: 'Comparativas' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-ink">
          IA<span className="text-signal">Finder</span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-inkmuted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/herramientas"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-signal"
        >
          Buscar herramienta
        </Link>
      </div>
      <nav aria-label="Navegación móvil" className="flex gap-5 overflow-x-auto border-t border-line px-5 py-2 md:hidden">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap text-sm text-inkmuted">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
