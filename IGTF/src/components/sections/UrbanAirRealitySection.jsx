import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { getAssetUrl } from '../../utils/assetHelper';
import {
  AlertTriangle,
  ShieldCheck,
  Wind,
  Activity,
  Gauge,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const SCENARIOS = {
  unprotected: {
    id: 'unprotected',
    tabLabel: 'Unprotected Sealed Room',
    badge: 'Negative-Pressure Smog Infiltration',
    statusColor: 'rose',
    aqi: '285',
    aqiStatus: 'Hazardous Seepage',
    co2: '1,540 ppm',
    co2Status: 'Drowsiness & Fatigue',
    pressure: '-4.2 Pa',
    pressureStatus: 'Suction Draws Smog In',
    title: 'Why Closing Your Windows Still Lets City Smog Inside',
    description:
      'Exhaust fans and temperature differences create negative indoor pressure—acting like a vacuum that pulls PM2.5 traffic smog through microscopic window gaps while trapping stale indoor CO₂.',
    bullets: [
      'Microscopic PM2.5 seeps through sealed window frames & shaft gaps',
      'Recirculating room purifiers cannot lower rising indoor CO₂ (>1,500 ppm)',
      'Unconditioned air leakage increases HVAC cooling/heating load by 30%',
    ],
  },
  protected: {
    id: 'protected',
    tabLabel: 'IntelliGreen Protected Zone',
    badge: 'Positive-Pressure Concealed CTFAs + ERV Shield',
    statusColor: 'emerald',
    aqi: '11',
    aqiStatus: 'WHO Pure Sanctuary',
    co2: '465 ppm',
    co2Status: 'Crisp Mountain Oxygen',
    pressure: '+8.5 Pa',
    pressureStatus: 'Positive Air Shield',
    title: 'Invisible Positive-Pressure Shield With IntelliGreen CTFAs',
    description:
      'Concealed & wall-mounted IntelliGreen CTFAs and ERV units continuously pump medical HEPA H13 + Carbon purified air into your space—creating slight positive barometric pressure that physically pushes outdoor smog away from windows.',
    bullets: [
      'Positive pressure (+8.5 Pa) blocks 99.97% of outdoor smog & dust seepage',
      'Continuous treated fresh air keeps indoor CO₂ below 600 ppm 24/7',
      'Cross-flow ERV enthalpy core recovers up to 78% of AC cooling energy',
    ],
  },
};

export default function UrbanAirRealitySection() {
  const [mode, setMode] = useState('protected');
  const current = SCENARIOS[mode];
  const isProtected = mode === 'protected';

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-slate-200/80 relative overflow-hidden">
      <Container className="space-y-8 sm:space-y-10">
        {/* Header + Interactive Mode Switcher */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <Badge>Interactive Indoor Air Simulator</Badge>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Experience the Positive-Pressure Difference
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl">
            Toggle between a standard sealed city building and an IntelliGreen positive-pressure architectural zone to see how air physics protects your breathing space.
          </p>

          {/* Interactive Tactile Mode Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-inner w-full sm:w-auto max-w-md">
            <button
              type="button"
              onClick={() => setMode('unprotected')}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                !isProtected
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/25'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <AlertTriangle size={14} />
              <span>Standard Sealed Room</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('protected')}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                isProtected
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck size={14} />
              <span>IntelliGreen Shield</span>
            </button>
          </div>
        </div>

        {/* Interactive Simulator Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className={`rounded-3xl border p-4 sm:p-8 lg:p-10 shadow-xl transition-colors ${
              isProtected
                ? 'border-emerald-200 bg-gradient-to-br from-emerald-50/50 via-white to-cyan-50/30'
                : 'border-rose-200 bg-gradient-to-br from-rose-50/50 via-white to-orange-50/20'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* Left Visual Viewport (7 Cols) */}
              <div className="lg:col-span-7 space-y-3">
                {!isProtected ? (
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-rose-200 shadow-lg">
                    <video
                      src={getAssetUrl('/media/city-infiltration.webm')}
                      poster={getAssetUrl('/images/showcase/urban-smog-infiltration.webp')}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      Live Simulation: Outdoor Smog Window Seepage
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-emerald-200 shadow-md group">
                      <img
                        src={getAssetUrl('/images/products/igt-cutaway-intake.webp')}
                        alt="Concealed & Wall Mounted CTFAs Unit"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-white text-[11px] font-bold flex items-center justify-between">
                        <span>01. Concealed &amp; Wall CTFAs</span>
                        <span className="text-emerald-400">+8.5 Pa</span>
                      </div>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-emerald-200 shadow-md group">
                      <img
                        src={getAssetUrl('/images/showcase/clean-family-living.webp')}
                        alt="Purified Indoor Living Sanctuary"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-white text-[11px] font-bold flex items-center justify-between">
                        <span>02. Pure Breathing Zone</span>
                        <span className="text-emerald-400">AQI 11</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Live Telemetry Gauges Bar */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                  <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-xs text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Indoor PM2.5 AQI
                    </div>
                    <div
                      className={`text-lg sm:text-2xl font-black mt-0.5 ${
                        isProtected ? 'text-emerald-600' : 'text-rose-600'
                      }`}
                    >
                      {current.aqi}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500 truncate">
                      {current.aqiStatus}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-xs text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Indoor CO₂ Level
                    </div>
                    <div
                      className={`text-lg sm:text-2xl font-black mt-0.5 ${
                        isProtected ? 'text-emerald-600' : 'text-rose-600'
                      }`}
                    >
                      {current.co2}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500 truncate">
                      {current.co2Status}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-xs text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Room Pressure
                    </div>
                    <div
                      className={`text-lg sm:text-2xl font-black mt-0.5 ${
                        isProtected ? 'text-emerald-600' : 'text-rose-600'
                      }`}
                    >
                      {current.pressure}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500 truncate">
                      {current.pressureStatus}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Narrative Column (5 Cols) */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                    isProtected
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {isProtected ? <ShieldCheck size={13} /> : <AlertTriangle size={13} />}
                  {current.badge}
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                  {current.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {current.description}
                </p>

                <div className="space-y-2 pt-1">
                  {current.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 bg-white/90 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-700 shadow-2xs"
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-black ${
                          isProtected
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-rose-100 text-rose-700'
                        }`}
                      >
                        {isProtected ? '✓' : '!'}
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {!isProtected ? (
                    <button
                      type="button"
                      onClick={() => setMode('protected')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-md shadow-emerald-600/20 transition cursor-pointer"
                    >
                      <Sparkles size={14} />
                      Activate IntelliGreen Shield →
                    </button>
                  ) : (
                    <Button to="/products/ctfa-wall" size="sm" variant="primary">
                      Explore Wall &amp; Ceiling CTFA
                      <ArrowRight size={14} />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
