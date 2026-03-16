'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { assets } from '@/lib/asset-routes';
import { navLinks } from '@/lib/site-data';
import { cn } from '@/lib/utils';
import { ButtonLink } from '@/components/shared/button-link';
import { Container } from '@/components/shared/container';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const solid = scrolled || !isHome || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-4">
        <div
          className={cn(
            'rounded-full border px-4 transition-all duration-300 md:px-5',
            solid
              ? 'border-[var(--qts-line)] bg-[rgba(245,244,241,0.9)] shadow-[0_16px_40px_rgba(9,17,31,0.14)] backdrop-blur-xl'
              : 'border-white/10 bg-white/5 backdrop-blur-md',
          )}
        >
          <div className="flex h-17 items-center gap-4">
            <Link href="/" className="relative flex shrink-0 items-center">
              <Image
                src={solid ? assets.brand.logoDark : assets.brand.logoLight}
                alt="Quality Techno Services"
                width={170}
                height={44}
                priority
                className="h-9 w-auto"
              />
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
              {navLinks.map((item) => {
                const active = item.href !== '/soluciones' && pathname === item.href;
                if ('children' in item) {
                  return (
                    <div key={item.label} className="group relative">
                      <button
                        className={cn(
                          'inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                          solid ? 'text-[var(--qts-ink)] hover:bg-[var(--qts-ink-soft)]' : 'text-white/82 hover:bg-white/10',
                        )}
                      >
                        {item.label}
                        <ChevronDown className="size-4" />
                      </button>
                      <div className="pointer-events-none absolute left-0 top-full w-60 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                        <div className="rounded-[24px] border border-[var(--qts-line)] bg-white p-2 shadow-[0_20px_50px_rgba(12,20,36,0.12)]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex rounded-2xl px-4 py-3 text-sm text-[var(--qts-ink)] transition hover:bg-[var(--qts-ink-soft)] hover:text-[var(--qts-accent)]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      solid ? 'text-[var(--qts-ink)] hover:bg-[var(--qts-ink-soft)]' : 'text-white/82 hover:bg-white/10',
                      active && (solid ? 'bg-[var(--qts-ink-soft)] text-[var(--qts-accent)]' : 'bg-white/10 text-white'),
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="ml-auto hidden lg:block">
              <ButtonLink href="/contacto">Asesoría Técnica</ButtonLink>
            </div>

            <button
              type="button"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen((value) => !value)}
              className={cn(
                'ml-auto inline-flex size-11 items-center justify-center rounded-full border lg:hidden',
                solid ? 'border-[var(--qts-line)] bg-white text-[var(--qts-ink)]' : 'border-white/16 bg-white/8 text-white',
              )}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="overflow-hidden lg:hidden"
              >
                <div className="space-y-1 border-t border-[var(--qts-line)] py-4">
                  {navLinks.map((item) => (
                    <div key={item.href}>
                      {'children' in item ? (
                        <div className="rounded-[24px] bg-[var(--qts-ink-soft)] p-2">
                          <div className="px-3 py-2 text-sm font-semibold text-[var(--qts-muted)]">{item.label}</div>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-2xl px-3 py-3 text-sm font-medium text-[var(--qts-ink)] transition hover:bg-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block rounded-2xl px-3 py-3 text-sm font-medium text-[var(--qts-ink)] transition hover:bg-[var(--qts-ink-soft)]"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="pt-3">
                    <ButtonLink href="/contacto" className="w-full justify-center">
                      Asesoría Técnica
                    </ButtonLink>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
}
