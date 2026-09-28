import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import Badge from '../common/Badge';
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
  const [showVideo, setShowVideo] = useState(false);

  if (!anatomy || !anatomy.layers?.length) return null;

  const activeLayer = anatomy.layers[activeIndex];

  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[36rem] h-[36rem] bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[36rem] h-[36rem] bg-cyan-500/10 rounded-full blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <Container className="relative z-10 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <Sparkles size={13} />
              {anatomy.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              {anatomy.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              {anatomy.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setShowVideo((prev) => !prev)}
              className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                showVideo
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/25'
                  : 'bg-white/5 text-white border-white/15 hover:bg-white/10'
              }`}
            >
              <Play size={14} className={showVideo ? 'fill-slate-950' : 'fill-emerald-400 text-emerald-400'} />
              {showVideo ? 'Viewing Live 3D Cutaway Motion' : 'Watch 3D Cutaway Motion'}
            </button>
          </div>
        </div>

        {/* Interactive Stage Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {anatomy.layers.map((layer, idx) => {
            const IconComp = STAGE_ICONS[idx % STAGE_ICONS.length];
            const isActive = idx === activeIndex;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border-emerald-400/60 shadow-lg shadow-emerald-500/10'
                    : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-widest ${
                      isActive ? 'text-emerald-400' : 'text-slate-500'
                    }`}
                  >
                    {layer.code}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-white/5 text-slate-400 group-hover:text-white'
                    }`}
                  >
                    <IconComp size={14} />
                  </div>
                </div>
                <div
                  className={`text-xs font-bold line-clamp-2 leading-snug ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {layer.title.split('&')[0]}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="anatomyActiveIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Interactive Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLayer.id + (showVideo ? '-vid' : '-img')}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl"
          >
            {/* Left Visual Viewport (7 Columns) */}
            <div className="lg:col-span-7 space-y-4">
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

                {/* Top Overlay HUD Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/15 text-xs font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {activeLayer.code} — {activeLayer.subtitle}
                </div>

                {/* Bottom Right Metric Badge */}
                <div className="absolute bottom-4 right-4 px-4 py-2.5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-emerald-500/30 text-right shadow-xl">
                  <div className="text-lg font-extrabold text-emerald-400 leading-none">
                    {activeLayer.metric}
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mt-1">
                    {activeLayer.metricLabel}
                  </div>
                </div>
              </div>

              {/* Secondary Angle + Video Switcher Strip */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setShowVideo(false)}
                  className={`relative h-20 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                    !showVideo ? 'border-emerald-400 ring-2 ring-emerald-400/30' : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={getAssetUrl(activeLayer.image)}
                    alt="Primary Cutaway"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-bold bg-slate-950/80 px-2 py-0.5 rounded text-white">
                    Primary Render
                  </span>
                </button>

                {activeLayer.secondaryImage && (
                  <div className="relative h-20 rounded-xl overflow-hidden border border-white/10 bg-slate-900">
                    <img
                      src={getAssetUrl(activeLayer.secondaryImage)}
                      alt="Secondary View"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1.5 left-2 text-[10px] font-bold bg-slate-950/80 px-2 py-0.5 rounded text-slate-200">
                      Alternate Angle
                    </span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  className={`relative h-20 rounded-xl overflow-hidden border transition-all cursor-pointer bg-slate-900 flex items-center justify-center ${
                    showVideo ? 'border-emerald-400 ring-2 ring-emerald-400/30' : 'border-white/10 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={getAssetUrl(activeLayer.image)}
                    alt="Motion Simulation"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-md">
                      <Play size={12} className="fill-slate-950 ml-0.5" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-300">3D Fluid Motion</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Engineering Description (5 Columns) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-400">
                  <span>{activeLayer.code}</span>
                  <span>•</span>
                  <span className="text-cyan-400">{activeLayer.subtitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {activeLayer.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeLayer.description}
                </p>
              </div>

              {/* Engineering Highlights Box */}
              <div className="bg-white/[0.04] rounded-2xl p-5 border border-white/10 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Architectural Advantages
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Zero air bypass with closed-cell EPDM acoustic gasket sealing</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Slide-out service access for rapid maintenance in false ceilings</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Synchronized with IAQ Smart Sensor Station & Cloud AI Hub</span>
                  </div>
                </div>
              </div>

              {/* Stage Navigation & CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) => (prev - 1 + anatomy.layers.length) % anatomy.layers.length)
                    }
                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 cursor-pointer transition"
                  >
                    ← Prev Stage
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev + 1) % anatomy.layers.length)}
                    className="px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs font-bold text-emerald-300 cursor-pointer transition"
                  >
                    Next Stage →
                  </button>
                </div>

                <Button to="/products" variant="primary">
                  Explore Full Specs
                  <ArrowRight size={15} />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
