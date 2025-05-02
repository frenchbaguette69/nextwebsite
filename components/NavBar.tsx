'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Plus, Minus, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [desktopSubmenu, setDesktopSubmenu] = useState<string | null>(null);

  return (
    <>
      <header className="absolute top-6 left-0 right-0 z-50 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-lg"
          >
            <span className="text-xl">Ⓗ</span>
            <span>NEXT</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 bg-white/10 border border-white/20 px-6 py-2 rounded-full backdrop-blur-sm text-sm text-white font-medium relative">
            {/* Website Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setDesktopSubmenu('website')}
                onMouseLeave={() => setDesktopSubmenu(null)}
                className="flex items-center gap-1 hover:text-gray-300"
              >
                Website <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {desktopSubmenu === 'website' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-8 left-0 bg-black text-white rounded-lg shadow-lg py-2 w-48 z-50"
                    onMouseEnter={() => setDesktopSubmenu('website')}
                    onMouseLeave={() => setDesktopSubmenu(null)}
                  >
                    <Link href="/diensten/website-laten-maken" className="block px-4 py-2 hover:bg-white/10">Website laten maken</Link>
                    <Link href="/diensten/webshop-laten-maken" className="block px-4 py-2 hover:bg-white/10">Webshop laten maken</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Adverteren Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setDesktopSubmenu('adverteren')}
                onMouseLeave={() => setDesktopSubmenu(null)}
                className="flex items-center gap-1 hover:text-gray-300"
              >
                Adverteren <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {desktopSubmenu === 'adverteren' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-8 left-0 bg-black text-white rounded-lg shadow-lg py-2 w-48 z-50"
                    onMouseEnter={() => setDesktopSubmenu('adverteren')}
                    onMouseLeave={() => setDesktopSubmenu(null)}
                  >
                    <Link href="/diensten/seo" className="block px-4 py-2 hover:bg-white/10">SEO</Link>
                    <Link href="/diensten/google-ads" className="block px-4 py-2 hover:bg-white/10">Google Ads</Link>
                    <Link href="/diensten/facebook-ads" className="block px-4 py-2 hover:bg-white/10">Facebook Ads</Link>
                    <Link href="/diensten/instagram-ads" className="block px-4 py-2 hover:bg-white/10">Instagram Ads</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog" className="hover:text-gray-300">Blog</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/start"
              className="bg-white text-black px-5 py-2 rounded-full font-medium flex items-center gap-1 hover:bg-gray-100 transition"
            >
              Start Project <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button onClick={() => setMobileOpen(true)} className="md:hidden p-2 text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black text-white px-6 py-8 overflow-y-auto"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 bg-white/10 rounded-full p-2"
              aria-label="Sluit menu"
            >
              <X className="w-6 h-6" />
            </button>

            <ul className="space-y-6 mt-20">
              {/* Website submenu */}
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">Website</span>
                  <button onClick={() => setMobileSubmenu(mobileSubmenu === 'website' ? null : 'website')}>
                    {mobileSubmenu === 'website' ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                </div>
                {mobileSubmenu === 'website' && (
                  <ul className="mt-2 space-y-2 ml-4 text-gray-300 text-sm">
                    <li><Link href="/diensten/website-laten-maken">Website laten maken</Link></li>
                    <li><Link href="/diensten/webshop-laten-maken">Webshop laten maken</Link></li>
                  </ul>
                )}
              </li>

              {/* Adverteren submenu */}
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">Adverteren</span>
                  <button onClick={() => setMobileSubmenu(mobileSubmenu === 'adverteren' ? null : 'adverteren')}>
                    {mobileSubmenu === 'adverteren' ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                </div>
                {mobileSubmenu === 'adverteren' && (
                  <ul className="mt-2 space-y-2 ml-4 text-gray-300 text-sm">
                    <li><Link href="/diensten/seo">SEO</Link></li>
                    <li><Link href="/diensten/google-ads">Google Ads</Link></li>
                    <li><Link href="/diensten/facebook-ads">Facebook Ads</Link></li>
                    <li><Link href="/diensten/instagram-ads">Instagram Ads</Link></li>
                  </ul>
                )}
              </li>

              <li><Link href="/blog" className="text-lg font-bold hover:text-gray-300">Blog</Link></li>
              <li><Link href="/contact" className="text-lg font-bold hover:text-gray-300">Contact</Link></li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
