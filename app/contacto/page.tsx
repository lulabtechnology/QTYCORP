import Image from 'next/image';
import { ContactForm } from '@/components/forms/contact-form';
import { CtaSection } from '@/components/shared/cta-section';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { contactPage, primaryCta, site } from '@/lib/site-data';
import { assets } from '@/lib/asset-routes';

export const metadata = {
  title: 'Contacto',
  description: 'Canal directo y profesional para consultas técnicas, comerciales y solicitudes de información con Quality Techno Services.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contacto" title={contactPage.hero.title} description={contactPage.hero.description} image={contactPage.hero.image} ctas={[{ label: 'Solicitar asesoría técnica', href: '#formulario' }, { label: 'Enviar consulta', href: '#formulario' }]} />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Información de contacto"
                  title="Estamos para ayudarle"
                  description={contactPage.intro}
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {contactPage.infoCards.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Reveal key={item.label} delay={index * 0.05}>
                        <a href={item.href} className="rounded-[24px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] p-5 transition hover:border-[var(--qts-accent)] hover:bg-white">
                          <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]">
                            <Icon className="size-5" />
                          </div>
                          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--qts-blue-muted)]">{item.label}</p>
                          <p className="mt-2 text-base font-semibold leading-7 text-[var(--qts-ink)]">{item.value}</p>
                        </a>
                      </Reveal>
                    );
                  })}
                </div>
                <Reveal delay={0.08}>
                  <div className="mt-6 rounded-[28px] border border-[var(--qts-line)] bg-[var(--qts-navy)] p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/54">Cobertura regional</p>
                    <p className="mt-4 text-lg leading-8 text-white/76">Panamá · USA · Venezuela · Mercados estratégicos de la región.</p>
                    <p className="mt-4 text-sm leading-7 text-white/62">Correo: {site.email} · Teléfono Panamá: {site.phonePanama} · Teléfono USA: {site.phoneUsa}</p>
                  </div>
                </Reveal>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div id="formulario" className="rounded-[32px] border border-[var(--qts-line)] bg-[var(--qts-cream)] p-4 shadow-[0_20px_70px_rgba(9,17,31,0.08)] sm:p-6">
                <div className="relative min-h-[240px] overflow-hidden rounded-[26px] border border-[var(--qts-line)]">
                  <Image src={assets.contact.background} alt="Contacto y asesoría técnica QTS" fill className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,24,43,0.22),rgba(15,24,43,0.74))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/56">Envíenos su consulta</p>
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
