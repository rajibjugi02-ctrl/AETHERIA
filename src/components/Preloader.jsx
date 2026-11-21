import React, { useEffect, useState, useRef } from 'react';
import { siteConfig } from '../data/content';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('entering'); // entering -> glowing -> exiting -> done
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // 1. Lock body scroll during intro
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 2. Timed Celestial Sequence (Total ~2.0s)
    const t1 = setTimeout(() => setPhase('glowing'), 350);
    const t2 = setTimeout(() => setPhase('exiting'), 1550);
    const t3 = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = originalOverflow;
      if (onCompleteRef.current) onCompleteRef.current();
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (phase === 'done') return null;

  const isExiting = phase === 'exiting';
  const isGlowing = phase === 'glowing' || phase === 'exiting';

  return (
    <div
      className={`fixed inset-0 select-none flex flex-col items-center justify-center bg-[#0B1524] text-ivory-warm transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isExiting
          ? 'opacity-0 filter blur-xl scale-105 pointer-events-none'
          : 'opacity-100 filter-none scale-100'
      }`}
      style={{
        zIndex: 9999,
      }}
    >
      {/* 1. Deep Celestial Radial Light Flare (Centers & expands) */}
      <div
        className={`absolute inset-0 m-auto w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full pointer-events-none transition-all duration-1000 ease-out ${
          isGlowing
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-75'
        }`}
        style={{
          background:
            'radial-gradient(circle, rgba(201, 169, 106, 0.28) 0%, rgba(41, 75, 112, 0.16) 42%, transparent 72%)',
          filter: 'blur(35px)',
        }}
      />

      {/* 2. Thin Orbit Halo Rings */}
      <div
        className={`absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-gold-antique/25 pointer-events-none transition-all duration-1000 ${
          isGlowing ? 'scale-100 opacity-60 animate-spin-slow' : 'scale-50 opacity-0'
        }`}
      />
      <div
        className={`absolute w-88 h-88 sm:w-[440px] sm:h-[440px] rounded-full border border-royal-blue/30 pointer-events-none transition-all duration-1200 ${
          isGlowing ? 'scale-100 opacity-40' : 'scale-70 opacity-0'
        }`}
      />

      {/* 3. Central Emblem: Glowing 8-Point Celestial Star & Identity */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md">
        
        {/* 8-Point Celestial Star Icon */}
        <div
          className={`relative mb-6 transition-all duration-700 ease-out transform ${
            isGlowing
              ? 'scale-100 opacity-100 translate-y-0'
              : 'scale-75 opacity-0 translate-y-3'
          }`}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center animate-celestial-star">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-gold-antique fill-current drop-shadow-[0_0_16px_rgba(201,169,106,0.85)]"
            >
              {/* 8-Point Star Geometry */}
              <polygon points="50,0 55,38 90,20 62,48 100,50 62,52 90,80 55,62 50,100 45,62 10,80 38,52 0,50 38,48 10,20 45,38" />
              <circle cx="50" cy="50" r="7" className="fill-[#0B1524]" />
              <circle cx="50" cy="50" r="3.5" className="fill-gold-light" />
            </svg>
          </div>
        </div>

        {/* Eyebrow: OSKA 2026/2027 • SMKN 1 CIOMAS with expanding tracking */}
        <div
          className={`overflow-hidden transition-all duration-800 delay-150 ease-out ${
            isGlowing
              ? 'opacity-100 tracking-[0.35em] sm:tracking-[0.45em] translate-y-0'
              : 'opacity-0 tracking-[0.15em] translate-y-2'
          }`}
        >
          <p className="font-cinzel text-[11px] sm:text-xs text-gold-antique uppercase font-semibold">
            {siteConfig.organization} • {siteConfig.institution}
          </p>
        </div>

        {/* Main Name: AETHERIA */}
        <h1
          className={`font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.25em] text-ivory-warm my-2 transition-all duration-800 delay-300 ease-out ${
            isGlowing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {siteConfig.name}
        </h1>

        {/* Tagline Whisper */}
        <p
          className={`font-cormorant italic text-sm sm:text-base text-silver-blue font-light tracking-widest transition-all duration-800 delay-450 ease-out ${
            isGlowing ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          “{siteConfig.tagline}”
        </p>

        {/* Elegant Gold Progress Ray */}
        <div className="mt-8 w-36 h-[1.5px] bg-royal-blue/30 relative overflow-hidden rounded-full">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-gold-antique to-transparent transition-transform duration-1400 ease-in-out ${
              isGlowing ? 'translate-x-full' : '-translate-x-full'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
