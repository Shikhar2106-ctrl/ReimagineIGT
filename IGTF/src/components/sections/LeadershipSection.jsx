import React from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import { getAssetUrl } from '../../utils/assetHelper';
import aboutData from '../../data/about.json';

export default function LeadershipSection() {
  return (
    <section className="py-20 bg-[#F5F5F5] relative border-t border-slate-200" id="leadership">
      <Container className="space-y-16">
        <SectionHeader
          badge="Leadership"
          title="Meet Our Innovators"
          description="A team of environmental scientists, IoT engineers, and operational leaders."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {aboutData.team.map((member) => (
            <div
              key={member.name}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={getAssetUrl(member.image)}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = '/images/hero/frame-1.png';
                  }}
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  {member.role}
                </div>
                <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
