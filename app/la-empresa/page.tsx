import Image from 'next/image';
import { ButtonLink } from '@/components/shared/button-link';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { CtaSection } from '@/components/shared/cta-section';
import { IndustriesGrid } from '@/components/sections/industries-grid';
import { companyPage, primaryCta } from '@/lib/site-data';
import { assets } from '@/lib/asset-routes';

export const metadata = {
  title: 'La Empresa',
  description: 'Conozca a Quality Techno Services, su propuesta de valor, misión, visión y presencia regional.',
};

export default function CompanyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--qts-navy)] pt-30 text-white">
        <div className="absolute inset-0 opacity-76">
          <Image src={companyPage.hero.image} alt="Fondo industrial de QTS" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(14,24,44,0.78)_0%,rgba(18,31,54,0.68)_42%,rgba(26,42,67,0.34)_100%)]" />
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
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.78fr] lg:items-center">
              <div className="max-w-4xl">
                <SectionHeading
                  eyebrow="Quiénes somos"
                  title="Una empresa enfocada en soluciones industriales de alto valor"
                />
                <div className="mt-5 max-w-[62ch] space-y-5">
                  <p className="text-[1.02rem] leading-8 text-[var(--qts-muted)]">{companyPage.whoWeAre}</p>
                  <p className="text-[1.02rem] leading-8 text-[var(--qts-muted)]">{companyPage.whoWeAre2}</p>
                </div>
              </div>
              <div className="mx-auto flex w-full max-w-[420px] items-center justify-center lg:justify-end">
                <div className="relative aspect-[1137/820] w-full max-w-[360px]">
                  <Image
                    src="/images/brand/logo-qts-mark.png"
                    alt="Logotipo de Quality Techno Services"
                    fill
                    sizes="(max-width: 1024px) 60vw, 360px"
                    className="object-contain drop-shadow-[0_16px_30px_rgba(18,30,52,0.12)]"
                  />
                </div>
              </div>
            </div>
          </Reveal>
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
          <div className="max-w-4xl">
            <Reveal>
              <SectionHeading
                eyebrow="Capacidades"
                title={companyPage.capabilities.title}
                description={companyPage.capabilities.intro}
              />
            </Reveal>
            <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2">
              {companyPage.capabilities.bullets.map((item, index) => (
                <Reveal key={item} delay={index * 0.04}>
                  <div className="flex min-h-[86px] h-full items-center rounded-[22px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] px-5 py-4 text-[15px] leading-7 text-[var(--qts-ink)] shadow-[0_14px_36px_rgba(9,17,31,0.04)]">
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <IndustriesGrid
        dark
        eyebrow="Sectores que atendemos"
        title="Experiencia alineada a distintos entornos industriales"
        description="Acompañamos requerimientos en sectores donde la confiabilidad, la seguridad y la continuidad operativa son clave, incluyendo:"
      />

      <section className="bg-white py-24">
        <Container>
          <Reveal>
            <div className="max-w-5xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--qts-accent)]">Nuestra esencia</p>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <article className="rounded-[30px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] p-8 shadow-[0_18px_56px_rgba(9,17,31,0.06)]">
                  <p className="text-[1.8rem] font-medium tracking-[-0.03em] text-[var(--qts-accent)]">Misión</p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--qts-ink)] lg:text-[2.3rem]">
                    {companyPage.missionTitle}
                  </h2>
                  <p className="mt-4 text-base font-medium text-[var(--qts-ink)]/84">{companyPage.missionSubtitle}</p>
                  <p className="mt-5 text-base leading-8 text-[var(--qts-muted)]">{companyPage.mission}</p>
                </article>
                <article className="rounded-[30px] border border-[var(--qts-line)] bg-white p-8 shadow-[0_18px_56px_rgba(9,17,31,0.06)]">
                  <p className="text-[1.8rem] font-medium tracking-[-0.03em] text-[var(--qts-accent)]">Visión</p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--qts-ink)] lg:text-[2.3rem]">
                    {companyPage.visionTitle}
                  </h2>
                  <p className="mt-4 text-base font-medium text-[var(--qts-ink)]/84">{companyPage.visionSubtitle}</p>
                  <p className="mt-5 text-base leading-8 text-[var(--qts-muted)]">{companyPage.vision}</p>
                </article>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Valores"
              title="Principios que guían nuestra forma de trabajar"
              description="Promovemos relaciones de largo plazo, criterio técnico y una ejecución consistente con el nivel de exigencia de nuestros clientes."
              className="max-w-4xl"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {companyPage.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-[30px] border border-[rgba(30,36,48,0.08)] bg-white p-7 shadow-[0_18px_56px_rgba(9,17,31,0.06)]">
                  <div className="inline-flex size-13 items-center justify-center rounded-[20px] bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]">
                    <value.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-[1.7rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--qts-ink)]">{value.title}</h3>
                  <p className="mt-3 text-base leading-8 text-[var(--qts-muted)]">{value.description}</p>
                </article>
              </Reveal>
            ))}
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
                <div className="mt-10 space-y-5">
                  {companyPage.workSteps.map((step, index) => (
                    <Reveal key={step} delay={index * 0.05}>
                      <div className="flex items-start gap-5 border-b border-[var(--qts-line)] pb-5 last:border-b-0 last:pb-0">
                        <span className="min-w-[2.3rem] text-base font-semibold tracking-[0.14em] text-[var(--qts-accent)]">0{index + 1}</span>
                        <span className="text-[1.05rem] font-semibold leading-8 text-[var(--qts-ink)]">{step}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative min-h-[480px] overflow-hidden rounded-[32px] border border-[var(--qts-line)] shadow-[0_22px_80px_rgba(9,17,31,0.1)]">
                <Image src={assets.company.hero} alt="Proceso consultivo de QTS" fill className="object-cover" />
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
                <Image src={assets.company.presence} alt="Presencia regional de QTS" fill className="object-cover object-center" />
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
