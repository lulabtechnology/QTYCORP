import Image from 'next/image';
import { industries } from '@/lib/site-data';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';

export function IndustriesGrid({ dark = false }: { dark?: boolean }) {
  return (
    <section id="industrias" className={dark ? 'bg-[var(--qts-navy)] py-24 text-white' : 'bg-white py-24'}>
      <Container>
        <Reveal>
          <SectionHeading
            title="Soluciones para industrias donde la continuidad operativa es crítica"
            description="En Quality Techno Services apoyamos a empresas e infraestructuras estratégicas con soluciones industriales orientadas a confiabilidad, protección de activos, manejo de fluidos y soporte técnico-comercial para aplicaciones de alta exigencia."
            light={dark}
          />
        </Reveal>
        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={index * 0.05} className="h-full">
                <article
                  className={
                    dark
                      ? 'flex h-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[var(--qts-navy-soft)] text-white shadow-[0_18px_60px_rgba(5,12,24,0.14)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(5,12,24,0.22)]'
                      : 'flex h-full flex-col overflow-hidden rounded-[26px] border border-[var(--qts-line)] bg-white shadow-[0_18px_60px_rgba(5,12,24,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(5,12,24,0.14)]'
                  }
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image src={industry.src} alt={industry.title} fill className="object-cover transition duration-700 hover:scale-105" />
                  </div>
                  <div className="flex min-h-[120px] flex-1 items-center gap-4 p-5 sm:min-h-[132px]">
                    <div
                      className={
                        dark
                          ? 'inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-white'
                          : 'inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]'
                      }
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold leading-snug tracking-[-0.03em]">{industry.title}</h3>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
