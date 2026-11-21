import React, { useState, useEffect, useRef, useCallback } from 'react';
import { siteConfig } from '../data/content';
import { Menu, X, Sparkles, Compass, Feather, Share2, Eye } from 'lucide-react';

export default function Navbar({ activeTheme = 'dark', activeSection = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, dotLeft: 0, visible: false });

  // Scroll detection: compact pill on scroll & auto-close mobile drawer
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Click outside listener for mobile dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Smooth Sliding Pill Active Indicator
  const updateSlider = useCallback(() => {
    const activeEl = linkRefs.current[activeSection];
    if (activeEl) {
      const left = activeEl.offsetLeft;
      const width = activeEl.offsetWidth;
      const dotLeft = left + width / 2 - 3; // Center 6px dot
      setSliderStyle({ left, width, dotLeft, visible: true });
    } else {
      setSliderStyle((prev) => ({ ...prev, visible: false }));
    }
  }, [activeSection]);

  useEffect(() => {
    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [updateSlider]);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', icon: Feather },
    { name: 'Philosophy', href: '#philosophy', id: 'philosophy', icon: Eye },
    { name: 'Direction', href: '#direction', id: 'direction', icon: Compass },
    { name: 'Connection', href: '#connection', id: 'connection', icon: Share2 },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isLight = activeTheme === 'light';

  return (
    <header
      ref={navRef}
      className={`nav-floating-pill animate-navbar-entrance ${
        isLight ? 'nav-pill-light' : 'nav-pill-dark'
      } ${
        isScrolled
          ? 'py-1.5 px-3 md:px-4 scale-[0.98]'
          : 'py-2 px-3.5 md:px-5'
      } w-[calc(100%-28px)] max-w-[420px] md:max-w-none md:w-max flex items-center justify-between md:justify-center gap-3 md:gap-4 lg:gap-6 select-none`}
      style={{
        top: 'max(16px, env(safe-area-inset-top))',
      }}
    >
      {/* 1. Brand Left (Logo + Text) */}
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, '#home')}
        className="group flex items-center gap-2.5 flex-shrink-0 transition-opacity duration-300"
        title="AETHERIA — Home"
      >
        <div
          className={`logo-stage logo-stage-sm ${
            isLight ? 'logo-stage-light' : ''
          } h-[28px] md:h-[32px] w-[28px] md:w-[32px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}
        >
          <img
            src={siteConfig.logoPath}
            alt="AETHERIA Logo"
            className="logo-svg-clean h-[28px] md:h-[32px] w-auto"
          />
        </div>
        <span
          className={`font-cinzel text-xs sm:text-sm font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
            isLight
              ? 'text-navy-midnight group-hover:text-gold-antique'
              : 'text-ivory-warm group-hover:text-gold-antique'
          }`}
        >
          {siteConfig.name}
        </span>
      </a>

      {/* 2. Desktop & Tablet Navigation Menu with Smooth Sliding Active Indicator */}
      <nav className="relative hidden md:flex items-center gap-1 lg:gap-1.5 py-0.5">
        {/* Sliding Active Pill Background */}
        <span
          className="pointer-events-none absolute top-0.5 bottom-0.5 rounded-full bg-gold-antique/20 shadow-sm"
          style={{
            transform: `translateX(${sliderStyle.left}px)`,
            width: `${sliderStyle.width}px`,
            opacity: sliderStyle.visible ? 1 : 0,
            transition:
              'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), width 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease',
          }}
        />

        {/* Sliding Golden Dot under text */}
        <span
          className="pointer-events-none absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-gold-antique shadow-[0_0_6px_#C9A96A]"
          style={{
            transform: `translateX(${sliderStyle.dotLeft}px)`,
            opacity: sliderStyle.visible ? 1 : 0,
            transition:
              'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease',
          }}
        />

        {/* Navigation Links */}
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              ref={(el) => (linkRefs.current[link.id] = el)}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative z-10 px-3 lg:px-3.5 py-1 rounded-full font-sans text-[12px] md:text-[13px] lg:text-[14px] font-medium whitespace-nowrap transition-colors duration-250 ${
                isActive
                  ? 'text-gold-antique font-semibold'
                  : isLight
                  ? 'text-navy-midnight/70 hover:text-navy-midnight'
                  : 'text-ivory-warm/70 hover:text-ivory-warm'
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </nav>

      {/* 3. Right CTA / Badge (Desktop & Wide Tablet) */}
      <div className="hidden min-[840px]:flex items-center">
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className="group relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold-antique/40 font-cinzel text-[10px] lg:text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 hover:border-gold-antique hover:bg-gold-antique/15 hover:shadow-[0_0_12px_rgba(201,169,106,0.3)]"
        >
          <Sparkles className="w-3 h-3 text-gold-antique group-hover:rotate-12 transition-transform duration-300" />
          <span className={isLight ? 'text-navy-midnight' : 'text-ivory-warm'}>
            OSKA 26/27
          </span>
        </a>
      </div>

      {/* 4. Mobile Hamburger Button (< 768px) */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`md:hidden flex items-center justify-center w-11 h-11 rounded-full transition-colors ${
          isLight
            ? 'text-navy-midnight hover:bg-black/5 active:bg-black/10'
            : 'text-ivory-warm hover:bg-white/10 active:bg-white/15'
        }`}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* 5. Mobile Floating Glass Dropdown (Below the Pill) */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden absolute top-[calc(100%+10px)] left-0 right-0 w-full rounded-3xl p-5 shadow-2xl backdrop-blur-xl animate-dropdown-slide border ${
            isLight
              ? 'bg-[#f7f5f0]/95 border-[#17283f]/15 text-navy-midnight'
              : 'bg-[#0e1a2b]/95 border-gold-antique/30 text-ivory-warm'
          }`}
        >
          <div className="flex flex-col gap-3">
            {/* Top Sub-Header */}
            <div className="flex items-center justify-between pb-3 border-b border-gold-antique/20">
              <span className="font-cinzel text-[11px] tracking-widest text-gold-antique uppercase font-semibold">
                Menu Navigasi
              </span>
              <span className="text-[10px] font-mono opacity-60">OSKA 26/27</span>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-1.5 py-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl font-sans text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gold-antique/20 text-gold-antique font-semibold'
                        : isLight
                        ? 'text-navy-midnight/80 hover:text-navy-midnight hover:bg-black/5'
                        : 'text-ivory-warm/80 hover:text-ivory-warm hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-gold-antique' : 'opacity-60'}`} />
                      <span>{link.name}</span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-gold-antique shadow-[0_0_6px_#C9A96A]" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Bottom Info & Almamater Badge */}
            <div className="pt-3 border-t border-gold-antique/20 flex flex-col gap-2">
              <div className="flex items-center justify-between text-[11px] text-gold-antique">
                <span className="font-cinzel uppercase tracking-widest">SMKN 1 CIOMAS</span>
                <span className="font-mono text-[10px]">SKANIC</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] opacity-75 font-sans">
                <span>OSIS</span>
                <span>•</span>
                <span>MPK</span>
                <span>•</span>
                <span>Masa Bakti 2026/2027</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
