import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { getAssetUrl } from '../../utils/assetHelper';
import heroData from '../../data/hero.json';

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
    <span className="inline-block drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
      <span>{displayedText}</span>
      <span className="inline-block w-1.5 h-[0.8em] ml-1 bg-emerald-400 align-middle animate-blink rounded-sm shadow-[0_0_10px_#34d399]" />
    </span>
  );
}

export default function HeroSection() {
  const desktopVideos = heroData.desktopVideos || heroData.videos || [];
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const desktopVideoRef = useRef(null);
  const fallbackImgRef = useRef(null);

  const nextVideoIdx =
    desktopVideos.length > 0 ? (currentVideoIdx + 1) % desktopVideos.length : 0;

  const handleDesktopVideoEnded = () => {
    if (desktopVideos.length > 0) {
      setCurrentVideoIdx((prev) => (prev + 1) % desktopVideos.length);
    }
  };

  useEffect(() => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.load();
      desktopVideoRef.current.play().catch(() => {});
    }
  }, [currentVideoIdx]);

  return (
    <section className="relative py-2 sm:py-3 px-3 sm:px-6">
      {/* Zero-Latency Next-Video Preload Hint */}
      {desktopVideos[nextVideoIdx] && (
        <link
          rel="preload"
          as="video"
          href={getAssetUrl(desktopVideos[nextVideoIdx])}
          type="video/webm"
        />
      )}

      <Container className="p-0 max-w-7xl">
        {/* True-Black OLED Viewport with High-Contrast HDR Grading & Zero Muddy Overlays */}
        <div className="relative w-full h-[calc(100vh-6rem)] max-h-[520px] sm:max-h-[560px] min-h-[440px] rounded-3xl overflow-hidden bg-black border border-white/15 ring-1 ring-emerald-500/20 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.75)] group">
          {/* Mobile Video */}
          <video
            src={getAssetUrl(
              heroData.mobileVideo || '/media/hero-mobile-showcase.webm'
            )}
            poster={getAssetUrl(
              heroData.poster || '/images/hero/hero-slide-01.png'
            )}
            preload="auto"
            fetchPriority="high"
            autoPlay
            loop
            muted
            playsInline
            style={{
              filter: 'contrast(1.12) saturate(1.22) brightness(1.05)',
            }}
            className="block sm:hidden w-full h-full object-cover [backface-visibility:hidden] [transform:translateZ(0)] transition-transform duration-1000 group-hover:scale-[1.02]"
            onError={(e) => {
              e.target.style.display = 'none';
              if (fallbackImgRef.current)
                fallbackImgRef.current.style.display = 'block';
            }}
          />

          {/* Desktop/Laptop Video: OLED Optical Grading */}
          <video
            ref={desktopVideoRef}
            src={getAssetUrl(
              desktopVideos[currentVideoIdx] || '/media/hero-clean-air-flow.webm'
            )}
            poster={getAssetUrl(
              heroData.poster || '/images/hero/hero-slide-01.png'
            )}
            preload="auto"
            fetchPriority="high"
            autoPlay
            muted
            playsInline
            onEnded={handleDesktopVideoEnded}
            onError={handleDesktopVideoEnded}
            style={{
              filter: 'contrast(1.12) saturate(1.22) brightness(1.05)',
            }}
            className="hidden sm:block w-full h-full object-cover [backface-visibility:hidden] [transform:translateZ(0)] transition-transform duration-1000 group-hover:scale-[1.02]"
          />

          {/* Fallback image */}
          <img
            ref={fallbackImgRef}
            src={getAssetUrl(
              heroData.poster || '/images/hero/hero-slide-01.png'
            )}
            alt="Hero Background"
            className="hidden w-full h-full object-cover"
          />

          {/* Localized Bottom Scrim ONLY (Leaves the upper 65% of the video 100% crystal-clear OLED vividness) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

          {/* Top Bar inside Video Overlay */}
          <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-10">
            <div className="hidden sm:flex items-center gap-3 text-[11px] font-semibold text-white">
              {heroData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-1.5 bg-black/65 border border-white/15 px-3 py-1 rounded-full backdrop-blur-md shadow-sm"
                >
                  <span className="text-emerald-400 font-extrabold">
                    {stat.value}
                  </span>
                  <span className="text-slate-100">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Left Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 max-w-2xl z-10 space-y-3.5">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-emerald-400 drop-shadow">
                IntelliGreen CleanTech
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight min-h-[1.3em]">
                <TypingText phrases={heroData.typingHeadlines} />
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-slate-100 max-w-lg leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              {heroData.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
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
    </section>
  );
}
