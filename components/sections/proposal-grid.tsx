import { integralProposal } from '@/lib/site-data';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';

export function ProposalGrid() {
  return (
    <section className="bg-[var(--qts-navy)] py-24 text-white">
      <Container>
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {integralProposal.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08} className="h-full">
                <div className="flex h-full min-h-[250px] flex-col rounded-[28px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(244,122,32,0.14)] text-[var(--qts-accent)]">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-[1.95rem] font-semibold leading-[1.08] tracking-[-0.04em] text-balance">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-5 text-base leading-8 text-white/72">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
