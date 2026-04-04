import Image from 'next/image';
import {
  ClipboardCheck,
  Globe,
  HardHat,
  Layers3,
  LifeBuoy,
  SearchCheck,
  ShieldCheck,
  TriangleAlert,
  Users,
  Wrench,
} from 'lucide-react';
import { IndustriesGrid } from '@/components/sections/industries-grid';
import { CtaSection } from '@/components/shared/cta-section';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { primaryCta, servicesPage } from '@/lib/site-data';
import { assets } from '@/lib/asset-routes';

export const metadata = {
  title: 'Servicios',
  description: 'Servicios industriales especializados de QTS para confiabilidad, seguridad, protección de activos y continuidad operativa.',
};

const featuredHighlights = [
  { title: 'Soporte técnico para aplicaciones críticas', icon: ShieldCheck },
  { title: 'Servicios industriales de alto riesgo', icon: TriangleAlert },
  { title: 'Reparación y recuperación industrial', icon: Wrench },
  { title: 'Protección de superficies y activos', icon: Layers3 },
  { title: 'Atención a necesidades operativas en campo', icon: LifeBuoy },
] as const;

const valueSupportItems = [
  { title: 'Evaluación más clara de requerimientos', icon: SearchCheck },
  { title: 'Mayor confianza en la toma de decisiones', icon: ShieldCheck },
  { title: 'Cumplimiento normativo y seguridad operativa', icon: HardHat },
  { title: 'Respuesta técnica cercana y consultiva', icon: LifeBuoy },
  { title: 'Integración eficiente entre producto y servicio', icon: Layers3 },
] as const;

const processTimeline = [
  {
    number: '01',
    title: 'Comprendemos el contexto operativo y el riesgo asociado',
    description: 'Analizamos el entorno, variables críticas y posibles fallas.',
  },
  {
    number: '02',
    title: 'Evaluamos la aplicación y sus variables críticas',
    description: 'Identificamos puntos de riesgo, opciones técnicas y costos.',
  },
  {
    number: '03',
    title: 'Definimos soluciones técnicas alineadas a desempeño y seguridad',
    description: 'Proponemos alternativas viables, evaluamos y planificamos ejecución.',
  },
  {
    number: '04',
    title: 'Ejecutamos y damos seguimiento',
    description: 'Intervenimos y supervisamos para asegurar resultados y continuidad.',
  },
] as const;

const serviceDifferentials = [
  {
    title: 'Respaldo técnico-comercial sólido',
    description: 'Experiencia consultiva y operativa, con alto nivel técnico en cada proyecto.',
    icon: ShieldCheck,
  },
  {
    title: 'Personal y metodologías certificadas',
    description: 'Equipo calificado y procesos documentados bajo estándares de seguridad.',
    icon: ClipboardCheck,
  },
  {
    title: 'Enfoque consultivo orientado a solución',
    description: 'Abordamos cada proyecto con atención personalizada y diagnóstico preciso.',
    icon: SearchCheck,
  },
  {
    title: 'Atención personalizada y cercana',
    description: 'Priorizamos comunicación directa y soporte en sitio adaptado a cada cliente.',
    icon: Users,
  },
  {
    title: 'Cobertura y visión regional',
    description: 'Conocemos el contexto local y respondemos con eficiencia en el campo.',
    icon: Globe,
  },
] as const;

