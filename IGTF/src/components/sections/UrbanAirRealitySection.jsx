import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { getAssetUrl } from '../../utils/assetHelper';
import { AlertTriangle, ShieldCheck, ArrowRight, Wind, Sparkles } from 'lucide-react';

export default function UrbanAirRealitySection() {
  return (
    <section className="py-20 bg-white border-y border-slate-200/80 relative overflow-hidden">
      <Container className="space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge>The Modern Urban Scenario</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Closing Your Windows Doesn&apos;t Stop Urban Smog
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            In high-density modern cities, microscopic PM2.5 and traffic exhaust continuously infiltrate buildings through microscopic facade gaps and negative-pressure exhaust vents—unless countered by positive-pressure treated fresh air.
          </p>
        </div>

        {/* Before / After Visual Reality Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: The Problem (Smog Infiltration) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-rose-200 bg-gradient-to-b from-rose-50/50 to-white p-6 sm:p-8 shadow-lg flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-extrabold uppercase tracking-wider">
                  <AlertTriangle size={14} />
                  Unprotected Building Envelope
                </span>
                <span className="text-xs font-extrabold text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                  Indoor AQI: 180–320+
                </span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-rose-200/60 shadow-md">
                <video
                  src={getAssetUrl('/media/city-infiltration.webm')}
                  poster={getAssetUrl('/images/showcase/urban-smog-infiltration.webp')}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs">
                  <span className="font-semibold text-rose-300">Negative Pressure Smog Infiltration</span>
                  <span className="font-bold text-white">CO₂ &gt; 1,500 ppm</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Unfiltered Infiltration &amp; Stale CO₂ Build-Up
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Standard standalone room purifiers only recirculate existing indoor air—they cannot reduce rising CO₂ levels or stop outdoor PM2.5 from seeping through window frames and elevator shafts.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-rose-100">
              <div className="bg-white rounded-xl p-3 border border-rose-100 text-center">
                <div className="text-sm font-black text-rose-600">High PM2.5</div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase mt-0.5">Window Seepage</div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-rose-100 text-center">
                <div className="text-sm font-black text-rose-600">Drowsiness</div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase mt-0.5">High CO₂ Levels</div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-rose-100 text-center">
                <div className="text-sm font-black text-rose-600">30% Loss</div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase mt-0.5">HVAC Thermal Leak</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: The Solution (IntelliGreen Positive Pressure & Concealed Architecture) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-emerald-200 bg-gradient-to-b from-emerald-50/60 to-white p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
                  <ShieldCheck size={14} />
                  IntelliGreen Positive-Pressure Shield
                </span>
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  Indoor AQI: &lt; 15 (WHO Grade)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-emerald-200/80 shadow-md">
                  <img
                    src={getAssetUrl('/images/showcase/false-ceiling-concealed.webp')}
                    alt="Concealed False Ceiling Integration"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-slate-950/80 text-[10px] font-bold text-emerald-300">
                    100% Concealed Ceiling Fit
                  </span>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-emerald-200/80 shadow-md">
                  <img
                    src={getAssetUrl('/images/showcase/clean-family-living.webp')}
                    alt="Pure Oxygen-Rich Indoor Sanctuary"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-slate-950/80 text-[10px] font-bold text-emerald-300">
                    Oxygen-Rich Living Zone
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Concealed TFAS + ERV + Active BPI Protection
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Hidden seamlessly above your false ceiling, IntelliGreen units continuously pump medical-grade HEPA H13 + Carbon filtered air into your space—creating an invisible positive-pressure shield that blocks outdoor smog and keeps CO₂ below 600 ppm.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-emerald-100">
              <div className="bg-white rounded-xl p-3 border border-emerald-200 text-center">
                <div className="text-sm font-black text-emerald-700">99.97%</div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase mt-0.5">PM0.3 &amp; Smog Blocked</div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-emerald-200 text-center">
                <div className="text-sm font-black text-emerald-700">&lt;600 ppm</div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase mt-0.5">Fresh Oxygen CO₂</div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-emerald-200 text-center">
                <div className="text-sm font-black text-emerald-700">Up to 78%</div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase mt-0.5">ERV Energy Saved</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
