import React, { useState } from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import IconHelper from '../common/IconHelper';
import Button from '../common/Button';
import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import productsData from '../../data/products.json';

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState(productsData.items[0]?.id || '');

  return (
    <section className="py-12 sm:py-16 bg-[#F5F5F5] relative overflow-hidden" id="products">
      <Container className="relative z-10 space-y-10">
        <SectionHeader
          badge={productsData.badge}
          title={productsData.title}
          description={productsData.description}
          align="center"
        />

        {/* Product Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {productsData.items.map((product) => {
            const isActive = activeTab === product.id;
            return (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-105'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <IconHelper name={product.icon} size={15} />
                <span>{product.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed View */}
        {productsData.items.map((product) => {
          if (product.id !== activeTab) return null;

          return (
            <div
              key={product.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg transition-all duration-500"
            >
              {/* Product Media Column */}
              <div className="lg:col-span-6 relative aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm group">
                {product.media ? (
                  <video
                    src={product.media}
                    poster={product.image}
                    preload="metadata"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  className={`${product.media ? 'hidden' : 'block'} w-full h-full object-cover rounded-xl`}
                />
              </div>

              {/* Product Description & Specs Column */}
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                    <IconHelper name={product.icon} size={12} />
                    {product.subtitle}
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{product.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{product.description}</p>
                </div>

                {/* Key Features */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0 font-bold" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs Grid */}
                {product.specs && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-slate-200">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="bg-slate-50 rounded-lg p-2 border border-slate-200">
                        <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{key}</div>
                        <div className="text-xs font-bold text-emerald-700 mt-0.5">{val}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <Button to="/contact" size="sm" variant="primary">
                    Request Quote
                    <ArrowRight size={14} />
                  </Button>
                  <Button to={`/products/${product.id}`} size="sm" variant="secondary" className="bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800">
                    Know More
                    <Info size={14} />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
