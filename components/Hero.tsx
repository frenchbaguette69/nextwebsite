"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [amount, setAmount] = useState(50000);

  return (
    <section className="bg-[#d3f9d8] relative overflow-hidden min-h-[66vh]">
      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-16 gap-10 relative z-10 text-[#012d2e]">
        {/* Tekst */}
        <div className="w-full max-w-xl ">
  <h1 className="text-3xl md:text-5xl font-bold text-[#0a2e2d] leading-tight">
    Website laten maken? Die wel klanten oplevert
  </h1>

  <p className="text-lg mt-4 text-[#0a2e2d]">
    Laat binnen een paar dagen een snelle, converterende website bouwen.
  </p>

  <ul className="mt-6 space-y-2 text-[#0a2e2d] text-base">
    <li className="flex items-start gap-2">
      <span className="text-xl">✓</span>
      <span>Snel online met een maatwerk website</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-xl">✓</span>
      <span>SEO-teksten geschreven voor conversie</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-xl">✓</span>
      <span>Geen verborgen kosten of abonnementen</span>
    </li>
  </ul>
</div>


        {/* Formulier + afbeelding */}
        <div className="relative w-full max-w-md mt-10 lg:mt-0 lg:ml-[-2rem] md:right-32">
          <div className="bg-[#f9f9eb] shadow-xl rounded-2xl p-6 text-[#0a2e2d] relative z-10">
            <h2 className="text-lg font-semibold mb-2">Hoeveel wil je lenen?</h2>
            <p className="text-sm mb-6">
              Het aanvragen van een zakelijke lening bij Qeld is altijd gratis en geheel vrijblijvend.
            </p>

            <div className="text-5xl font-bold mb-6">
              <span className="text-4xl font-bold mr-2">€</span>
              {amount.toLocaleString("nl-NL")}
            </div>

            <input
              type="range"
              min={5000}
              max={500000}
              step={1000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none focus:outline-none
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-6
                [&::-webkit-slider-thumb]:h-6
                [&::-webkit-slider-thumb]:bg-[#0a2e2d]
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-6
                [&::-moz-range-thumb]:h-6
                [&::-moz-range-thumb]:bg-[#0a2e2d]
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:cursor-pointer"
            />

            <div className="flex justify-between text-sm mt-2">
              <span>€ 5.000</span>
              <span>€ 500.000</span>
            </div>

            <button className="w-full bg-[#0a2e2d] text-white mt-6 py-3 rounded-md font-medium">
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

          {/* Afbeelding */}
        </div>
        <div className="absolute right-0 bottom-5 z-0 hidden md:block">
            <Image
              src="/ondernemer.jpg"
              alt="Ondernemer"
              width={220}
              height={220}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
      </div>
    </section>
  );
}
