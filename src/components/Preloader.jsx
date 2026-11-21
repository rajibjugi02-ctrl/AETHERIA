import React, { useEffect, useState, useRef } from 'react';
import { siteConfig } from '../data/content';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('aetheria_intro_shown')) {
      return 'done';
    }
    return 'entering';
  });

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // If already seen, complete immediately and never render
    if (phase === 'done') {
      if (onCompleteRef.current) onCompleteRef.current();
      return;
    }

    const t1 = setTimeout(() => setPhase('glowing'), 400);
    const t2 = setTimeout(() => setPhase('exiting'), 1400);
    const t3 = setTimeout(() => {
      setPhase('done');
      try {
        sessionStorage.setItem('aetheria_intro_shown', 'true');
      } catch (e) {
        // storage disabled fallback
      }
      if (onCompleteRef.current) onCompleteRef.current();
    }, 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []); // Run strictly once on mount

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-deep text-ivory-warm transition-opacity duration-500 pointer-events-none select-none ${
        phase === 'exiting' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background radial celestial aura */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-radial from-gold-antique/20 via-royal-blue/15 to-transparent blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Orbit ring decoration */}
      <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-gold-antique/25 animate-spin-slow pointer-events-none" />
      <div className="absolute w-96 h-96 sm:w-[420px] sm:h-[420px] rounded-full border border-royal-blue/30 pointer-events-none" />

      {/* Logo container with scale and shimmer */}
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-700 ease-out transform ${
          phase === 'entering'
            ? 'opacity-0 scale-90 translate-y-4'
            : 'opacity-100 scale-100 translate-y-0'
        }`}
      >
        <div className="logo-stage w-32 sm:w-40 mb-6 animate-logo-entrance">
          <img
            src={siteConfig.logoPath}
            alt="AETHERIA Official Logo"
            className="logo-svg-clean"
          />
        </div>

        {/* Brand Reveal Text */}
        <div className="text-center space-y-2">
          <p className="font-cinzel text-xs uppercase tracking-widestEditorial text-gold-antique/90">
            {siteConfig.organization} • {siteConfig.institution}
          </p>
          <h1 className="font-cinzel text-2xl sm:text-3xl tracking-[0.2em] font-semibold text-ivory-warm">
            {siteConfig.name}
          </h1>
          <p className="font-cormorant italic text-sm text-silver-blue/80 tracking-widest">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Loading subtle line indicator */}
        <div className="mt-8 w-40 h-[1px] bg-navy-midnight relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-antique to-transparent animate-[shimmerPass_1.5s_infinite]" />
        </div>
      </div>
    </div>
  );
}
