import Image from 'next/image';
import Link from 'next/link';
import { footerLinks, site } from '@/lib/site-data';
import { Container } from '@/components/shared/container';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--qts-navy)] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent" />
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <div className="flex max-w-xl flex-col items-center text-center">
              <Image
                src="/images/brand/logo-qts-footer.png"
                alt="Quality Techno Services"
                width={420}
                height={440}
                className="h-24 w-auto sm:h-28"
              />
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/72">
                {site.name} · Soluciones industriales, representación técnica y soporte especializado para activos y operaciones críticas.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/58">Navegación</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/74">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/58">Contacto</h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/74">
              <p>
                Correo:{' '}
                <a className="text-white transition hover:text-[var(--qts-accent)]" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>
                Teléfonos:{' '}
                <a className="text-white transition hover:text-[var(--qts-accent)]" href={`tel:${site.phonePanama}`}>
                  {site.phonePanama}
                </a>{' '}
                ·{' '}
                <a className="text-white transition hover:text-[var(--qts-accent)]" href={`tel:${site.phoneUsa}`}>
                  {site.phoneUsa}
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a className="text-white transition hover:text-[var(--qts-accent)]" href={`https://wa.me/${site.whatsapp.replace(/[^\d]/g, '')}`}>
                  {site.whatsapp}
                </a>
              </p>
              <p>Ubicación: Panamá · USA · Venezuela / cobertura regional.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/54 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4">
            {footerLinks.quick.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
