import React from 'react';
import Container from '../common/Container';
import Badge from '../common/Badge';
import aboutData from '../../data/about.json';

export default function AboutHeroSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-[#F5F5F5]">
      <Container className="relative z-10 text-center space-y-6 max-w-4xl">
        <Badge>{aboutData.badge}</Badge>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {aboutData.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          {aboutData.description}
        </p>

        {/* Hero Image Showcase */}
        <div className="pt-6">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl max-w-4xl mx-auto aspect-[21/9]">
            <img
              src={aboutData.heroImage}
              alt="About IntelliGreen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
