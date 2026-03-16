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
            eyebrow="Industrias atendidas"
            title="Soluciones para industrias donde la continuidad operativa es crítica"
            description="En Quality Techno Services apoyamos a empresas e infraestructuras estratégicas con soluciones industriales orientadas a confiabilidad, protección de activos, manejo de fluidos y soporte técnico-comercial para aplicaciones de alta exigencia."
            light={dark}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={index * 0.05}>
                <article className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[var(--qts-navy-soft)] text-white shadow-[0_18px_60px_rgba(5,12,24,0.14)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(5,12,24,0.22)]">
                  <div className="relative h-68">
                    <Image src={industry.src} alt={industry.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,20,37,0.18)_0%,rgba(12,20,37,0.46)_45%,rgba(12,20,37,0.92)_100%)]" />
                  </div>
                  <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-end p-6">
                    <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl border border-white/12 bg-white/10 backdrop-blur-sm">
                      <Icon className="size-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">{industry.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">{industry.description}</p>
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
