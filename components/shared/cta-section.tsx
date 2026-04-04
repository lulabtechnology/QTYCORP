import Image from 'next/image';
import { ButtonLink } from '@/components/shared/button-link';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';

export function CtaSection({
  title,
  description,
  primary,
  secondary,
  background,
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  background: string;
}) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <Image src={background} alt="Fondo industrial" fill className="object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(10,20,38,0.24),rgba(21,37,61,0.12),rgba(255,255,255,0.03))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(244,122,32,0.06),transparent_28%)]" />
      <Container className="relative z-10">
        <Reveal>
          <div className="rounded-[32px] border border-white/16 bg-[linear-gradient(135deg,rgba(18,30,52,0.38),rgba(37,52,80,0.18))] px-8 py-10 text-white shadow-[0_28px_80px_rgba(2,10,26,0.16)] backdrop-blur-[12px] sm:px-12 sm:py-14">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-white/68">Asesoría técnica</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{title}</h2>
              <p className="mt-5 text-lg leading-8 text-white/86">{description}</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={primary.href} icon>
                {primary.label}
              </ButtonLink>
              {secondary ? (
                <ButtonLink href={secondary.href} variant="secondary">
                  {secondary.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