const featuredServiceCards = [
  {
    title: 'Asesoría técnica y comercial',
    description: 'Acompañamiento en la evaluación de requerimientos, análisis de aplicaciones y definición de alternativas alineadas a la operación.',
    src: '/images/services/cards/advisory.jpg',
  },
  {
    title: 'Soporte para selección de soluciones',
    description: 'Identificación de tecnologías, productos y configuraciones adecuadas para activos y procesos críticos.',
    src: '/images/services/cards/selection.jpg',
  },
  {
    title: 'Procura y acompañamiento de proyectos',
    description: 'Seguimiento cercano durante las etapas de evaluación, gestión comercial y suministro especializado.',
    src: '/images/services/cards/projects.jpg',
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title={servicesPage.hero.title}
        description={servicesPage.hero.description}
        image={servicesPage.hero.image}
        ctas={[{ label: 'Solicitar asesoría técnica', href: '/contacto' }, { label: 'Contactar a QTS', href: '/contacto#formulario' }]}
        imageOpacityClassName="opacity-80"
        overlayClassName="bg-[linear-gradient(120deg,rgba(14,24,44,0.78)_0%,rgba(18,31,54,0.68)_42%,rgba(26,42,67,0.34)_100%)]"
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Introducción"
                  title="Más que suministro: soporte técnico y servicios industriales especializados"
                  description={servicesPage.intro}
                />
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--qts-muted)]">{servicesPage.intro2}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative min-h-[470px] overflow-hidden rounded-[32px] border border-[var(--qts-line)] shadow-[0_20px_70px_rgba(9,17,31,0.1)]">
                <Image src="/images/services/intro-operador.jpg" alt="Operación industrial monitoreada por QTS" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Categorías de servicios"
              title="Servicios diseñados para agregar valor en cada etapa de la operación"
              description="Capacidades orientadas a confiabilidad, seguridad, cumplimiento normativo y acompañamiento técnico-comercial cercano."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {featuredServiceCards.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <article className="flex h-full flex-col overflow-hidden rounded-[30px] border border-[var(--qts-line)] bg-white shadow-[0_18px_52px_rgba(9,17,31,0.08)]">
                  <div className="relative aspect-[16/7] overflow-hidden">
                    <Image src={service.src} alt={service.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-[1.95rem] font-semibold leading-tight tracking-[-0.035em] text-[var(--qts-ink)]">{service.title}</h3>
                    <p className="mt-4 text-base leading-8 text-[var(--qts-muted)]">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal>
              <div className="relative min-h-[640px] overflow-hidden rounded-[34px] border border-[var(--qts-line)] shadow-[0_22px_72px_rgba(9,17,31,0.1)]">
                <Image
                  src={assets.services.featured}
                  alt="Capacidades de servicio enfocadas en seguridad y continuidad operativa"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <SectionHeading
                  eyebrow="Servicios destacados"
                  title="Capacidades orientadas a seguridad, desempeño y continuidad operativa"
                  description="Un enfoque que combina acompañamiento técnico, ejecución especializada y control documentado para aplicaciones de alta exigencia."
                />
                <div className="mt-8 grid gap-4">
                  {featuredHighlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Reveal key={item.title} delay={index * 0.05}>
                        <div className="flex items-center gap-4 rounded-[24px] border border-[var(--qts-line)] bg-[var(--qts-ink-soft)] px-6 py-5 shadow-[0_12px_34px_rgba(9,17,31,0.04)]">
                          <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-[22px] bg-[rgba(244,122,32,0.12)] text-[var(--qts-accent)]">
                            <Icon className="size-8" />
                          </span>
                          <p className="text-[1.15rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--qts-ink)] sm:text-[1.35rem]">{item.title}</p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[var(--qts-navy)] py-24 text-white">
        <div className="absolute inset-0">
          <Image src={assets.services.approach} alt="Soporte técnico y servicios industriales" fill className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,34,0.84)_0%,rgba(12,22,39,0.72)_36%,rgba(15,24,43,0.3)_66%,rgba(15,24,43,0.18)_100%)]" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <SectionHeading
                eyebrow="Cómo agregamos valor"
                title="Soporte técnico y servicios que reducen riesgo y mejoran el desempeño operativo"
                description="Ayudamos a nuestros clientes a reducir incertidumbre, optimizar la selección de soluciones y ejecutar con mayor seguridad en aplicaciones críticas, donde el desempeño del activo y la continuidad operativa son clave."
                light
              />
            </Reveal>
            <div className="mt-10 space-y-4">
              {valueSupportItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <div className="flex items-center gap-4 rounded-[24px] border border-white/16 bg-[rgba(255,255,255,0.08)] px-5 py-4 shadow-[0_18px_40px_rgba(3,9,20,0.14)] backdrop-blur-[8px]">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[rgba(244,122,32,0.24)] bg-[rgba(244,122,32,0.14)] text-[var(--qts-accent)]">
                        <Icon className="size-5" />
                      </span>
                      <p className="text-[1.1rem] font-semibold tracking-[-0.02em] text-white/92">{item.title}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <p className="mt-8 text-sm leading-7 text-white/72 sm:text-base">
              Aplicaciones críticas · Soporte técnico especializado · Enfoque en seguridad y continuidad
            </p>
          </div>
        </Container>
      </section>


      <IndustriesGrid />

      <section className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <div className="grid gap-8 xl:grid-cols-2 xl:items-start">
            <Reveal>
              <article className="overflow-hidden rounded-[34px] border border-[var(--qts-line)] bg-white shadow-[0_26px_84px_rgba(9,17,31,0.08)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--qts-accent)]">Enfoque de trabajo</p>
                  <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--qts-ink)] sm:text-4xl">
                    Cómo trabajamos para reducir riesgo y asegurar resultados en campo
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--qts-muted)] sm:text-lg">
                    Analizamos cada aplicación desde el contexto operativo real del cliente, identificando riesgos, variables críticas y alternativas técnicas viables antes de ejecutar cualquier solución.
                  </p>
                </div>
                <div className="relative mt-8 aspect-[16/8] overflow-hidden border-y border-[var(--qts-line)]">
                  <Image src={assets.services.industries} alt="Equipo técnico evaluando una aplicación industrial" fill className="object-cover" />
                </div>
                <div className="space-y-6 px-8 py-8 sm:px-10 sm:py-10">
                  {processTimeline.map((step, index) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="flex w-12 shrink-0 flex-col items-center">
                        <span className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--qts-accent)] text-base font-semibold text-white shadow-[0_14px_30px_rgba(244,122,32,0.22)]">
                          {step.number}
                        </span>
                        {index !== processTimeline.length - 1 ? <span className="mt-2 h-full w-px bg-[var(--qts-accent)]/30" /> : null}
                      </div>
                      <div className="pb-2">
                        <h3 className="text-[1.35rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--qts-ink)]">{step.title}</h3>
                        <p className="mt-2 text-base leading-7 text-[var(--qts-muted)]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="rounded-[34px] border border-[var(--qts-line)] bg-white px-8 py-8 shadow-[0_26px_84px_rgba(9,17,31,0.08)] sm:px-10 sm:py-10">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--qts-accent)]">Diferencial de servicio</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--qts-ink)] sm:text-4xl">
                  Por qué QTS es un aliado técnico confiable para aplicaciones críticas
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--qts-muted)] sm:text-lg">
                  Combinamos respaldo técnico-comercial, experiencia en campo y metodologías especializadas para ejecutar con seguridad y cumplimiento en entornos exigentes.
                </p>
                <div className="mt-8 divide-y divide-[var(--qts-line)]">
                  {serviceDifferentials.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                        <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-[20px] bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]">
                          <Icon className="size-7" />
                        </span>
                        <div>
                          <h3 className="text-[1.28rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--qts-ink)]">{item.title}</h3>
                          <p className="mt-2 text-base leading-7 text-[var(--qts-muted)]">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection {...primaryCta} />
    </>
  );
}
