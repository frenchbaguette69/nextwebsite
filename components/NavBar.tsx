"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HiMenu, HiX } from "react-icons/hi";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
};


export default function Navbar() {

  const [hasScrolled, setHasScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setHasScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []); 

  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

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
    },
    {
      title: "SEO hoger in Google",
      heading: "SEO diensten",
      links: [
        { name: "SEO optimalisatie", href: "/seo-hoger-in-google" },
        { name: "Technische SEO", href: "/seo-technisch" },
        { name: "Lokale SEO", href: "/seo-lokaal" },
      ],
    },
    {
      title: "Adverteren",
      heading: "Online Ads",
      links: [
        { name: "SEA Google Ads", href: "/sea-google-ads" },
        { name: "Facebook Ads", href: "/facebook-ads" },
        { name: "Instagram Ads", href: "/instagram-ads" },
      ],
    },
  ];

  return (
    <header
  className={`sticky top-0 w-full z-50 transition-shadow bg-[#d3f9d8] text-[#0a2e2d] ${
    hasScrolled ? "shadow-md" : ""
  }`}
>
      <nav className="container mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <Image src="/nextwebsitelogo.png" alt="Logo" width={100} height={40} />
        </Link>

        {/* Desktop nav */}
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
                    className="absolute left-1/2 top-[calc(100%+0.6rem)] -translate-x-1/2 transform pt-4 w-[720px] max-w-[95vw] bg-white shadow-xl rounded-xl p-6 grid grid-cols-2 gap-6 z-50"
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

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/gratis-offerte"
            className="bg-[#c5eec8] text-[#0a2e2d] px-5 py-2 rounded-md hover:bg-[#b6e3b9] transition font-medium"
          >
            Gratis offerte
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="space-y-4">
            {navItems.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() =>
                    setMobileSub((prev) => (prev === item.title ? null : item.title))
                  }
                  className="flex items-center justify-between w-full font-medium text-left"
                >
                  {item.title}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileSub === item.title ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileSub === item.title && (
                  <div className="mt-2 rounded-md bg-white p-4">
                    {item.links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block py-1 text-sm text-[#0a2e2d] hover:underline"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/portfolio"
              className="block bg-[#eefce9] px-4 py-2 rounded-md text-[#0a2e2d] text-sm font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/gratis-offerte"
              className="block bg-[#012D2E] px-4 py-2 rounded-md text-white text-sm font-medium"
            >
              Gratis offerte
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
