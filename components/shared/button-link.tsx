import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  icon?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className,
  icon = false,
}: ButtonLinkProps) {
  const variants = {
    primary:
      'bg-[var(--qts-accent)] text-white shadow-[0_14px_32px_rgba(244,122,32,0.28)] hover:bg-[var(--qts-accent-strong)] focus-visible:ring-[var(--qts-accent)]',
    secondary:
      'border border-white/20 bg-white/8 text-white hover:bg-white/14 focus-visible:ring-white/30',
    ghost:
      'border border-[var(--qts-line)] bg-white text-[var(--qts-ink)] hover:border-[var(--qts-accent)] hover:text-[var(--qts-accent)] focus-visible:ring-[var(--qts-accent)]',
  } as const;

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      {icon ? <ArrowRight className="size-4" /> : null}
    </Link>
  );
}
