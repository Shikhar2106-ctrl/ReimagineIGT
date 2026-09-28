import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import IconHelper from '../common/IconHelper';
import Button from '../common/Button';
import { ArrowRight, CheckCircle2, Info, Play, Layers } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetHelper';
import productsData from '../../data/products.json';

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState(productsData.items[0]?.id || '');
  const [viewMode, setViewMode] = useState('video'); // 'video' | 'anatomy'
  const [anatomyIdx, setAnatomyIdx] = useState(0);
  const [mobileDetailTab, setMobileDetailTab] = useState('features'); // 'features' | 'specs'

  const activeProduct =
    productsData.items.find((p) => p.id === activeTab) || productsData.items[0];

  const handleProductChange = (id) => {
    setActiveTab(id);
    setViewMode('video');
    setAnatomyIdx(0);
  };

  if (!activeProduct) return null;

  const gallery = activeProduct.interiorGallery || [];
  const currentShot = gallery[anatomyIdx] || gallery[0];

  return (
    <section
      className="py-14 sm:py-20 bg-[#F5F5F5] relative overflow-hidden"
      id="products"
    >
      <Container className="relative z-10 space-y-8 sm:space-y-10">
        <SectionHeader
          badge={productsData.badge}
          title={productsData.title}
          description={productsData.description}
          align="center"
        />

        {/* Single-Row Touch-Scrollable Product Selector Dock (No Multi-Row Mobile Congestion) */}
        <div className="flex items-center sm:justify-center overflow-x-auto no-scrollbar snap-x snap-mandatory gap-2 pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {productsData.items.map((product) => {
            const isActive = activeTab === product.id;
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => handleProductChange(product.id)}
                className={`snap-start shrink-0 relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                    : 'bg-white border border-slate-200/90 text-slate-700 hover:text-slate-900 hover:border-emerald-300 shadow-xs'
                }`}
              >
                <IconHelper name={product.icon} size={15} />
                <span className="whitespace-nowrap">
                  {product.shortTitle || product.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Product Interactive Studio Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-8 lg:p-10 shadow-xl"
          >
            {/* Left Column: Interactive Media & Interior X-Ray Viewport */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md group">
                {viewMode === 'video' && activeProduct.media ? (
                  <video
                    key={activeProduct.media}
                    src={getAssetUrl(activeProduct.media)}
                    poster={getAssetUrl(activeProduct.image)}
                    preload="metadata"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={getAssetUrl(
                      viewMode === 'anatomy' && currentShot
                        ? currentShot.image
                        : activeProduct.image
                    )}
                    alt={activeProduct.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500"
                  />
                )}

                {/* Floating Interactive Mode Pill inside Viewport */}
                {gallery.length > 0 && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 p-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15">
                    <button
                      type="button"
                      onClick={() => setViewMode('video')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition cursor-pointer ${
                        viewMode === 'video'
                          ? 'bg-emerald-500 text-slate-950'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      <Play size={10} className="fill-current" />
                      Live Video
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('anatomy')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition cursor-pointer ${
                        viewMode === 'anatomy'
                          ? 'bg-emerald-500 text-slate-950'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      <Layers size={10} />
                      Interior X-Ray ({gallery.length})
                    </button>
                  </div>
                )}

                {/* Caption overlay when inspecting Interior X-Ray */}
                {viewMode === 'anatomy' && currentShot && (
                  <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent text-white">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                      Internal Sub-Assembly 0{anatomyIdx + 1}
                    </div>
                    <div className="text-xs sm:text-sm font-bold truncate">
                      {currentShot.title}
                    </div>
                  </div>
                )}
              </div>

              {/* Interactive Thumbnail Strip for Interior Cutaway Shots */}
              {gallery.length > 0 && (
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
                  <button
                    type="button"
                    onClick={() => setViewMode('video')}
                    className={`shrink-0 relative w-20 h-12 rounded-xl overflow-hidden border transition-all cursor-pointer bg-slate-900 ${
                      viewMode === 'video'
                        ? 'border-emerald-600 ring-2 ring-emerald-500/30'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={getAssetUrl(activeProduct.image)}
                      alt="Product Video"
                      loading="lazy"
                      className="w-full h-full object-cover opacity-55"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[9px] font-extrabold text-white uppercase tracking-wider bg-slate-950/40">
                      ▶ Video
                    </span>
                  </button>

                  {gallery.map((shot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setViewMode('anatomy');
                        setAnatomyIdx(idx);
                      }}
                      className={`shrink-0 relative w-20 h-12 rounded-xl overflow-hidden border transition-all cursor-pointer bg-slate-950 ${
                        viewMode === 'anatomy' && anatomyIdx === idx
                          ? 'border-emerald-600 ring-2 ring-emerald-500/30'
                          : 'border-slate-200 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={getAssetUrl(shot.image)}
                        alt={shot.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Product Narrative, Interactive Mobile Toggle & Actions */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                  <IconHelper name={activeProduct.icon} size={12} />
                  {activeProduct.subtitle}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {activeProduct.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>

              {/* Mobile-Only Segmented Switcher (Prevents Vertical Congestion on Phones) */}
              <div className="flex sm:hidden rounded-xl bg-slate-100 p-1 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setMobileDetailTab('features')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    mobileDetailTab === 'features'
                      ? 'bg-white text-emerald-700 shadow-xs'
                      : 'text-slate-600'
                  }`}
                >
                  Key Capabilities
                </button>
                <button
                  type="button"
                  onClick={() => setMobileDetailTab('specs')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    mobileDetailTab === 'specs'
                      ? 'bg-white text-emerald-700 shadow-xs'
                      : 'text-slate-600'
                  }`}
                >
                  Technical Specs
                </button>
              </div>

              {/* Key Features (Always visible on Desktop, Tab-controlled on Mobile) */}
              <div
                className={`${
                  mobileDetailTab === 'features' ? 'block' : 'hidden sm:block'
                } space-y-2`}
              >
                <h4 className="hidden sm:block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Core Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProduct.features.slice(0, 4).map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50/90 border border-slate-200/80 rounded-xl px-3 py-2"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-emerald-600 shrink-0 font-bold"
                      />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs Grid (Always visible on Desktop, Tab-controlled on Mobile) */}
              {activeProduct.specs && (
                <div
                  className={`${
                    mobileDetailTab === 'specs' ? 'grid' : 'hidden sm:grid'
                  } grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 sm:border-t border-slate-100`}
                >
                  {Object.entries(activeProduct.specs).map(([key, val]) => (
                    <div
                      key={key}
                      className="bg-slate-50 rounded-xl p-2.5 border border-slate-200/80 text-center sm:text-left"
                    >
                      <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                        {key}
                      </div>
                      <div className="text-xs font-extrabold text-emerald-700 mt-0.5">
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <Button to="/contact" size="sm" variant="primary" className="flex-1 sm:flex-initial justify-center">
                  Request Quote
                  <ArrowRight size={14} />
                </Button>
                <Button
                  to={`/products/${activeProduct.id}`}
                  size="sm"
                  variant="secondary"
                  className="flex-1 sm:flex-initial justify-center bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800"
                >
                  Full Engineering Specs
                  <Info size={14} />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
