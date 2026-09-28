import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import IconHelper from '../common/IconHelper';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetHelper';
import productsData from '../../data/products.json';

export default function ProductsSection() {
  return (
    <section
      className="py-14 sm:py-20 bg-[#F8FAFC] relative overflow-hidden"
      id="products"
    >
      <Container className="relative z-10 space-y-12">
        {/* Clean Header without pill tags */}
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {productsData.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {productsData.description}
          </p>
        </div>

        {/* Clean, Presentable 3-Column Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.items.map((product) => {
            const specEntries = Object.entries(product.specs || {}).slice(0, 2);
            return (
              <Link
                key={product.id}
                to={`/products/${product.slug || product.id}`}
                className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Single Crisp Visual */}
                  <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                    <img
                      src={getAssetUrl(product.image)}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2.5 text-white">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shadow-sm">
                        <IconHelper name={product.icon} size={16} />
                      </div>
                      <span className="text-xs font-bold tracking-tight">
                        {product.shortTitle || product.title}
                      </span>
                    </div>
                  </div>

                  {/* Presentable Concise Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                      <h2 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                        {product.title}
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Only 2 Key Specs on the Card */}
                    {specEntries.length > 0 && (
                      <div className="grid grid-cols-2 gap-2.5 pt-1">
                        {specEntries.map(([key, value]) => (
                          <div
                            key={key}
                            className="rounded-xl bg-slate-50 border border-slate-200/70 px-3.5 py-2.5"
                          >
                            <div className="text-xs font-extrabold text-emerald-600 truncate">
                              {value}
                            </div>
                            <div className="text-[10px] font-semibold text-slate-500 truncate">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Single Clean Action Footer */}
                <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Video & Engineering Specs
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                    View Product <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
