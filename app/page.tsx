import Image from 'next/image';
import { ArrowRight, Download, FileText } from 'lucide-react';
import { HeroVideo } from '@/components/layout/hero-video';
import { ManufacturerStrip } from '@/components/sections/manufacturer-strip';
import { TrustBlock } from '@/components/sections/trust-block';
import { SolutionsGrid } from '@/components/sections/solutions-grid';
import { ProposalGrid } from '@/components/sections/proposal-grid';
import { IndustriesGrid } from '@/components/sections/industries-grid';
import { DifferentiatorsGrid } from '@/components/sections/differentiators-grid';
import { ResourceForm } from '@/components/forms/resource-form';
import { ButtonLink } from '@/components/shared/button-link';
import { Container } from '@/components/shared/container';
import { CtaSection } from '@/components/shared/cta-section';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { assets } from '@/lib/asset-routes';
import { homeHero, primaryCta, resourceCatalogs } from '@/lib/site-data';

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[var(--qts-navy)] text-white">
        <HeroVideo />
        <Container className="relative z-10 flex min-h-screen items-center pt-34 pb-18 sm:pb-24">
          <div className="max-w-4xl">
            <Reveal>
              <p className="inline-flex rounded-full border border-white/16 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/64 backdrop-blur-sm">
                {homeHero.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-[4.6rem] lg:leading-[1.02]">
                {homeHero.title}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
                {homeHero.description}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href={homeHero.primaryCta.href} icon>
                  {homeHero.primaryCta.label}
                </ButtonLink>
                <ButtonLink href={homeHero.secondaryCta.href} variant="secondary">
                  {homeHero.secondaryCta.label}
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-10 max-w-3xl rounded-[24px] border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                <p className="text-sm leading-7 text-white/78">{homeHero.institutionalLine}</p>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-3">
                {homeHero.supportMessages.map((item) => (
                  <div key={item} className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/74 backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ManufacturerStrip />
      <TrustBlock />
      <SolutionsGrid />
      <ProposalGrid />
      <IndustriesGrid dark />
      <DifferentiatorsGrid />

      <section id="recursos" className="relative overflow-hidden bg-[var(--qts-navy-soft)] py-24 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Centro de recursos"
                  title="Material de referencia para una evaluación más clara"
                  description="Compartimos catálogos y documentos de consulta general, mientras que la información técnica más específica se entrega de forma directa según el requerimiento del cliente."
                  light
                />
              </Reveal>
              <div className="mt-10 space-y-4">
                {resourceCatalogs.map((catalog, index) => (
                  <Reveal key={catalog.title} delay={index * 0.06}>
                    <a
                      href={catalog.href}
                      className="group flex items-start gap-4 rounded-[24px] border border-white/12 bg-white/6 p-5 transition hover:border-white/22 hover:bg-white/8"
                    >
                      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(244,122,32,0.14)] text-[var(--qts-accent)]">
                        <FileText className="size-5" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-lg font-semibold tracking-[-0.02em]">{catalog.title}</span>
                        <span className="mt-2 block text-sm leading-7 text-white/68">{catalog.description}</span>
                      </span>
                      <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-white/70 transition group-hover:border-[var(--qts-accent)] group-hover:text-[var(--qts-accent)]">
                        <Download className="size-4" />
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.12}>
              <ResourceForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection {...primaryCta} />
    </>
  );
}
