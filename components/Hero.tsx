"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#d3f9d8] relative overflow-hidden min-h-[66vh]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-16 gap-10 relative z-10">
        {/* Tekst */}
        <div className="w-full max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2e2d] leading-tight">
            Laat jouw bedrijf <br /> groeien met Qeld
          </h1>
          <p className="text-lg mt-4 text-[#0a2e2d]">
            Vraag een zakelijke financiering aan tot € 500.000
          </p>
          <ul className="mt-6 space-y-2 text-[#0a2e2d]">
            <li>✔️ Snel en eenvoudig aanvraagproces</li>
            <li>✔️ Lening binnen 24 uur uitbetaald</li>
            <li>✔️ Geen extra kosten bij vervroegde aflossing</li>
          </ul>
          <div className="mt-6 inline-flex items-center space-x-3 bg-[#e6fbe5] px-4 py-2 rounded-full text-sm font-medium text-[#0a2e2d]">
            <span>Uitstekend</span>
            <span>4.8 uit 5</span>
            <span className="text-green-600">★ Trustpilot</span>
          </div>
        </div>

        {/* Form + image */}
        <div className="relative w-full max-w-md mx-auto mt-10 lg:mt-0">
          <div className="bg-[#f9f9eb] shadow-lg rounded-xl p-6 text-[#0a2e2d] relative z-10">
            <h2 className="text-lg font-semibold mb-2">Hoeveel wil je lenen?</h2>
            <p className="text-sm mb-6">
              Het aanvragen van een zakelijke lening bij Qeld is altijd gratis en geheel vrijblijvend.
            </p>

            <div className="text-4xl font-bold mb-4">€ 50.000</div>
            <input type="range" min="5000" max="500000" defaultValue="50000" className="w-full" />
            <div className="flex justify-between text-sm mt-2">
              <span>€ 5.000</span>
              <span>€ 500.000</span>
            </div>

            <button className="w-full bg-[#0a2e2d] text-white mt-6 py-2 rounded-md font-medium">
              Volgende
            </button>

            <p className="text-xs text-[#0a2e2d] mt-4">
              Qeld verwerkt je persoonsgegevens in overeenstemming met de AVG en ons{" "}
              <Link href="/privacybeleid" className="underline">
                privacybeleid
              </Link>
              .
            </p>
          </div>

          {/* Ondernemer afbeelding - steekt onder wit blok uit */}
          <div className="absolute right-0 translate-x-1/2 bottom-[-3rem] sm:bottom-[-3rem] sm:right-4 lg:right-[-7rem] lg:bottom-[-5rem] z-0">
            <Image
              src="/ondernemer.jpg"
              alt="Ondernemer"
              width={220}
              height={220}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
