import Image from 'next/image';
import Link from 'next/link';
import { footerLinks, site } from '@/lib/site-data';
import { Container } from '@/components/shared/container';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--qts-line)] bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] text-[var(--qts-ink)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(244,122,32,0.35)] to-transparent" />
      <Container className="py-16 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <div className="flex max-w-xl flex-col items-center text-center">
              <Image
                src="/images/brand/logo-qts-brand.png"
                alt="Quality Techno Services"
                width={520}
                height={550}
                className="mx-auto h-auto w-[230px] max-w-full drop-shadow-[0_10px_24px_rgba(15,23,42,0.08)] sm:w-[255px] md:w-[275px]"
              />
              <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--qts-muted)]">
                {site.name} · Soluciones industriales, representación técnica y soporte especializado para activos y operaciones críticas.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--qts-muted)]">Navegación</h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--qts-muted)]">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[var(--qts-accent)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--qts-muted)]">Contacto</h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--qts-muted)]">
              <p>
                Correo:{' '}
                <a className="text-[var(--qts-ink)] transition hover:text-[var(--qts-accent)]" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>
                Teléfonos:{' '}
                <a className="text-[var(--qts-ink)] transition hover:text-[var(--qts-accent)]" href={`tel:${site.phonePanama}`}>
                  {site.phonePanama}
                </a>{' '}
                ·{' '}
                <a className="text-[var(--qts-ink)] transition hover:text-[var(--qts-accent)]" href={`tel:${site.phoneUsa}`}>
                  {site.phoneUsa}
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a className="text-[var(--qts-ink)] transition hover:text-[var(--qts-accent)]" href={`https://wa.me/${site.whatsapp.replace(/[^\d]/g, '')}`}>
                  {site.whatsapp}
                </a>
              </p>
              <p>Ubicación: Panamá · USA · Venezuela / cobertura regional.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--qts-line)] pt-6 text-xs text-[var(--qts-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4">
            {footerLinks.quick.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-[var(--qts-accent)]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
