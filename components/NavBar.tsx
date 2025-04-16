"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
};

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  const navItems = [
    {
      title: "Website laten maken",
      heading: "Onze websites",
      links: [
        { name: "Onepager", href: "/onepager" },
        { name: "Zakelijke site", href: "/zakelijk" },
        { name: "Design op maat", href: "/maatwerk" },
        { name: "Webshop laten maken", href: "/webshop-laten-maken" },
      ],
      image: "/images/website.jpg",
    },
    {
      title: "SEO hoger in Google",
      heading: "SEO diensten",
      links: [
        { name: "SEO optimalisatie", href: "/seo-hoger-in-google" },
        { name: "Technische SEO", href: "/seo-technisch" },
        { name: "Lokale SEO", href: "/seo-lokaal" },
      ],
      image: "/images/seo.jpg",
    },
    {
      title: "Adverteren",
      heading: "Online Ads",
      links: [
        { name: "SEA Google Ads", href: "/sea-google-ads" },
        { name: "Facebook Ads", href: "/facebook-ads" },
        { name: "Instagram Ads", href: "/instagram-ads" },
      ],
      image: "/images/ads.jpg",
    },
  ];

  return (
    <header className="bg-[#d3f9d8] text-[#0a2e2d] relative z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <Image src="/nextwebsitelogo.png" alt="Logo" width={100} height={40} />
        </Link>

        <div
          className="hidden lg:flex items-center gap-8 relative"
          onMouseLeave={() => setActive(null)}
        >
          {navItems.map((item) => (
            <div key={item.title} className="relative">
              <button
                onMouseEnter={() => setActive(item.title)}
                className="flex items-center gap-1 font-medium"
              >
                {item.title}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    active === item.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {active === item.title && (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={transition}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] max-w-[95vw] bg-white shadow-xl rounded-xl p-6 grid grid-cols-2 gap-6 z-50"
                  >
                    <div>
                      <h3 className="text-sm font-medium mb-2 leading-[1.75rem]">
                        {item.heading}
                      </h3>
                      {item.links.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-2 py-1 text-sm hover:bg-[#eefce9] rounded"
                        >
                          {link.name}
                        </Link>
                      ))}
                      <Link
                        href="/gratis-offerte"
                        className="mt-3 inline-block bg-[#c5eec8] text-[#0a2e2d] px-4 py-2 rounded-md text-sm text-center hover:bg-[#b6e3b9] font-medium transition"
                      >
                        Gratis offerte
                      </Link>
                    </div>
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full h-auto"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link
            href="/portfolio"
            className="font-medium hover:bg-[#c5eec8] px-3 py-1 rounded-md transition"
          >
            Portfolio
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link
            href="/gratis-offerte"
            className="bg-[#c5eec8] text-[#0a2e2d] px-5 py-2 rounded-md hover:bg-[#b6e3b9] transition font-medium"
          >
            Gratis offerte
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setActive((prev) => (prev === "mobile" ? null : "mobile"))}
        >
          {active === "mobile" ? <span>X</span> : <span>=</span>}
        </button>
      </nav>
    </header>
  );
}
