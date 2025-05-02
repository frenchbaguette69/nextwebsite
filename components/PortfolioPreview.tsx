'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Zumar Construct Firm',
    subtitle: 'Webdesign & Development',
    image: '/portfolio/zumar.jpg',
    link: '/portfolio/zumar-construct',
  },
  {
    title: 'Archin Architecture Studio',
    subtitle: 'Prototype Design, Webflow',
    image: '/portfolio/archin.jpg',
    link: '/portfolio/archin-studio',
  },
];

export default function PortfolioPreview() {
  return (
    <section className="relative z-10  px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Recente <span className="italic text-[#3dd0f2]">Projecten</span>
          </h2>
          <Link
            href="/portfolio"
            className="mt-4 md:mt-0 inline-flex items-center gap-1 px-5 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition"
          >
            Bekijk alle projecten <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} className="group block">
              <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden bg-[#111]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
