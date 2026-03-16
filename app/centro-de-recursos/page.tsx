import Image from 'next/image';
import { Download, FileText } from 'lucide-react';
import { ResourceForm } from '@/components/forms/resource-form';
import { CtaSection } from '@/components/shared/cta-section';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { primaryCta, resourceCatalogs, resourcePage } from '@/lib/site-data';
import { assets } from '@/lib/asset-routes';

export const metadata = {
  title: 'Centro de Recursos',
  description: 'Catálogos, material de referencia y solicitudes de información técnica para soluciones industriales QTS.',
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Centro de Recursos" title={resourcePage.hero.title} description={resourcePage.hero.description} image={resourcePage.hero.image} ctas={[{ label: 'Explorar catálogos', href: '#catalogos' }, { label: 'Solicitar información técnica', href: '#solicitud' }]} />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Introducción"
                  title="Información útil para una evaluación más clara"
                  description={resourcePage.intro}
                />
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--qts-muted)]">{resourcePage.intro2}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative min-h-[460px] overflow-hidden rounded-[32px] border border-[var(--qts-line)] shadow-[0_20px_70px_rgba(9,17,31,0.1)]">
                <Image src={assets.resources.catalogs} alt="Catálogos y materiales disponibles" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="catalogos" className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Catálogos disponibles"
              title="Explore una selección de materiales de consulta general"
              description="Una navegación corta, elegante y pensada para orientar la conversación comercial y técnica desde un primer nivel de información."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {resourceCatalogs.map((catalog, index) => (
              <Reveal key={catalog.title} delay={index * 0.06}>
                <a href={catalog.href} className="group flex h-full items-start gap-4 rounded-[28px] border border-[var(--qts-line)] bg-white p-6 shadow-[0_14px_44px_rgba(9,17,31,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(9,17,31,0.1)]">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]">
                    <FileText className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xl font-semibold tracking-[-0.03em] text-[var(--qts-ink)]">{catalog.title}</span>
                    <span className="mt-3 block text-sm leading-7 text-[var(--qts-muted)]">{catalog.description}</span>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--qts-accent)]">
                      Ver / Descargar <Download className="size-4" />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="solicitud" className="bg-[var(--qts-navy)] py-24 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Solicitud de información técnica"
                  title="¿Necesita información más específica?"
                  description="Si requiere fichas técnicas, hojas de datos, documentación por aplicación o información complementaria para evaluación técnica o comercial, nuestro equipo puede apoyarle con la información adecuada según su requerimiento."
                  light
                />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {resourcePage.requestOptions.map((item, index) => (
                    <Reveal key={item} delay={index * 0.05}>
                      <div className="rounded-[22px] border border-white/10 bg-white/6 px-5 py-4 text-sm font-semibold text-white/84">{item}</div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ResourceForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection {...primaryCta} />
    </>
  );
}
