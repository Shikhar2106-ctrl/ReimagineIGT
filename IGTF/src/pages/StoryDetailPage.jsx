import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import SEO from '../components/common/SEO';
import perspectivesData from '../data/perspectives.json';
import { getAssetUrl } from '../utils/assetHelper';

export default function StoryDetailPage() {
  const { storySlug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [storySlug]);

  const story = perspectivesData.stories.find(
    (item) => item.slug === storySlug && item.category?.toUpperCase() !== 'CASE STUDY'
  );

  if (!story) {
    return <Navigate to="/" replace />;
  }

  const otherStories = perspectivesData.stories.filter(
    (item) => item.category?.toUpperCase() !== 'CASE STUDY' && item.slug !== story.slug
  );

  return (
    <div className="min-h-screen bg-[#F9F9FB] text-[#111827] pt-24 pb-20">
      <SEO
        title={`${story.title} | ${story.category} | IntelliGreen`}
        description={story.subtitle}
      />

      {/* Top Breadcrumb & Back Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#219E53] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Perspectives
        </Link>
      </div>

      {/* Story Hero Header */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex flex-wrap items-center gap-3 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8F6EE] text-[#187A3E] text-xs font-bold uppercase tracking-widest border border-[#219E53]/20">
            <Sparkles className="w-3.5 h-3.5" />
            {story.category}
          </span>
          {story.readTime && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
              <Clock className="w-3.5 h-3.5 text-[#219E53]" />
              {story.readTime}
            </span>
          )}
          {story.publishedDate && (
            <span className="text-xs text-gray-400 font-medium hidden sm:inline">
              • {story.publishedDate}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0A101D] leading-[1.12] mb-6">
          {story.title}
        </h1>

        <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-4xl">
          {story.subtitle}
        </p>
      </header>

      {/* Primary Visual Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-[#0A101D] min-h-[300px] sm:min-h-[420px]">
            <img
              src={getAssetUrl(story.image)}
              alt={story.title}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D]/85 via-[#0A101D]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#4ADE80] block mb-1">
                {story.category}
              </span>
              <p className="text-lg sm:text-xl font-semibold leading-snug">
                “{story.quote}”
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-4 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#219E53] block mb-2">
                Key Story Highlights
              </span>
              <h2 className="text-xl font-bold text-[#0A101D] mb-5">
                At a Glance: {story.category}
              </h2>
              <div className="space-y-4">
                {story.keyHighlights?.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#F6F9F7] border border-[#219E53]/15"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        {item.label}
                      </span>
                      <span className="text-xl sm:text-2xl font-extrabold text-[#187A3E]">
                        {item.metric}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Story Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-200/80 shadow-sm space-y-10">
          {story.sections?.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#E8F6EE] text-[#187A3E] text-xs font-bold flex items-center justify-center shrink-0">
                  0{idx + 1}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A101D] tracking-tight">
                  {section.heading}
                </h2>
              </div>
              <div className="space-y-4 pl-0 sm:pl-10">
                {section.paragraphs?.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-[17px] text-gray-700 leading-[1.8]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Supporting Hardware / Engineering Visuals for this Story */}
          {(story.heroVisual || story.secondaryVisual) && (
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
                Inside the Architecture — {story.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {story.heroVisual && (
                  <div className="rounded-2xl overflow-hidden border border-gray-200 bg-[#0A101D] aspect-[16/10]">
                    <img
                      src={getAssetUrl(story.heroVisual)}
                      alt={`${story.title} visual 1`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {story.secondaryVisual && (
                  <div className="rounded-2xl overflow-hidden border border-gray-200 bg-[#0A101D] aspect-[16/10]">
                    <img
                      src={getAssetUrl(story.secondaryVisual)}
                      alt={`${story.title} visual 2`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Takeaway Box */}
          <div className="rounded-2xl bg-[#0D2618] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <div className="inline-flex items-center gap-2 text-[#4ADE80] text-xs font-bold uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" />
                {story.category} Takeaway
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{story.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Talk to an IntelliGreen IAQ specialist to see how our systems can be tailored for your space.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#219E53] hover:bg-[#187A3E] text-white text-xs sm:text-sm font-semibold transition-colors shrink-0"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* Other Stories in Perspectives (Excluding Case Studies) */}
      {otherStories.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#219E53] block mb-1">
                Continue Reading
              </span>
              <h2 className="text-2xl font-bold text-[#0A101D]">
                More Stories from IntelliGreen
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherStories.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden bg-gray-900 relative">
                    <img
                      src={getAssetUrl(item.image)}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-[#4ADE80] text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#0A101D] group-hover:text-[#219E53] transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-4 pt-2 flex items-center gap-1.5 text-xs font-bold text-[#219E53]">
                  <span>{item.ctaText || 'Read Story'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
