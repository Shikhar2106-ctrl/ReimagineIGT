import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import IconHelper from '../components/common/IconHelper';
import SEO from '../components/common/SEO';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  ChevronDown,
  Layers,
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';
import solutionsData from '../data/solutions.json';
import productsData from '../data/products.json';
import caseStudiesData from '../data/caseStudies.json';

export default function SolutionsPage() {
  const { solutionId } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenFaqIndex(0);
  }, [solutionId]);

  const activeSolution = solutionId
    ? solutionsData.items.find(
        (item) => item.id === solutionId || item.slug === solutionId
      )
    : null;

  // 1. OVERVIEW MODE (/solutions): Clean, spacious, uncluttered cards
  if (!activeSolution) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] py-14 sm:py-20">
        <SEO
          title="Clean-Air Solutions by Sector | IntelliGreen"
          description={solutionsData.description}
        />

        <Container className="space-y-12">
          {/* Clean Header without pill tags */}
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {solutionsData.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {solutionsData.description}
            </p>
          </div>

          {/* Spacious 2x2 Solutions Card Grid — Minimal & Presentable */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionsData.items.map((item) => (
              <Link
                key={item.id}
                to={`/solutions/${item.slug}`}
                className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Single Crisp Visual */}
                  <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden">
                    <img
                      src={getAssetUrl(item.image)}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shadow-md">
                          <IconHelper name={item.icon} size={18} />
                        </div>
                        <span className="text-sm font-bold tracking-tight">
                          {item.shortTitle || item.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Concise Presentable Summary */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <h2 className="text-2xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Only 2 Key Highlights on the Card */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {item.stats.slice(0, 2).map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-2xl bg-slate-50 border border-slate-200/70 px-4 py-3"
                        >
                          <div className="text-lg font-extrabold text-emerald-600">
                            {stat.value}
                          </div>
                          <div className="text-[11px] font-semibold text-slate-500">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Single Clean Action Footer */}
                <div className="px-6 sm:px-8 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">
                    Click to view architecture & specs
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                    Explore Solution <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  // 2. DETAIL MODE (/solutions/:solutionId): Full information shown cleanly when opened
  const recommendedProducts = productsData.items.filter((prod) =>
    activeSolution.recommendedProducts.includes(prod.id)
  );
  const relatedCaseStudies = caseStudiesData.studies.filter(
    (study) => study.category === activeSolution.id
  );

  return (
    <article className="py-10 sm:py-16 bg-[#F8FAFC] min-h-screen">
      <SEO
        title={`${activeSolution.title} Solutions | IntelliGreen CleanTech`}
        description={activeSolution.description}
        image={activeSolution.image}
      />

      <Container className="space-y-14">
        {/* Back Link & Minimal Sector Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft size={16} />
            All Industry Solutions
          </Link>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {solutionsData.items.map((item) => {
              const isActive = item.id === activeSolution.id;
              return (
                <Link
                  key={item.id}
                  to={`/solutions/${item.slug}`}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.shortTitle}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Clean, Spacious Detail Hero (Uncongested 2-Column Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {activeSolution.title}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-emerald-700 leading-snug">
                {activeSolution.subtitle}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeSolution.overview}
              </p>
            </div>

            {/* Clean 4-Metric Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {activeSolution.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/70"
                >
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-600">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button to="/contact" size="md" variant="primary">
                Schedule Site IAQ Audit
                <ArrowRight size={15} />
              </Button>
              <Button
                to="/case-studies"
                size="md"
                variant="secondary"
                className="bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800"
              >
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Right Single Crisp Visual (No Congested Sub-Boxes) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md">
              {activeSolution.media ? (
                <video
                  key={activeSolution.media}
                  src={getAssetUrl(activeSolution.media)}
                  poster={getAssetUrl(activeSolution.image)}
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={getAssetUrl(activeSolution.image)}
                  alt={activeSolution.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Clean Full-Text Compliance Pills Below Visual (No Truncation) */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {activeSolution.compliance.map((std, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold"
                >
                  <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sector Challenges vs Engineering Solution */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Key Challenges & Our Engineering Approach
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              How IntelliGreen addresses indoor pollutants, CO₂ accumulation, and HVAC thermal loads in {activeSolution.shortTitle}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeSolution.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center">
                    <AlertTriangle size={18} />
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                    {challenge.stat}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {challenge.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Stage Turnkey Implementation Architecture */}
        <div className="bg-slate-950 rounded-3xl p-6 sm:p-10 text-white space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              3-Stage Implementation Architecture
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Engineered for rapid installation across existing AHU plenums and non-HVAC spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {activeSolution.architecture.map((arch, idx) => (
              <div
                key={idx}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {arch.step}
                  </span>
                  <Layers size={16} className="text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{arch.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {arch.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Hardware Systems (Minimal Cards) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Recommended Hardware for {activeSolution.shortTitle}
              </h2>
              <p className="text-sm text-slate-600">
                Select any system below to view its full engineering specifications.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700"
            >
              View All Products <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.slug || product.id}`}
                className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] bg-slate-950 overflow-hidden">
                    <img
                      src={getAssetUrl(product.image)}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-4 pt-2 flex items-center justify-between text-xs font-bold text-emerald-600">
                  <span>View Full Specs</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Related Case Study Banner (if available) */}
        {relatedCaseStudies.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Proven Deployment in {activeSolution.shortTitle}
            </h2>
            {relatedCaseStudies.map((study) => (
              <Link
                key={study.id}
                to={`/case-studies/${study.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg transition-all"
              >
                <div className="lg:col-span-5 h-60 lg:h-auto bg-slate-900 overflow-hidden">
                  <img
                    src={getAssetUrl(study.image)}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-emerald-600">
                      {study.client} • {study.location}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600">
                    Read Full Case Study <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* FAQs */}
        {activeSolution.faqs?.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {activeSolution.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-slate-500 transition-transform ${
                          isOpen ? 'rotate-180 text-emerald-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
