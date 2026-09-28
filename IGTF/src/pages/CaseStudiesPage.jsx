import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import IconHelper from '../components/common/IconHelper';
import SEO from '../components/common/SEO';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Layers,
  Quote,
  Sparkles,
  Activity,
  ShieldCheck,
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';
import caseStudiesData from '../data/caseStudies.json';
import productsData from '../data/products.json';

export default function CaseStudiesPage() {
  const { caseStudyId } = useParams();
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const activeStudy = caseStudyId
    ? caseStudiesData.studies.find(
        (s) => s.id === caseStudyId || s.slug === caseStudyId
      )
    : null;

  // Smooth scroll to #aqi-guide when hash is present
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [hash]);

  const filteredStudies =
    selectedCategory === 'all'
      ? caseStudiesData.studies
      : caseStudiesData.studies.filter((s) => s.category === selectedCategory);

  return (
    <>
      <SEO
        title={
          activeStudy
            ? `${activeStudy.title} | Case Study | IntelliGreen`
            : 'Case Studies & AQI Reference Guide | IntelliGreen CleanTech'
        }
        description={
          activeStudy ? activeStudy.challenge : caseStudiesData.description
        }
        image={activeStudy ? activeStudy.image : undefined}
      />

      <article className="py-10 sm:py-14 bg-[#F5F5F5] min-h-screen">
        <Container className="space-y-16">

          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <Link to="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/case-studies"
              className="hover:text-emerald-600 transition-colors"
            >
              Case Studies
            </Link>
            {activeStudy && (
              <>
                <span>/</span>
                <span className="text-emerald-700 font-bold truncate max-w-xs sm:max-w-md">
                  {activeStudy.client}
                </span>
              </>
            )}
          </nav>

          {/* DETAIL VIEW WHEN A SPECIFIC CASE STUDY IS SELECTED */}
          {activeStudy ? (
            <div className="space-y-12">
              <div>
                <button
                  onClick={() => navigate('/case-studies')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-emerald-600 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm transition-colors cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back to All Case Studies</span>
                </button>
              </div>

              {/* Case Study Hero Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{activeStudy.categoryLabel}</Badge>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        <MapPin size={12} className="text-emerald-600" />
                        {activeStudy.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        <Clock size={12} className="text-emerald-600" />
                        {activeStudy.duration}
                      </span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                      {activeStudy.title}
                    </h1>

                    <p className="text-sm font-bold text-slate-600">
                      Client: <span className="text-slate-900">{activeStudy.client}</span> • Protected Area:{' '}
                      <span className="text-emerald-700">{activeStudy.area}</span>
                    </p>

                    {/* Before vs After Banner */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="bg-rose-50 border border-rose-200/80 rounded-2xl p-4">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
                          Before IntelliGreen
                        </div>
                        <div className="text-lg font-black text-rose-900 mt-0.5">
                          {activeStudy.beforeAqi}
                        </div>
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                          After IntelliGreen Deployment
                        </div>
                        <div className="text-lg font-black text-emerald-900 mt-0.5">
                          {activeStudy.afterAqi}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                      <img
                        src={getAssetUrl(activeStudy.image)}
                        alt={activeStudy.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md text-white px-4 py-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-400">
                          {activeStudy.headlineMetric}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge, Solution & Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-lg font-extrabold text-slate-900">
                        1. The Environmental Challenge
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {activeStudy.challenge}
                      </p>
                    </div>
                    <div className="space-y-2 pt-2">
                      <h2 className="text-lg font-extrabold text-slate-900">
                        2. Engineered CleanTech Solution
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {activeStudy.solution}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
                    <h2 className="text-base font-extrabold text-emerald-400 uppercase tracking-wider">
                      3. Verified Impact & Field Results
                    </h2>
                    <ul className="space-y-3">
                      {activeStudy.results.map((res, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                        >
                          <CheckCircle2
                            size={17}
                            className="text-emerald-400 shrink-0 mt-0.5"
                          />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>

                    {activeStudy.quote && (
                      <div className="mt-6 pt-5 border-t border-slate-800 space-y-2">
                        <div className="flex items-center gap-2 text-emerald-400">
                          <Quote size={16} />
                          <span className="text-[11px] font-bold uppercase tracking-wider">
                            Client Testimonial
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm italic text-slate-300 leading-relaxed">
                          "{activeStudy.quote.text}"
                        </p>
                        <div className="text-xs font-bold text-white">
                          — {activeStudy.quote.author}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Deployed Products Strip */}
                <div className="pt-6 border-t border-slate-200 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    IntelliGreen Systems Deployed in This Project
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {productsData.items
                      .filter((p) => activeStudy.productsUsed.includes(p.id))
                      .map((prod) => (
                        <Link
                          key={prod.id}
                          to={`/products/${prod.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-emerald-500/50 hover:bg-white transition-all group"
                        >
                          <img
                            src={getAssetUrl(prod.image)}
                            alt={prod.title}
                            className="h-12 w-14 object-cover rounded-lg shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="text-xs font-extrabold text-slate-900 truncate group-hover:text-emerald-600">
                              {prod.title}
                            </div>
                            <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                              <span>View System</span>
                              <ArrowRight size={11} />
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* MAIN CASE STUDIES CATALOG VIEW */
            <div className="space-y-12">
              {/* Header & Summary Stats */}
              <div className="space-y-8">
                <SectionHeader
                  badge={caseStudiesData.badge}
                  title={caseStudiesData.title}
                  description={caseStudiesData.description}
                  align="center"
                />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {caseStudiesData.summaryMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm text-center space-y-1"
                    >
                      <div className="text-2xl sm:text-3xl font-black text-emerald-600">
                        {metric.value}
                      </div>
                      <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap justify-center gap-2">
                {caseStudiesData.categories.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Case Studies Cards Grid — Clean & Presentable */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredStudies.map((study) => (
                  <Link
                    key={study.id}
                    to={`/case-studies/${study.slug}`}
                    className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Crisp Single Visual */}
                      <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                        <img
                          src={getAssetUrl(study.image)}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                          <span className="text-xs font-bold text-emerald-400">
                            {study.headlineMetric}
                          </span>
                          <span className="text-xs font-medium text-slate-300">
                            {study.location}
                          </span>
                        </div>
                      </div>

                      {/* Clean Concise Body */}
                      <div className="p-6 sm:p-8 space-y-3">
                        <div className="text-xs font-bold text-emerald-700">
                          {study.client}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug group-hover:text-emerald-600 transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                          {study.challenge}
                        </p>
                      </div>
                    </div>

                    {/* Clean Footer Action */}
                    <div className="px-6 sm:px-8 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500">
                        Protected Area: {study.area}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                        Read Full Case Study <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* AIR QUALITY INDEX (AQI) & PARAMETER REFERENCE GUIDE (#aqi-guide) */}
          <section
            id="aqi-guide"
            className="pt-12 border-t border-slate-200/90 space-y-10 scroll-mt-24"
          >
            <SectionHeader
              badge={caseStudiesData.aqiGuide.badge}
              title={caseStudiesData.aqiGuide.title}
              description={caseStudiesData.aqiGuide.description}
              align="center"
            />

            {/* AQI Color Scale Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    <Activity size={18} className="text-emerald-600" />
                    <span>Standard Air Quality Index (AQI) & PM2.5 Health Bands</span>
                  </h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    IntelliGreen Guarantee: 0–50 AQI
                  </span>
                </div>

                <div className="divide-y divide-slate-200">
                  {caseStudiesData.aqiGuide.bands.map((band) => (
                    <div
                      key={band.range}
                      className="py-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center"
                    >
                      <div className="md:col-span-2 flex items-center gap-2.5">
                        <span
                          className={`h-3.5 w-3.5 rounded-full shrink-0 ${band.color}`}
                        />
                        <span className="text-sm font-black text-slate-900">
                          AQI {band.range}
                        </span>
                      </div>
                      <div className="md:col-span-3">
                        <span
                          className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border ${band.badgeClass}`}
                        >
                          {band.level} ({band.pm25})
                        </span>
                      </div>
                      <div className="md:col-span-7 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {band.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4 Key Indoor Pollutants Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudiesData.aqiGuide.keyParameters.map((param) => (
                <div
                  key={param.parameter}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-extrabold text-slate-900">
                      {param.parameter}
                    </h4>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Safe Limit: {param.safeLimit}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Health Risk: </strong>
                    {param.danger}
                  </p>
                  <p className="text-xs text-emerald-800 bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-3 leading-relaxed">
                    <strong className="font-bold">IntelliGreen Mitigation: </strong>
                    {param.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </Container>
      </article>
    </>
  );
}
