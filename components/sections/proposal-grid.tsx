import { integralProposal } from '@/lib/site-data';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';

export function ProposalGrid() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-[linear-gradient(180deg,#243657_0%,#2b3f67_100%)] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />
      <Container className="relative">
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {integralProposal.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="h-full">
              <div className="flex h-full min-h-[250px] flex-col rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.055)] p-7 shadow-[0_18px_46px_rgba(7,15,29,0.16)] backdrop-blur-sm">
                <h3 className="max-w-[13ch] text-[1.7rem] font-semibold leading-[1.12] tracking-[-0.04em] text-white sm:text-[1.85rem]">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-white/74">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
