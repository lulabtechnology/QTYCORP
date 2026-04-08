import Image from 'next/image';
import { ContactForm } from '@/components/forms/contact-form';
import { CtaSection } from '@/components/shared/cta-section';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { contactPage, primaryCta } from '@/lib/site-data';
import { assets } from '@/lib/asset-routes';

export const metadata = {
  title: 'Contacto',
  description: 'Canal directo y profesional para consultas técnicas, comerciales y solicitudes de información con Quality Techno Services.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={contactPage.hero.title}
        description={contactPage.hero.description}
        image={contactPage.hero.image}
        ctas={[{ label: 'Solicitar asesoría técnica', href: '#formulario' }, { label: 'Enviar consulta', href: '#formulario' }]}
        imageOpacityClassName="opacity-72"
        overlayClassName="bg-[linear-gradient(120deg,rgba(14,24,44,0.78)_0%,rgba(18,31,54,0.68)_42%,rgba(26,42,67,0.34)_100%)]"
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
            <Reveal>
              <div className="min-w-0 max-w-xl">
                <SectionHeading eyebrow="Información de contacto" title="Estamos para ayudarle" description={contactPage.intro} />
                <Reveal delay={0.08}>
                  <div className="mt-8 border-t border-[var(--qts-line)] pt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--qts-blue-muted)]">Cobertura regional</p>
                    <p className="mt-4 text-lg leading-8 text-[var(--qts-ink)]">Panamá · USA · Venezuela · Mercados estratégicos de la región.</p>
                  </div>
                </Reveal>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div id="formulario" className="min-w-0 rounded-[32px] border border-[var(--qts-line)] bg-[var(--qts-cream)] p-4 shadow-[0_20px_70px_rgba(9,17,31,0.08)] sm:p-6">
                <div className="relative min-h-[240px] overflow-hidden rounded-[26px] border border-[var(--qts-line)]">
                  <Image src={assets.contact.background} alt="Contacto y asesoría técnica QTS" fill className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,24,43,0.18),rgba(15,24,43,0.62))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Envíenos su consulta</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Un canal directo y profesional para consultas técnicas y comerciales</h2>
                  </div>
                </div>
                <div className="mt-5">
                  <ContactForm compact />
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
