import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import Container from '../common/Container';
import IconHelper from '../common/IconHelper';
import { getAssetUrl } from '../../utils/assetHelper';
import siteData from '../../data/site.json';
import navData from '../../data/navigation.json';

// Reusable L-shaped tree connector item matching the reference architecture
function TreeItem({ to, label }) {
  return (
    <li className="flex items-start gap-1.5 group">
      <span
        aria-hidden="true"
        className="inline-block w-2.5 h-3 border-l border-b border-slate-600/90 group-hover:border-emerald-400 shrink-0 -mt-0.5 ml-0.5 transition-colors"
      />
      <Link
        to={to}
        className="text-xs text-slate-400 hover:text-emerald-400 transition-colors leading-snug"
      >
        {label}
      </Link>
    </li>
  );
}

// Section Header with horizontal extending line (e.g. SOLUTIONS ───────────)
function FooterSectionHeading({ title }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-emerald-400 shrink-0">
        {title}
      </h3>
      <div className="h-px flex-1 bg-slate-800" />
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [verified, setVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-800/90 pt-16 pb-12 text-slate-300">
      <Container className="space-y-14">
        {/* ============================================================
            TOP ARCHITECTURAL ROW:
            1. IntelliGreen Brand + Subscribe + Socials
            2. Solutions
            3. Industries
            4. Proof & Validation (Tree Hierarchy)
           ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1 (3 Cols): IntelliGreen Brand Identity + Subscribe + Socials */}
          <div className="lg:col-span-3 space-y-6">
            {/* Preserved IntelliGreen Logo & Description */}
            <div className="space-y-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2.5 bg-white px-3.5 py-2 rounded-xl shadow-sm hover:scale-[1.02] transition-transform"
              >
                <img
                  src={getAssetUrl(siteData.logo.light || '/images/topbar-logo.png')}
                  alt={siteData.logo.alt}
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'inline';
                  }}
                />
                <span className="hidden text-lg font-extrabold text-slate-900">
                  Intelli<span className="text-emerald-600">Green</span>
                </span>
              </Link>
              <p className="text-xs text-slate-400 leading-relaxed">
                {siteData.description}
              </p>
            </div>

            {/* SUBSCRIBE Block */}
            <div>
              <FooterSectionHeading title="Subscribe" />
              <p className="text-xs text-slate-400 leading-relaxed mb-3.5">
                Get engineering updates, IAQ research, and news about our latest clean-air systems.
              </p>

              {submitted ? (
                <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <Check size={15} />
                  <span>Subscribed to IntelliGreen CleanTech updates!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Type your email"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                  />

                  {/* Interactive Verification Box */}
                  <label className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg bg-white text-slate-800 border border-slate-300 cursor-pointer select-none max-w-[230px]">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={verified}
                        onChange={(e) => setVerified(e.target.checked)}
                        className="w-4 h-4 accent-emerald-600 rounded cursor-pointer"
                      />
                      <span className="text-[11px] font-semibold text-slate-800">
                        I&apos;m not a robot
                      </span>
                    </div>
                    <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
                  </label>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/40 hover:border-emerald-400 hover:bg-emerald-500 hover:text-slate-950 text-xs font-extrabold text-white transition-all cursor-pointer"
                    >
                      <span>Submit</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Preserved Circular Outlined Social Links */}
            <div className="flex items-center gap-2.5 pt-1">
              {siteData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full border border-slate-600 hover:border-emerald-400 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all"
                  aria-label={social.name}
                >
                  <IconHelper name={social.icon} size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 (3 Cols): SOLUTIONS */}
          <div className="lg:col-span-3">
            <FooterSectionHeading title="Solutions" />
            <ul className="space-y-3 text-xs font-semibold text-slate-200">
              <li>
                <Link
                  to="/solutions/commercial-air-quality"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Health &amp; Cognitive Productivity
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/commercial-air-quality"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Energy &amp; HVAC Operational Efficiency
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/commercial-air-quality"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Driving Asset Value &amp; ESG Performance
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/industrial-filtration"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Compliance &amp; Healthy Building Standards
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/healthcare-sanitation"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Pathogen &amp; Smog Infiltration Resilience
                </Link>
              </li>
              <li>
                <Link
                  to="/products/iaq-sensor"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Real-Time Monitoring &amp; AI Optimization
                </Link>
              </li>
              {/* Preserved navigation.json Solutions links */}
              {navData.footer[0]?.links?.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-emerald-400 transition-colors block font-normal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (3 Cols): INDUSTRIES */}
          <div className="lg:col-span-3">
            <FooterSectionHeading title="Industries" />
            <ul className="space-y-3 text-xs font-semibold text-slate-200">
              <li>
                <Link
                  to="/solutions/education-campuses"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Education, Schools &amp; Universities
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/commercial-air-quality"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Commercial Office Buildings &amp; IT Parks
                </Link>
              </li>
              <li>
                <Link
                  to="/products/ctfa-wall"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Luxury Residential, Villas &amp; Penthouses
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/healthcare-sanitation"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Healthcare, ICUs &amp; IVF Laboratories
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/industrial-filtration"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Manufacturing, Labs &amp; Critical Environments
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/commercial-air-quality"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Hospitality, Hotels &amp; Executive Lounges
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/industrial-filtration"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Data Centers &amp; Mission-Critical Server Rooms
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Public Venues, Airports &amp; Auditoriums
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (3 Cols): PROOF & VALIDATION (2 Sub-Columns with Tree Connectors) */}
          <div className="lg:col-span-3">
            <FooterSectionHeading title="Proof & Validation" />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2.5">
                <div className="text-xs font-extrabold text-white leading-snug">
                  Active BPI &amp; Positive CTFAs Technology
                </div>
                <ul className="space-y-2">
                  <TreeItem to="/products/bipolar-ionisation" label="UL 2998 Zero-Ozone" />
                  <TreeItem to="/case-studies/apollo-maternity-icu-sanitation" label="Clinical Lab Studies" />
                  <TreeItem to="/case-studies/delhi-international-school-iaq" label="Field Evaluations" />
                  <TreeItem to="/case-studies" label="Case Studies" />
                  <TreeItem to="/about#certifications" label="Standards & Certifications" />
                </ul>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-extrabold text-white leading-snug">
                  EAC &amp; Cross-Flow ERV HVAC Systems
                </div>
                <ul className="space-y-2">
                  <TreeItem to="/products/eac-filter" label="CII–IGBC GreenPro" />
                  <TreeItem to="/products/tfas-erv-system" label="78% Enthalpy Data" />
                  <TreeItem to="/case-studies/gurugram-fintech-campus" label="AHU Energy Audits" />
                  <TreeItem to="/case-studies/pune-precision-electronics-plant" label="Industrial ROI Proof" />
                  <TreeItem to="/case-studies#aqi-guide" label="WELL & LEED Credits" />
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM ARCHITECTURAL ROW:
            - Left (9 Cols): PRODUCTS (5 Tree-Branch Sub-Categories)
            - Right (3 Cols): RESOURCES & QUICK LINKS
           ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pt-4">
          {/* Left 9 Cols: PRODUCTS */}
          <div className="lg:col-span-9">
            <FooterSectionHeading title="Products" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Sub-Col 1: Commercial HVAC Air Purification */}
              <div className="space-y-2.5">
                <div className="text-xs font-extrabold text-white leading-snug">
                  Commercial HVAC Air Purification
                </div>
                <ul className="space-y-2">
                  <TreeItem to="/products/eac-filter" label="EAC Electronic Air Cleaner" />
                  <TreeItem to="/products/eac-filter" label="IG-EAC-2000 Collector" />
                  <TreeItem to="/products/tfas-erv-system" label="Cross-Flow ERV Core" />
                  <TreeItem to="/products/tfas-erv-system" label="IG-ERV-X1000 Series" />
                  <TreeItem to="/products/ctfa-wall" label="Concealed Ceiling CTFAs" />
                  <TreeItem to="/products/bipolar-ionisation" label="Central AHU BPI Bars" />
                </ul>
              </div>

              {/* Sub-Col 2: Wall & Residential Fresh Air */}
              <div className="space-y-2.5">
                <div className="text-xs font-extrabold text-white leading-snug">
                  Wall &amp; Residential Fresh Air
                </div>
                <ul className="space-y-2">
                  <TreeItem to="/products/ctfa-wall" label="WALL MOUNTED CTFA" />
                  <TreeItem to="/products/ctfa-wall" label="IG-CTFA-850 Series" />
                  <TreeItem to="/products/ctfa-wall" label="Positive-Pressure Unit" />
                  <TreeItem to="/products/ctfa-wall" label="HEPA H13 + Carbon Stage" />
                </ul>
              </div>

              {/* Sub-Col 3: Active Air Disinfection */}
              <div className="space-y-2.5">
                <div className="text-xs font-extrabold text-white leading-snug">
                  Active Air &amp; Duct Disinfection
                </div>
                <ul className="space-y-2">
                  <TreeItem to="/products/bipolar-ionisation" label="Needlepoint BPI Module" />
                  <TreeItem to="/products/bipolar-ionisation" label="IG-BPI-1500 Ionizer" />
                  <TreeItem to="/products/bipolar-ionisation" label="VRF / FCU Plasma Slot" />
                  <TreeItem to="/products/bipolar-ionisation" label="Zero-Ozone Emitter PCB" />
                </ul>
              </div>

              {/* Sub-Col 4: Air Quality Sensors & Monitoring */}
              <div className="space-y-2.5">
                <div className="text-xs font-extrabold text-white leading-snug">
                  Air Quality Sensors &amp; Monitoring
                </div>
                <ul className="space-y-2">
                  <TreeItem to="/products/iaq-sensor" label="IAQ Smart Sensor Station" />
                  <TreeItem to="/products/iaq-sensor" label="IG-IAQ-9P Laser Pro" />
                  <TreeItem to="/products/iaq-sensor" label="LoRaWAN & MODBUS Node" />
                  <TreeItem to="/products/intelligreen-hub" label="Smart Lobby TV Kiosk" />
                </ul>
              </div>

              {/* Sub-Col 5: Cloud AI & Core Technology */}
              <div className="space-y-5">
                <div className="space-y-2.5">
                  <div className="text-xs font-extrabold text-white leading-snug">
                    IntelliGreen Cloud AI
                  </div>
                  <ul className="space-y-2">
                    <TreeItem to="/products/intelligreen-hub" label="Cloud AI Hub v4.5" />
                    <TreeItem to="/products/intelligreen-hub" label="ESG & WELL Reporter" />
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <div className="text-xs font-extrabold text-white leading-snug">
                    Core Technology
                  </div>
                  <ul className="space-y-2">
                    <TreeItem to="/products/bipolar-ionisation" label="Bipolar Ionisation" />
                    <TreeItem to="/products/eac-filter" label="Electrostatic Capture" />
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right 3 Cols: RESOURCES & QUICK LINKS */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <FooterSectionHeading title="Resources" />
              <ul className="space-y-2.5 text-xs font-semibold text-slate-200">
                <li>
                  <Link to="/case-studies" className="hover:text-emerald-400 transition-colors block">
                    Enterprise Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/case-studies#aqi-guide"
                    className="hover:text-emerald-400 transition-colors block"
                  >
                    Indoor Air Quality Index Guide
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-emerald-400 transition-colors block">
                    Hardware Engineering Catalog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-emerald-400 transition-colors block">
                    MEP &amp; Partner Portal
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-emerald-400 transition-colors block">
                    Support &amp; Commissioning Center
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <FooterSectionHeading title="Quick Links" />
              <ul className="space-y-2.5 text-xs font-semibold text-slate-200">
                <li>
                  <Link to="/about" className="hover:text-emerald-400 transition-colors block">
                    About IntelliGreen
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about#leadership"
                    className="hover:text-emerald-400 transition-colors block"
                  >
                    Leadership &amp; R&amp;D Team
                  </Link>
                </li>
                <li>
                  <Link to="/clients" className="hover:text-emerald-400 transition-colors block">
                    Clients &amp; Installations
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-emerald-400 transition-colors block">
                    Contact Us &amp; Site Audit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ============================================================
            COPYRIGHT & LEGAL BOTTOM BAR
           ============================================================ */}
        <div className="pt-8 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()}{' '}
            {siteData.companyName || 'Intelligreen Technologies Private Limited'}. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-emerald-400/90 font-semibold">
              CII–IGBC GreenPro Certified • UL 2998 Zero-Ozone
            </span>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
