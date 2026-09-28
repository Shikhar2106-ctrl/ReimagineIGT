import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  HeartPulse,
  Zap,
  TrendingUp,
  Building2,
  ShieldCheck,
  Activity,
  Wind,
  Layers,
  Cpu,
  GraduationCap,
  Factory,
  Award,
  Users,
  Sparkles,
  Phone,
  MapPin,
} from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import navData from '../../data/navigation.json';
import siteData from '../../data/site.json';
import { getAssetUrl } from '../../utils/assetHelper';

// Rich WellAir-Style Mega Menu Data for Topbar Hover Cards
const MEGA_MENUS = {
  '/solutions': {
    title: 'Solutions',
    subtitle:
      'Turnkey clean-air engineering tailored to commercial, healthcare, educational, and industrial environments.',
    ctaLabel: 'See all Solutions',
    ctaPath: '/solutions',
    defaultFeature: {
      title: 'Solutions That Deliver Results.',
      description:
        'Explore how IntelliGreen helps improve occupant health, optimize HVAC energy operations, strengthen pathogen resilience, and create measurable ESG value.',
      image: '/images/showcase/smart-school-iaq.jpg',
    },
    items: [
      {
        title: 'Commercial Air Quality & Productivity',
        description:
          'Create low-CO₂ (<600 ppm), PM2.5-free corporate workspaces that boost cognitive performance and employee wellness.',
        path: '/solutions/commercial-air-quality',
        icon: Building2,
        featureTitle: 'High-Performance Corporate Workspaces.',
        featureDescription:
          'Cut sick-leave absenteeism by 34% and eliminate afternoon CO₂ fatigue across executive offices and IT campuses.',
        image: '/images/showcase/clean-office-wellness.jpg',
      },
      {
        title: 'Healthcare & Clinical Sanitation',
        description:
          'Active Needlepoint BPI and medical HEPA H13 positive-pressure shields for ICUs, OTs, and IVF laboratories.',
        path: '/solutions/healthcare-sanitation',
        icon: HeartPulse,
        featureTitle: '99.97% Airborne Pathogen Protection.',
        featureDescription:
          'UL 2998 Zero-Ozone active ionization and laminar HEPA filtration engineered for critical clinical zones.',
        image: '/images/showcase/hospital-clean-room.jpg',
      },
      {
        title: 'Energy & Operational Efficiency',
        description:
          'Lower chiller electricity loads by up to 30% using Cross-Flow ERV thermal recovery and MERV 15+ low-drag EAC cells.',
        path: '/solutions/commercial-air-quality',
        icon: Zap,
        featureTitle: 'Recover 78% of HVAC Thermal Energy.',
        featureDescription:
          'Introduce 100% treated outdoor fresh air without penalizing your building air-conditioning load.',
        image: '/images/products/igt-erv-crossflow-core.webp',
      },
      {
        title: 'Education & Smart Campuses',
        description:
          'Protect students and faculty from urban smog seepage with whisper-quiet (<34 dB) classroom fresh-air purification.',
        path: '/solutions/education-campuses',
        icon: GraduationCap,
        featureTitle: 'Safer Classrooms. Sharper Focus.',
        featureDescription:
          'Shield young lungs from hazardous winter smog while keeping classroom CO₂ levels optimal for learning.',
        image: '/images/showcase/smart-school-iaq.jpg',
      },
      {
        title: 'Compliance & Healthy Building Standards',
        description:
          'Simplify accreditation with ASHRAE 62.1, WELL v2, LEED v4.1, RESET, and CII–IGBC GreenPro standards.',
        path: '/solutions/industrial-filtration',
        icon: ShieldCheck,
        featureTitle: 'Audit-Ready Green Building Compliance.',
        featureDescription:
          'Automated ESG reporting and GreenPro-certified hardware that earn direct green building credits.',
        image: '/images/showcase/modern-boardroom-iaq.jpg',
      },
      {
        title: 'Monitoring & AI Optimization',
        description:
          'Measure and automate indoor air quality 24/7 using LoRaWAN sensors and AWS Cloud demand-controlled ventilation.',
        path: '/products/iaq-sensor',
        icon: Activity,
        featureTitle: 'Closed-Loop AI Air Intelligence.',
        featureDescription:
          'Real-time PM2.5, CO₂, and TVOC sensing that autonomously modulates fresh-air intake speeds.',
        image: '/images/showcase/iaq-cloud-dashboard.jpg',
      },
    ],
  },

  '/products': {
    title: 'Products',
    subtitle:
      'Modular clean-air hardware and cloud telemetry built with EC centrifugal fans, HEPA H13 + Carbon, ERV cores, and Active BPI.',
    ctaLabel: 'See all Products',
    ctaPath: '/products',
    defaultFeature: {
      title: 'Engineered From the Inside Out.',
      description:
        'Every IntelliGreen unit combines acoustic-sealed galvanized steel, medical-grade filtration stages, and whisper-quiet brushless EC motors.',
      image: '/images/products/igt-cutaway-intake.webp',
    },
    items: [
      {
        title: 'WALL MOUNTED CTFA',
        description:
          'Positive-pressure treated fresh air purifier with G4 + Honeycomb Carbon + HEPA H13 for HVAC and non-HVAC rooms.',
        path: '/products/ctfa-wall',
        icon: Wind,
        featureTitle: 'Wall & Ceiling CTFA Fresh Air System.',
        featureDescription:
          'Blocks outdoor smog window infiltration with +8.5 Pa positive indoor pressure at <34 dB(A) silent operation.',
        image: '/images/hero/frame-6.webp',
      },
      {
        title: 'Active Bipolar Ionisation (BPI)',
        description:
          'UL 2998 Zero-Ozone needlepoint plasma ionizer flooding breathing zones with >10M H+ and O2- ions/cm³.',
        path: '/products/bipolar-ionisation',
        icon: Zap,
        featureTitle: 'Active In-Room Pathogen Neutralization.',
        featureDescription:
          'Replicates nature’s air purification model inside ducts and rooms with zero consumable filter waste.',
        image: '/images/products/igt-bpi-needlepoint.webp',
      },
      {
        title: 'Cross-Flow ERV Energy Recovery',
        description:
          'Counter-crossflow diamond enthalpy heat exchanger that recovers up to 78% of thermal energy from exhaust air.',
        path: '/products/tfas-erv-system',
        icon: Layers,
        featureTitle: 'Dual-Stream Enthalpy Heat Recovery.',
        featureDescription:
          'Pre-cools and dehumidifies incoming outdoor air without cross-contamination between exhaust and supply streams.',
        image: '/images/products/igt-erv-crossflow-core.webp',
      },
      {
        title: 'EAC Electronic Air Cleaner',
        description:
          'CII–IGBC GreenPro certified dual-stage electrostatic precipitator with MERV 15+ efficiency and washable cells.',
        path: '/products/eac-filter',
        icon: ShieldCheck,
        featureTitle: 'GreenPro Certified Electrostatic Capture.',
        featureDescription:
          'Ultra-low <25 Pa static pressure drop saves up to 30% AHU fan energy with zero disposable filters.',
        image: '/images/hero/frame-5.png',
      },
      {
        title: 'IAQ Smart Sensor Station',
        description:
          '9-parameter laser PM2.5/PM10, NDIR CO₂, and TVOC monitor with LoRaWAN, Wi-Fi, and RS485 MODBUS.',
        path: '/products/iaq-sensor',
        icon: Activity,
        featureTitle: 'Reference-Grade IoT Air Sensing.',
        featureDescription:
          'Encrypted AWS Cloud telemetry with direct closed-loop speed control for TFAS, ERV, and AHU systems.',
        image: '/images/hero/frame-4.jpeg',
      },
      {
        title: 'IntelliGreen Cloud AI Hub',
        description:
          'Enterprise multi-building digital twin dashboard for predictive maintenance, lobby TV kiosks, and ESG reports.',
        path: '/products/intelligreen-hub',
        icon: Cpu,
        featureTitle: 'Predictive Building Air Command.',
        featureDescription:
          'Unify hundreds of floors onto one glass-pane cloud dashboard with one-click WELL & LEED compliance exports.',
        image: '/images/showcase/iaq-cloud-dashboard.jpg',
      },
    ],
  },

  '/case-studies': {
    title: 'Case Studies',
    subtitle:
      'Verified before-and-after AQI, CO₂, and HVAC energy metrics from real enterprise installations across India.',
    ctaLabel: 'See all Case Studies',
    ctaPath: '/case-studies',
    defaultFeature: {
      title: 'Proven Field Performance.',
      description:
        'See how Fortune 500 offices, multi-specialty hospitals, schools, and precision factories achieved WHO-grade indoor air.',
      image: '/images/showcase/modern-boardroom-iaq.jpg',
    },
    items: [
      {
        title: '92% PM2.5 Reduction at CyberHub IT Tower',
        description:
          'Retrofitted 14 AHUs in Gurugram with GreenPro EAC filters and Needlepoint BPI, saving 26% HVAC fan energy.',
        path: '/case-studies/gurugram-fintech-campus',
        icon: Building2,
        featureTitle: 'Gurugram FinTech Tower Retrofit.',
        featureDescription:
          'Maintained indoor PM2.5 at 11 µg/m³ even when outdoor Delhi-NCR winter smog exceeded 410 µg/m³.',
        image: '/images/showcase/modern-boardroom-iaq.jpg',
      },
      {
        title: '99.4% Airborne Pathogen Drop in ICU & IVF Wings',
        description:
          'Deployed UL 2998 Zero-Ozone Active BPI and Wall CTFA positive pressurization across 36 clinical suites.',
        path: '/case-studies/apollo-maternity-icu-sanitation',
        icon: HeartPulse,
        featureTitle: 'Multi-Specialty Hospital Clinical Shield.',
        featureDescription:
          'Achieved ISO Class 6 air cleanliness and 41% drop in post-operative nosocomial infection risk.',
        image: '/images/showcase/hospital-clean-room.jpg',
      },
      {
        title: 'Classroom CO₂ Cut From 2,100 to 520 ppm',
        description:
          'Installed whisper-quiet CTFA units across 85 K-12 classrooms in New Delhi with lobby AQI transparency screens.',
        path: '/case-studies/delhi-international-school-iaq',
        icon: GraduationCap,
        featureTitle: 'Heritage International Campus Upgrade.',
        featureDescription:
          'Eliminated winter smog school closures and reduced student respiratory clinic visits by 38%.',
        image: '/images/showcase/smart-school-iaq.jpg',
      },
      {
        title: '31% Chiller Energy Saved in Precision Plant',
        description:
          'Replaced clogged disposable bag filters with washable 2-stage EAC collectors in Pune electronics plant.',
        path: '/case-studies/pune-precision-electronics-plant',
        icon: Factory,
        featureTitle: 'Zero-Waste Industrial Filtration.',
        featureDescription:
          'Eliminated 480 disposable filters annually with full capital ROI achieved in just 11 months.',
        image: '/images/showcase/commercial-hvac-ahu.jpg',
      },
    ],
  },

  '/about': {
    title: 'About Us',
    subtitle:
      'Pioneering sustainable clean-air hardware, active ionization, and AI environmental intelligence from India for the world.',
    ctaLabel: 'Explore IntelliGreen Story',
    ctaPath: '/about',
    defaultFeature: {
      title: 'Engineering Pure Indoor Sanctuaries.',
      description:
        'Our mission is to make breathable, mountain-fresh indoor air accessible across every office, hospital, school, and home.',
      image: '/images/showcase/clean-family-living.webp',
    },
    items: [
      {
        title: 'Our Mission & CleanTech Vision',
        description:
          'Bridging aerodynamic HVAC hardware with cloud IoT intelligence to solve urban indoor air pollution.',
        path: '/about',
        icon: Sparkles,
        featureTitle: 'Reimagining Indoor Environmental Quality.',
        featureDescription:
          'Combining positive-pressure fresh air, 78% enthalpy heat recovery, and zero-ozone active disinfection.',
        image: '/images/showcase/clean-family-living.webp',
      },
      {
        title: 'Leadership & Engineering Team',
        description:
          'Led by clean-air scientists, HVAC aerodynamicists, and IoT systems architects.',
        path: '/about#leadership',
        icon: Users,
        featureTitle: 'Multidisciplinary Engineering Excellence.',
        featureDescription:
          'Dedicated R&D and field commissioning teams delivering turnkey air quality transformations.',
        image: '/images/showcase/clean-office-wellness.jpg',
      },
      {
        title: 'CII–IGBC GreenPro & UL 2998 Certifications',
        description:
          'Independently validated for zero ozone emission, MERV 15+ capture, and green building energy efficiency.',
        path: '/about#certifications',
        icon: Award,
        featureTitle: 'Globally Certified Safety & Efficiency.',
        featureDescription:
          'Officially accredited by CII–IGBC GreenPro, UL 2998 Zero-Ozone, CE, and ISO 9001 quality standards.',
        image: '/images/products/igt-unit-exterior.webp',
      },
      {
        title: 'Enterprise Clients & Partners',
        description:
          'Trusted by leading corporate parks, healthcare networks, educational institutions, and government bodies.',
        path: '/clients',
        icon: TrendingUp,
        featureTitle: 'Trusted Across 500+ Installations.',
        featureDescription:
          'Delivering measurable indoor air improvements for India’s most respected organizations.',
        image: '/images/showcase/smart-hvac-building.jpg',
      },
    ],
  },

  '/clients': {
    title: 'Clients',
    subtitle:
      'Trusted by India’s foremost corporate enterprises, multi-specialty hospital networks, universities, and industrial leaders.',
    ctaLabel: 'See all Clients & Partners',
    ctaPath: '/clients',
    defaultFeature: {
      title: '500+ Clean-Air Deployments.',
      description:
        'From Fortune 500 headquarters in Delhi-NCR & Mumbai to ISO cleanrooms and international schools.',
      image: '/images/showcase/smart-hvac-building.jpg',
    },
    items: [
      {
        title: 'Corporate & Commercial Real Estate',
        description:
          'Grade-A IT parks, banking headquarters, and co-working spaces achieving WELL & LEED indoor air targets.',
        path: '/clients',
        icon: Building2,
        featureTitle: 'Enterprise Portfolio Standard.',
        featureDescription:
          'Standardized across multi-city commercial office floors for employee wellness and ESG compliance.',
        image: '/images/showcase/clean-office-wellness.jpg',
      },
      {
        title: 'Hospitals, IVF & Diagnostic Networks',
        description:
          'Critical-care ICUs, neonatal wards, and operating theaters protected by active ionization and HEPA H13.',
        path: '/case-studies/apollo-maternity-icu-sanitation',
        icon: HeartPulse,
        featureTitle: 'Clinical-Grade Air Sterilization.',
        featureDescription:
          'Proven 99.4% reduction in airborne microbial colonies across high-risk clinical departments.',
        image: '/images/showcase/hospital-clean-room.jpg',
      },
      {
        title: 'Schools, Universities & Institutions',
        description:
          'K-12 campuses and university lecture halls shielded against hazardous seasonal PM2.5 smog.',
        path: '/case-studies/delhi-international-school-iaq',
        icon: GraduationCap,
        featureTitle: 'Protecting Next-Generation Minds.',
        featureDescription:
          'Maintaining <550 ppm CO₂ and <15 µg/m³ PM2.5 across thousands of student seats.',
        image: '/images/showcase/smart-school-iaq.jpg',
      },
      {
        title: 'Precision Manufacturing & Pharma',
        description:
          'Zero-waste electrostatic air cleaning and oil-mist capture for high-uptime production lines.',
        path: '/case-studies/pune-precision-electronics-plant',
        icon: Factory,
        featureTitle: 'Industrial-Scale Reliability.',
        featureDescription:
          'Washable MERV 15+ electrostatic cells cutting HVAC static drag and filter replacement waste.',
        image: '/images/showcase/commercial-hvac-ahu.jpg',
      },
    ],
  },

  '/contact': {
    title: 'Contact',
    subtitle:
      'Connect with an IntelliGreen clean-air systems engineer for on-site IAQ audits, CAD duct sizing, and turnkey proposals.',
    ctaLabel: 'Go to Contact & Audit Form',
    ctaPath: '/contact',
    defaultFeature: {
      title: 'Schedule an On-Site IAQ Audit.',
      description:
        'Our field engineers conduct laser PM2.5, NDIR CO₂, and static-pressure duct diagnostics across your facility.',
      image: '/images/showcase/modern-boardroom-iaq.jpg',
    },
    items: [
      {
        title: 'Book an On-Site Air Quality Audit',
        description:
          'Request a comprehensive baseline assessment of your facility’s PM2.5, CO₂, TVOC, and AHU performance.',
        path: '/contact',
        icon: Activity,
        featureTitle: 'Data-Driven Facility Diagnostics.',
        featureDescription:
          'Receive a custom engineering report with ROI projections and green building credit roadmaps.',
        image: '/images/showcase/iaq-cloud-dashboard.jpg',
      },
      {
        title: 'Request Custom HVAC & TFAS Sizing',
        description:
          'Share your floorplan or AHU CFM schedule for custom CTFA, Cross-Flow ERV, and Active BPI sizing.',
        path: '/contact',
        icon: Layers,
        featureTitle: 'Custom Architectural Integration.',
        featureDescription:
          'Designed for zero-disruption retrofits inside existing false ceilings and AHU plenums.',
        image: '/images/products/igt-cutaway-intake.webp',
      },
      {
        title: 'Enterprise & Channel Partner Inquiries',
        description:
          'Partner with IntelliGreen as an MEP consultant, architect, or authorized system integrator.',
        path: '/contact',
        icon: Phone,
        featureTitle: 'MEP & Architectural Collaboration.',
        featureDescription:
          'Full BIM/CAD submittals, GreenPro certificates, and technical commissioning support.',
        image: '/images/products/igt-unit-exterior.webp',
      },
    ],
  },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [hoveredSubItemIdx, setHoveredSubItemIdx] = useState(null);
  const [mobileExpandedPath, setMobileExpandedPath] = useState(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setHoveredPath(null);
    setHoveredSubItemIdx(null);
  }, [location.pathname]);

  const handleMouseEnterNav = (path) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (MEGA_MENUS[path]) {
      setHoveredPath(path);
      setHoveredSubItemIdx(null);
    } else {
      setHoveredPath(null);
    }
  };

  const handleMouseLeaveHeader = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredPath(null);
      setHoveredSubItemIdx(null);
    }, 140);
  };

  const handleMouseEnterMega = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  };

  const activeMega = hoveredPath ? MEGA_MENUS[hoveredPath] : null;
  const activeFeature =
    activeMega && hoveredSubItemIdx !== null && activeMega.items[hoveredSubItemIdx]
      ? {
          title: activeMega.items[hoveredSubItemIdx].featureTitle || activeMega.items[hoveredSubItemIdx].title,
          description:
            activeMega.items[hoveredSubItemIdx].featureDescription ||
            activeMega.items[hoveredSubItemIdx].description,
          image: activeMega.items[hoveredSubItemIdx].image,
        }
      : activeMega?.defaultFeature;

  return (
    <>
      {/* Subtle Page Dimming Backdrop when Mega Menu is Open */}
      <AnimatePresence>
        {activeMega && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setHoveredPath(null)}
            className="hidden md:block fixed inset-0 bg-slate-950/20 backdrop-blur-[2px] z-40"
          />
        )}
      </AnimatePresence>

      <header
        onMouseLeave={handleMouseLeaveHeader}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || activeMega
            ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-200/90 py-2.5 shadow-md'
            : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60 py-3 shadow-2xs'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <img
                src={getAssetUrl(siteData.logo.header || '/images/topbar-logo.png')}
                alt={siteData.logo.alt}
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-2">
                <div className="h-7 w-7 rounded-md bg-emerald-600 flex items-center justify-center font-bold text-white text-xs">
                  IG
                </div>
                <span className="font-bold text-lg text-slate-900 tracking-tight">
                  Intelli<span className="text-emerald-600">Green</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with WellAir-Style Hover Triggers */}
            <nav className="hidden md:flex items-center divide-x divide-slate-200/70">
              {navData.main.map((item) => {
                const isActive =
                  location.pathname === item.path ||
                  (item.path !== '/' && location.pathname.startsWith(item.path));
                const isHovered = hoveredPath === item.path;
                const hasMega = Boolean(MEGA_MENUS[item.path]);

                return (
                  <div
                    key={item.path}
                    onMouseEnter={() => handleMouseEnterNav(item.path)}
                    className="relative px-4 py-1.5"
                  >
                    <Link
                      to={item.path}
                      className={`inline-flex items-center gap-1 text-xs lg:text-[13px] font-bold tracking-tight transition-colors duration-200 ${
                        isHovered || isActive
                          ? 'text-emerald-600'
                          : 'text-slate-800 hover:text-emerald-600'
                      }`}
                    >
                      <span>{item.label}</span>
                      {hasMega && (
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${
                            isHovered ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                          }`}
                        />
                      )}
                    </Link>

                    {/* Active / Hovered Bottom Indicator Line (Matching WellAir blue/emerald underline) */}
                    {(isHovered || isActive) && (
                      <motion.div
                        layoutId="topbarUnderline"
                        className="absolute bottom-0 left-4 right-4 h-[2.5px] rounded-full bg-emerald-600"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-2.5">
              <Link
                to="/products"
                className="px-3.5 py-2 rounded-lg border border-slate-300 hover:border-slate-900 text-xs font-extrabold text-slate-900 transition-colors"
              >
                Explore Hardware
              </Link>
              <Button
                to="/contact"
                size="sm"
                variant="primary"
                className="text-xs px-4 py-2 rounded-lg bg-slate-900 hover:bg-emerald-600 text-white shadow-sm"
              >
                Book Air Audit
                <ArrowRight size={13} />
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-emerald-600 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>

        {/* Floating WellAir-Style 3-Column Mega Menu Card */}
        <AnimatePresence>
          {activeMega && (
            <motion.div
              key={hoveredPath}
              onMouseEnter={handleMouseEnterMega}
              initial={{ opacity: 0, y: 10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="hidden md:block absolute left-0 right-0 top-full pt-2.5 z-50"
            >
              <Container>
                <div className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_32px_70px_-15px_rgba(15,23,42,0.22)] p-8 lg:p-10">
                  <div className="grid grid-cols-12 gap-8 items-stretch">
                    {/* Column 1 (Left ~23%): Category Heading, Summary & Bottom "See all" Link */}
                    <div className="col-span-3 border-r border-slate-200/80 pr-6 flex flex-col justify-between">
                      <div className="space-y-3">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                          {activeMega.title}
                        </h2>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {activeMega.subtitle}
                        </p>
                      </div>

                      <div className="pt-8">
                        <Link
                          to={activeMega.ctaPath}
                          onClick={() => setHoveredPath(null)}
                          className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-900 hover:text-emerald-600 transition-colors group"
                        >
                          <span>{activeMega.ctaLabel}</span>
                          <ArrowRight
                            size={14}
                            className="text-emerald-600 group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                      </div>
                    </div>

                    {/* Column 2 (Middle ~37%): Vertical List of Icon + Title + Description Items */}
                    <div className="col-span-4 border-r border-slate-200/80 pr-6 flex flex-col justify-center space-y-1.5">
                      {activeMega.items.map((subItem, idx) => {
                        const IconComp = subItem.icon || Sparkles;
                        const isItemHovered = hoveredSubItemIdx === idx;
                        return (
                          <Link
                            key={idx}
                            to={subItem.path}
                            onMouseEnter={() => setHoveredSubItemIdx(idx)}
                            onClick={() => setHoveredPath(null)}
                            className={`group flex items-start gap-3.5 p-2.5 rounded-2xl transition-all duration-200 ${
                              isItemHovered
                                ? 'bg-slate-50/95 shadow-2xs'
                                : 'hover:bg-slate-50/70'
                            }`}
                          >
                            <div
                              className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
                                isItemHovered
                                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm shadow-emerald-600/20'
                                  : 'bg-sky-50/60 border-sky-200/80 text-emerald-600 group-hover:border-emerald-400'
                              }`}
                            >
                              <IconComp size={17} strokeWidth={1.8} />
                            </div>

                            <div className="space-y-0.5 min-w-0">
                              <div
                                className={`text-[13px] font-extrabold leading-snug transition-colors ${
                                  isItemHovered
                                    ? 'text-emerald-600'
                                    : 'text-slate-900 group-hover:text-emerald-600'
                                }`}
                              >
                                {subItem.title}
                              </div>
                              <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                                {subItem.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Column 3 (Right ~40%): Large Visual Showcase Card with Frosted Glass Overlay at Bottom-Left */}
                    <div className="col-span-5 pl-2 flex items-stretch">
                      <Link
                        to={
                          hoveredSubItemIdx !== null && activeMega.items[hoveredSubItemIdx]
                            ? activeMega.items[hoveredSubItemIdx].path
                            : activeMega.ctaPath
                        }
                        onClick={() => setHoveredPath(null)}
                        className="relative w-full min-h-[380px] rounded-2xl overflow-hidden bg-slate-900 shadow-lg group block"
                      >
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={activeFeature?.image}
                            src={getAssetUrl(activeFeature?.image)}
                            alt={activeFeature?.title}
                            initial={{ opacity: 0.4, scale: 1.04 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0.4 }}
                            transition={{ duration: 0.28 }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = getAssetUrl(
                                '/images/products/igt-cutaway-intake.webp'
                              );
                            }}
                          />
                        </AnimatePresence>

                        {/* Subtle Dark Gradient Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />

                        {/* Frosted Glassmorphic Spotlight Box at Bottom-Left (Exact WellAir Reference Style) */}
                        <div className="absolute bottom-5 left-5 right-5 max-w-[345px] rounded-2xl bg-slate-900/75 backdrop-blur-md border border-white/25 p-5 text-white shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
                          <h3 className="text-lg font-extrabold text-white leading-snug">
                            {activeFeature?.title}
                          </h3>
                          <p className="text-xs text-slate-200/95 leading-relaxed mt-1.5">
                            {activeFeature?.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Drawer with Expandable Sub-Menus */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-x-0 top-[56px] max-h-[82vh] overflow-y-auto bg-white/98 border-b border-slate-200 backdrop-blur-2xl p-4 shadow-2xl"
            >
              <nav className="flex flex-col gap-1.5">
                {navData.main.map((item) => {
                  const mega = MEGA_MENUS[item.path];
                  const isExpanded = mobileExpandedPath === item.path;
                  const isActive = location.pathname === item.path;

                  return (
                    <div
                      key={item.path}
                      className="rounded-xl border border-slate-100 bg-slate-50/60 overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex-1 px-3.5 py-2.5 text-sm font-bold transition-colors ${
                            isActive ? 'text-emerald-600' : 'text-slate-900'
                          }`}
                        >
                          {item.label}
                        </Link>
                        {mega && (
                          <button
                            type="button"
                            onClick={() =>
                              setMobileExpandedPath(isExpanded ? null : item.path)
                            }
                            className="p-2.5 text-slate-500 hover:text-emerald-600 cursor-pointer"
                            aria-label={`Expand ${item.label}`}
                          >
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                isExpanded ? 'rotate-180 text-emerald-600' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Expandable Mobile Sub-Cards */}
                      {mega && isExpanded && (
                        <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-slate-200/70 bg-white">
                          {mega.items.map((sub, i) => {
                            const SubIcon = sub.icon || Sparkles;
                            return (
                              <Link
                                key={i}
                                to={sub.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50"
                              >
                                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                  <SubIcon size={15} />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-extrabold text-slate-900 truncate">
                                    {sub.title}
                                  </div>
                                  <div className="text-[10px] text-slate-500 truncate">
                                    {sub.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="pt-3 mt-1 border-t border-slate-200 grid grid-cols-2 gap-2.5">
                  <Link
                    to="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 rounded-xl border border-slate-300 text-center text-xs font-extrabold text-slate-800"
                  >
                    All Products
                  </Link>
                  <Button
                    to="/contact"
                    size="sm"
                    className="w-full justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Consultation
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
