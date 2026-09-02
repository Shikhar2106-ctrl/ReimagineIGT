import React from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import { Target, Eye } from 'lucide-react';
import aboutData from '../../data/about.json';

export default function OurStorySection() {
  return (
    <section className="py-20 bg-[#F5F5F5] relative border-t border-slate-200">
      <Container className="space-y-16">
        <div className="max-w-3xl space-y-6">
          <SectionHeader
            title={aboutData.story.title}
            align="left"
          />
          {aboutData.story.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-700 text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4 hover:border-emerald-500/50 transition-all">
            <div className="h-12 w-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 font-bold">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{aboutData.missionVision.mission.title}</h3>
            <p className="text-slate-600 leading-relaxed">{aboutData.missionVision.mission.description}</p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4 hover:border-cyan-500/50 transition-all">
            <div className="h-12 w-12 rounded-2xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-700 font-bold">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{aboutData.missionVision.vision.title}</h3>
            <p className="text-slate-600 leading-relaxed">{aboutData.missionVision.vision.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
