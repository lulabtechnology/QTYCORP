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
        <Image src={background} alt="Fondo industrial" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,27,49,0.94),rgba(31,44,70,0.86),rgba(39,55,84,0.88))]" />
      <Container className="relative z-10">
        <Reveal>
          <div className="rounded-[32px] border border-white/12 bg-white/6 px-8 py-10 text-white shadow-[0_28px_80px_rgba(2,10,26,0.24)] backdrop-blur-md sm:px-12 sm:py-14">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-white/54">Asesoría técnica</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{title}</h2>
              <p className="mt-5 text-lg leading-8 text-white/74">{description}</p>
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
