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
            eyebrow="Diferenciadores"
            title="¿Por qué Quality Techno Services?"
            description="Combinamos cercanía comercial, criterio técnico y respaldo internacional para ayudar a nuestros clientes a tomar mejores decisiones en aplicaciones donde el desempeño del activo y la continuidad de la operación son determinantes."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-[26px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] p-6 transition hover:-translate-y-1 hover:border-[var(--qts-accent)] hover:bg-white">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-[var(--qts-ink)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--qts-muted)]">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
