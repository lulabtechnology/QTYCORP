import Image from 'next/image';
import { CtaSection } from '@/components/shared/cta-section';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { manufacturerLogos, primaryCta, productsPage } from '@/lib/site-data';
import { assets } from '@/lib/asset-routes';

export const metadata = {
  title: 'Productos',
  description: 'Portafolio de productos y soluciones de QTS para bombeo, protección, reparación y continuidad operativa.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Productos" title={productsPage.hero.title} description={productsPage.hero.description} image={productsPage.hero.image} ctas={[{ label: 'Solicitar información', href: '/contacto' }, { label: 'Contactar a QTS', href: '/contacto#formulario' }]} />

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

      <section className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Categorías de producto"
              title="Soluciones alineadas a las necesidades reales de la industria"
              description="Cada categoría se presenta desde la lógica de aplicación, confiabilidad operativa y acompañamiento técnico-comercial."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productsPage.categories.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="h-full rounded-[28px] border border-[var(--qts-line)] bg-white p-6 shadow-[0_14px_44px_rgba(9,17,31,0.06)]">
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="relative min-h-[470px] overflow-hidden rounded-[32px] border border-[var(--qts-line)] shadow-[0_20px_70px_rgba(9,17,31,0.1)]">
                <Image src={assets.products.needs} alt="Necesidades operativas atendidas por QTS" fill className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <SectionHeading
                  eyebrow="Necesidades operativas"
                  title="Productos orientados a resolver desafíos reales de operación"
                  description="QTS estructura su portafolio desde la aplicación, la criticidad del activo y la continuidad de la operación; no desde una lógica de catálogo plano."
                />
                <div className="mt-8 space-y-4">
                  {productsPage.operationalNeeds.map((need, index) => (
                    <Reveal key={need.title} delay={index * 0.05}>
                      <div className="rounded-[24px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] p-5">
                        <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--qts-ink)]">{need.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--qts-muted)]">{need.description}</p>
                      </div>
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
                  eyebrow="Alianzas estratégicas"
                  title="Soluciones respaldadas por tecnología, experiencia y alianzas estratégicas"
                  description="Nuestro portafolio se fortalece con fabricantes y soluciones de nivel internacional, lo que permite conectar cada requerimiento con alternativas confiables y orientadas a aplicaciones de alta exigencia."
                  light
                />
                <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {manufacturerLogos.map((logo, index) => (
                    <Reveal key={logo.name} delay={index * 0.05}>
                      <div className="flex min-h-22 items-center justify-center rounded-[22px] border border-white/10 bg-white/6 px-5 py-4 backdrop-blur-sm">
                        <Image src={logo.src} alt={logo.name} width={150} height={42} className="h-7 w-auto opacity-95" />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-white/10">
                <Image src={assets.products.alliances} alt="Alianzas estratégicas" fill className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,24,43,0.14),rgba(15,24,43,0.72))]" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal>
              <div className="relative min-h-[430px] overflow-hidden rounded-[32px] border border-[var(--qts-line)] shadow-[0_20px_70px_rgba(9,17,31,0.1)]">
                <Image src={assets.products.portfolio} alt="Cómo aporta valor el portafolio" fill className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <SectionHeading
                  eyebrow="Aporte de valor"
                  title="Más que productos: soluciones con criterio técnico y visión comercial"
                  description={productsPage.valueBody}
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {productsPage.valueBullets.map((item, index) => (
                    <Reveal key={item} delay={index * 0.05}>
                      <div className="rounded-[22px] border border-[var(--qts-line)] bg-white px-5 py-4 text-sm font-semibold text-[var(--qts-ink)]">{item}</div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection {...primaryCta} />
    </>
  );
}
