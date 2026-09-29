import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { getAssetUrl } from '../../utils/assetHelper';
import heroData from '../../data/hero.json';

const HERO_OLED_SCENES = [
  {
    id: 'urban-buildings',
    title: 'Urban High-Rise Buildings & City Air Reality',
    image: '/images/hero/hero-oled-story-01-buildings.webp',
    mobileImage: '/images/hero/hero-mobile-01-buildings.webp',
  },
  {
    id: 'luxury-family-home',
    title: 'Luxury Residence Protected by IntelliGreen Clean Air',
    image: '/images/hero/hero-oled-story-02-luxury-home.webp',
    mobileImage: '/images/hero/hero-mobile-02-luxury-home.webp',
  },
  {
    id: 'family-fresh-air-faces',
    title: 'Pure Oxygen-Rich Freshness for Every Breath',
    image: '/images/hero/hero-oled-story-03-fresh-faces.webp',
    mobileImage: '/images/hero/hero-mobile-03-fresh-faces.webp',
  },
  {
    id: 'twoway-ctfa',
    title: 'Two-Way CTFA & ERV Fresh Air Unit',
    image: '/images/hero/hero-oled-twoway-ctfa.webp',
    mobileImage: '/images/hero/hero-mobile-04-twoway-ctfa.webp',
  },
  {
    id: 'wall-ctfa',
    title: 'Wall Mounted CTFA Medical H13 Purifier',
    image: '/images/hero/hero-oled-wall-ctfa.webp',
    mobileImage: '/images/hero/hero-mobile-05-wall-ctfa.webp',
  },
  {
    id: 'iaq-sensor',
    title: 'IAQ Smart Sensor & AirSense OS Telemetry',
    image: '/images/hero/hero-oled-iaq-sensor.webp',
    mobileImage: '/images/hero/hero-mobile-06-iaq-sensor.webp',
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
  const slideRefs = useRef([]);

  useEffect(() => {
    let rafId = null;

    const applySlideTransforms = () => {
      rafId = null;
      const el = trackRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalScrollable = Math.max(1, el.offsetHeight - window.innerHeight);
      const scrolled = Math.min(Math.max(0, -rect.top), totalScrollable);
      const stageFloat = (scrolled / totalScrollable) * (HERO_OLED_SCENES.length - 1);

      const isMobile = window.innerWidth < 640;

      for (let idx = 0; idx < HERO_OLED_SCENES.length; idx += 1) {
        const node = slideRefs.current[idx];
        if (!node) continue;

        const delta = idx - stageFloat;
        const absDelta = Math.abs(delta);

        // Cull off-screen slides so mobile GPU only composites the 2 active layers
        if (absDelta > 1.2) {
          if (node.style.display !== 'none') {
            node.style.display = 'none';
          }
          continue;
        }

        if (node.style.display !== 'block') {
          node.style.display = 'block';
        }

        const translateYPercent = delta * (isMobile ? 62 : 68);
        const rotateXDeg = delta * (isMobile ? -16 : -24);
        const scaleVal = Math.max(0.86, 1 - absDelta * 0.1);
        const opacityVal = Math.max(
          0,
          Math.min(1, 1 - Math.pow(absDelta, 1.35) * 0.92)
        );

        node.style.opacity = opacityVal.toFixed(3);
        node.style.transformOrigin = delta >= 0 ? 'center top' : 'center bottom';
        node.style.zIndex = String(Math.round(20 - absDelta * 10));
        node.style.transform = `translate3d(0, ${translateYPercent.toFixed(2)}%, 0) scale(${scaleVal.toFixed(3)}) rotateX(${rotateXDeg.toFixed(2)}deg)`;
      }
    };

    const onScrollOrResize = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(applySlideTransforms);
      }
    };

    applySlideTransforms();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <section
      ref={trackRef}
      className="relative h-[300vh] sm:h-[360vh] select-none"
    >
      {/* Preload first desktop & mobile Hero image for instant LCP */}
      <link
        rel="preload"
        as="image"
        href={getAssetUrl(HERO_OLED_SCENES[0].image)}
        media="(min-width: 640px)"
        type="image/webp"
      />
      <link
        rel="preload"
        as="image"
        href={getAssetUrl(HERO_OLED_SCENES[0].mobileImage)}
        media="(max-width: 639px)"
        type="image/webp"
      />

      {/* Sticky Viewport that pins while the 6 OLED scenes roll on scroll */}
      <div className="sticky top-16 sm:top-20 py-2 sm:py-3 px-3 sm:px-6">
        <Container className="p-0 max-w-7xl">
          <div
            style={{ perspective: '1400px' }}
            className="relative w-full h-[calc(100vh-5.25rem)] max-h-[560px] sm:max-h-[580px] min-h-[460px] rounded-3xl overflow-hidden bg-black border border-white/15 ring-1 ring-emerald-500/20 shadow-[0_28px_70px_-12px_rgba(0,0,0,0.85)]"
          >
            {/* 3D Leonardo.ai-Style Scroll-Driven Rolling Stage (Direct GPU DOM mutations — 0 React re-renders) */}
            <div
              className="relative w-full h-full bg-black overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {HERO_OLED_SCENES.map((scene, idx) => (
                <div
                  key={scene.id}
                  ref={(el) => {
                    slideRefs.current[idx] = el;
                  }}
                  style={{
                    display: idx <= 1 ? 'block' : 'none',
                    opacity: idx === 0 ? 1 : 0,
                    zIndex: 20 - idx,
                    willChange: 'transform, opacity',
                    backfaceVisibility: 'hidden',
                  }}
                  className="absolute inset-0 w-full h-full bg-black"
                >
                  <picture className="block w-full h-full">
                    <source
                      media="(max-width: 639px)"
                      srcSet={getAssetUrl(scene.mobileImage)}
                      type="image/webp"
                    />
                    <img
                      src={getAssetUrl(scene.image)}
                      alt={scene.title}
                      fetchPriority={idx === 0 ? 'high' : 'auto'}
                      loading="eager"
                      decoding="async"
                      draggable={false}
                      className="w-full h-full object-cover object-center"
                    />
                  </picture>
                </div>
              ))}
            </div>

            {/* Localized Bottom & Left Text Protection Scrim ONLY */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20" />
            <div className="pointer-events-none hidden sm:block absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-black/65 via-black/20 to-transparent z-20" />

            {/* Bottom Left Content (Clean & Tag-Free) */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 max-w-xl z-30 space-y-2.5 sm:space-y-3.5">
              <h1 className="text-xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.12] min-h-[1.25em]">
                <TypingText phrases={heroData.typingHeadlines} />
              </h1>

              <p className="text-xs sm:text-sm text-slate-200 max-w-lg leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)] line-clamp-2 sm:line-clamp-none">
                {heroData.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                <Button
                  to={heroData.primaryCTA.path}
                  size="md"
                  variant="primary"
                >
                  {heroData.primaryCTA.label}
                  <ArrowRight size={15} />
                </Button>
                <Button
                  to={heroData.secondaryCTA.path}
                  size="md"
                  variant="glass"
                >
                  {heroData.secondaryCTA.label}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
