import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import PricingCards from "@/components/PricingCards";
import WaaromWij from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfoSection />
      <WaaromWij />
      <PortfolioPreview />
      <PricingCards />
    </div>
  );
}
