import React from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import aboutData from '../../data/about.json';

export default function TimelineSection() {
  return (
    <section className="py-20 bg-[#F5F5F5] relative border-t border-slate-200">
      <Container className="space-y-16">
        <SectionHeader
          badge="Milestones"
          title="Our Evolution & Growth"
          description="Key milestones on our path to reshaping global air quality standards."
          align="center"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-300 hidden md:block" />

          <div className="space-y-12">
            {aboutData.timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-white border-2 border-emerald-600 z-10 hidden md:flex items-center justify-center shadow-md">
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                  </div>

                  {/* Content Box */}
                  <div className="w-full md:w-1/2 p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-2 hover:border-emerald-500/50 transition-all">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
