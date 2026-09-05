import type { Metadata } from 'next';
import '@fontsource/fraunces/400.css';
import '@fontsource/fraunces/500.css';
import '@fontsource/fraunces/600.css';
import '@fontsource/fraunces/700.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/600.css';
import '@fontsource/work-sans/700.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const SITE_NAME = 'IAFinder';
export const SITE_URL = 'https://ppoonce.github.io/IaFinde_4';
export const SITE_DESCRIPTION =
  'Encuentra la IA adecuada para lo que necesitas: directorio y guías sobre herramientas de inteligencia artificial para vídeo, imagen, escritura, estudio y trabajo.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Encuentra la IA adecuada para lo que necesitas`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} — Encuentra la IA adecuada para lo que necesitas`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Encuentra la IA adecuada para lo que necesitas`,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-body bg-paper text-ink antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-signal focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Ir al contenido principal
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
