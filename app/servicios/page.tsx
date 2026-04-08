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
import { primaryCta, servicesPage } from '@/lib/site-data';
import { assets } from '@/lib/asset-routes';

export const metadata = {
  title: 'Servicios',
  description: 'Servicios industriales especializados de QTS para confiabilidad, seguridad, protección de activos y continuidad operativa.',
};

const categoryCards = [
  {
    title: 'Evaluación técnica de aplicaciones',
    description: 'Analizamos condiciones de operación y variables críticas del proceso.',
    src: '/images/services/cards-v2/applications.jpg',
  },
  {
    title: 'Selección e integración de soluciones',
    description: 'Apoyamos la selección de productos, materiales y alternativas técnicas.',
    src: '/images/services/cards-v2/selection.jpg',
  },
  {
    title: 'Procura y acompañamiento de proyectos',
    description: 'Brindamos asistencia técnica-comercial con gestión de compra y ejecución coordinada.',
    src: '/images/services/cards-v2/projects.jpg',
  },
  {
    title: 'Servicios industriales especializados en campo',
    description: 'Ejecutamos actividades en altura, espacios confinados y entornos exigentes.',
    src: '/images/services/cards-v2/field.jpg',
  },
  {
    title: 'Recubrimientos y reparación de activos',
    description: 'Aplicamos soluciones para proteger, recuperar e incrementar la vida útil.',
    src: '/images/services/cards-v2/coatings.jpg',
  },
  {
    title: 'Capacitación técnica y soporte al cliente',
    description: 'Capacitamos personal y reforzamos buenas prácticas operativas.',
    src: '/images/services/cards-v2/training.jpg',
  },
] as const;

const featuredHighlights = [
  {
    title: 'Soporte técnico para aplicaciones críticas',
    description: 'Asistencia técnica especializada para procesos críticos.',
    icon: ShieldCheck,
  },
  {
    title: 'Intervención en procesos y entornos industriales de alto riesgo',
    description: 'Ejecución segura bajo condiciones de riesgo elevado.',
    icon: TriangleAlert,
  },
  {
    title: 'Reparación y recuperación industrial',
    description: 'Mantenimiento y restauración de equipos industriales.',
    icon: Wrench,
  },
  {
    title: 'Protección de superficies y activos',
    description: 'Revestimientos y recubrimientos anticorrosivos.',
    icon: Layers3,
  },
  {
    title: 'Respaldo crítico en campo, bajo condiciones exigentes',
    description: 'Atención operativa documentada en terreno.',
    icon: LifeBuoy,
  },
] as const;

