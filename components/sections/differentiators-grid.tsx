import { differentiators } from '@/lib/site-data';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';

export function DifferentiatorsGrid() {
  return (
    <section className="bg-white py-24">
      <Container>
        <Reveal>
          <SectionHeading
            title="¿Por qué Quality Techno Services?"
            description="Combinamos cercanía comercial, criterio técnico y respaldo internacional para ayudar a nuestros clientes a tomar mejores decisiones en aplicaciones donde el desempeño del activo y la continuidad de la operación son determinantes."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-[var(--qts-accent)] hover:shadow-[0_22px_48px_rgba(15,23,42,0.1)]">
                <div className="flex h-[118px] items-start border-b border-white/12 bg-[linear-gradient(135deg,var(--qts-navy),rgba(39,55,84,0.94))] px-5 py-5 sm:px-6">
                  <h3 className="text-[1.48rem] font-semibold leading-[1.06] tracking-[-0.032em] text-white sm:text-[1.55rem]">{item.title}</h3>
                </div>
                <div className="flex min-h-[180px] flex-1 items-start px-5 py-6 sm:px-6">
                  <p className="text-[0.98rem] leading-8 text-[var(--qts-muted)]">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
