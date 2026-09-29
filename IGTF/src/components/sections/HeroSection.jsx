import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Wind, ShieldCheck, Activity, ChevronDown } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { getAssetUrl } from '../../utils/assetHelper';
import heroData from '../../data/hero.json';

const HERO_OLED_SCENES = [
  {
    id: 'twoway-ctfa',
    code: '01',
    shortLabel: 'Two-Way CTFA',
    title: 'Two-Way CTFA & ERV Fresh Air Unit',
    specSummary: 'Twin-Collar Laminar Airflow · 78% Thermal Recovery · Zero Leakage GI Chassis',
    metricValue: '450–2000 CFM',
    metricLabel: 'Dual-Stream Positive Pressure',
    image: '/images/hero/hero-oled-twoway-ctfa.webp',
    productPath: '/products/tfas-erv-system',
    icon: Wind,
  },
  {
    id: 'wall-ctfa',
    code: '02',
    shortLabel: 'Wall Mounted CTFA',
    title: 'Wall Mounted CTFA Medical H13 Purifier',
    specSummary: '3-Stage G4 + HEPA H13 + Honeycomb Carbon · <34 dB(A) · Live 0.0 OLED Display',
    metricValue: '99.97% @ 0.3μm',
    metricLabel: 'Hospital-Grade Filtration',
    image: '/images/hero/hero-oled-wall-ctfa.webp',
    productPath: '/products/ctfa-wall',
    icon: ShieldCheck,
  },
  {
    id: 'iaq-sensor',
    code: '03',
    shortLabel: 'IAQ Smart Sensor',
    title: 'IAQ Smart Sensor & AirSense OS Telemetry',
    specSummary: '9-Parameter Laser PM2.5 + NDIR CO2 · LoRaWAN, MODBUS & AWS Cloud Automation',
    metricValue: '10s Real-Time',
    metricLabel: 'Closed-Loop HVAC Trigger',
    image: '/images/hero/hero-oled-iaq-sensor.webp',
    productPath: '/products/iaq-sensor',
    icon: Activity,
  },
];

function TypingText({ phrases = [] }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) return;

    const currentPhrase = phrases[phraseIndex];
    let speed = isDeleting ? 35 : 70;

    if (!isDeleting && charIndex === currentPhrase.length) {
      speed = 2200;
    } else if (isDeleting && charIndex === 0) {
      speed = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  const currentPhrase = phrases[phraseIndex] || '';
  const displayedText = currentPhrase.substring(0, charIndex);

  return (
    <span className="inline-block drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
      <span>{displayedText}</span>
      <span className="inline-block w-1.5 h-[0.8em] ml-1 bg-emerald-400 align-middle animate-blink rounded-sm shadow-[0_0_10px_#34d399]" />
    </span>
  );
}

