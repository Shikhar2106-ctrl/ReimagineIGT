import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Calendar,
  Clock,
  BookOpen,
  Newspaper,
  Users,
  Cpu,
  ShieldCheck,
  Sparkles,
  Tag,
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import resourcesData from '../data/resources.json';
import { getAssetUrl } from '../utils/assetHelper';

const CATEGORY_ICONS = {
  blog: BookOpen,
  news: Newspaper,
  'partner-portals': Users,
  engineering: Cpu,
  'support-center': ShieldCheck,
};

export default function ResourcesPage() {
  const { resourceSlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [resourceSlug, activeCategory]);

  // CMS-ready data source (reads static dummy data + merges any future CMS/Admin items)
  const allItems = useMemo(() => {
    try {
      const cmsItemsRaw = localStorage.getItem('igt_cms_resources');
      if (cmsItemsRaw) {
        const parsed = JSON.parse(cmsItemsRaw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...parsed, ...resourcesData.items];
        }
      }
    } catch {
      // fallback to default JSON
    }
    return resourcesData.items || [];
  }, []);

  // If viewing a specific Blog / News / Resource slug (/resources/:resourceSlug)
  const selectedResource = useMemo(() => {
    if (!resourceSlug) return null;
    return allItems.find((item) => item.slug === resourceSlug);
  }, [resourceSlug, allItems]);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.title?.toLowerCase().includes(q) ||
        item.excerpt?.toLowerCase().includes(q) ||
        item.categoryLabel?.toLowerCase().includes(q) ||
        item.tags?.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [allItems, activeCategory, searchQuery]);

  // Single Article / Resource Detail View
  if (resourceSlug && selectedResource) {
    const relatedItems = allItems
      .filter((item) => item.slug !== selectedResource.slug)
      .slice(0, 3);

    return (
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-24 pb-20">
        <SEO
          title={`${selectedResource.title} | ${selectedResource.categoryLabel} | IntelliGreen Resources`}
          description={selectedResource.excerpt}
        />

        <Container className="max-w-4xl">
          <div className="mb-6">
            <Link
              to={`/resources?category=${selectedResource.category}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#219E53] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {selectedResource.categoryLabel} Resources
            </Link>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="relative h-[260px] sm:h-[380px] bg-slate-950">
              <img
                src={getAssetUrl(selectedResource.image)}
                alt={selectedResource.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#219E53] text-white text-[11px] font-bold uppercase tracking-widest">
                    {selectedResource.categoryLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {selectedResource.publishedAt}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-200">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    {selectedResource.readTime}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  {selectedResource.title}
                </h1>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-8">
              {selectedResource.subtitle && (
                <p className="text-base sm:text-xl font-medium text-slate-700 leading-relaxed border-l-4 border-[#219E53] pl-4">
                  {selectedResource.subtitle}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100 text-xs text-slate-500">
                <div>
                  <span className="font-bold text-slate-800">
                    {selectedResource.author}
                  </span>
                  {selectedResource.authorRole && (
                    <span> • {selectedResource.authorRole}</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedResource.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-semibold"
                    >
                      <Tag className="w-3 h-3 text-[#219E53]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-base sm:text-[17px] text-slate-700 leading-[1.8]">
                  {selectedResource.excerpt}
                </p>

                {selectedResource.contentSections?.map((sec, idx) => (
                  <div key={idx} className="space-y-3 pt-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {sec.heading}
                    </h2>
                    {sec.paragraphs?.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-base sm:text-[17px] text-slate-700 leading-[1.8]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* More Resources */}
          {relatedItems.length > 0 && (
            <div className="mt-14">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                More from IntelliGreen Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/resources/${item.slug}`}
                    className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-40 overflow-hidden bg-slate-900 relative">
                        <img
                          src={getAssetUrl(item.image)}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                          {item.categoryLabel}
                        </span>
                      </div>
                      <div className="p-5">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#219E53] transition-colors line-clamp-2 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 pb-4 text-xs font-bold text-[#219E53] inline-flex items-center gap-1">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="Resources — Blog, News, Engineering & Support | IntelliGreen"
        description="Explore IntelliGreen technical blogs, company news, MEP partner portals, engineering submittals, and support documentation."
      />

      {/* Hero Banner matching the WellAir / Novaerus Resources Header */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-slate-950 text-white overflow-hidden">
        <img
          src={getAssetUrl(resourcesData.hero.heroImage)}
          alt="IntelliGreen Resources"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              {resourcesData.hero.title}
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {resourcesData.hero.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Clean Category Tab Bar (Blog | News | Partner Portals | Engineering | Support Center) */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-slate-200 shadow-xs">
        <Container className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-2">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setSearchParams({})}
              className={`py-3 text-sm font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'border-[#219E53] text-[#219E53]'
                  : 'border-transparent text-slate-600 hover:text-slate-950'
              }`}
            >
              All Resources
            </button>
            {resourcesData.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSearchParams({ category: cat.id })}
                  className={`py-3 text-sm font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                    isActive
                      ? 'border-[#219E53] text-[#219E53]'
                      : 'border-transparent text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0 pb-2 md:pb-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blog, news, specs..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#219E53] focus:bg-white transition"
            />
          </div>
        </Container>
      </div>

      {/* Resources Feed Grid */}
      <section className="py-12 sm:py-16">
        <Container className="space-y-10">
          {/* Active Category Description Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#219E53] block mb-1">
                {activeCategory === 'all'
                  ? 'Knowledge Library'
                  : resourcesData.categories.find((c) => c.id === activeCategory)?.label}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {activeCategory === 'all'
                  ? 'Latest Blogs, Press News & Technical Resources'
                  : resourcesData.categories.find((c) => c.id === activeCategory)
                      ?.description}
              </h2>
            </div>
            <div className="text-xs font-semibold text-slate-500">
              Showing {filteredItems.length}{' '}
              {filteredItems.length === 1 ? 'resource' : 'resources'}
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
              <p className="text-base font-bold text-slate-800">
                No matching resources found.
              </p>
              <p className="text-xs text-slate-500">
                Try clearing your search filter or selecting another resource category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSearchParams({});
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#219E53] text-white text-xs font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item) => {
                const IconComp = CATEGORY_ICONS[item.category] || BookOpen;
                return (
                  <Link
                    key={item.id}
                    to={`/resources/${item.slug}`}
                    className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-52 overflow-hidden bg-slate-950">
                        <img
                          src={getAssetUrl(item.image)}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-medium text-slate-200">
                          <span className="font-bold text-emerald-400">
                            {item.categoryLabel}
                          </span>
                          <span>{item.readTime}</span>
                        </div>
                      </div>

                      <div className="p-6 space-y-2.5">
                        <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#219E53] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">
                        {item.publishedAt}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#219E53] group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
