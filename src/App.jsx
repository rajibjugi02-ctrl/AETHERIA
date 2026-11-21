import React, { useEffect, useState, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import StardustCanvas from './components/StardustCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BrandIdentitySection from './components/BrandIdentitySection';
import DirectionSection from './components/DirectionSection';
import ConnectionSection from './components/ConnectionSection';
import ClosingSection from './components/ClosingSection';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeTheme, setActiveTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [showPreloader, setShowPreloader] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  const lenisRef = useRef(null);

  // Smooth Navigation Handler via Lenis
  const handleNavigate = useCallback((href) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(href, { offset: -20, duration: 1.2 });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setShowPreloader(false);
    setIntroComplete(true);
    // 0.85s after intro completes: Floating Pill Navbar glides down gently
    setTimeout(() => {
      setNavbarVisible(true);
    }, 850);
  }, []);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Section Theme Observers for alternating Navbar contrast
    const sections = [
      { id: 'home', theme: 'dark' },
      { id: 'about', theme: 'light' },
      { id: 'philosophy', theme: 'dark' },
      { id: 'direction', theme: 'light' },
      { id: 'connection', theme: 'light' },
      { id: 'closing', theme: 'dark' },
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = sections.find((s) => s.id === entry.target.id);
          if (match) {
            setActiveTheme((prev) => (prev !== match.theme ? match.theme : prev));
            setActiveSection(match.id);
          }
        }
      });
    }, observerOptions);

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-navy-deep selection:bg-gold-antique selection:text-navy-midnight">
      {/* Cinematic Intro Preloader — Only mounts once per browser session */}
      {showPreloader && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      {/* Floating Stardust Particles */}
      <StardustCanvas />

      {/* Luxury Navbar with Direct Lenis Navigation */}
      <Navbar
        visible={navbarVisible}
        activeTheme={activeTheme}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Sections */}
      <main className="relative z-20">
        <HeroSection introComplete={introComplete} onNavigate={handleNavigate} />
        <AboutSection />
        <BrandIdentitySection />
        <DirectionSection />
        <ConnectionSection />
        <ClosingSection onNavigate={handleNavigate} />
      </main>
    </div>
  );
}
