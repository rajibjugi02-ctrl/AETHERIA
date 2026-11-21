import React from 'react';
import { connectionChannels, siteConfig } from '../data/content';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';

// Custom Crisp Official Brand SVGs
const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

export default function ConnectionSection() {
  const getChannelIcon = (platform) => {
    if (platform.includes('Instagram')) return <InstagramIcon className="w-5 h-5" />;
    if (platform.includes('TikTok')) return <TikTokIcon className="w-5 h-5" />;
    if (platform.includes('Email')) return <Mail className="w-5 h-5" />;
    return <Sparkles className="w-5 h-5" />;
  };

  return (
    <section
      id="connection"
      className="relative min-h-screen py-28 sm:py-36 px-5 sm:px-10 lg:px-16 bg-ivory-warm text-navy-midnight transition-colors duration-700 overflow-hidden"
    >
      {/* Background soft ambient warm haze */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold-antique/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-antique/40 bg-white/60 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
            <span className="font-cinzel text-xs uppercase tracking-ethereal text-navy-midnight font-bold">
              04 / CONNECTION
            </span>
          </div>
          <h2 className="font-cormorant italic text-[clamp(2.25rem,5.5vw,3.75rem)] font-light text-navy-midnight">
            Stay Connected With Us
          </h2>
          <p className="font-sans text-sm sm:text-base text-navy-midnight/70 font-light leading-relaxed">
            Terhubung langsung dengan seluruh kanal komunikasi resmi OSKA 2026/2027 SMKN 1 Ciomas untuk informasi, aspirasi, dan kolaborasi.
          </p>
        </div>

        {/* Large Editorial Luxury Interactive Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {connectionChannels.map((channel) => (
            <a
              key={channel.platform}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 sm:p-10 rounded-3xl border border-gold-antique/30 bg-mist-ethereal/50 hover:bg-white hover:border-gold-antique shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Row: Icon + Badge + Arrow */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white border border-gold-antique/30 flex items-center justify-center text-royal-blue group-hover:scale-110 group-hover:text-gold-antique transition-all duration-300 shadow-sm">
                  {getChannelIcon(channel.platform)}
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-gold-antique/15 border border-gold-antique/30 text-[10px] font-cinzel tracking-widest text-navy-midnight uppercase font-semibold">
                    {channel.badge}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-gold-antique/40 flex items-center justify-center text-navy-midnight group-hover:bg-gold-antique group-hover:text-white group-hover:border-gold-antique transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Center: Handle + Platform */}
              <div className="space-y-2 mb-6">
                <span className="font-cinzel text-xs uppercase tracking-widestEditorial text-gold-antique font-semibold block">
                  {channel.platform}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-navy-midnight tracking-wide group-hover:text-royal-blue transition-colors">
                  {channel.handle}
                </h3>
                <p className="font-sans text-sm text-navy-midnight/70 font-light leading-relaxed pt-1">
                  {channel.desc}
                </p>
              </div>

              {/* Bottom: Expanding Golden Line */}
              <div className="relative pt-4 border-t border-gold-antique/20">
                <span className="text-xs font-cinzel uppercase tracking-widest text-navy-midnight/60 flex items-center gap-2 group-hover:text-gold-antique transition-colors">
                  <span>Kunjungi Profil Resmi</span>
                  <span>→</span>
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-antique to-gold-flame transition-all duration-500 group-hover:w-full" />
              </div>
            </a>
          ))}
        </div>

        {/* Institution Almamater Banner */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl border border-gold-antique/30 bg-mist-ethereal/70 text-center space-y-2">
          <p className="font-cinzel text-xs uppercase tracking-widestEditorial text-gold-antique font-semibold">
            Sekolah Menengah Kejuruan Negeri 1 Ciomas
          </p>
          <p className="font-sans text-xs text-navy-midnight/70 font-light">
            Jl. Raya Laladon No. 1, Laladon, Kec. Ciomas, Kabupaten Bogor, Jawa Barat 16610
          </p>
        </div>

      </div>
    </section>
  );
}
