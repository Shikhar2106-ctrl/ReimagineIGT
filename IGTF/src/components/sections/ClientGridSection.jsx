import React, { useState } from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import { getAssetUrl } from '../../utils/assetHelper';
import clientsData from '../../data/clients.json';

export default function ClientGridSection() {
  const [isFlipped, setIsFlipped] = useState(false);
  const logosList = clientsData.allLogos || clientsData.logos;

  // Divide 36 logos equally: 18 on Front, 18 on Back
  const sideA = logosList.slice(0, 18);
  const sideB = logosList.slice(18, 36);

  return (
    <section className="py-12 sm:py-16 bg-[#F5F5F5] relative border-t border-slate-200/80" id="client-grid">
      <Container className="space-y-8">
        <SectionHeader
          badge="Client Network"
          title="Our Esteemed Clients & Partners"
          description="Proudly powering clean indoor air across government bodies, enterprise campuses, healthcare centers, and educational institutes."
          align="center"
        />

        {/* 3D Flip Card Container */}
        <div className="perspective-1000 w-full min-h-[380px] sm:min-h-[400px] relative">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer relative ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >

            {/* ==================== FRONT SIDE (18 LOGOS) ==================== */}
            <div className="backface-hidden rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 p-5 sm:p-7 shadow-xl shadow-slate-200/50">
              
              {/* Decorative Subtle Ambient Glows */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Grid Wall (18 Logos) */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 relative z-10">
                {sideA.map((logo, index) => (
                  <div
                    key={`sideA-${index}`}
                    className="group relative rounded-xl bg-white/90 border border-slate-200/80 p-3 flex items-center justify-center aspect-[16/9] shadow-xs hover:shadow-lg hover:border-emerald-500/50 hover:bg-white hover:-translate-y-2 transition-all duration-300 ease-out"
                  >
                    <img
                      src={getAssetUrl(logo)}
                      alt={`Client Logo ${index + 1}`}
                      className="max-h-8 sm:max-h-10 w-auto max-w-[85%] object-contain transition-all duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ==================== BACK SIDE (18 LOGOS) ==================== */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 p-5 sm:p-7 shadow-xl shadow-slate-200/50">
              
              {/* Decorative Subtle Ambient Glows */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Grid Wall (18 Logos) */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 relative z-10">
                {sideB.map((logo, index) => (
                  <div
                    key={`sideB-${index}`}
                    className="group relative rounded-xl bg-white/90 border border-slate-200/80 p-3 flex items-center justify-center aspect-[16/9] shadow-xs hover:shadow-lg hover:border-emerald-500/50 hover:bg-white hover:-translate-y-2 transition-all duration-300 ease-out"
                  >
                    <img
                      src={getAssetUrl(logo)}
                      alt={`Client Logo ${index + 19}`}
                      className="max-h-8 sm:max-h-10 w-auto max-w-[85%] object-contain transition-all duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
