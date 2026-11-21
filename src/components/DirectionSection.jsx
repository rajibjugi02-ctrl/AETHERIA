import React from 'react';
import { directionData, siteConfig } from '../data/content';
import { Compass, Target, Shield, Sparkles, Feather } from 'lucide-react';

export default function DirectionSection() {
  return (
    <section
      id="direction"
      className="relative min-h-screen py-28 sm:py-36 px-5 sm:px-10 lg:px-16 bg-mist-ethereal text-navy-midnight transition-colors duration-700 overflow-hidden"
    >
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-gold-antique/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-royal-blue/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-antique/40 bg-white/60 backdrop-blur-sm">
            <Compass className="w-3.5 h-3.5 text-royal-blue" />
            <span className="font-cinzel text-xs uppercase tracking-ethereal text-navy-midnight font-bold">
              03 / DIRECTION
            </span>
          </div>
          <h2 className="font-cormorant italic text-[clamp(2.25rem,5.5vw,3.75rem)] font-light text-navy-midnight">
            Visi, Misi & Nilai OSKA 2026/2027
          </h2>
          <p className="font-sans text-sm sm:text-base text-navy-midnight/70 font-light leading-relaxed">
            Arah strategis dan komitmen kepemimpinan dalam mewujudkan organisasi siswa yang progresif, inklusif, dan berdaya saing di SMKN 1 Ciomas.
          </p>
        </div>

        {/* ======================================================== */}
        {/* PULL-QUOTE VISI                                          */}
        {/* ======================================================== */}
        <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl border border-gold-antique/40 bg-ivory-warm shadow-md overflow-hidden">
          {/* Subtle ornamental corner marks */}
          <div className="absolute top-4 left-4 text-gold-antique text-lg select-none">⌜</div>
          <div className="absolute top-4 right-4 text-gold-antique text-lg select-none">⌝</div>
          <div className="absolute bottom-4 left-4 text-gold-antique text-lg select-none">⌞</div>
          <div className="absolute bottom-4 right-4 text-gold-antique text-lg select-none">⌟</div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="font-cinzel text-xs tracking-widestEditorial uppercase text-gold-antique font-semibold block">
              {directionData.vision.lead}
            </span>

            <blockquote className="font-cormorant italic text-2xl sm:text-3xl md:text-4xl text-navy-midnight font-normal leading-snug">
              {directionData.vision.quote}
            </blockquote>

            <div className="flex items-center justify-center gap-3 text-gold-antique/70 pt-2">
              <span className="w-10 h-[1px] bg-gold-antique/60" />
              <span className="font-cinzel text-xs uppercase tracking-widest text-navy-midnight/70 font-semibold">
                {directionData.vision.author}
              </span>
              <span className="w-10 h-[1px] bg-gold-antique/60" />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MISI & TUJUAN KEPENGURUSAN                              */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Tujuan Kepengurusan (Asymmetrical callout) */}
          <div className="lg:col-span-5 p-8 rounded-2xl border border-gold-antique/30 bg-ivory-warm/80 backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-royal-blue" />
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wide text-navy-midnight">
                {directionData.purpose.title}
              </h3>
            </div>

            <div className="w-12 h-[1.5px] bg-gold-antique" />

            <p className="font-sans text-base text-navy-midnight/80 font-light leading-relaxed text-justify">
              {directionData.purpose.text}
            </p>

            <div className="pt-4 border-t border-gold-antique/25 flex items-center justify-between text-xs font-cinzel text-navy-midnight/60 uppercase tracking-widest">
              <span>Orientasi Pengabdian</span>
              <span className="text-gold-antique font-bold">2026 — 2027</span>
            </div>
          </div>

          {/* Right Column: Daftar Bernomor Misi (01 - 04) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-b border-gold-antique/40 pb-4 flex items-center justify-between">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-navy-midnight">
                Misi Kepengurusan
              </h3>
              <span className="font-cormorant italic text-sm text-navy-midnight/60">
                Langkah Nyata Aksi Organisasi
              </span>
            </div>

            <div className="space-y-6">
              {directionData.missions.map((misi) => (
                <div
                  key={misi.number}
                  className="group p-6 rounded-xl border border-gold-antique/20 bg-ivory-warm/60 hover:bg-ivory-warm hover:border-gold-antique/60 transition-all duration-300 flex items-start gap-5"
                >
                  <span className="font-cinzel text-lg sm:text-xl font-bold text-gold-antique group-hover:text-royal-blue transition-colors">
                    {misi.number}
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <h4 className="font-cinzel text-base sm:text-lg font-semibold text-navy-midnight group-hover:text-royal-blue transition-colors">
                      {misi.title}
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-navy-midnight/75 font-light leading-relaxed">
                      {misi.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* EMPAT PILAR NILAI ORGANISASI                             */}
        {/* ======================================================== */}
        <div className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <span className="font-cinzel text-xs tracking-ethereal uppercase text-gold-antique font-bold">
              Fondasi Karakter AETHERIA
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-semibold text-navy-midnight">
              Nilai-Nilai Organisasi
            </h3>
            <p className="font-cormorant italic text-base text-navy-midnight/70">
              Prinsip kepemimpinan yang berakar pada keharmonisan empat unsur alam
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directionData.values.map((v, i) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl border border-gold-antique/30 bg-ivory-warm/90 hover:bg-white hover:border-gold-antique hover:shadow-lg transition-all duration-300 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-cinzel font-semibold tracking-wider bg-gold-antique/15 text-gold-antique border border-gold-antique/30">
                    {v.element}
                  </span>
                  <span className="font-cormorant italic text-xs text-navy-midnight/50">
                    {v.latin}
                  </span>
                </div>

                <h4 className="font-cinzel text-lg font-bold text-navy-midnight group-hover:text-royal-blue transition-colors">
                  {v.title}
                </h4>

                <p className="font-sans text-sm text-navy-midnight/70 font-light leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
