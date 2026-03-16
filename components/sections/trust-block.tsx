import Image from 'next/image';
import { institutionalPillars } from '@/lib/site-data';
import { assets } from '@/lib/asset-routes';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';

export function TrustBlock() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Respaldo institucional"
                title="Con experiencia comercial y técnica en cuentas clave e infraestructuras estratégicas de Panamá y la región"
                description="Nuestra experiencia en sectores industriales de alta exigencia nos permite comprender los retos reales de operación, mantenimiento, confiabilidad y continuidad. Trabajamos con enfoque técnico y visión comercial para apoyar a nuestros clientes en la evaluación, selección e implementación de soluciones confiables y de nivel internacional."
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {institutionalPillars.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={index * 0.08}>
                      <div className="rounded-[24px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] p-5">
                        <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]">
                          <Icon className="size-5" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[var(--qts-ink)]">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--qts-muted)]">{item.description}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative min-h-[520px] overflow-hidden rounded-[34px] border border-[var(--qts-line)] shadow-[0_20px_70px_rgba(9,17,31,0.12)]">
              <Image src={assets.home.trust} alt="Panorama industrial de QTS" fill className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,26,46,0.12)_0%,rgba(15,26,46,0.55)_52%,rgba(15,26,46,0.9)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/56">QTS</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Tecnología internacional, criterio técnico y acompañamiento cercano</h3>
                <p className="mt-4 max-w-lg text-base leading-8 text-white/74">
                  Una propuesta que integra representación técnica, suministro especializado y acompañamiento comercial para aplicaciones donde la continuidad operativa es determinante.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
