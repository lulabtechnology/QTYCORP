import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p className={cn('mb-4 text-xs font-semibold uppercase tracking-[0.32em]', light ? 'text-white/60' : 'text-[var(--qts-accent)]')}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn('text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[2.9rem]', light ? 'text-white' : 'text-[var(--qts-ink)]')}>
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-5 max-w-2xl text-base leading-8 sm:text-lg', light ? 'text-white/72' : 'text-[var(--qts-muted)]', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
