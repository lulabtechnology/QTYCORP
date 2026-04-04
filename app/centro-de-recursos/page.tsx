import { PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { Download, FileText } from 'lucide-react';
import { ResourceForm } from '@/components/forms/resource-form';
import { CtaSection } from '@/components/shared/cta-section';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { primaryCta, resourceCatalogs, resourcePage } from '@/lib/site-data';
import { assets } from '@/lib/asset-routes';

export const metadata = {
  title: 'Centro de Recursos',
  description: 'Catálogos, material de referencia y solicitudes de información técnica para soluciones industriales QTS.',
};

const repairVideos = [
  {
    title: 'Ejemplo de reparación industrial',
    description: 'Registro visual de un proceso real de recuperación y trabajo especializado sobre componentes industriales.',
    type: 'local' as const,
    src: assets.resources.videos.repairExample1,
  },
  {
    title: 'Proceso de reparación y recuperación',
    description: 'Video de referencia para mostrar el tipo de intervención, evaluación técnica y ejecución aplicada.',
    type: 'youtube' as const,
    src: 'https://www.youtube-nocookie.com/embed/kX9_wuq_gtU',
  },
  {
    title: 'Aplicación técnica en campo',
    description: 'Material complementario para ilustrar acabados, procedimiento y resultados en trabajos de reparación.',
    type: 'youtube' as const,
    src: 'https://www.youtube-nocookie.com/embed/fGtJ9OwuH6U',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title={resourcePage.hero.title}
        description={resourcePage.hero.description}
        image={resourcePage.hero.image}
        imageOpacityClassName="opacity-76"
        overlayClassName="bg-[linear-gradient(120deg,rgba(12,23,44,0.82)_0%,rgba(15,29,53,0.72)_44%,rgba(20,35,57,0.38)_100%)]"
        ctas={[
          { label: 'Explorar catálogos', href: '#catalogos' },
          { label: 'Solicitar información técnica', href: '#solicitud' },
        ]}
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading title="Información útil para una evaluación más clara" description={resourcePage.intro} />
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--qts-muted)]">{resourcePage.intro2}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative min-h-[460px] overflow-hidden rounded-[32px] border border-[var(--qts-line)] shadow-[0_20px_70px_rgba(9,17,31,0.1)]">
                <Image src={assets.resources.catalogs} alt="Catálogos y materiales disponibles" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Videos de ejemplo"
              title="Reparaciones y procesos aplicados en video"
              description="Antes de revisar los catálogos, puede ver algunos ejemplos visuales de reparación, recuperación y trabajo técnico aplicado en componentes industriales."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {repairVideos.map((video, index) => (
              <Reveal key={video.title} delay={index * 0.06}>
                <article className="group overflow-hidden rounded-[30px] border border-[var(--qts-line)] bg-white shadow-[0_18px_54px_rgba(9,17,31,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(9,17,31,0.12)]">
                  <div className="relative aspect-video overflow-hidden bg-[var(--qts-navy)]">
                    {video.type === 'local' ? (
                      <video
                        className="h-full w-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                      >
                        <source src={video.src} type="video/mp4" />
                        Su navegador no soporta video HTML5.
                      </video>
                    ) : (
                      <iframe
                        className="h-full w-full"
                        src={video.src}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    )}
                    <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[rgba(7,18,36,0.66)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
                      <PlayCircle className="size-4" />
                      Video {index + 1}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--qts-ink)]">{video.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--qts-muted)]">{video.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="catalogos" className="bg-[var(--qts-ink-soft)] py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Catálogos disponibles"
              title="Explore una selección de materiales de consulta general"
              description="Una navegación corta, elegante y pensada para orientar la conversación comercial y técnica desde un primer nivel de información."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {resourceCatalogs.map((catalog, index) => (
              <Reveal key={catalog.title} delay={index * 0.06}>
                <a href={catalog.href} className="group flex h-full items-start gap-4 rounded-[28px] border border-[var(--qts-line)] bg-white p-6 shadow-[0_14px_44px_rgba(9,17,31,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(9,17,31,0.1)]">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(244,122,32,0.1)] text-[var(--qts-accent)]">
                    <FileText className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xl font-semibold tracking-[-0.03em] text-[var(--qts-ink)]">{catalog.title}</span>
                    <span className="mt-3 block text-sm leading-7 text-[var(--qts-muted)]">{catalog.description}</span>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--qts-accent)]">
                      Ver / Descargar <Download className="size-4" />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="solicitud" className="bg-[var(--qts-navy)] py-24 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Solicitud de información técnica"
                  title="¿Necesita información más específica?"
                  description="Si requiere fichas técnicas, hojas de datos, documentación por aplicación o información complementaria para evaluación técnica o comercial, nuestro equipo puede apoyarle con la información adecuada según su requerimiento."
                  light
                />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {resourcePage.requestOptions.map((item, index) => (
                    <Reveal key={item} delay={index * 0.05}>
                      <div className="rounded-[22px] border border-white/10 bg-white/6 px-5 py-4 text-sm font-semibold text-white/84">{item}</div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ResourceForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection {...primaryCta} />
    </>
  );
}
