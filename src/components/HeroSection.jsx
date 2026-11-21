import React from 'react';
import { siteConfig } from '../data/content';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function HeroSection({ onNavigate }) {
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
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 sm:px-10 lg:px-16 pt-32 sm:pt-36 pb-20 overflow-hidden bg-gradient-to-b from-navy-abyss via-navy-deep to-navy-midnight text-ivory-warm"
    >
      {/* Background Celestial Ambience & Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-b from-gold-flame/15 via-royal-blue/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full border border-gold-antique/20 animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[680px] h-[520px] sm:h-[680px] rounded-full border border-royal-blue/20 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        {/* Editorial Top Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-antique/30 bg-navy-deep/60 backdrop-blur-sm mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-gold-flame" />
          <span className="font-cinzel text-[11px] sm:text-xs tracking-ethereal uppercase text-gold-antique font-medium">
            {siteConfig.organization} • {siteConfig.institution}
          </span>
        </div>

        {/* Central Logo Container with Soft Backlit Glow & GPU Floating Animation */}
        <div className="logo-stage w-[clamp(200px,28vw,340px)] my-4 animate-logo-entrance animate-celestial-float-gpu">
          <img
            src={siteConfig.logoPath}
            alt="Logo Resmi AETHERIA"
            className="logo-svg-clean"
          />
        </div>

        {/* Main Title & Editorial Subtitle */}
        <div className="space-y-4 mt-6">
          <h1 className="font-cinzel text-[clamp(2.75rem,7.5vw,5.5rem)] font-bold tracking-[0.18em] text-ivory-warm drop-shadow-md leading-tight">
            {siteConfig.name}
          </h1>

          <div className="flex items-center justify-center gap-4 text-gold-antique/70 my-2">
            <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-gold-antique/60" />
            <span className="text-sm">✦</span>
            <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-gold-antique/60" />
          </div>

          <p className="font-cormorant italic text-[clamp(1.35rem,3.2vw,2.5rem)] text-silver-blue font-light tracking-wide">
            “{siteConfig.tagline}”
          </p>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-silver-blue/80 font-sans font-light leading-relaxed pt-2">
            Simbol kebangkitan, transformasi, dan keharmonisan empat unsur dalam melangkah menuju masa depan kepemimpinan OSKA 2026/2027.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-12">
          <a
            href="#about"
            onClick={scrollToAbout}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gold-antique/50 bg-navy-midnight/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-gold-antique hover:shadow-[0_0_25px_rgba(201,169,106,0.35)]"
          >
            {/* Hover Background Fill */}
            <span className="absolute inset-0 bg-gradient-to-r from-gold-antique/20 via-gold-flame/15 to-gold-antique/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <span className="relative z-10 font-cinzel text-xs sm:text-sm tracking-widestEditorial uppercase text-ivory-warm font-semibold group-hover:text-gold-light transition-colors">
              Explore AETHERIA
            </span>
            <ArrowDown className="relative z-10 w-4 h-4 text-gold-antique group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Bottom Celestial Fade into Section 2 */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-transparent pointer-events-none" />
    </section>
  );
}
