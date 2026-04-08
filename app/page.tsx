import { HeroVideo } from '@/components/layout/hero-video';
import { ManufacturerStrip } from '@/components/sections/manufacturer-strip';
import { ClientsStrip } from '@/components/sections/clients-strip';
import { TrustBlock } from '@/components/sections/trust-block';
import { SolutionsGrid } from '@/components/sections/solutions-grid';
import { ProposalGrid } from '@/components/sections/proposal-grid';
import { IndustriesGrid } from '@/components/sections/industries-grid';
import { DifferentiatorsGrid } from '@/components/sections/differentiators-grid';
import { ButtonLink } from '@/components/shared/button-link';
import { Container } from '@/components/shared/container';
import { CtaSection } from '@/components/shared/cta-section';
import { Reveal } from '@/components/shared/reveal';
import { homeHero, primaryCta } from '@/lib/site-data';

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
              <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-[4.2rem] lg:leading-[1.03]">
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
          </div>
        </Container>
      </section>

      <ManufacturerStrip />
      <ClientsStrip />
      <TrustBlock />
      <SolutionsGrid />
      <ProposalGrid />
      <IndustriesGrid dark />
      <DifferentiatorsGrid />
      <CtaSection {...primaryCta} />
    </>
  );
}
