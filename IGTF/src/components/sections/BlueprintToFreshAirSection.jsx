import React, { useEffect, useRef, useState } from 'react';
import Container from '../common/Container';
import { getAssetUrl } from '../../utils/assetHelper';
import {
  Compass,
  Box,
  Layers,
  Filter,
  Wind,
  ArrowDown,
  Sparkles,
} from 'lucide-react';

const TOTAL_FRAMES = 36; // frame-00.webp through frame-35.webp

const SCROLL_PHASES = [
  {
    id: 'blueprint-outline',
    code: '01',
    range: [0.0, 0.22],
    badge: 'Blueprint Genesis',
    title: 'Precision CAD Blueprint Emerges on Blank Canvas',
    description:
      'As you scroll down, the blank dark engineering stage awakens—tracing the laser-calibrated cyan wireframe outline of the IntelliGreen CTFA enclosure and duct geometry.',
    metric: 'CAD 1:1',
    metricLabel: 'Laser-Cut Tolerance',
    accent: 'cyan',
    icon: Compass,
  },
  {
    id: 'blueprint-shape',
    code: '02',
    range: [0.22, 0.44],
    badge: '3D Structural Architecture',
    title: 'Product Takes Full 3D Internal Shape',
    description:
      'Scrolling further completes the internal 3D wireframe assembly—aligning the dual centrifugal BLDC fans, aerodynamic vortex plenum, and multi-stage filter tracks.',
    metric: '3D Mesh',
    metricLabel: 'Dual-Fan Plenum Geometry',
    accent: 'cyan',
    icon: Box,
  },
  {
    id: 'real-product-form',
    code: '03',
    range: [0.44, 0.62],
    badge: 'Solid-State Hardware',
    title: 'Wireframe Solidifies Into Real Product & Cutaway',
    description:
      'The blueprint transforms into the real acoustic-sealed, powder-coated steel IntelliGreen CTFA unit and opens its side chamber to reveal the G4, Activated Carbon, and HEPA H13 stages.',
    metric: '0.8mm GI',
    metricLabel: 'Acoustic-Sealed Steel',
    accent: 'emerald',
    icon: Layers,
  },
  {
    id: 'dirty-air-filtration',
    code: '04',
    range: [0.62, 0.82],
    badge: 'Pollutant Interception',
    title: 'Dirty Air Enters From Left & Passes Through Filters',
    description:
      'From the left intake collar, polluted outdoor air laden with PM2.5, coarse dust, and toxic VOCs enters the unit and passes sequentially through the G4 Mesh, Honeycomb Carbon, and HEPA H13 filters.',
    metric: '3-Stage',
    metricLabel: 'G4 + Carbon + HEPA H13',
    accent: 'amber',
    icon: Filter,
  },
  {
    id: 'fresh-air-discharge',
    code: '05',
    range: [0.82, 1.0],
    badge: 'Pure Laminar Discharge',
    title: '99.97% Purified Fresh Air Streams Out the Other End',
    description:
      'Every particulate and gas pollutant is trapped inside the filtration matrix while crystal-clear, oxygen-rich purified fresh air streams continuously out the right discharge collar.',
    metric: '99.97%',
    metricLabel: 'Pure Fresh Air Output',
    accent: 'emerald',
    icon: Wind,
  },
];

