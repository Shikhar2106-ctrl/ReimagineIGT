import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import IconHelper from '../components/common/IconHelper';
import SEO from '../components/common/SEO';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Download, ShieldCheck, Zap, Layers, Play } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';
import productsData from '../data/products.json';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeMediaView, setActiveMediaView] = useState('video'); // 'video' or gallery index

  useEffect(() => {
    setActiveMediaView('video');
  }, [productId]);

  // Find product by id or slug
  const product = productsData.items.find(
    (item) => item.id === productId || item.slug === productId
  );

  if (!product) {
    return (
      <div className="py-24 text-center">
        <Container className="max-w-md space-y-6">
          <div className="text-5xl font-extrabold text-emerald-600">Product Not Found</div>
          <p className="text-slate-600">The requested product specifications page does not exist.</p>
          <Button to="/products" variant="primary">
            <ArrowLeft size={16} />
            Back to Products Catalog
          </Button>
        </Container>
      </div>
    );
  }

  // Related products (excluding current)
  const relatedProducts = productsData.items.filter((item) => item.id !== product.id);

  // Schema.org Product structured data for SEO
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
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '0.00',
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
    },
  };

  const selectedShot =
    typeof activeMediaView === 'number' && product.interiorGallery?.[activeMediaView]
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

      <article className="py-12 bg-[#F5F5F5]">
        <Container className="space-y-16">

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-emerald-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-emerald-700 font-bold">{product.title}</span>
          </nav>

          {/* Main Product Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Media Video & Interior Cutaway Switcher */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-2xl group">
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
                    src={getAssetUrl(selectedShot ? selectedShot.image : product.image)}
                    alt={selectedShot ? selectedShot.title : product.title}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                )}

                {/* Caption Overlay when viewing a specific interior shot */}
                {selectedShot && (
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent text-white">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                      Interior Hardware View
                    </div>
                    <div className="text-sm font-bold">{selectedShot.title}</div>
                  </div>
                )}
              </div>

              {/* Interactive Thumbnail Strip (3D Video + Interior Cutaway Shots) */}
              {product.interiorGallery?.length > 0 && (
                <div className="grid grid-cols-5 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveMediaView('video')}
                    className={`relative h-16 rounded-xl overflow-hidden border transition-all cursor-pointer bg-slate-900 ${
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
                      <Play size={14} className="fill-emerald-400 text-emerald-400" />
                      <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">3D Video</span>
                    </div>
                  </button>

                  {product.interiorGallery.slice(0, 4).map((shot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveMediaView(idx)}
                      className={`relative h-16 rounded-xl overflow-hidden border transition-all cursor-pointer bg-slate-950 ${
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

              {/* Quick Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {product.specs && Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm text-center">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{key}</div>
                    <div className="text-xs font-extrabold text-emerald-700 mt-1">{val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Title, Subtitle, Overview, CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <Badge>{product.subtitle}</Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {product.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Key Feature Bullets */}
              <div className="space-y-2.5 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 shadow-sm text-sm text-slate-800">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 font-bold" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200">
                <Button to="/contact" size="lg" variant="primary">
                  Request Quote & Site Audit
                  <ArrowRight size={18} />
                </Button>
                <Button href="#technical-specs" size="lg" variant="secondary" className="bg-white border-slate-300 text-slate-800 hover:bg-slate-50">
                  View Technical Specs
                </Button>
              </div>

            </div>

          </div>

          {/* Section: Interior Architecture & Cutaway Gallery */}
          {product.interiorGallery?.length > 0 && (
            <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 relative overflow-hidden">
              <div className="pointer-events-none absolute -top-32 right-10 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl" />
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-400">
                    <Layers size={14} />
                    Interior Hardware Breakdown
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Inside the {product.title}
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base">
                    High-precision internal sub-assemblies engineered for maximum filtration efficiency, thermal recovery, and silent laminar propulsion.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {product.interiorGallery.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
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
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/85 border border-white/15 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                        Sub-Assembly 0{idx + 1}
                      </span>
                    </div>
                    <div className="p-5 space-y-1.5">
                      <h3 className="text-base font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
            <section className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-lg space-y-6">
              <div className="max-w-3xl space-y-4">
                <Badge>System Overview</Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Engineered for Premium Clean Air Performance
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  {product.overview}
                </p>
              </div>
            </section>
          )}

          {/* Section: How It Works / Working Mechanism */}
          {product.workingMechanism && (
            <section className="space-y-8">
              <SectionHeader
                badge="Technology"
                title="How It Operates"
                description="A step-by-step breakdown of the active technology inside the unit."
                align="left"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {product.workingMechanism.map((step) => (
                  <div
                    key={step.step}
                    className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md space-y-4 relative overflow-hidden"
                  >
                    <div className="text-4xl font-black text-emerald-100 absolute top-4 right-6 pointer-events-none">
                      {step.step}
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Applications & Environments */}
          {product.applications && (
            <section className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-lg space-y-8">
              <SectionHeader
                badge="Environments"
                title="Ideal Deployment Applications"
                description="Designed to meet clean air requirements across high-occupancy sectors."
                align="left"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{app}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Technical Specifications Table */}
          {product.technicalSpecifications && (
            <section id="technical-specs" className="space-y-8 scroll-mt-24">
              <SectionHeader
                badge="Data Sheet"
                title="Technical Specifications"
                description="Full engineering metrics and compliance parameters."
                align="left"
              />

              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
                <div className="divide-y divide-slate-200">
                  {Object.entries(product.technicalSpecifications).map(([param, value], idx) => (
                    <div
                      key={param}
                      className={`grid grid-cols-1 sm:grid-cols-12 p-4 sm:px-8 text-sm ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                      }`}
                    >
                      <div className="sm:col-span-5 font-bold text-slate-900">{param}</div>
                      <div className="sm:col-span-7 font-medium text-emerald-800 mt-1 sm:mt-0">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Section: Product Specific FAQs */}
          {product.faqs && product.faqs.length > 0 && (
            <section className="space-y-8">
              <SectionHeader
                badge="FAQ"
                title="Product FAQs"
                description="Common questions about this product system."
                align="left"
              />

              <div className="space-y-4 max-w-3xl">
                {product.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                        className="w-full flex items-center justify-between p-5 text-left text-base font-bold text-slate-900 hover:text-emerald-700 cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          size={18}
                          className={`text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-emerald-600' : ''}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Bottom Consultation CTA */}
          <section className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-black">Ready to Upgrade Your Space?</h3>
              <p className="text-emerald-100 text-sm max-w-xl">
                Schedule a free site survey with an IntelliGreen clean air engineer.
              </p>
            </div>
            <Button to="/contact" size="lg" variant="secondary" className="bg-white text-slate-900 border-none hover:bg-slate-100 shrink-0">
              Book On-Site Audit
              <ArrowRight size={18} />
            </Button>
          </section>

          {/* Related Products Navigation */}
          <section className="space-y-6 pt-4 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Explore Other Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/products/${rel.id}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-emerald-700 uppercase">{rel.title}</div>
                    <div className="text-xs text-slate-500 line-clamp-1">{rel.subtitle}</div>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
                </Link>
              ))}
            </div>
          </section>

        </Container>
      </article>
    </>
  );
}
