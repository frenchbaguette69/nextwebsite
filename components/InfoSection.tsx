import Image from 'next/image';
import { FaCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';

export default function InfoSection() {
  return (
    <section className="-mt-32 bg-[#0a0a0a] rounded-t-[60px] py-24 relative z-20 rounded-b-[60px]">
      <div className="max-w-7xl mx-auto text-white text-center">
        {/* Intro text */}
        <h2 className="uppercase text-sm tracking-widest text-gray-400 mb-4">
          Onze diensten
        </h2>
        <p className="text-lg md:text-4xl font-semibold leading-tight mb-12 px-2 md:px-0">
        Bij NEXT bieden wij professionele websites, conversiegerichte webshops en effectieve online marketing. 
        Van SEO tot Google Ads en Facebook campagnes wij helpen bedrijven online groeien met resultaatgerichte oplossingen.
        </p>
        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6">
  {/* Card 1 */}
  <div className="bg-[#111] border border-[#222] rounded-xl p-6 flex flex-col gap-4 text-left">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">Strategie en Design</h3>
      <FaPaintBrush className="text-white/60 w-5 h-5" />
    </div>
    <p className="text-sm text-gray-400">
      Wij leveren digitale oplossingen zoals webdesign, mobile app design, landingspagina's,
      illustraties en animaties – alles om de online zichtbaarheid en waarde van jouw merk te vergroten.
    </p>
    <div className="relative w-full h-40 mt-auto rounded-lg overflow-hidden">
      <Image
        src="/info1.png"
        alt="Strategie en webdesign"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-[#111] border border-[#222] rounded-xl p-6 flex flex-col gap-4 text-left">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">Ontwikkeling en Implementatie</h3>
      <FaCode className="text-white/60 w-5 h-5" />
    </div>
    <p className="text-sm text-gray-400">
      Wij bouwen websites en webshops met moderne technologieën zoals React, Webflow,
      WordPress, Shopify, Flutter, en AI. Geschikt voor iOS, Android en maatwerkoplossingen.
    </p>
    <div className="relative w-full h-40 mt-auto rounded-lg overflow-hidden">
      <Image
        src="/info2.png"
        alt="Website ontwikkeling en implementatie"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-[#111] border border-[#222] rounded-xl p-6 flex flex-col gap-4 text-left ">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">SEO en Online Adverteren</h3>
      <FaChartLine className="text-white/60 w-5 h-5" />
    </div>
    <p className="text-sm text-gray-400">
      Verhoog je online zichtbaarheid met onze SEO, Google Ads en social media advertenties.
      Meer websiteverkeer, hogere conversies en betere Google-beoordelingen gegarandeerd.
    </p>
    <div className="relative w-full h-40 mt-auto rounded-lg overflow-hidden">
      <Image
        src="/info3.png"
        alt="SEO en marketing oplossingen"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