export default function BlueprintToFreshAirSection() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);
  const blankOverlayRef = useRef(null);
  const leftBadgeRef = useRef(null);
  const rightBadgeRef = useRef(null);

  const [activePhase, setActivePhase] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const activePhaseRef = useRef(0);

  // Preload all 36 lightweight WebP frames once
  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;
    const imgs = new Array(TOTAL_FRAMES);

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const num = String(i).padStart(2, '0');
      img.decoding = 'async';
      img.src = getAssetUrl(`/images/blueprint-scroll/frame-${num}.webp`);
      img.onload = () => {
        if (!mounted) return;
        loadedCount += 1;
        if (i === 0 || loadedCount === TOTAL_FRAMES) {
          drawFrame(0);
        }
        if (loadedCount >= Math.min(8, TOTAL_FRAMES)) {
          setImagesLoaded(true);
        }
      };
      imgs[i] = img;
    }

    imagesRef.current = imgs;
    return () => {
      mounted = false;
    };
  }, []);

  // Draw blended frame onto HTML5 Canvas for silky sub-frame transitions
  const drawFrame = (progress) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const clamped = Math.max(0, Math.min(1, progress));
    const exactFrame = clamped * (TOTAL_FRAMES - 1);
    const lowIndex = Math.floor(exactFrame);
    const highIndex = Math.min(TOTAL_FRAMES - 1, lowIndex + 1);
    const fraction = exactFrame - lowIndex;

    const imgs = imagesRef.current;
    const imgLow = imgs[lowIndex];
    const imgHigh = imgs[highIndex];

    ctx.fillStyle = '#0c1217';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // At the very start (0.0 -> 0.06), fade in from pure blank dark screen
    const emergenceAlpha = clamped < 0.06 ? clamped / 0.06 : 1;

    if (imgLow && imgLow.complete && imgLow.naturalWidth > 0) {
      ctx.globalAlpha = emergenceAlpha;
      ctx.drawImage(imgLow, 0, 0, canvas.width, canvas.height);
    }

    if (
      fraction > 0.01 &&
      imgHigh &&
      imgHigh.complete &&
      imgHigh.naturalWidth > 0
    ) {
      ctx.globalAlpha = fraction * emergenceAlpha;
      ctx.drawImage(imgHigh, 0, 0, canvas.width, canvas.height);
    }

    ctx.globalAlpha = 1;
  };

  // Update DOM HUD & Canvas via requestAnimationFrame on scroll (Zero React lag)
  const applyProgress = (progress) => {
    const clamped = Math.max(0, Math.min(1, progress));
    drawFrame(clamped);

    if (progressBarRef.current) {
      progressBarRef.current.style.transform = `scaleX(${clamped})`;
    }
    if (progressTextRef.current) {
      progressTextRef.current.textContent = `${Math.round(clamped * 100)}%`;
    }

    // Blank screen prompt fades out as soon as blueprint emerges
    if (blankOverlayRef.current) {
      const blankOpacity = clamped < 0.05 ? 1 - clamped / 0.05 : 0;
      blankOverlayRef.current.style.opacity = blankOpacity.toFixed(2);
    }

    // Dirty air left badge visibility (active when dirty air streams in: 0.56 -> 1.0)
    if (leftBadgeRef.current) {
      const showDirty = clamped >= 0.56 ? Math.min(1, (clamped - 0.56) / 0.08) : 0;
      leftBadgeRef.current.style.opacity = showDirty.toFixed(2);
      leftBadgeRef.current.style.transform = `translate3d(${(1 - showDirty) * -14}px, 0, 0)`;
    }

    // Fresh air right badge visibility (active when clean blue air exits: 0.78 -> 1.0)
    if (rightBadgeRef.current) {
      const showFresh = clamped >= 0.78 ? Math.min(1, (clamped - 0.78) / 0.08) : 0;
      rightBadgeRef.current.style.opacity = showFresh.toFixed(2);
      rightBadgeRef.current.style.transform = `translate3d(${(1 - showFresh) * 14}px, 0, 0)`;
    }

    // Determine active phase index (0..4)
    let nextPhase = 0;
    for (let i = 0; i < SCROLL_PHASES.length; i++) {
      if (clamped >= SCROLL_PHASES[i].range[0]) {
        nextPhase = i;
      }
    }
    if (nextPhase !== activePhaseRef.current) {
      activePhaseRef.current = nextPhase;
      setActivePhase(nextPhase);
    }
  };

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollableDistance = rect.height - window.innerHeight;
        if (scrollableDistance <= 0) return;

        const rawProgress = -rect.top / scrollableDistance;
        applyProgress(rawProgress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Jump smoothly to a specific phase when user clicks a phase button
  const scrollToPhase = (index) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const scrollableDistance = rect.height - window.innerHeight;
    const targetMidProgress =
      index === SCROLL_PHASES.length - 1
        ? 0.96
        : (SCROLL_PHASES[index].range[0] + SCROLL_PHASES[index].range[1]) * 0.5;

    window.scrollTo({
      top: sectionTop + targetMidProgress * scrollableDistance,
      behavior: 'smooth',
    });
  };

  const currentPhaseData = SCROLL_PHASES[activePhase] || SCROLL_PHASES[0];

  return (
    <section
      ref={sectionRef}
      id="blueprint-to-fresh-air"
      className="relative w-full h-[360vh] sm:h-[420vh] bg-[#060a0e] text-white select-none"
    >
      {/* Sticky Full-Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-center">
        {/* Subtle Architectural Blueprint Grid & Ambient Glows */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(34,211,238,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.07) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <Container className="relative z-10 w-full py-4 sm:py-8">
          {/* Compact Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4 sm:mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-1">
                <Sparkles size={13} className="text-emerald-400" />
                Scroll-Driven 3D Hardware Evolution
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                From Blueprint Outline to{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Pure Fresh Air Output
                </span>
              </h2>
            </div>

            {/* Scroll Progress Telemetry Pill */}
            <div className="flex items-center gap-3 self-start sm:self-auto bg-white/[0.04] border border-white/10 rounded-full px-3.5 py-1.5 backdrop-blur-md">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Evolution Progress
              </span>
              <div className="w-20 sm:w-28 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full w-full origin-left bg-gradient-to-r from-cyan-400 to-emerald-400 transition-transform duration-75"
                  style={{ transform: 'scaleX(0)' }}
                />
              </div>
              <span
                ref={progressTextRef}
                className="text-xs font-black text-emerald-400 tabular-nums w-8 text-right"
              >
                0%
              </span>
            </div>
          </div>

          {/* Main Split Grid: Left Blank Screen / 3D Model Canvas (7 cols) + Right Narrative & Controls (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            {/* LEFT SIDE: Blank Dark Screen -> Blueprint -> Solid Product -> Dirty Air In -> Fresh Air Out */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c1217] border border-cyan-500/25 shadow-[0_0_70px_-15px_rgba(6,182,212,0.28)]">
                {/* High-FPS Scroll-Scrubbed HTML5 Canvas */}
                <canvas
                  ref={canvasRef}
                  width={960}
                  height={540}
                  className="w-full h-full object-cover block"
                />

                {/* Initial Blank Screen Prompt (Fades out immediately as user scrolls down and blueprint appears) */}
                <div
                  ref={blankOverlayRef}
                  className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-200"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-3 animate-bounce">
                    <ArrowDown size={20} className="text-cyan-400" />
                  </div>
                  <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] text-cyan-300">
                    Scroll Down to Materialize Blueprint
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 max-w-xs">
                    Watch the CTFA outline emerge on this blank screen, solidify into real hardware, and purify dirty outdoor air.
                  </p>
                </div>

                {/* Top-Left Live Phase Status Indicator */}
                <div className="pointer-events-none absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-white">
                    PHASE {currentPhaseData.code} — {currentPhaseData.badge}
                  </span>
                </div>

                {/* Left Intake Callout: Dirty Air Entering Filters (Appears in Phases 04 & 05) */}
                <div
                  ref={leftBadgeRef}
                  style={{ opacity: 0 }}
                  className="pointer-events-none absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1.5 rounded-xl bg-amber-950/90 border border-amber-400/50 backdrop-blur-md shadow-lg"
                >
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold text-amber-300">
                    <span>Dirty Outdoor Air In →</span>
                  </div>
                  <div className="text-[9px] text-amber-200/80 font-medium">
                    PM2.5, Dust & Smog Enter G4 + Carbon + HEPA H13
                  </div>
                </div>

                {/* Right Outlet Callout: Pure Fresh Air Coming Out (Appears in Phase 05) */}
                <div
                  ref={rightBadgeRef}
                  style={{ opacity: 0 }}
                  className="pointer-events-none absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-3 py-1.5 rounded-xl bg-emerald-950/90 border border-emerald-400/60 backdrop-blur-md shadow-lg text-right"
                >
                  <div className="flex items-center justify-end gap-1.5 text-[10px] sm:text-xs font-extrabold text-emerald-300">
                    <span>→ Pure Fresh Air Out</span>
                  </div>
                  <div className="text-[9px] text-emerald-200/80 font-medium">
                    99.97% Purified Oxygen-Rich Airflow
                  </div>
                </div>
              </div>

              {/* Quick Interactive Stage Timeline Bar Below Canvas */}
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mt-3">
                {SCROLL_PHASES.map((phase, idx) => {
                  const isCurrent = idx === activePhase;
                  const isCompleted = idx < activePhase;
                  return (
                    <button
                      key={phase.id}
                      type="button"
                      onClick={() => scrollToPhase(idx)}
                      className={`group text-left p-2 sm:p-2.5 rounded-xl border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-gradient-to-br from-cyan-500/25 to-emerald-500/20 border-cyan-400/70 shadow-md'
                          : isCompleted
                          ? 'bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/15'
                          : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[9px] sm:text-[10px] font-black tracking-wider ${
                            isCurrent
                              ? 'text-cyan-300'
                              : isCompleted
                              ? 'text-emerald-400'
                              : 'text-slate-500'
                          }`}
                        >
                          {phase.code}
                        </span>
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCurrent
                              ? 'bg-cyan-400 animate-pulse'
                              : isCompleted
                              ? 'bg-emerald-400'
                              : 'bg-white/20'
                          }`}
                        />
                      </div>
                      <div
                        className={`text-[10px] sm:text-xs font-bold truncate mt-0.5 ${
                          isCurrent ? 'text-white' : 'text-slate-400'
                        }`}
                      >
                        {phase.badge}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE: Synchronized Engineering Narrative & Active Stage Breakdown (5 cols) */}
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              {/* Active Highlight Card */}
              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/15 border border-cyan-400/30 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-cyan-300">
                    Stage {currentPhaseData.code} of 05 • {currentPhaseData.badge}
                  </span>
                  <div className="text-right">
                    <div className="text-sm sm:text-base font-black text-emerald-400 leading-none">
                      {currentPhaseData.metric}
                    </div>
                    <div className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                      {currentPhaseData.metricLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-snug mb-2">
                  {currentPhaseData.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentPhaseData.description}
                </p>

                {/* Live Airflow Transformation Diagram Pill */}
                <div className="mt-4 pt-3.5 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                  <div
                    className={`p-2 rounded-xl border transition-colors ${
                      activePhase <= 1
                        ? 'bg-cyan-500/20 border-cyan-400/60 text-cyan-200'
                        : 'bg-white/[0.03] border-white/10 text-slate-400'
                    }`}
                  >
                    <div className="text-[9px] font-bold uppercase tracking-wider">
                      Step 1
                    </div>
                    <div className="text-[11px] font-extrabold text-white mt-0.5">
                      CAD Blueprint
                    </div>
                  </div>
                  <div
                    className={`p-2 rounded-xl border transition-colors ${
                      activePhase === 2 || activePhase === 3
                        ? 'bg-amber-500/20 border-amber-400/60 text-amber-200'
                        : 'bg-white/[0.03] border-white/10 text-slate-400'
                    }`}
                  >
                    <div className="text-[9px] font-bold uppercase tracking-wider">
                      Step 2
                    </div>
                    <div className="text-[11px] font-extrabold text-white mt-0.5">
                      Dirty Air Filtered
                    </div>
                  </div>
                  <div
                    className={`p-2 rounded-xl border transition-colors ${
                      activePhase === 4
                        ? 'bg-emerald-500/25 border-emerald-400/70 text-emerald-200'
                        : 'bg-white/[0.03] border-white/10 text-slate-400'
                    }`}
                  >
                    <div className="text-[9px] font-bold uppercase tracking-wider">
                      Step 3
                    </div>
                    <div className="text-[11px] font-extrabold text-white mt-0.5">
                      Fresh Air Out
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Vertical Step List (Hidden on small mobile to fit 100vh cleanly, visible on sm+) */}
              <div className="hidden sm:flex flex-col gap-2">
                {SCROLL_PHASES.map((phase, idx) => {
                  const Icon = phase.icon;
                  const isActive = idx === activePhase;
                  return (
                    <button
                      key={phase.id}
                      type="button"
                      onClick={() => scrollToPhase(idx)}
                      className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-white/[0.08] border-cyan-400/50 shadow-md'
                          : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950'
                            : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        <Icon size={14} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs font-extrabold truncate ${
                              isActive ? 'text-white' : 'text-slate-300'
                            }`}
                          >
                            {phase.code}. {phase.title}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
