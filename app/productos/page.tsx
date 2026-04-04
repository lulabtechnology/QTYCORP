import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
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

const featuredManufacturers = ['Unique Polymer Systems', 'AGI Industries', 'NOV'];

export default function ProductsPage() {
  const productLogos = featuredManufacturers
    .map((name) => manufacturerLogos.find((logo) => logo.name === name))
    .filter((logo): logo is NonNullable<typeof logo> => Boolean(logo));

  return (
    <>
      <PageHero
        eyebrow="Productos"
        title={productsPage.hero.title}
        description={productsPage.hero.description}
        image={productsPage.hero.image}
        ctas={[{ label: 'Solicitar información', href: '/contacto#formulario' }, { label: 'Contactar a QTS', href: '/contacto#formulario' }]}
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
                    <h3 className="text-[1.95rem] font-semibold leading-tight tracking-[-0.035em] text-[var(--qts-ink)]">{item.title}</h3>
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
              title={productsPage.evaluationSection.title}
              description={productsPage.evaluationSection.description}
              align="center"
              className="mx-auto max-w-6xl"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {productsPage.evaluationCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full overflow-hidden rounded-[32px] border border-[var(--qts-line)] bg-white shadow-[0_20px_56px_rgba(18,24,39,0.08)]">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={item.src} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-[2rem] font-semibold tracking-[-0.04em] text-[var(--qts-ink)]">{item.title}</h3>
                    <p className="mt-5 text-base leading-8 text-[var(--qts-muted)]">{item.description}</p>
                    <ul className="mt-6 space-y-3">
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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Alianzas estratégicas"
                  title="Soluciones respaldadas por tecnología, experiencia y alianzas estratégicas"
                  description="Nuestro portafolio se fortalece con fabricantes y soluciones de nivel internacional, lo que permite conectar cada requerimiento con alternativas confiables y orientadas a aplicaciones de alta exigencia."
                  light
                />
                <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
                  {productLogos.map((logo, index) => (
                    <Reveal key={logo.name} delay={index * 0.05}>
                      <div className="flex min-h-24 items-center justify-center rounded-[22px] border border-white/12 bg-white/6 px-6 py-5 backdrop-blur-sm">
                        <Image src={logo.src} alt={logo.name} width={170} height={54} className="h-8 w-auto object-contain opacity-95" />
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
