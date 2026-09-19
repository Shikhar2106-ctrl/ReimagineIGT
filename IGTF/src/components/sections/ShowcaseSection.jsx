import React from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { ArrowRight, Check } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetHelper';
import showcaseData from '../../data/showcase.json';

export default function ShowcaseSection() {
  return (
    <section className="relative py-12 sm:py-16 bg-[#F5F5F5] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Copy */}
          <div className="lg:col-span-5 space-y-4">
            <SectionHeader
              badge={showcaseData.badge}
              title={showcaseData.title}
              description={showcaseData.description}
              align="left"
            />

            <div className="space-y-2 pt-1">
              {showcaseData.features.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-slate-700">
                  <div className="h-4 w-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                    <Check size={11} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button to="/products" size="md" variant="primary">
                Explore Technology
                <ArrowRight size={15} />
              </Button>
            </div>
          </div>

          {/* Right Side: Animated Dual Column Showcase */}
          <div className="lg:col-span-7 relative h-[400px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-md">
            {/* Top & Bottom Overlay Gradients */}
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 h-full">
              {/* Column 1 - Scroll Up */}
              <div className="flex flex-col gap-3 animate-scroll-up">
                {[...showcaseData.columns.columnOne, ...showcaseData.columns.columnOne].map((imgSrc, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0 shadow-sm">
                    <img
                      src={getAssetUrl(imgSrc)}
                      alt="Showcase item"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Column 2 - Scroll Down */}
              <div className="flex flex-col gap-3 animate-scroll-down">
                {[...showcaseData.columns.columnTwo, ...showcaseData.columns.columnTwo].map((imgSrc, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0 shadow-sm">
                    <img
                      src={getAssetUrl(imgSrc)}
                      alt="Showcase item"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Column 3 - Scroll Up (Hidden on mobile) */}
              <div className="hidden md:flex flex-col gap-3 animate-scroll-up">
                {[...showcaseData.columns.columnThree, ...showcaseData.columns.columnThree].map((imgSrc, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0 shadow-sm">
                    <img
                      src={getAssetUrl(imgSrc)}
                      alt="Showcase item"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
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
