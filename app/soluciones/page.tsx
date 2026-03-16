import Link from 'next/link';
import { Boxes, BriefcaseBusiness, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';
import { assets } from '@/lib/asset-routes';

export const metadata = {
  title: 'Soluciones',
  description: 'Panorama general de productos y servicios especializados de Quality Techno Services.',
};

const solutions = [
  {
    title: 'Productos',
    description: 'Equipos, tecnologías, materiales y soluciones orientadas a bombeo, protección, reparación y continuidad operativa.',
    href: '/productos',
    icon: Boxes,
  },
  {
    title: 'Servicios',
    description: 'Acompañamiento técnico, intervención especializada, seguridad industrial y soporte para aplicaciones críticas.',
    href: '/servicios',
    icon: BriefcaseBusiness,
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluciones"
        title="Una propuesta integral entre producto, servicio y acompañamiento técnico"
        description="QTS integra líneas de solución orientadas a confiabilidad, protección de activos y continuidad operativa en aplicaciones industriales de alta exigencia."
        image={assets.products.portfolio}
        ctas={[{ label: 'Ver productos', href: '/productos' }, { label: 'Ver servicios', href: '/servicios' }]}
      />
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Reveal key={solution.title} delay={index * 0.08}>
                  <Link href={solution.href} className="group rounded-[30px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] p-8 transition hover:-translate-y-1 hover:border-[var(--qts-accent)] hover:bg-white hover:shadow-[0_18px_50px_rgba(9,17,31,0.08)]">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]">
                      <Icon className="size-5" />
                    </div>
                    <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-[var(--qts-ink)]">{solution.title}</h2>
                    <p className="mt-4 max-w-xl text-base leading-8 text-[var(--qts-muted)]">{solution.description}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--qts-accent)]">
                      Explorar <ArrowRight className="size-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
