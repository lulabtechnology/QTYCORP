import Image from 'next/image';
import { ButtonLink } from '@/components/shared/button-link';
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
  const featuredValue = companyPage.values.find((value) => value.title === 'Integridad') ?? companyPage.values[0];
  const remainingValues = companyPage.values.filter((value) => value.title !== featuredValue.title);

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--qts-navy)] pt-30 text-white">
        <div className="absolute inset-0 opacity-72">
          <Image src={companyPage.hero.image} alt="Fondo industrial de QTS" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(14,24,44,0.8)_0%,rgba(18,31,54,0.66)_42%,rgba(26,42,67,0.32)_100%)]" />
        <Container className="relative z-10 py-24 sm:py-28">
          <div className="max-w-4xl">
            <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.65rem]">
              {companyPage.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-[1.15rem] leading-8 text-white/88 sm:text-[1.24rem]">
              {companyPage.hero.description}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/72">{companyPage.hero.body}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={companyPage.hero.ctas[0].href} icon>
                {companyPage.hero.ctas[0].label}
              </ButtonLink>
              {companyPage.hero.ctas[1] ? (
                <ButtonLink href={companyPage.hero.ctas[1].href} variant="secondary">
                  {companyPage.hero.ctas[1].label}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

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
            {companyPage.valueProps.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <article className="flex h-full flex-col overflow-hidden rounded-[30px] border border-[var(--qts-line)] bg-white shadow-[0_20px_70px_rgba(9,17,31,0.08)]">
                  <div className="relative aspect-[16/8.8] overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,31,51,0.02),rgba(20,31,51,0.18))]" />
                  </div>
                  <div className="flex flex-1 flex-col px-6 py-6">
                    <h3 className="text-[1.35rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--qts-ink)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--qts-muted)]">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
            <Reveal>
              <div className="relative min-h-[540px] overflow-hidden rounded-[34px] border border-[var(--qts-line)] shadow-[0_22px_80px_rgba(9,17,31,0.1)]">
                <Image src={assets.company.who} alt="Equipo técnico de Quality Techno Services" fill className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col justify-center gap-10 xl:pl-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--qts-accent)]">Nuestra esencia</p>
                </div>

                <div className="border-b border-[var(--qts-line)] pb-9">
                  <p className="text-[2rem] font-medium tracking-[-0.03em] text-[var(--qts-accent)]">Misión</p>
                  <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--qts-ink)]">
                    {companyPage.missionTitle}
                  </h2>
                  <p className="mt-5 text-lg font-medium text-[var(--qts-ink)]/84">{companyPage.missionSubtitle}</p>
                  <p className="mt-5 max-w-xl text-base leading-8 text-[var(--qts-muted)]">{companyPage.mission}</p>
                </div>

                <div>
                  <p className="text-[2rem] font-medium tracking-[-0.03em] text-[var(--qts-accent)]">Visión</p>
                  <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--qts-ink)]">
                    {companyPage.visionTitle}
                  </h2>
                  <p className="mt-5 text-lg font-medium text-[var(--qts-ink)]/84">{companyPage.visionSubtitle}</p>
                  <p className="mt-5 max-w-xl text-base leading-8 text-[var(--qts-muted)]">{companyPage.vision}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <div className="overflow-hidden rounded-[40px] border border-[rgba(30,36,48,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,249,252,0.96))] px-8 py-10 shadow-[0_26px_90px_rgba(9,17,31,0.08)] sm:px-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <Reveal>
                <div className="lg:col-span-5 lg:pr-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--qts-accent)]">Valores</p>
                  <h2 className="mt-4 max-w-lg text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--qts-ink)] sm:text-[3.2rem]">
                    Principios que guían nuestra forma de trabajar
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--qts-muted)]">
                    Promovemos relaciones de largo plazo, criterio técnico y una ejecución consistente con el nivel de exigencia de nuestros clientes.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="lg:col-span-7 lg:pl-4">
                  <div className="mx-auto h-full rounded-[30px] border border-[rgba(30,36,48,0.08)] bg-white p-7 shadow-[0_20px_60px_rgba(9,17,31,0.08)] lg:ml-auto lg:max-w-[430px]">
                    <div className="flex items-start gap-5">
                      <div className="inline-flex size-14 shrink-0 items-center justify-center rounded-[20px] bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]">
                        <featuredValue.icon className="size-7" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--qts-ink)]">{featuredValue.title}</h3>
                        <p className="mt-3 text-lg leading-8 text-[var(--qts-muted)]">{featuredValue.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:col-span-12">
                {remainingValues.map((value, index) => (
                  <Reveal key={value.title} delay={index * 0.05}>
                    <div className="h-full rounded-[28px] border border-[rgba(30,36,48,0.08)] bg-white p-7 shadow-[0_16px_44px_rgba(9,17,31,0.06)]">
                      <div className="inline-flex size-12 items-center justify-center rounded-[18px] bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]">
                        <value.icon className="size-6" />
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[var(--qts-ink)]">{value.title}</h3>
                      <p className="mt-3 text-base leading-8 text-[var(--qts-muted)]">{value.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
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
