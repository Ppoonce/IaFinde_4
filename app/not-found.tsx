import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-6xl font-semibold text-signal">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold text-ink">No hemos encontrado esta página</h1>
      <p className="mt-2 text-inkmuted">
        Puede que el enlace esté roto o que la página se haya movido. Prueba a buscar la herramienta que necesitas.
      </p>
      <Link
        href="/herramientas"
        className="mt-6 rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-signal"
      >
        Ir al directorio de herramientas
      </Link>
    </div>
  );
}
