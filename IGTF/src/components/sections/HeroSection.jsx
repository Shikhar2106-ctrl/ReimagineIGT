import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import Badge from '../common/Badge';
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
      speed = 2200; // Hold full phrase
    } else if (isDeleting && charIndex === 0) {
      speed = 350; // Pause before typing next phrase
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
    <span className="inline-block">
      <span>{displayedText}</span>
      <span className="inline-block w-1.5 h-[0.8em] ml-1 bg-emerald-400 align-middle animate-blink rounded-sm" />
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative py-2 sm:py-3 px-3 sm:px-6">
      <Container className="p-0 max-w-7xl">
        {/* Compact Full-width Cover Video Container designed to fit on-screen without scrolling */}
        <div className="relative w-full h-[calc(100vh-6rem)] max-h-[520px] sm:max-h-[560px] min-h-[440px] rounded-3xl overflow-hidden shadow-xl bg-slate-900 border border-slate-200/80 group">
          
          {/* Background Video */}
          <video
            src={getAssetUrl(heroData.videos[0])}
            poster={getAssetUrl(heroData.poster || "/images/hero/frame-1.png")}
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          {/* Fallback image */}
          <img
            src={getAssetUrl("/images/hero/frame-1.png")}
            alt="Hero Background"
            className="hidden w-full h-full object-cover"
          />

          {/* Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent" />

          {/* Top Bar inside Video Overlay */}
          <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-10">
            <Badge className="bg-slate-950/60 border-slate-700/60 text-emerald-400 backdrop-blur-md px-2.5 py-1 text-[10px]">
              {heroData.badge}
            </Badge>

            <div className="hidden sm:flex items-center gap-4 text-[11px] font-semibold text-slate-300">
              {heroData.stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-1.5 bg-slate-950/60 border border-slate-800/80 px-3 py-1 rounded-full backdrop-blur-md">
                  <span className="text-emerald-400 font-extrabold">{stat.value}</span>
                  <span className="text-slate-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Left Overlay: Scaled Down & Balanced Typing Headline */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 max-w-2xl z-10 space-y-4">
            
            {/* Dynamic Typing Headline */}
            <div className="space-y-1.5">
              <div className="text-[10px] uppercase tracking-[0.25em] font-semibold text-emerald-400">
                IntelliGreen CleanTech
              </div>
              
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight min-h-[1.4em]">
                <TypingText phrases={heroData.typingHeadlines} />
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 max-w-lg leading-relaxed font-normal">
              {heroData.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Button to={heroData.primaryCTA.path} size="md" variant="primary">
                {heroData.primaryCTA.label}
                <ArrowRight size={16} />
              </Button>
              <Button to={heroData.secondaryCTA.path} size="md" variant="secondary" className="bg-slate-900/80 border-slate-700 text-white hover:bg-slate-800">
                {heroData.secondaryCTA.label}
              </Button>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
