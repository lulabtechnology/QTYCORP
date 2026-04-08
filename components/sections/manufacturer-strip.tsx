import Image from 'next/image';
import { manufacturerLogos } from '@/lib/site-data';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';

export function ManufacturerStrip() {
  return (
    <section id="fabricantes" className="relative bg-white pt-20 pb-20 sm:pt-24 sm:pb-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-[var(--qts-ink)] sm:text-4xl">
              Marcas que respaldan nuestra propuesta técnica
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--qts-muted)] sm:text-lg">
              QTS conecta a sus clientes con fabricantes reconocidos y soluciones confiables para aplicaciones industriales de alta exigencia.
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {manufacturerLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="group flex min-h-[150px] items-center justify-center rounded-[28px] border border-[rgba(31,44,70,0.08)] bg-[linear-gradient(180deg,#fbfcfe_0%,#f1f5fa_100%)] px-6 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="relative flex h-[86px] w-full items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="(max-width: 639px) 80vw, (max-width: 1279px) 40vw, 240px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
