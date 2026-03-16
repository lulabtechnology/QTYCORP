import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { assets } from '@/lib/asset-routes';
import { SiteShell } from '@/components/layout/site-shell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://qualitytechnoservices.com'),
  title: {
    default: 'Quality Techno Services | Soluciones industriales premium',
    template: '%s | Quality Techno Services',
  },
  description:
    'Web corporativa de Quality Techno Services: soluciones industriales, representación técnica, servicios especializados y respaldo para activos y procesos críticos.',
  openGraph: {
    title: 'Quality Techno Services',
    description:
      'Soluciones industriales, representación técnica y soporte especializado para operaciones y activos críticos.',
    images: [assets.brand.ogCover],
    locale: 'es_PA',
    type: 'website',
  },
  icons: {
    icon: assets.brand.favicon,
    shortcut: assets.brand.favicon,
    apple: assets.brand.favicon,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
