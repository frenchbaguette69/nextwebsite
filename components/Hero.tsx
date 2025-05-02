'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden "
      aria-label="Website laten maken – digitale ervaring"
    >
      {/* Achtergrondafbeelding */}
      <Image
        src="/herobg.jpg"
        alt="Lachende man als achtergrond"
        fill
        className="object-cover"
        priority
      />

      {/* Donkere overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Tekstlaag */}
      <div className="relative z-20 flex items-center justify-center h-full  max-w-7xl container mx-auto px-2 md:px-0">
        <div className="container mx-auto">
          <h1 className="text-8xl md:text-9xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white/80 via-white/50 to-white/10 mix-blend-overlay drop-shadow-xl">
            Website<br />laten <br />maken
          </h1>
        </div>
      </div>
    </section>
  );
}
