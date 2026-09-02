import React from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import IconHelper from '../common/IconHelper';
import aboutData from '../../data/about.json';

export default function CoreValuesSection() {
  return (
    <section className="py-20 bg-[#F5F5F5] relative border-t border-slate-200">
      <Container className="space-y-16">
        <SectionHeader
          badge="Values"
          title="Guided by Purpose & Science"
          description="Our core principles steer every CleanTech innovation, algorithm, and physical component we manufacture."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.values.map((val) => (
            <div
              key={val.title}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4 hover:border-emerald-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                <IconHelper name={val.icon} size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{val.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
