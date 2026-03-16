import Image from 'next/image';
import { manufacturerLogos } from '@/lib/site-data';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';

export function ManufacturerStrip() {
  return (
    <section id="fabricantes" className="relative z-10 -mt-14 pb-6 sm:-mt-18">
      <Container>
        <Reveal>
          <div className="rounded-[28px] border border-white/10 bg-[rgba(15,24,43,0.88)] px-6 py-6 text-white shadow-[0_24px_70px_rgba(5,12,24,0.28)] backdrop-blur-xl sm:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">Fabricantes y aliados</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">Marcas y soluciones que respaldan nuestra propuesta de valor</h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/68">
                  En QTS conectamos a nuestros clientes con fabricantes y tecnologías reconocidas a nivel internacional, brindando acompañamiento técnico-comercial cercano para aplicaciones de alta exigencia.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {manufacturerLogos.map((logo) => (
                  <div key={logo.name} className="flex min-h-22 items-center justify-center rounded-[22px] border border-white/12 bg-white/7 px-5 py-4 transition hover:border-white/20 hover:bg-white/10">
                    <Image src={logo.src} alt={logo.name} width={160} height={44} className="h-7 w-auto opacity-95" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
