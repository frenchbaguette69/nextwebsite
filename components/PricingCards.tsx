"use client";
import { TrendingUp } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function PricingCards() {
  return (
    <section className="bg-[#0a0a0a] text-white px-6 py-24 rounded-b-[60px] rounded-t-[60px]">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Onze pakketten</h2>
        <p className="text-gray-400 text-lg">
          Waar marketingbedrijven minimaal 500 tot 5000 euro per maand vragen. Maken wij gebruik van AI door het slim in te zetten voor jouw website. Zo bespaar je op marketing en is jouw website veel productiever
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Basis Plan */}
        <div className="bg-[#111] border border-[#3dd0f2] rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Basis</h3>
            <p className="text-sm text-gray-400 mb-6">Perfect voor starters en kleine ondernemers.</p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>✓ Website of webshop</li>
              <li>✓ Domeinnaam inbegrepen</li>
              <li>✓ AI SEO: 5 blogs per maand</li>
              <li>✓ Keywordresearch door AI</li>
            </ul>
          </div>
          <div className="mt-8 border-t border-white/10 pt-4">
            <p className="text-sm text-gray-400 mb-1">Eenmalig: <span className="font-semibold text-white">€ 599,-</span> excl. btw</p>
            <p className="text-2xl font-bold text-white">€ 79<span className="text-sm font-normal text-gray-400"> / maand</span></p>
          </div>
        </div>

        {/* Standaard Plan met BackgroundGradient en badge */}
        <BackgroundGradient className="rounded-xl p-6 bg-[#0a0a0a] flex flex-col justify-between shadow-xl relative h-full">
          <div>
            <div className="absolute top-4 right-4 bg-[#3dd0f2] text-black text-xs font-bold px-3 py-1 rounded-full z-20">
              Meest gekozen
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Standaard</h3>
            <p className="text-sm text-gray-400 mb-6">Voor bedrijven die structureel willen groeien.</p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>✓ Website of webshop</li>
              <li>✓ Domeinnaam inbegrepen</li>
              <li>✓ AI SEO: 15 blogs per maand</li>
              <li>✓ Keywordresearch door AI</li>
              <li>✓ Kwartaal stijgingsrapport</li>
            </ul>
          </div>
          <div className="mt-8 border-t border-white/10 pt-4">
            <p className="text-sm text-gray-400 mb-1">Eenmalig: <span className="font-semibold text-white">€ 799,-</span> excl. btw</p>
            <p className="text-2xl font-bold text-white">€ 149<span className="text-sm font-normal text-gray-400"> / maand</span></p>
          </div>
        </BackgroundGradient>

        {/* Premium Plan met "Beste optie" badge */}
        <div className="bg-[#111] border border-[#3dd0f2] rounded-xl p-6 flex flex-col justify-between relative">
          <div>
          <div className="absolute top-4 right-4 bg-[#3dd0f2] text-black text-xs font-bold px-3 py-1 rounded-full z-20">
              Beste optie
            </div>
            <div className="flex items-center ">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <TrendingUp className="w-6 h-6 text-[#3dd0f2]" />
            </div>
            
            <p className="text-sm text-gray-400 mb-6">
              Maximale zichtbaarheid & support, zonder beperkingen.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>✓ Website of webshop</li>
              <li>✓ Domeinnaam inbegrepen</li>
              <li>✓ AI SEO: 1 blog per dag</li>
              <li>✓ Keywordresearch & concurrentie analyse</li>
              <li>✓ Maandelijks stijgingsrapport</li>
              <li>✓ 24/7 support</li>
              <li>✓ Eigen CRM & custom design</li>
            </ul>
          </div>
          <div className="mt-8 border-t border-white/10 pt-4">
            <p className="text-sm text-gray-400 mb-1">
              Eenmalig: <span className="font-semibold text-white">€ 1299,-</span> excl. btw
            </p>
            <p className="text-2xl font-bold text-white">
              € 225<span className="text-sm font-normal text-gray-400"> / maand</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
