import React from 'react';
import { siteConfig } from '../data/content';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function HeroSection({ introComplete = false, onNavigate }) {
  const scrollToAbout = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('#about');
    } else {
      const target = document.querySelector('#about');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center items-center text-center px-5 sm:px-10 lg:px-16 pt-[90px] pb-8 overflow-hidden bg-gradient-to-b from-navy-abyss via-navy-deep to-navy-midnight text-ivory-warm"
    >
      {/* 1. Background Celestial Ambience & Lighting (Activates at 0.0s) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-b from-gold-flame/15 via-royal-blue/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full border border-gold-antique/20 animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[620px] h-[480px] sm:h-[620px] rounded-full border border-royal-blue/20 pointer-events-none" />

      {/* Hero Core Content */}
      <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center justify-center my-auto">
        
        {/* 2. Editorial Top Eyebrow Badge (Staggered at 0.35s) */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-antique/30 bg-navy-deep/60 backdrop-blur-sm mb-2 sm:mb-3 transition-all duration-700 ease-out ${
            introComplete
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-3'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-flame" />
          <span className="font-cinzel text-[10px] sm:text-xs tracking-ethereal uppercase text-gold-antique font-medium">
            {siteConfig.organization} • {siteConfig.institution}
          </span>
        </div>

        {/* 3. Central Logo SVG Container (Staggered at 0.15s: scale-up + blur fade, then idle float) */}
        <div
          className={`logo-stage w-[clamp(160px,20vw,250px)] my-1.5 sm:my-2.5 transition-all duration-1000 ease-out ${
            introComplete
              ? 'opacity-100 scale-100 blur-0 animate-celestial-float-gpu'
              : 'opacity-0 scale-[0.88] blur-[8px]'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <img
            src={siteConfig.logoPath}
            alt="Logo Resmi AETHERIA"
            className="logo-svg-clean"
          />
        </div>

        {/* 4. Main Title: AETHERIA Mask Reveal (Staggered at 0.50s) */}
        <div className="overflow-hidden my-1">
          <h1
            className={`font-cinzel text-[clamp(2.35rem,6vw,4.25rem)] font-bold tracking-[0.18em] text-ivory-warm drop-shadow-md leading-tight transition-all duration-800 ease-out ${
              introComplete
                ? 'opacity-100 translate-y-0 tracking-[0.18em]'
                : 'opacity-0 translate-y-full tracking-[0.05em]'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            {siteConfig.name}
          </h1>
        </div>

        {/* 5. Tagline & Subtext & CTA Button (Staggered at 0.65s) */}
        <div
          className={`transition-all duration-800 ease-out space-y-3 ${
            introComplete
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '650ms' }}
        >
          {/* Subtle separator ornament */}
          <div className="flex items-center justify-center gap-3 text-gold-antique/70 my-1">
            <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-gold-antique/60" />
            <span className="text-xs">✦</span>
            <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-gold-antique/60" />
          </div>

          {/* Editorial Tagline */}
          <p className="font-cormorant italic text-[clamp(1.15rem,2.2vw,1.75rem)] text-silver-blue font-light tracking-wide leading-snug">
            “{siteConfig.tagline}”
          </p>

          {/* Compact Philosophical Subtitle */}
          <p className="max-w-md mx-auto text-xs sm:text-sm text-silver-blue/80 font-sans font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
            Simbol kebangkitan, transformasi, dan keharmonisan empat unsur dalam melangkah menuju masa depan kepemimpinan OSKA 2026/2027.
          </p>

          {/* CTA Button */}
          <div className="pt-3 sm:pt-4">
            <a
              href="#about"
              onClick={scrollToAbout}
              className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full border border-gold-antique/50 bg-navy-midnight/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-gold-antique hover:shadow-[0_0_25px_rgba(201,169,106,0.35)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold-antique/20 via-gold-flame/15 to-gold-antique/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 font-cinzel text-xs sm:text-sm tracking-widestEditorial uppercase text-ivory-warm font-semibold group-hover:text-gold-light transition-colors">
                Explore AETHERIA
              </span>
              <ArrowDown className="relative z-10 w-3.5 h-3.5 text-gold-antique group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Celestial Fade into Section 2 */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-transparent pointer-events-none" />
    </section>
  );
}
