import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import IconHelper from '../components/common/IconHelper';
import SEO from '../components/common/SEO';
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  ChevronDown,
  Layers,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';
import solutionsData from '../data/solutions.json';
import productsData from '../data/products.json';
import caseStudiesData from '../data/caseStudies.json';

export default function SolutionsPage() {
  const { solutionId } = useParams();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Determine active solution (default to first if on /solutions overview or matching param)
  const activeSolution =
    solutionsData.items.find(
      (item) => item.id === solutionId || item.slug === solutionId
    ) || solutionsData.items[0];

  useEffect(() => {
    setOpenFaqIndex(0);
  }, [activeSolution.id]);

  // Match recommended products from products.json
  const recommendedProducts = productsData.items.filter((prod) =>
    activeSolution.recommendedProducts.includes(prod.id)
  );

  // Match related case studies from caseStudies.json
  const relatedCaseStudies = caseStudiesData.studies.filter(
    (study) => study.category === activeSolution.id
  );

  return (
    <>
      <SEO
        title={`${activeSolution.title} Solutions | IntelliGreen CleanTech`}
        description={activeSolution.description}
        image={activeSolution.image}
      />

      <article className="py-10 sm:py-14 bg-[#F5F5F5] min-h-screen">
        <Container className="space-y-14">

          {/* Top Breadcrumb & Industry Selector Bar */}
          <div className="space-y-6">
            <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <Link to="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/solutions" className="hover:text-emerald-600 transition-colors">
                Solutions
              </Link>
              <span>/</span>
              <span className="text-emerald-700 font-bold">{activeSolution.title}</span>
            </nav>

            {/* All 4 Solutions Navigation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {solutionsData.items.map((item) => {
                const isActive = item.id === activeSolution.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigate(`/solutions/${item.slug}`)}
                    className={`group text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5 ${
                      isActive
                        ? 'bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-900/15 scale-[1.01]'
                        : 'bg-white border-slate-200/90 text-slate-800 hover:border-emerald-500/50 hover:shadow-md'
                    }`}
                  >
                    <div
                      className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100'
                      }`}
                    >
                      <IconHelper name={item.icon} size={20} />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <div
                        className={`text-[10px] font-bold uppercase tracking-wider ${
                          isActive ? 'text-emerald-400' : 'text-slate-400'
                        }`}
                      >
                        Industry Solution
                      </div>
                      <div className="text-sm font-extrabold truncate">
                        {item.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hero Section for Active Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <Badge>{activeSolution.badge}</Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {activeSolution.title}
                </h1>
                <p className="text-base sm:text-lg font-semibold text-emerald-700 leading-snug">
                  {activeSolution.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeSolution.overview}
                </p>
              </div>

              {/* Impact Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {activeSolution.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 text-center"
                  >
                    <div className="text-lg sm:text-xl font-black text-emerald-600">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <Button to="/contact" size="lg" variant="primary">
                  Schedule Free Site IAQ Audit
                  <ArrowRight size={16} />
                </Button>
                <Button
                  to="/case-studies"
                  size="lg"
                  variant="secondary"
                  className="bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800"
                >
                  View Case Studies
                  <BookOpen size={16} />
                </Button>
              </div>
            </div>

            {/* Right Visual Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-lg group">
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
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <img
                  src={getAssetUrl(activeSolution.image)}
                  alt={activeSolution.title}
                  className={`${
                    activeSolution.media ? 'hidden' : 'block'
                  } w-full h-full object-cover`}
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-950/75 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live {activeSolution.title} Deployment
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-400">
                    ISO & GreenPro Validated
                  </span>
                </div>
              </div>

              {/* Secondary Image & Compliance Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-36 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <img
                    src={getAssetUrl(activeSolution.secondaryImage)}
                    alt={`${activeSolution.title} environment`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-bold text-white">
                      Turnkey Retrofit & New-Build Ready
                    </span>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck size={16} />
                    <span>Compliance Standards</span>
                  </div>
                  <div className="space-y-1.5 my-auto pt-2">
                    {activeSolution.compliance.map((std, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-200"
                      >
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span className="truncate">{std}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sector Challenges vs How We Solve It */}
          <div className="space-y-8">
            <SectionHeader
              badge="Problem vs. Engineering"
              title={`Critical Risks in ${activeSolution.shortTitle} & How We Solve Them`}
              description="Standard HVAC systems were designed only for thermal comfort—not sub-micron pollution, pathogen control, or CO₂ cognitive load."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeSolution.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-shadow"
                >
                  <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center">
                    <AlertTriangle size={20} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {challenge.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Stage Solution Architecture */}
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white space-y-10 shadow-xl">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                <Layers size={15} />
                <span>3-Stage Clean Air Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                How IntelliGreen Protects Your Facility
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                A closed-loop ecosystem combining active purification, low-resistance filtration, and cloud AI automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeSolution.architecture.map((item) => (
                <div
                  key={item.step}
                  className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6 space-y-3 relative overflow-hidden"
                >
                  <div className="text-3xl font-black text-emerald-400/90">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Deliverables Checklist */}
            <div className="pt-6 border-t border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
                Included Turnkey Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeSolution.deliverables.map((deliv, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 bg-slate-800/40 border border-slate-700/60 rounded-xl p-3 text-xs text-slate-200"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-emerald-400 shrink-0 mt-0.5"
                    />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommended Hardware Products for this Solution */}
          <div className="space-y-8">
            <SectionHeader
              badge="Deployed Hardware & Software"
              title={`Recommended Products for ${activeSolution.title}`}
              description="Click any system below to inspect full technical specifications, CADR ratings, and engineering datasheets."
              align="left"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 bg-slate-900 overflow-hidden">
                    <img
                      src={getAssetUrl(product.image)}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/75 backdrop-blur-md text-emerald-400 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <IconHelper name={product.icon} size={12} />
                      <span>Core System</span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                      <span>View Technical Specs</span>
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Case Studies in this Vertical */}
          {relatedCaseStudies.length > 0 && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <SectionHeader
                  badge="Verified Field Results"
                  title={`${activeSolution.title} Case Studies`}
                  description="Real metrics from enterprise installations across India."
                  align="left"
                />
                <Button to="/case-studies" variant="secondary" size="sm">
                  Explore All Case Studies
                  <ArrowRight size={14} />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedCaseStudies.map((study) => (
                  <Link
                    key={study.id}
                    to={`/case-studies/${study.slug}`}
                    className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row gap-5 items-center"
                  >
                    <img
                      src={getAssetUrl(study.image)}
                      alt={study.title}
                      className="w-full sm:w-40 h-36 object-cover rounded-xl shrink-0"
                      loading="lazy"
                    />
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        <Sparkles size={11} />
                        <span>{study.headlineMetric}</span>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                        {study.title}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {study.client} • {study.location}
                      </p>
                      <div className="text-xs font-bold text-emerald-600 flex items-center gap-1 pt-1">
                        <span>Read Full Case Study</span>
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          <div className="max-w-3xl mx-auto space-y-6">
            <SectionHeader
              badge="Frequently Asked Questions"
              title={`Common Questions About ${activeSolution.title}`}
              align="center"
            />
            <div className="space-y-3">
              {activeSolution.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-emerald-600 transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
                          isOpen ? 'rotate-180 text-emerald-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="rounded-3xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-2 max-w-xl text-center lg:text-left">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-200">
                Custom Engineering Assessment
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                Ready to Transform Your {activeSolution.shortTitle}?
              </h2>
              <p className="text-emerald-50 text-sm leading-relaxed">
                Our environmental engineers conduct on-site PM2.5, CO₂, VOC, and AHU static pressure audits across India.
              </p>
            </div>
            <Button
              to="/contact"
              size="lg"
              variant="secondary"
              className="bg-white text-slate-900 border-none hover:bg-slate-100 shrink-0 font-bold"
            >
              Book On-Site IAQ Audit
              <ArrowRight size={16} />
            </Button>
          </div>

        </Container>
      </article>
    </>
  );
}
