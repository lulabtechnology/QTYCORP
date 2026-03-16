import { cn } from '@/lib/utils';

export function SurfaceCard({ children, className, dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <div
      className={cn(
        'rounded-[28px] border p-6 shadow-[0_20px_70px_rgba(9,17,31,0.08)] transition-all duration-300',
        dark
          ? 'border-white/10 bg-white/6 text-white backdrop-blur-sm'
          : 'border-[var(--qts-line)] bg-white text-[var(--qts-ink)]',
        className,
      )}
    >
      {children}
    </div>
  );
}
