import React, { useState } from 'react';
import { philosophyData, siteConfig } from '../data/content';
import { Sparkles, Copy, Check, Flame, Droplets, Wind, Star } from 'lucide-react';

export default function BrandIdentitySection() {
  const [activeElement, setActiveElement] = useState(philosophyData.elements[0].id);
  const [copiedHex, setCopiedHex] = useState(null);

  const handleCopyColor = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2200);
  };

  const getElementIcon = (id) => {
    switch (id) {
      case 'fire':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'water':
        return <Droplets className="w-5 h-5 text-sky-400" />;
      case 'wind':
        return <Wind className="w-5 h-5 text-teal-300" />;
      case 'star':
        return <Star className="w-5 h-5 text-gold-flame" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-antique" />;
    }
  };

  return (
    <section
      id="philosophy"
      className="relative min-h-screen py-28 sm:py-36 px-5 sm:px-10 lg:px-16 bg-navy-midnight text-ivory-warm transition-colors duration-700 overflow-hidden"
    >
      {/* Background Celestial Atmosphere */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-royal-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-gold-antique/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-antique/30 bg-navy-deep/60 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
            <span className="font-cinzel text-xs uppercase tracking-ethereal text-gold-antique font-semibold">
              02 / BRAND IDENTITY
            </span>
          </div>
          <h2 className="font-cormorant italic text-[clamp(2.25rem,5.5vw,3.75rem)] font-light text-ivory-warm">
            Philosophy of AETHERIA
          </h2>
          <p className="font-sans text-sm sm:text-base text-silver-blue/80 font-light leading-relaxed">
            Eksplorasi mendalam perpaduan simbol Phoenix, resonansi empat unsur alam, dan makna warna identitas yang menjadi ruh OSKA 2026/2027.
          </p>
        </div>

        {/* ======================================================== */}
        {/* SUB-BAGIAN A: FILOSOFI LOGO & MAKNA PHOENIX             */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase with Clean Backlit Glow */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="logo-stage w-[clamp(220px,26vw,310px)] animate-logo-entrance">
              <img
                src={siteConfig.logoPath}
                alt="AETHERIA Emblem"
                className="logo-svg-clean"
              />
            </div>
          </div>

          {/* Editorial Philosophy Explanations */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Card 1: Filosofi Logo */}
            <div className="p-8 rounded-2xl border border-gold-antique/30 bg-navy-deep/70 backdrop-blur-md relative overflow-hidden group hover:border-gold-antique transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-gold-antique/20 border border-gold-antique/40 flex items-center justify-center font-cinzel text-xs text-gold-antique font-bold">
                  I
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-semibold tracking-wide text-ivory-warm">
                  Filosofi Logo
                </h3>
              </div>
              <p className="font-sans text-base text-silver-blue/90 font-light leading-relaxed text-justify">
                {philosophyData.logoPhilosophy}
              </p>
            </div>

            {/* Card 2: Makna Phoenix */}
            <div className="p-8 rounded-2xl border border-gold-antique/30 bg-navy-deep/70 backdrop-blur-md relative overflow-hidden group hover:border-gold-antique transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-gold-flame/20 border border-gold-flame/40 flex items-center justify-center font-cinzel text-xs text-gold-flame font-bold">
                  II
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-semibold tracking-wide text-ivory-warm">
                  Makna Phoenix
                </h3>
              </div>
              <p className="font-sans text-base text-silver-blue/90 font-light leading-relaxed text-justify">
                {philosophyData.phoenixMeaning}
              </p>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* SUB-BAGIAN B: EMPAT UNSUR ALAM (4 KARTU INTERAKTIF)     */}
        {/* ======================================================== */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-2">
            <span className="font-cinzel text-xs tracking-ethereal uppercase text-gold-antique font-medium">
              Empat Pilar Kosmis
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-semibold text-ivory-warm">
              Empat Unsur Alam
            </h3>
            <p className="font-cormorant italic text-base text-silver-blue/80">
              Keberanian, Kebijaksanaan, Kebebasan, dan Harapan dalam satu harmoni
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyData.elements.map((el) => {
              const isSelected = activeElement === el.id;
              return (
                <div
                  key={el.id}
                  onClick={() => setActiveElement(el.id)}
                  className={`group relative p-6 sm:p-7 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                    isSelected
                      ? 'border-gold-antique bg-navy-deep/90 shadow-[0_0_30px_rgba(201,169,106,0.25)] translate-y-[-4px]'
                      : 'border-gold-antique/20 bg-navy-deep/50 hover:border-gold-antique/50 hover:bg-navy-deep/80'
                  }`}
                >
                  {/* Subtle Background Radial Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${el.accent} opacity-30 group-hover:opacity-70 transition-opacity duration-500`}
                  />

                  {/* Header: Icon + Title */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-midnight/80 border border-gold-antique/30 flex items-center justify-center shadow-inner">
                      {getElementIcon(el.id)}
                    </div>
                    <span className="font-cinzel text-xs tracking-widest uppercase text-gold-antique/80">
                      {el.englishName}
                    </span>
                  </div>

                  {/* Name */}
                  <h4 className="relative z-10 font-cinzel text-xl font-bold text-ivory-warm mb-3 group-hover:text-gold-light transition-colors">
                    {el.name}
                  </h4>

                  {/* Description */}
                  <p className="relative z-10 font-sans text-sm text-silver-blue/90 font-light leading-relaxed mb-4">
                    {el.description}
                  </p>

                  {/* Expanded Detail */}
                  <div className="relative z-10 pt-3 border-t border-gold-antique/20 text-xs font-cormorant italic text-gold-antique/90">
                    “{el.detail}”
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* SUB-BAGIAN C: MAKNA WARNA IDENTITAS (COLOR SWATCHES)     */}
        {/* ======================================================== */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-2">
            <span className="font-cinzel text-xs tracking-ethereal uppercase text-gold-antique font-medium">
              Palet Identitas Visual
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-semibold text-ivory-warm">
              Makna Warna Identitas
            </h3>
            <p className="font-sans text-xs sm:text-sm text-silver-blue/70">
              Klik pada kartu warna untuk menyalin kode Hex resmi ke clipboard
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyData.colors.map((color) => {
              const isCopied = copiedHex === color.hex;
              return (
                <div
                  key={color.hex}
                  onClick={() => handleCopyColor(color.hex)}
                  className="group relative rounded-2xl border border-gold-antique/30 bg-navy-deep/80 overflow-hidden cursor-pointer hover:border-gold-antique hover:shadow-[0_0_20px_rgba(201,169,106,0.25)] transition-all duration-300"
                >
                  {/* Color Swatch Top Box */}
                  <div
                    className="h-28 sm:h-32 w-full relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundColor: color.hex }}
                  >
                    <span
                      className={`font-mono font-bold text-xs px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm flex items-center gap-1.5 transition-all ${
                        color.textDark
                          ? 'bg-navy-midnight/80 text-ivory-warm'
                          : 'bg-ivory-warm/90 text-navy-midnight'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                          <span>{color.hex}</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Text Description Bottom Box */}
                  <div className="p-5 space-y-2 bg-navy-deep">
                    <h4 className="font-cinzel text-base font-bold text-ivory-warm flex items-center justify-between">
                      <span>{color.name}</span>
                      <span className="font-mono text-xs text-gold-antique font-normal">
                        {color.hex}
                      </span>
                    </h4>
                    <p className="font-sans text-xs text-silver-blue/80 font-light leading-relaxed">
                      {color.meaning}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Toast Notification */}
          {copiedHex && (
            <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gold-antique bg-navy-deep/95 text-ivory-warm shadow-2xl backdrop-blur-md animate-fade-in">
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs">
                Kode warna <span className="font-bold text-gold-flame">{copiedHex}</span> berhasil disalin!
              </span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
