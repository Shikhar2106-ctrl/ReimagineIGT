import React, { useRef } from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import perspectivesData from '../../data/perspectives.json';

export default function LatestCarouselSection() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F5F5F5] relative overflow-hidden border-t border-slate-200/80">
      <Container className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeader
            badge={perspectivesData.badge}
            title={perspectivesData.title}
            description={perspectivesData.description}
            align="left"
          />

          {/* Carousel Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="h-9 w-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-emerald-600 hover:border-emerald-500/50 transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="h-9 w-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-emerald-600 hover:border-emerald-500/50 transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {perspectivesData.stories.map((story) => (
            <article
              key={story.id}
              className="group relative flex-none w-[280px] sm:w-[320px] h-[340px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md transition-transform duration-500 hover:-translate-y-1.5"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  {story.category}
                </span>
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                  {story.title}
                </h3>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 pt-1 group-hover:text-emerald-400">
                  <span>Read Article</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
