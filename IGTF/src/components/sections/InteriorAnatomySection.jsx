import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { getAssetUrl } from '../../utils/assetHelper';
import productsData from '../../data/products.json';
import {
  Layers,
  Wind,
  Zap,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Play,
} from 'lucide-react';

const STAGE_ICONS = [Layers, Wind, ShieldCheck, Cpu, Wind, Zap];

export default function InteriorAnatomySection() {
  const anatomy = productsData.anatomyShowcase;
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(true);

  if (!anatomy || !anatomy.layers?.length) return null;

  const activeLayer = anatomy.layers[activeIndex];

  return (
    <section className="relative py-14 sm:py-22 bg-slate-950 text-white overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[32rem] h-[32rem] bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[32rem] h-[32rem] bg-cyan-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10 space-y-8 sm:space-y-10">
        {/* Compact Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {anatomy.title}
            </h2>
            <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
              {anatomy.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setShowVideo((prev) => !prev)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                showVideo
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/25'
                  : 'bg-white/5 text-white border-white/15 hover:bg-white/10'
              }`}
            >
              <Play
                size={13}
                className={showVideo ? 'fill-slate-950' : 'fill-emerald-400 text-emerald-400'}
              />
              {showVideo ? 'Live 3D Motion On' : 'Play 3D Cutaway Video'}
            </button>
          </div>
        </div>

        {/* Single-Row Touch-Scrollable Stage Selector Ribbon (Mobile & Desktop) */}
        <div className="flex lg:grid lg:grid-cols-6 overflow-x-auto no-scrollbar snap-x snap-mandatory gap-2.5 -mx-4 px-4 lg:mx-0 lg:px-0 pb-1">
          {anatomy.layers.map((layer, idx) => {
            const IconComp = STAGE_ICONS[idx % STAGE_ICONS.length];
            const isActive = idx === activeIndex;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`snap-start shrink-0 w-44 lg:w-auto text-left p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-br from-emerald-500/25 to-cyan-500/15 border-emerald-400/70 shadow-lg shadow-emerald-500/10'
                    : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-widest ${
                      isActive ? 'text-emerald-400' : 'text-slate-400'
                    }`}
                  >
                    STAGE {layer.code}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <IconComp size={13} />
                  </div>
                </div>
                <div
                  className={`text-xs font-bold truncate ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {layer.shortLabel || layer.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Hardware Stage Viewport */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLayer.id + (showVideo ? '-vid' : '-img')}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-white/[0.03] border border-white/10 rounded-3xl p-4 sm:p-8 backdrop-blur-xl"
          >
            {/* Left Visual Viewport with Interactive Hotspot Pins (7 Columns) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl group">
                {showVideo && activeLayer.video ? (
                  <video
                    src={getAssetUrl(activeLayer.video)}
                    poster={getAssetUrl(activeLayer.image)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={getAssetUrl(activeLayer.image)}
                    alt={activeLayer.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Interactive Hotspot Pins Overlay (Tap any number on the machine to jump stages) */}
                {!showVideo && (
                  <div className="absolute inset-0 pointer-events-none">
                    {anatomy.layers.map((layer, idx) => {
                      const isCurrent = idx === activeIndex;
                      const pos = layer.hotspot || { x: `${15 + idx * 14}%`, y: '50%' };
                      return (
                        <button
                          key={layer.id}
                          type="button"
                          onClick={() => setActiveIndex(idx)}
                          style={{ left: pos.x, top: pos.y }}
                          title={layer.title}
                          className={`pointer-events-auto -translate-x-1/2 -translate-y-1/2 absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] font-black transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-emerald-400 text-slate-950 scale-125 ring-4 ring-emerald-400/40 shadow-lg'
                              : 'bg-slate-950/85 text-white/90 border border-white/30 hover:bg-emerald-500 hover:text-slate-950'
                          }`}
                        >
                          {layer.code}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Top Overlay HUD Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  STAGE {activeLayer.code} — {activeLayer.shortLabel}
                </div>

                {/* Bottom Right Metric Pill */}
                <div className="absolute bottom-3 right-3 px-3.5 py-2 rounded-xl bg-slate-950/90 backdrop-blur-md border border-emerald-500/30 text-right shadow-xl">
                  <div className="text-sm sm:text-base font-extrabold text-emerald-400 leading-none">
                    {activeLayer.metric}
                  </div>
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                    {activeLayer.metricLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Engineering Description (5 Columns) */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-emerald-400">
                  <span>STAGE {activeLayer.code}</span>
                  <span>•</span>
                  <span className="text-cyan-400">{activeLayer.subtitle}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  {activeLayer.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {activeLayer.description}
                </p>
              </div>

              {/* Compact Navigation & CTA */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        (prev) => (prev - 1 + anatomy.layers.length) % anatomy.layers.length
                      )
                    }
                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 cursor-pointer transition"
                  >
                    ← Prev
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) => (prev + 1) % anatomy.layers.length)
                    }
                    className="px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs font-bold text-emerald-300 cursor-pointer transition"
                  >
                    Next Stage →
                  </button>
                </div>

                <Button to="/products" size="sm" variant="primary">
                  Full Product Lineup
                  <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
