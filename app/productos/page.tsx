import Image from 'next/image';
import { CheckCircle2, CircleGauge, ShieldCheck, Wrench, Clock3 } from 'lucide-react';
import { CtaSection } from '@/components/shared/cta-section';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { ButtonLink } from '@/components/shared/button-link';
import { manufacturerLogos, primaryCta, productsPage } from '@/lib/site-data';
import { assets } from '@/lib/asset-routes';

export const metadata = {
  title: 'Productos',
  description: 'Portafolio de productos y soluciones de QTS para bombeo, protección, reparación y continuidad operativa.',
};

const valueItems = [
  {
    title: 'Mejor alineación con la aplicación',
    description: 'Seleccionamos soluciones en función de las condiciones reales del proceso, no de especificaciones genéricas.',
    icon: CircleGauge,
  },
  {
    title: 'Mayor respaldo para la decisión de compra',
    description: 'Integramos criterios técnicos, experiencia en campo y soporte de fabricantes para reducir incertidumbre.',
    icon: ShieldCheck,
  },
  {
    title: 'Integración con servicios y soporte',
    description: 'No solo suministramos productos: conectamos cada solución con instalación, mantenimiento y seguimiento.',
    icon: Wrench,
  },
  {
    title: 'Enfoque en continuidad operativa',
    description: 'Priorizamos confiabilidad, disponibilidad y reducción de paradas no programadas.',
    icon: Clock3,
  },
] as const;

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Productos"
        title={productsPage.hero.title}
        description={productsPage.hero.description}
        image={productsPage.hero.image}
        ctas={[{ label: 'Solicitar información', href: '/contacto#formulario' }, { label: 'Contactar a QTS', href: '/contacto#formulario' }]}
        imageOpacityClassName="opacity-78"
        overlayClassName="bg-[linear-gradient(120deg,rgba(14,24,44,0.78)_0%,rgba(18,31,54,0.68)_42%,rgba(26,42,67,0.34)_100%)]"
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Introducción"
                  title="Un portafolio orientado a desempeño, confiabilidad y continuidad operativa"
                  description={productsPage.intro}
                />
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--qts-muted)]">{productsPage.intro2}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative min-h-[470px] overflow-hidden rounded-[32px] border border-[var(--qts-line)] shadow-[0_20px_70px_rgba(9,17,31,0.1)]">
                <Image src={assets.products.categories} alt="Portafolio de soluciones industriales" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8f8fc_0%,#f4f6fb_100%)] py-24">
        <Container>
          <Reveal>
            <SectionHeading
              title={productsPage.categoriesHeading.title}
              description={productsPage.categoriesHeading.description}
              align="center"
              className="mx-auto max-w-5xl"
            />
          </Reveal>
          <div className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productsPage.categories.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-[var(--qts-line)] bg-white shadow-[0_18px_46px_rgba(9,17,31,0.08)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[16/7] overflow-hidden">
                    <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.035em] text-[var(--qts-ink)]">{item.title}</h3>
                    <p className="mt-4 text-base leading-8 text-[var(--qts-muted)]">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 flex justify-center">
              <ButtonLink href="/contacto#formulario" className="px-7 py-3.5 text-base">
                Solicitar información
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#faf8ff_0%,#ffffff_55%,#f8fbff_100%)] py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Aporte de valor"
              title="Más que productos: soluciones con criterio técnico y visión comercial"
              align="center"
              className="mx-auto max-w-6xl"
            />
          </Reveal>
          <Reveal delay={0.04}>
            <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-[1.03rem] leading-9 text-[var(--qts-muted)]">
              <p>
                En QTS no presentamos el portafolio como una lista de referencias aisladas, sino como un conjunto de soluciones que deben
                responder a una necesidad real de operación.
              </p>
              <p>
                Nuestro valor está en ayudar a seleccionar mejor, evaluar con mayor claridad y conectar cada requerimiento con una
                alternativa técnicamente confiable y comercialmente viable.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <Reveal>
              <div className="relative min-h-[580px] overflow-hidden rounded-[36px] border border-[rgba(30,36,48,0.08)] shadow-[0_24px_72px_rgba(9,17,31,0.08)]">
                <Image src={assets.products.portfolio} alt="Valor técnico y comercial del portafolio" fill className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="grid gap-6 pt-1">
                {valueItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={index * 0.05}>
                      <div className="flex items-start gap-5">
                        <div className="flex size-20 shrink-0 items-center justify-center rounded-[26px] border border-[rgba(244,122,32,0.12)] bg-white shadow-[0_12px_34px_rgba(18,24,39,0.06)]">
                          <Icon className="size-10 text-[var(--qts-accent)]" strokeWidth={1.8} />
                        </div>
                        <div>
                          <h3 className="text-[1.95rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--qts-ink)]">{item.title}</h3>
                          <p className="mt-2 max-w-3xl text-base leading-8 text-[var(--qts-muted)]">{item.description}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#faf8ff_0%,#ffffff_55%,#f8fbff_100%)] py-24">
        <Container>
          <Reveal>
            <SectionHeading
              title={productsPage.evaluationSection.title}
              description={productsPage.evaluationSection.description}
              align="center"
              className="mx-auto max-w-6xl"
            />
          </Reveal>
          <div className="mt-14 grid auto-rows-fr gap-6 lg:grid-cols-3">
            {productsPage.evaluationCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="flex h-full flex-col overflow-hidden rounded-[32px] border border-[var(--qts-line)] bg-white shadow-[0_20px_56px_rgba(18,24,39,0.08)]">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={item.src} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="min-h-[4.5rem] text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--qts-ink)]">{item.title}</h3>
                    <p className="mt-5 text-base leading-8 text-[var(--qts-muted)]">{item.description}</p>
                    <ul className="mt-auto space-y-3 pt-6">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-base leading-7 text-[var(--qts-ink)]">
                          <CheckCircle2 className="mt-1 size-5 shrink-0 text-[var(--qts-accent)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--qts-navy)] py-24 text-white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Alianzas estratégicas"
              title="Soluciones respaldadas por tecnología, experiencia y alianzas estratégicas"
              description="Nuestro portafolio se fortalece con fabricantes y soluciones de nivel internacional, lo que permite conectar cada requerimiento con alternativas confiables y orientadas a aplicaciones de alta exigencia."
              align="center"
              light
              className="mx-auto max-w-4xl"
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {manufacturerLogos.map((logo, index) => (
              <Reveal key={logo.name} delay={index * 0.05}>
                <div className="flex min-h-[118px] items-center justify-center rounded-[24px] border border-white/12 bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)] px-8 py-6 shadow-[0_22px_50px_rgba(8,17,35,0.22)]">
                  <Image src={logo.src} alt={logo.name} width={210} height={70} className="max-h-14 w-auto object-contain" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection {...primaryCta} />
    </>
  );
}
