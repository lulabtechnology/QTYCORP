import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { solutionCards } from '@/lib/site-data';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';

export function SolutionsGrid() {
  return (
    <section id="soluciones" className="bg-[var(--qts-cream)] py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Soluciones principales"
            title="Soluciones diseñadas para continuidad operativa, confiabilidad y protección de activos"
            description="Nuestro portafolio integra productos, tecnologías y servicios orientados a resolver desafíos industriales con un enfoque práctico, técnico y comercial."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {solutionCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <Link
                href={card.href}
                className="group block overflow-hidden rounded-[28px] border border-[var(--qts-line)] bg-white shadow-[0_20px_70px_rgba(9,17,31,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_90px_rgba(9,17,31,0.12)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={card.src} alt={card.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,28,49,0.82)] via-transparent to-transparent opacity-72" />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--qts-ink)]">{card.title}</h3>
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] text-[var(--qts-accent)] transition group-hover:border-[var(--qts-accent)] group-hover:bg-[rgba(244,122,32,0.08)]">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-8 text-[var(--qts-muted)]">{card.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
