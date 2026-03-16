import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--qts-cream)] text-[var(--qts-ink)]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
