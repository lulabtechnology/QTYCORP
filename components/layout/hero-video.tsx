'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { assets } from '@/lib/asset-routes';

export function HeroVideo() {
  const [poster, setPoster] = useState(assets.posters.homeHeroDesktop);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const updatePoster = () => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        setPoster(assets.posters.homeHeroMobile);
        return;
      }
      if (window.matchMedia('(max-width: 1023px)').matches) {
        setPoster(assets.posters.homeHeroTablet);
        return;
      }
      setPoster(assets.posters.homeHeroDesktop);
    };

    updatePoster();
    window.addEventListener('resize', updatePoster);
    return () => window.removeEventListener('resize', updatePoster);
  }, []);

  const fallback = useMemo(
    () => (
      <Image src={poster} alt="Fondo hero industrial" fill priority className="object-cover" />
    ),
    [poster],
  );

  return (
    <div className="absolute inset-0">
      {hasError ? (
        fallback
      ) : (
        <video
          key={poster}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          onError={() => setHasError(true)}
        >
          <source src={assets.videos.homeHeroMobile} media="(max-width: 767px)" type="video/mp4" />
          <source src={assets.videos.homeHeroTablet} media="(max-width: 1023px)" type="video/mp4" />
          <source src={assets.videos.homeHeroDesktop} media="(min-width: 1024px)" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,122,32,0.18),transparent_34%),linear-gradient(110deg,rgba(10,17,31,0.88)_0%,rgba(15,24,43,0.74)_40%,rgba(19,32,55,0.55)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,20,34,0.18)_0%,rgba(11,20,34,0.04)_40%,rgba(11,20,34,0.5)_100%)]" />
    </div>
  );
}
