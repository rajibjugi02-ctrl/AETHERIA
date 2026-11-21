import React from 'react';
import { aboutNarratives, siteConfig } from '../data/content';
import { Feather, Compass, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-28 sm:py-36 px-5 sm:px-10 lg:px-16 bg-ivory-warm text-navy-midnight transition-colors duration-700 overflow-hidden"
    >
      {/* Decorative subtle texture/watermark */}
      <div className="absolute top-12 right-0 -mr-24 w-96 h-96 rounded-full bg-gold-antique/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-0 -ml-24 w-96 h-96 rounded-full bg-royal-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sticky Left Column: Editorial Headline & Roman Index */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-xs uppercase tracking-ethereal text-gold-antique font-bold">
                01 / ABOUT AETHERIA
              </span>
            </div>

            <h2 className="font-cormorant italic text-[clamp(2.25rem,5.5vw,3.75rem)] font-light text-navy-midnight leading-tight">
              The Story Behind The Identity
            </h2>

            <div className="w-16 h-[1.5px] bg-gold-antique" />

            <p className="font-sans text-sm sm:text-base text-navy-midnight/70 font-light leading-relaxed">
              Sebuah ikhtiar visual dan filosofis dalam mengawali masa bakti {siteConfig.organization}. Lahir dari pertautan antara keagungan langit, mitologi Phoenix, dan keabadian empat unsur semesta.
            </p>

            {/* Editorial Badge */}
            <div className="p-6 rounded-2xl border border-gold-antique/30 bg-mist-ethereal/50 backdrop-blur-sm space-y-3">
              <div className="flex items-center gap-2 text-gold-antique">
                <Sparkles className="w-4 h-4" />
                <span className="font-cinzel text-xs tracking-widestEditorial uppercase font-semibold">
                  Filosofi Inti
                </span>
              </div>
              <p className="font-cormorant italic text-lg text-navy-midnight">
                “Setiap perjalanan besar selalu dimulai dari satu langkah kecil yang dipenuhi keberanian.”
              </p>
              <span className="block font-cinzel text-[10px] tracking-widest text-navy-midnight/50 uppercase">
                SMKN 1 Ciomas • OSKA 2026/2027
              </span>
            </div>
          </div>

          {/* Right Column: 4 Editorial Narratives with Thin Gold Separators */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            {aboutNarratives.map((item, idx) => (
              <div
                key={item.index}
                className="group relative pt-8 border-t border-gold-antique/30 transition-all duration-300 hover:border-gold-antique"
              >
                {/* Asymmetric Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-cinzel text-sm sm:text-base font-bold text-gold-antique tracking-widest">
                      {item.index}
                    </span>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-semibold tracking-wide text-navy-midnight group-hover:text-royal-blue transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="font-cormorant italic text-sm text-navy-midnight/60">
                    {item.subtitle}
                  </span>
                </div>

                {/* Narrative Body */}
                <p className="font-sans text-base sm:text-lg text-navy-midnight/80 font-light leading-relaxed text-justify">
                  {item.content}
                </p>

                {/* Subtle Hover Accent */}
                <div className="mt-4 flex items-center gap-2 text-xs font-cinzel text-gold-antique opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>✦</span>
                  <span className="tracking-widest uppercase text-[11px]">Aetheria Identity Core</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
