import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { IndustriesGrid } from '@/components/sections/industries-grid';
import { CtaSection } from '@/components/shared/cta-section';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { primaryCta, servicesPage } from '@/lib/site-data';
import { assets } from '@/lib/asset-routes';

export const metadata = {
  title: 'Servicios',
  description: 'Servicios industriales especializados de QTS para confiabilidad, seguridad, protección de activos y continuidad operativa.',
};

const processCards = [
  {
    number: '01',
    title: 'Entendemos la necesidad',
    description: 'Escuchamos el requerimiento, las condiciones de operación y los objetivos del cliente.',
  },
  {
    number: '02',
    title: 'Evaluamos la aplicación',
    description: 'Analizamos el contexto técnico, operativo y económico para identificar la mejor alternativa.',
  },
  {
    number: '03',
    title: 'Proponemos la solución',
    description: 'Presentamos una recomendación clara, viable y alineada con la necesidad real de la operación.',
  },
  {
    number: '04',
    title: 'Acompañamos la implementación',
    description: 'Damos seguimiento técnico y comercial para facilitar una ejecución confiable y efectiva.',
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title={servicesPage.hero.title}
        description={servicesPage.hero.description}
        image={servicesPage.hero.image}
        ctas={[{ label: 'Solicitar asesoría técnica', href: '/contacto' }, { label: 'Contactar a QTS', href: '/contacto#formulario' }]}
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Introducción"
                  title="Más que suministro: soporte técnico y servicios industriales especializados"
                  description={servicesPage.intro}
                />
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--qts-muted)]">{servicesPage.intro2}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative min-h-[470px] overflow-hidden rounded-[32px] border border-[var(--qts-line)] shadow-[0_20px_70px_rgba(9,17,31,0.1)]">
                <Image src={assets.services.categories} alt="Servicios industriales QTS" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Categorías de servicios"
              title="Servicios diseñados para agregar valor en cada etapa de la operación"
              description="Capacidades orientadas a confiabilidad, seguridad, cumplimiento normativo y acompañamiento técnico-comercial cercano."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {servicesPage.categories.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.05}>
                  <div className="h-full rounded-[28px] border border-[var(--qts-line)] bg-white p-6 shadow-[0_14px_44px_rgba(9,17,31,0.06)]">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[var(--qts-ink)]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--qts-muted)]">{service.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <Reveal>
              <div className="relative min-h-[460px] overflow-hidden rounded-[32px] border border-[var(--qts-line)] shadow-[0_20px_70px_rgba(9,17,31,0.1)]">
                <Image src={assets.services.featured} alt="Capacidades destacadas de servicio" fill className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <SectionHeading
                  eyebrow="Servicios destacados"
                  title="Capacidades orientadas a seguridad, desempeño y continuidad operativa"
                  description="Un enfoque que combina acompañamiento técnico, ejecución especializada y control documentado para aplicaciones de alta exigencia."
                />
                <div className="mt-8 grid gap-3">
                  {servicesPage.highlights.map((item, index) => (
                    <Reveal key={item} delay={index * 0.05}>
                      <div className="rounded-[22px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] px-5 py-4 text-sm font-semibold text-[var(--qts-ink)]">{item}</div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--qts-navy)] py-24 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Cómo agregamos valor"
                  title="Servicios que respaldan mejores decisiones operativas"
                  description={servicesPage.valueBody}
                  light
                />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {servicesPage.valueBullets.map((item, index) => (
                    <Reveal key={item} delay={index * 0.05}>
                      <div className="rounded-[22px] border border-white/10 bg-white/6 px-5 py-4 text-sm font-semibold text-white/86">{item}</div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative min-h-[430px] overflow-hidden rounded-[32px] border border-white/10">
                <Image src={assets.services.approach} alt="Enfoque de trabajo de QTS" fill className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,24,43,0.16),rgba(15,24,43,0.74))]" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <IndustriesGrid />

      <section className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <div className="grid gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Cómo trabajamos"
                  title="Cómo trabajamos para generar valor en cada aplicación"
                  description="Combinamos visión técnica, criterio comercial y acompañamiento cercano para entender cada requerimiento, evaluar la aplicación correcta y proponer soluciones alineadas con los objetivos operativos del cliente."
                />
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {processCards.map((step, index) => (
                    <Reveal key={step.number} delay={index * 0.05}>
                      <article className="relative h-full rounded-[30px] border border-[rgba(30,36,48,0.08)] bg-white p-7 shadow-[0_20px_60px_rgba(9,17,31,0.06)]">
                        <div className="flex items-start gap-4">
                          <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--qts-accent)] text-xl font-semibold text-white shadow-[0_16px_34px_rgba(244,122,32,0.24)]">
                            {step.number}
                          </span>
                          <div>
                            <h3 className="text-[1.95rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--qts-ink)]">{step.title}</h3>
                            <p className="mt-4 text-base leading-8 text-[var(--qts-muted)]">{step.description}</p>
                          </div>
                        </div>
                        {index % 2 === 0 ? (
                          <ArrowRight className="pointer-events-none absolute -right-4 top-1/2 hidden size-8 -translate-y-1/2 text-[var(--qts-accent)]/85 sm:block xl:size-9" />
                        ) : null}
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative min-h-[760px] overflow-hidden rounded-[36px] border border-[rgba(30,36,48,0.08)] bg-white shadow-[0_28px_90px_rgba(9,17,31,0.08)]">
                <Image src={assets.services.approach} alt="Proceso de evaluación técnica y comercial de QTS" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.14))]" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection {...primaryCta} />
    </>
  );
}
