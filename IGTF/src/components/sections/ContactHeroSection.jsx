import React from 'react';
import Container from '../common/Container';
import Badge from '../common/Badge';
import IconHelper from '../common/IconHelper';
import contactData from '../../data/contact.json';

export default function ContactHeroSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-[#F5F5F5]">
      <Container className="relative z-10 text-center space-y-6 max-w-4xl">
        <Badge>{contactData.badge}</Badge>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {contactData.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {contactData.description}
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {contactData.cards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3 text-center hover:border-emerald-500/50 hover:shadow-xl transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto">
                <IconHelper name={card.icon} size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
              <div className="text-sm font-bold text-emerald-700">{card.detail}</div>
              <div className="text-xs text-slate-500">{card.subtext}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
