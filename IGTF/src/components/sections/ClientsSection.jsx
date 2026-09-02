import React from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import { Quote } from 'lucide-react';
import clientsData from '../../data/clients.json';

export default function ClientsSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#F5F5F5] relative overflow-hidden border-t border-slate-200/80">
      <Container className="space-y-10">
        <SectionHeader
          badge={clientsData.badge}
          title={clientsData.title}
          description={clientsData.description}
          align="center"
        />

        {/* Marquee Continuous Logo Loop */}
        <div className="relative overflow-hidden py-5 rounded-xl bg-white border border-slate-200 shadow-sm">
          {/* Edge fade gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="partner-marquee-track flex items-center gap-10">
            {[...clientsData.logos, ...clientsData.logos].map((logoPath, idx) => (
              <div key={idx} className="h-10 w-28 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                <img
                  src={logoPath}
                  alt={`Client Logo ${idx + 1}`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientsData.testimonials.map((test, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-3">
                <Quote size={24} className="text-emerald-600 opacity-60" />
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 font-bold text-xs">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{test.author}</div>
                  <div className="text-[10px] text-slate-500">{test.role} • {test.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
