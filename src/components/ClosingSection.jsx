import React from 'react';
import { siteConfig } from '../data/content';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function ClosingSection({ onNavigate }) {
  const scrollToTop = () => {
    if (onNavigate) {
      onNavigate('#home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="closing"
      className="relative min-h-[90vh] flex flex-col justify-between items-center text-center px-5 sm:px-10 lg:px-16 pt-32 sm:pt-36 pb-16 bg-navy-deep text-ivory-warm overflow-hidden"
    >
      {/* Background Celestial Aurora & Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-radial from-gold-flame/15 via-royal-blue/15 to-transparent blur-3xl pointer-events-none" />
      
      {/* Delicate Orbit rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-gold-antique/20 animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[580px] h-[480px] sm:h-[580px] rounded-full border border-royal-blue/25 pointer-events-none" />

      {/* Main Closing Showcase */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-8 my-auto">
        
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-antique/40 bg-navy-midnight/80 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold-flame" />
          <span className="font-cinzel text-xs tracking-widestEditorial uppercase text-gold-antique font-semibold">
            THE END IS A NEW BEGINNING
          </span>
        </div>

        {/* Logo with Clean Backlit Ambient Glow */}
        <div className="logo-stage w-[clamp(140px,18vw,200px)] my-3 animate-celestial-float-gpu">
          <img
            src={siteConfig.logoPath}
            alt="AETHERIA Closing Emblem"
            className="logo-svg-clean"
          />
        </div>

        {/* Grand Closing Quote */}
        <div className="space-y-4">
          <h2 className="font-cormorant italic text-[clamp(1.85rem,4.5vw,3.75rem)] font-light text-ivory-warm tracking-wide leading-tight">
            “{siteConfig.closingQuote}”
          </h2>

          <div className="flex items-center justify-center gap-4 text-gold-antique/70">
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-antique/60" />
            <span className="text-sm">✦</span>
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-antique/60" />
          </div>

          <p className="font-cinzel text-sm sm:text-base tracking-[0.2em] uppercase text-silver-blue font-semibold">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Return to Top Button */}
        <div className="pt-4">
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-antique/40 bg-navy-midnight/60 hover:bg-gold-antique/15 hover:border-gold-antique transition-all duration-300 text-xs font-cinzel tracking-widest uppercase text-ivory-warm"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 text-gold-antique group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-12 border-t border-gold-antique/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-silver-blue/60 font-light">
        <div className="flex items-center gap-2 font-cinzel">
          <span className="text-gold-antique font-semibold">{siteConfig.name}</span>
          <span>•</span>
          <span>{siteConfig.organization}</span>
          <span>•</span>
          <span>{siteConfig.institution}</span>
        </div>

        <p className="text-center sm:text-right">
          © {siteConfig.year} OSKA SMKN 1 Ciomas — AETHERIA. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
