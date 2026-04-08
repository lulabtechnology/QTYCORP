import Image from 'next/image';
import { assets } from '@/lib/asset-routes';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';

export function ClientsStrip() {
  return (
    <section className="bg-white pt-0 pb-24 sm:pb-28">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[28px] border border-[rgba(31,44,70,0.08)] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div className="relative aspect-[857/272] w-full bg-white">
              <Image
                src={assets.home.clients}
                alt="Empresas que confían en Quality Techno Services"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
