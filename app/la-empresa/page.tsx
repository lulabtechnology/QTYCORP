import Image from 'next/image';
import { PageHero } from '@/components/shared/page-hero';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { CtaSection } from '@/components/shared/cta-section';
import { companyPage, primaryCta } from '@/lib/site-data';
import { assets } from '@/lib/asset-routes';

export const metadata = {
  title: 'La Empresa',
  description: 'Conozca a Quality Techno Services, su propuesta de valor, misión, visión y presencia regional.',
};

export default function CompanyPage() {
  return (
    <>
      <PageHero eyebrow="La empresa" {...companyPage.hero} />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Quiénes somos"
                  title="Una empresa enfocada en soluciones industriales de alto valor"
                  description={companyPage.whoWeAre}
                />
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--qts-muted)]">{companyPage.whoWeAre2}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative min-h-[480px] overflow-hidden rounded-[32px] border border-[var(--qts-line)] shadow-[0_22px_80px_rgba(9,17,31,0.1)]">
                <Image src={assets.company.who} alt="Equipo y operaciones industriales" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Propuesta de valor"
              title="Más que un proveedor, un aliado técnico-comercial"
              description="En QTS acompañamos a nuestros clientes en la selección, evaluación e implementación de soluciones industriales alineadas a las exigencias reales de cada operación."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {companyPage.valueProps.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.07}>
                  <div className="rounded-[28px] border border-[var(--qts-line)] bg-white p-6 shadow-[0_20px_70px_rgba(9,17,31,0.08)]">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[var(--qts-ink)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--qts-muted)]">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-[30px] border border-[var(--qts-line)] bg-[var(--qts-navy)] p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">Nuestra misión</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Brindar soluciones integrales y especializadas</h2>
                <p className="mt-5 text-base leading-8 text-white/72">{companyPage.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[30px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--qts-accent)]">Nuestra visión</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[var(--qts-ink)]">Un referente regional de alto desempeño</h2>
                <p className="mt-5 text-base leading-8 text-[var(--qts-muted)]">{companyPage.vision}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Valores"
                title="Principios que guían nuestra forma de trabajar"
                description="Promovemos relaciones de largo plazo, criterio técnico y una ejecución consistente con el nivel de exigencia de nuestros clientes."
              />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {companyPage.values.map((value, index) => (
                <Reveal key={value} delay={index * 0.05}>
                  <div className="rounded-[24px] border border-[var(--qts-line)] bg-white px-5 py-5 text-sm font-semibold text-[var(--qts-ink)] shadow-[0_12px_34px_rgba(9,17,31,0.05)]">
                    {value}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Cómo trabajamos"
                  title="Una forma de trabajo orientada a resultados"
                  description="Abordamos cada oportunidad con una visión práctica, técnica y comercial. Buscamos comprender la necesidad del cliente, evaluar la aplicación y proponer soluciones alineadas a los objetivos operativos, técnicos y económicos de cada proyecto."
                />
                <div className="mt-10 space-y-4">
                  {companyPage.workSteps.map((step, index) => (
                    <Reveal key={step} delay={index * 0.05}>
                      <div className="flex items-center gap-4 rounded-[22px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] px-5 py-4">
                        <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--qts-accent)] text-sm font-semibold text-white">0{index + 1}</span>
                        <span className="text-base font-semibold text-[var(--qts-ink)]">{step}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative min-h-[480px] overflow-hidden rounded-[32px] border border-[var(--qts-line)] shadow-[0_22px_80px_rgba(9,17,31,0.1)]">
                <Image src={assets.company.value} alt="Proceso consultivo de QTS" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--qts-navy)] py-24 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-white/10">
                <Image src={assets.company.presence} alt="Presencia regional de QTS" fill className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,30,52,0.2),rgba(18,30,52,0.78))]" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionHeading
                eyebrow="Alcance y presencia"
                title="Presencia local con visión regional"
                description={companyPage.regionalBody}
                light
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection {...primaryCta} />
    </>
  );
}