export default function HeroSection() {
  const trackRef = useRef(null);
  // Continuous scroll position mapped to [0, HERO_OLED_SCENES.length - 1]
  const [scrollStage, setScrollStage] = useState(0);

  const updateScrollProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const totalScrollable = Math.max(1, el.offsetHeight - window.innerHeight);
    const scrolled = Math.min(Math.max(0, -rect.top), totalScrollable);
    const normalized = scrolled / totalScrollable; // 0 -> 1
    const stageFloat = normalized * (HERO_OLED_SCENES.length - 1);
    setScrollStage(stageFloat);
  }, []);

  useEffect(() => {
    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, [updateScrollProgress]);

  const jumpToScene = (targetIndex) => {
    const el = trackRef.current;
    if (!el) return;
    const totalScrollable = Math.max(1, el.offsetHeight - window.innerHeight);
    const targetScrollTop =
      window.scrollY +
      el.getBoundingClientRect().top +
      (targetIndex / (HERO_OLED_SCENES.length - 1)) * totalScrollable;

    window.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth',
    });
  };

  const activeIndex = Math.min(
    HERO_OLED_SCENES.length - 1,
    Math.max(0, Math.round(scrollStage))
  );
  const activeScene = HERO_OLED_SCENES[activeIndex];
  const overallProgressPercent = Math.min(
    100,
    Math.max(0, (scrollStage / (HERO_OLED_SCENES.length - 1)) * 100)
  );

  return (
    <section
      ref={trackRef}
      className="relative h-[245vh] sm:h-[265vh] select-none"
    >
      {/* Preload all 3 ultra-crisp WebP OLED studio masters for zero-latency rolling */}
      {HERO_OLED_SCENES.map((scene) => (
        <link
          key={scene.id}
          rel="preload"
          as="image"
          href={getAssetUrl(scene.image)}
          type="image/webp"
        />
      ))}

      {/* Sticky Viewport that pins while the 3 OLED product scenes roll on scroll */}
      <div className="sticky top-16 sm:top-20 py-2 sm:py-3 px-3 sm:px-6">
        <Container className="p-0 max-w-7xl">
          <div
            style={{ perspective: '1400px' }}
            className="relative w-full h-[calc(100vh-5.5rem)] max-h-[540px] sm:max-h-[580px] min-h-[450px] rounded-3xl overflow-hidden bg-black border border-white/15 ring-1 ring-emerald-500/25 shadow-[0_28px_70px_-12px_rgba(0,0,0,0.85)]"
          >
            {/* 3D Leonardo.ai-Style Scroll-Driven Rolling Drum Stage */}
            <div
              className="relative w-full h-full bg-black overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {HERO_OLED_SCENES.map((scene, idx) => {
                // delta > 0 means incoming from bottom; delta < 0 means rolling up & away
                const delta = idx - scrollStage;
                const absDelta = Math.abs(delta);
                const isVisible = absDelta < 1.35;

                // Cylindrical 3D drum roll math (Leonardo.ai style)
                const translateYPercent = delta * 68;
                const rotateXDeg = delta * -24;
                const scaleVal = Math.max(0.84, 1 - absDelta * 0.11);
                const opacityVal = Math.max(
                  0,
                  Math.min(1, 1 - Math.pow(absDelta, 1.35) * 0.92)
                );

                return (
                  <div
                    key={scene.id}
                    aria-hidden={idx !== activeIndex}
                    style={{
                      opacity: isVisible ? opacityVal : 0,
                      transform: `translate3d(0, ${translateYPercent}%, 0) scale(${scaleVal}) rotateX(${rotateXDeg}deg)`,
                      transformOrigin: delta >= 0 ? 'center top' : 'center bottom',
                      zIndex: Math.round(20 - absDelta * 10),
                      willChange: 'transform, opacity',
                      backfaceVisibility: 'hidden',
                    }}
                    className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-black transition-none"
                  >
                    <img
                      src={getAssetUrl(scene.image)}
                      alt={scene.title}
                      fetchPriority={idx === 0 ? 'high' : 'auto'}
                      decoding="sync"
                      draggable={false}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                );
              })}
            </div>

            {/* Localized Bottom & Left Scrims ONLY — keeps product hardware 100% OLED razor-sharp */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56%] bg-gradient-to-t from-black/90 via-black/45 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[48%] bg-gradient-to-r from-black/70 via-black/25 to-transparent z-20" />

            {/* Top HUD Bar: Verified Metrics + Active Rolling Hardware Status */}
            <div className="absolute top-4 sm:top-5 left-5 right-5 sm:left-7 sm:right-7 flex items-center justify-between gap-3 z-30">
              <div className="hidden md:flex items-center gap-2.5 text-[11px] font-semibold text-white">
                {heroData.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-1.5 bg-black/70 border border-white/15 px-3 py-1 rounded-full backdrop-blur-md shadow-sm"
                  >
                    <span className="text-emerald-400 font-extrabold">
                      {stat.value}
                    </span>
                    <span className="text-slate-100">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Active Hardware Telemetry Pill (Top Right) */}
              <div className="ml-auto flex items-center gap-2.5 bg-black/75 border border-emerald-400/35 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_24px_rgba(16,185,129,0.2)]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-emerald-300">
                  {activeScene.code} / 03 · {activeScene.shortLabel}
                </span>
                <span className="hidden sm:inline-block text-white/25">|</span>
                <span className="hidden sm:inline-block text-[11px] font-semibold text-white">
                  {activeScene.metricValue}
                </span>
              </div>
            </div>

            {/* Right-Side Vertical Scroll Progress Rail (Leonardo.ai style) */}
            <div className="hidden lg:flex flex-col items-center gap-2.5 absolute right-6 top-1/2 -translate-y-1/2 z-30">
              {HERO_OLED_SCENES.map((scene, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => jumpToScene(idx)}
                    title={scene.title}
                    className={`group flex items-center gap-2.5 px-2.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-emerald-500/20 border-emerald-400/60 text-white shadow-[0_0_20px_rgba(16,185,129,0.25)]'
                        : 'bg-black/60 border-white/15 text-slate-400 hover:text-white hover:border-white/35'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-black tracking-widest ${
                        isActive ? 'text-emerald-300' : 'text-slate-400'
                      }`}
                    >
                      {scene.code}
                    </span>
                    <span
                      className={`text-[11px] font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 ${
                        isActive
                          ? 'max-w-[130px] opacity-100 pr-1'
                          : 'max-w-0 opacity-0 group-hover:max-w-[130px] group-hover:opacity-100 group-hover:pr-1'
                      }`}
                    >
                      {scene.shortLabel}
                    </span>
                  </button>
                );
              })}

              {/* Vertical Progress Track */}
              <div className="w-1 h-16 rounded-full bg-white/15 overflow-hidden mt-1">
                <div
                  className="w-full bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full transition-all duration-150"
                  style={{ height: `${overallProgressPercent}%` }}
                />
              </div>
            </div>

            {/* Bottom Content + Interactive Product Switcher Dock */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-8 sm:right-8 flex flex-col lg:flex-row lg:items-end justify-between gap-5 z-30">
              {/* Left Column: Headline, Dynamic Spec Callout & CTAs */}
              <div className="max-w-xl space-y-3">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-bold text-emerald-400 drop-shadow">
                    <span>IntelliGreen CleanTech</span>
                    <span className="text-white/30">•</span>
                    <span className="text-cyan-300">{activeScene.title}</span>
                  </div>

                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.12] min-h-[1.25em]">
                    <TypingText phrases={heroData.typingHeadlines} />
                  </h1>
                </div>

                <p className="text-xs sm:text-sm text-slate-100 max-w-lg leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
                  {activeScene.specSummary}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-0.5">
                  <Button
                    to={heroData.primaryCTA.path}
                    size="md"
                    variant="primary"
                  >
                    {heroData.primaryCTA.label}
                    <ArrowRight size={15} />
                  </Button>
                  <Button
                    to={activeScene.productPath || heroData.secondaryCTA.path}
                    size="md"
                    variant="glass"
                  >
                    Inspect {activeScene.shortLabel}
                  </Button>
                </div>
              </div>

              {/* Bottom-Right: Interactive 3-Product Roll Switcher + Scroll Indicator */}
              <div className="flex flex-col items-start lg:items-end gap-2">
                <div className="flex items-center gap-1.5 bg-black/75 border border-white/15 p-1.5 rounded-2xl backdrop-blur-xl shadow-lg">
                  {HERO_OLED_SCENES.map((scene, idx) => {
                    const IconComponent = scene.icon;
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={scene.id}
                        type="button"
                        onClick={() => jumpToScene(idx)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-[0_0_16px_rgba(16,185,129,0.45)]'
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <IconComponent size={13} />
                        <span>{scene.shortLabel}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase text-slate-300/90 px-1">
                  <ChevronDown
                    size={13}
                    className="text-emerald-400 animate-bounce"
                  />
                  <span>Scroll down to roll through hardware ({activeIndex + 1}/3)</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
