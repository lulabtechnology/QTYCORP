import Image from 'next/image';
import { ButtonLink } from '@/components/shared/button-link';
import { Container } from '@/components/shared/container';
import { cn } from '@/lib/utils';

export function PageHero({
  eyebrow,
  title,
  description,
  body,
  image,
  ctas,
  imageOpacityClassName,
  overlayClassName,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  body?: string;
  image: string;
  ctas?: Array<{ label: string; href: string }>;
  imageOpacityClassName?: string;
  overlayClassName?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--qts-navy)] pt-30 text-white">
      <div className={cn('absolute inset-0 opacity-60', imageOpacityClassName)}>
        <Image src={image} alt="Fondo industrial de QTS" fill className="object-cover" priority />
      </div>
      <div
        className={cn(
          'absolute inset-0 bg-[linear-gradient(120deg,rgba(14,24,44,0.92)_0%,rgba(18,31,54,0.86)_44%,rgba(26,42,67,0.55)_100%)]',
          overlayClassName,
        )}
      />
      <Container className="relative z-10 py-24 sm:py-28">
        <div className="max-w-4xl">
          {eyebrow ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-white/58">{eyebrow}</p> : null}
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.65rem]">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">{description}</p>
          {body ? <p className="mt-5 max-w-3xl text-base leading-8 text-white/68">{body}</p> : null}
          {ctas?.length ? (
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={ctas[0].href} icon>
                {ctas[0].label}
              </ButtonLink>
              {ctas[1] ? (
                <ButtonLink href={ctas[1].href} variant="secondary">
                  {ctas[1].label}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