const valueSupportItems = [
  {
    title: 'Evaluación más clara de requerimientos',
    description: 'Mejor definición de requerimientos.',
    icon: ClipboardCheck,
  },
  {
    title: 'Mayor confianza en la toma de decisiones',
    description: 'Reducción de incertidumbre con orientación técnica.',
    icon: SearchCheck,
  },
  {
    title: 'Cumplimiento normativo y seguridad operativa',
    description: 'Mejora en cumplimiento normativo y seguridad operativa.',
    icon: HardHat,
  },
  {
    title: 'Respuesta técnica cercana y consultiva',
    description: 'Asesoría especializada cuando se necesite.',
    icon: Users,
  },
  {
    title: 'Integración eficiente entre producto y servicio',
    description: 'Mayor optimización entre soluciones y procesos.',
    icon: Layers3,
  },
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

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow=""
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
              <div className="max-w-2xl">
                <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--qts-ink)] sm:text-4xl lg:text-[3rem]">
                  Más que suministro: soporte técnico y servicios industriales especializados
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-[var(--qts-muted)] sm:text-base">
                  <p>{servicesPage.intro}</p>
                  <p>{servicesPage.intro2}</p>
                </div>
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
            <div className="max-w-4xl">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--qts-ink)] sm:text-4xl lg:text-[3rem]">
                Servicios diseñados para agregar valor en cada etapa de la operación
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--qts-muted)] sm:text-lg">
                Capacidades orientadas a confiabilidad, seguridad, cumplimiento normativo y acompañamiento técnico-comercial cercano.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid auto-rows-fr gap-6 xl:grid-cols-3">
            {categoryCards.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.04}>
                <article className="flex h-full flex-col overflow-hidden rounded-[30px] border border-[var(--qts-line)] bg-white shadow-[0_18px_52px_rgba(9,17,31,0.08)]">
                  <div className="relative aspect-[16/7] overflow-hidden">
                    <Image src={service.src} alt={service.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="text-[1.7rem] font-semibold leading-[1.1] tracking-[-0.04em] text-[var(--qts-ink)] sm:text-[1.9rem]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-[var(--qts-muted)] sm:text-[1.03rem]">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#32406a] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(162,171,255,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,182,120,0.15),transparent_26%),linear-gradient(180deg,#4a4d7a_0%,#3b4b79_34%,#2f3e67_100%)]" />
        <div className="absolute inset-0 opacity-30 [background:linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="relative min-h-[620px] overflow-hidden rounded-[34px] border border-white/12 bg-[rgba(255,255,255,0.06)] shadow-[0_28px_84px_rgba(6,10,22,0.28)]">
                <Image
                  src={assets.services.featured}
                  alt="Capacidades de servicio enfocadas en seguridad y continuidad operativa"
                  fill
                  className="object-cover object-left"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(43,53,87,0.12)_0%,rgba(43,53,87,0.12)_48%,rgba(43,53,87,0.45)_100%)]" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="max-w-3xl">
                <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[3rem]">
                  Especialización en confiabilidad, seguridad y continuidad operativa
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-[1.1rem]">
                  Respaldo técnico y ejecución documentada para aplicaciones críticas de alta exigencia.
                </p>
                <div className="mt-8 space-y-4">
                  {featuredHighlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Reveal key={item.title} delay={index * 0.05}>
                        <div className="flex items-center gap-5 rounded-[24px] border border-white/14 bg-[rgba(31,39,66,0.55)] px-6 py-5 shadow-[0_20px_44px_rgba(8,12,24,0.22)] backdrop-blur-[5px]">
                          <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-[22px] border border-[rgba(244,122,32,0.24)] bg-[rgba(244,122,32,0.08)] text-[var(--qts-accent)]">
                            <Icon className="size-8" />
                          </span>
                          <div>
                            <h3 className="text-[1.32rem] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[1.55rem]">{item.title}</h3>
                            <p className="mt-2 text-base leading-7 text-white/78">{item.description}</p>
                          </div>
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

      <section className="relative overflow-hidden bg-[#f8f7f5] py-24">
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_top_left,rgba(217,221,232,0.34),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(228,230,236,0.4),transparent_30%),linear-gradient(180deg,#f8f7f5_0%,#faf9f7_100%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(28,44,72,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(28,44,72,0.03)_1px,transparent_1px)] [background-size:42px_42px]" />
        <Container className="relative z-10">
          <div className="max-w-5xl">
            <Reveal>
              <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--qts-ink)] sm:text-4xl lg:text-[3.2rem]">
                Soporte técnico y servicios que reducen riesgo y mejoran el desempeño operativo
              </h2>
              <p className="mt-6 max-w-4xl text-base leading-8 text-[var(--qts-muted)] sm:text-[1.1rem]">
                Ayudamos a nuestros clientes a reducir incertidumbre, optimizar la selección de soluciones y ejecutar con mayor seguridad en aplicaciones críticas, donde el desempeño del activo y la continuidad operativa son clave.
              </p>
            </Reveal>
            <div className="mt-10 space-y-4">
              {valueSupportItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <div className="flex items-center gap-5 rounded-[24px] border border-[rgba(24,35,58,0.08)] bg-[rgba(255,255,255,0.78)] px-7 py-5 shadow-[0_16px_34px_rgba(15,23,42,0.06)] backdrop-blur-[3px]">
                      <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-[22px] bg-[rgba(226,233,241,0.8)] text-[#7993af]">
                        <Icon className="size-8" strokeWidth={1.9} />
                      </span>
                      <div>
                        <h3 className="text-[1.18rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--qts-ink)] sm:text-[1.45rem]">{item.title}</h3>
                        <p className="mt-1.5 text-base leading-7 text-[var(--qts-muted)]">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <p className="mt-8 text-sm leading-7 text-[var(--qts-muted)] sm:text-base">
              Aplicaciones críticas · Soporte técnico especializado · Enfoque en seguridad y continuidad
            </p>
          </div>
        </Container>
      </section>

      <IndustriesGrid />

      <section className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <div className="grid gap-8 xl:grid-cols-2 xl:items-stretch">
            <Reveal>
              <article className="flex h-full flex-col rounded-[34px] border border-[var(--qts-line)] bg-white px-8 py-8 shadow-[0_26px_84px_rgba(9,17,31,0.08)] sm:px-10 sm:py-10">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--qts-accent)]">Enfoque de trabajo</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--qts-ink)] sm:text-4xl">
                  Cómo trabajamos para reducir riesgo y asegurar resultados en campo
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--qts-muted)] sm:text-lg">
                  Analizamos cada aplicación desde el contexto operativo real del cliente, identificando riesgos, variables críticas y alternativas técnicas viables antes de ejecutar cualquier solución.
                </p>
                <div className="mt-9 space-y-6">
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
              <article className="flex h-full flex-col rounded-[34px] border border-[var(--qts-line)] bg-white px-8 py-8 shadow-[0_26px_84px_rgba(9,17,31,0.08)] sm:px-10 sm:py-10">
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
