import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  Play,
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';
import productsData from '../data/products.json';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeMediaView, setActiveMediaView] = useState('video');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveMediaView('video');
  }, [productId]);

  const product = productsData.items.find(
    (item) => item.id === productId || item.slug === productId
  );

  if (!product) {
    return (
      <div className="py-20 text-center">
        <Container className="max-w-md space-y-5">
          <div className="text-3xl font-extrabold text-emerald-600">
            Product Not Found
          </div>
          <p className="text-sm text-slate-600">
            The requested product specifications page does not exist.
          </p>
          <Button to="/products" variant="primary" size="sm">
            <ArrowLeft size={14} />
            Back to Products Catalog
          </Button>
        </Container>
      </div>
    );
  }

  const relatedProducts = productsData.items.filter(
    (item) => item.id !== product.id
  );

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: `${window.location.origin}${product.image}`,
    brand: {
      '@type': 'Brand',
      name: 'IntelliGreen CleanTech',
    },
  };

  const selectedShot =
    typeof activeMediaView === 'number' &&
    product.interiorGallery?.[activeMediaView]
      ? product.interiorGallery[activeMediaView]
      : null;

  return (
    <>
      <SEO
        title={product.seoTitle || `${product.title} | IntelliGreen CleanTech`}
        description={product.seoDescription || product.description}
        image={product.image}
        schemaData={productSchema}
      />

      <article className="py-8 sm:py-10 bg-[#F5F5F5]">
        <Container className="max-w-5xl space-y-10">
          {/* Compact Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            <Link to="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/products"
              className="hover:text-emerald-600 transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-emerald-700 font-bold">{product.title}</span>
          </nav>

          {/* Main Product Hero Card — Sleek & Fits Above the Fold */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-md">
            {/* Left Column: Media Video & Interior Cutaway Switcher */}
            <div className="lg:col-span-6 space-y-2.5">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-950 shadow-xs group">
                {activeMediaView === 'video' && product.media ? (
                  <video
                    src={getAssetUrl(product.media)}
                    poster={getAssetUrl(product.image)}
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
                      selectedShot ? selectedShot.image : product.image
                    )}
                    alt={selectedShot ? selectedShot.title : product.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                )}

                {selectedShot && (
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent text-white">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                      Interior Hardware View
                    </div>
                    <div className="text-xs font-bold">{selectedShot.title}</div>
                  </div>
                )}
              </div>

              {/* Compact Thumbnail Strip */}
              {product.interiorGallery?.length > 0 && (
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                  <button
                    type="button"
                    onClick={() => setActiveMediaView('video')}
                    className={`shrink-0 relative w-16 h-11 rounded-lg overflow-hidden border transition-all cursor-pointer bg-slate-900 ${
                      activeMediaView === 'video'
                        ? 'border-emerald-600 ring-2 ring-emerald-500/30'
                        : 'border-slate-200 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={getAssetUrl(product.image)}
                      alt="3D Motion"
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <Play
                        size={11}
                        className="fill-emerald-400 text-emerald-400"
                      />
                      <span className="text-[8px] font-bold uppercase tracking-wider">
                        Video
                      </span>
                    </div>
                  </button>

                  {product.interiorGallery.slice(0, 4).map((shot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveMediaView(idx)}
                      className={`shrink-0 relative w-16 h-11 rounded-lg overflow-hidden border transition-all cursor-pointer bg-slate-950 ${
                        activeMediaView === idx
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

            {/* Right Column: Balanced Title, Capabilities, Specs & Compact Actions */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                  {product.subtitle}
                </p>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {product.title}
                </h1>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Feature Bullets */}
              <div className="space-y-1.5">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Core Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs text-slate-700"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-emerald-600 shrink-0 font-bold"
                      />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Specs Strip */}
              {product.specs && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-slate-100">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div
                      key={key}
                      className="bg-slate-50 rounded-xl p-2 border border-slate-200/80 text-center sm:text-left"
                    >
                      <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider truncate">
                        {key}
                      </div>
                      <div className="text-[11px] font-extrabold text-emerald-700 mt-0.5 truncate">
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Compact, High-Contrast Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <Button to="/contact" size="sm" variant="primary">
                  Request Quote & Site Audit
                  <ArrowRight size={13} />
                </Button>
                <Button href="#technical-specs" size="sm" variant="secondary">
                  View Technical Specs
                </Button>
              </div>
            </div>
          </div>

          {/* Section: Interior Architecture & Cutaway Gallery */}
          {product.interiorGallery?.length > 0 && (
            <section className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-6 relative overflow-hidden">
              <div className="space-y-1.5 max-w-2xl relative z-10">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Inside the {product.title}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm">
                  High-precision internal sub-assemblies engineered for maximum filtration efficiency, thermal recovery, and silent laminar propulsion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                {product.interiorGallery.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.35 }}
                    className="group bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-400/50 transition-all"
                  >
                    <div className="relative aspect-video bg-slate-900 overflow-hidden">
                      <img
                        src={getAssetUrl(item.image)}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <h3 className="text-sm font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Overview & Detailed Narrative */}
          {product.overview && (
            <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Engineered for Premium Clean Air Performance
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-3xl">
                {product.overview}
              </p>
            </section>
          )}

          {/* Section: How It Works */}
          {product.workingMechanism && (
            <section className="space-y-5">
              <SectionHeader
                title="How It Operates"
                description="A step-by-step breakdown of the active technology inside the unit."
                align="left"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {product.workingMechanism.map((step) => (
                  <div
                    key={step.step}
                    className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3 relative overflow-hidden"
                  >
                    <div className="h-8 w-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      {step.step}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Technical Specifications Table */}
          {product.technicalSpecifications && (
            <section id="technical-specs" className="space-y-5 scroll-mt-24">
              <SectionHeader
                title="Technical Specifications"
                description="Full engineering metrics and compliance parameters."
                align="left"
              />

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                <div className="divide-y divide-slate-200">
                  {Object.entries(product.technicalSpecifications).map(
                    ([param, value], idx) => (
                      <div
                        key={param}
                        className={`grid grid-cols-1 sm:grid-cols-12 p-3.5 sm:px-6 text-xs sm:text-sm ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                        }`}
                      >
                        <div className="sm:col-span-5 font-bold text-slate-900">
                          {param}
                        </div>
                        <div className="sm:col-span-7 font-medium text-emerald-800 mt-1 sm:mt-0">
                          {value}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Section: Product Specific FAQs */}
          {product.faqs && product.faqs.length > 0 && (
            <section className="space-y-5">
              <SectionHeader
                title="Product FAQs"
                description="Common questions about this product system."
                align="left"
              />

              <div className="space-y-3 max-w-3xl">
                {product.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                        className="w-full flex items-center justify-between p-4 text-left text-sm font-bold text-slate-900 hover:text-emerald-700 cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          size={16}
                          className={`text-slate-500 transition-transform ${
                            isOpen ? 'rotate-180 text-emerald-600' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Related Products Navigation */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              Explore Other Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/products/${rel.id}`}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-emerald-500/50 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-xs font-bold text-emerald-700 uppercase truncate">
                      {rel.title}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {rel.subtitle}
                    </div>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-1 shrink-0 ml-2"
                  />
                </Link>
              ))}
            </div>
          </section>
        </Container>
      </article>
    </>
  );
}
