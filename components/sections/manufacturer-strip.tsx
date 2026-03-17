import Image from 'next/image';
import { manufacturerLogos } from '@/lib/site-data';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';

export function ManufacturerStrip() {
  return (
    <section id="fabricantes" className="relative z-10 -mt-8 bg-white pb-16 sm:-mt-10 lg:-mt-12">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--qts-accent)]">Fabricantes y aliados</p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] text-[var(--qts-ink)] sm:text-4xl">
              Marcas y soluciones que respaldan nuestra propuesta de valor
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--qts-muted)] sm:text-lg">
              En QTS conectamos a nuestros clientes con fabricantes y tecnologías reconocidas a nivel internacional,
              brindando acompañamiento técnico-comercial cercano para aplicaciones de alta exigencia.
            </p>

            <div className="mt-10 grid items-center gap-x-8 gap-y-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {manufacturerLogos.map((logo) => (
                <div key={logo.name} className="flex min-h-16 items-center justify-center">
                  <Image src={logo.src} alt={logo.name} width={170} height={52} className="h-9 w-auto opacity-95 md:h-10" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
