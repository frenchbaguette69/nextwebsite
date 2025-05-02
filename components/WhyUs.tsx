'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const punten = [
  {
    title: 'Waarom door ons een website laten maken?',
    text: 'Wij bouwen maatwerk websites met Next.js: supersnel, veilig en schaalbaar. Onze focus ligt op design, performance en SEO. Zo krijg jij een professionele website die écht resultaat oplevert.',
  },
  {
    title: 'Voor wie werken we?',
    text: 'Wij helpen vooral kleine en middelgrote bedrijven, zzp’ers en startups die serieus willen investeren in hun online groei. Met slimme techniek en heldere communicatie zorgen we voor impact.',
  },
  {
    title: 'Conversiegerichte webshops',
    text: 'We ontwikkelen moderne webshops op maat. Razendsnel, eenvoudig te beheren en geoptimaliseerd voor conversie. Inclusief koppelingen met betaalproviders, voorraadbeheer en marketingtools.',
  },
  {
    title: 'SEO en online adverteren',
    text: 'Van zoekmachineoptimalisatie (SEO) tot Google Ads en social media campagnes: wij zorgen ervoor dat jouw bedrijf gevonden wordt door de juiste doelgroep op het juiste moment.',
  },
  {
    title: 'Snelle oplevering',
    text: 'Door onze efficiënte aanpak kunnen we jouw website vaak al binnen 5 tot 10 werkdagen live zetten. Wijzigingen worden binnen 24 uur verwerkt. Snel, duidelijk en betrouwbaar.',
  },
  {
    title: 'Volledige controle zonder WordPress',
    text: 'Geen standaard CMS zoals WordPress. Jij krijgt een gebruiksvriendelijke Next.js-omgeving waarin je zelf je content beheert. Flexibel, veilig en helemaal afgestemd op jouw wensen.',
  },
];

export default function WaaromWij() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="px-6 md:px-12 py-24 rounded-b-[60px] relative z-10"
      aria-labelledby="waarom-wij-heading"
    >
      <div className="container mx-auto max-w-7xl px-2 md:px-0">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Linkerzijde met tekst */}
          <div className="flex-1">
            <h2 id="waarom-wij-heading" className="text-3xl md:text-4xl font-bold mb-12">
              Waarom kiezen voor Next-Website?
            </h2>

            <dl className="space-y-6">
              {punten.map((punt, index) => {
                const isOpen = index === activeIndex;
                return (
                  <div key={index} className="border-b border-white/10 pb-4">
                    <dt>
                      <button
                        onClick={() => toggle(index)}
                        aria-expanded={isOpen}
                        aria-controls={`content-${index}`}
                        className="w-full flex items-start justify-between text-left gap-4 group"
                      >
                        <span className="text-lg md:text-xl font-semibold">
                          {punt.title}
                        </span>
                        <span className="text-[#3dd0f2]">
                          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </span>
                      </button>
                    </dt>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.dd
                          id={`content-${index}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-400 text-base md:text-lg pl-1 pr-2 overflow-hidden mt-3"
                        >
                          {punt.text}
                        </motion.dd>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* Rechterzijde met afbeelding */}
          <div className="hidden md:block md:w-[40%] relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/images/waarom.jpg"
              alt="Waarom kiezen voor ons"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
