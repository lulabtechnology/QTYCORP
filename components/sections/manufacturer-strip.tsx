import Image from 'next/image';
import { manufacturerLogos } from '@/lib/site-data';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';

export function ManufacturerStrip() {
  return (
    <section id="fabricantes" className="relative z-10 -mt-8 bg-white pb-16 sm:-mt-10 lg:-mt-12">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--qts-accent)]">Fabricantes y aliados</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.03em] text-[var(--qts-ink)] sm:text-4xl">
              Marcas que respaldan nuestra propuesta técnica
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--qts-muted)] sm:text-lg">
              QTS conecta a sus clientes con fabricantes reconocidos y soluciones confiables para aplicaciones industriales de alta exigencia.
            </p>

            <div className="mx-auto mt-10 grid max-w-4xl items-center gap-5 sm:grid-cols-3">
              {manufacturerLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex min-h-24 items-center justify-center rounded-[24px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] px-6 py-5 shadow-[0_14px_40px_rgba(9,17,31,0.06)]"
                >
                  <Image src={logo.src} alt={logo.name} width={180} height={56} className="h-10 w-auto object-contain opacity-95" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
