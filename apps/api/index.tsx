import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Wind,
  Cpu,
  Cloud,
  LineChart,
  Smartphone,
  Radio,
  Building2,
  Factory,
  Hotel,
  ShoppingBag,
  School,
  Hospital,
  Warehouse,
  Landmark,
  Leaf,
  TreePine,
  Mail,
  MapPin,
  CheckCircle2,
  Thermometer,
  Droplets,
  Activity,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Counter from "@/components/Counter";
import SmoothScroll from "@/components/SmoothScroll";

const Earth = lazy(() => import("@/components/Earth"));

export const Route = createFileRoute("/")({
  component: Home,
});

/* ---------------- Reusable ---------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sub,
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`mx-auto max-w-3xl ${center ? "text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-4xl font-semibold text-balance text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-base text-muted-foreground sm:text-lg text-balance">
          {sub}
        </p>
      )}
    </div>
  );
}

const fadeUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Sections ---------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const earthY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const earthScale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px] animate-glow-pulse" />
        <div className="absolute left-[20%] top-[10%] h-64 w-64 rounded-full bg-brand-glow/20 blur-3xl" />
        <div className="absolute right-[15%] bottom-[10%] h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Eyebrow>
            <Sparkles className="h-3 w-3" /> AI + IoT Air Intelligence
          </Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-5xl font-semibold text-balance leading-[1.02] text-foreground sm:text-7xl md:text-[88px]"
        >
          The Future of{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-emerald-500 via-brand to-emerald-400 bg-clip-text text-transparent">
              Indoor Air
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground text-balance"
        >
          Engineered intelligence for cleaner, healthier spaces — anywhere on Earth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:bg-foreground/85"
          >
            Explore Solutions
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#technology"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition hover:bg-white"
          >
            <Play className="h-4 w-4" /> Watch Technology
          </a>
        </motion.div>
      </motion.div>

      {/* 3D Earth */}
      <motion.div
        style={{ y: earthY, scale: earthScale }}
        className="relative mx-auto mt-16 h-[520px] w-full max-w-4xl sm:h-[620px]"
      >
        <Suspense fallback={<div className="h-full w-full" />}>
          <Earth />
        </Suspense>

        {/* floating stat card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="glass absolute left-4 top-16 hidden rounded-2xl p-4 shadow-xl sm:block"
        >
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Live AQI · Delhi</div>
          <div className="mt-1 font-display text-3xl font-semibold text-foreground">184</div>
          <div className="mt-1 text-xs text-red-500">Unhealthy</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="glass absolute right-4 bottom-24 hidden rounded-2xl p-4 shadow-xl sm:block"
        >
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Sensors online</div>
          <div className="mt-1 font-display text-3xl font-semibold text-foreground">2,481</div>
          <div className="mt-1 flex items-center gap-1 text-xs text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> live
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function GlobalChallenge() {
  const stats = [
    { v: "99%", l: "of the world breathes polluted air" },
    { v: "7M", l: "premature deaths every year, globally" },
    { v: "5×", l: "more pollutants indoors than out" },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="A Global Challenge"
            title={<>Air quality is a <span className="text-emerald-600">planetary</span> problem.</>}
            sub="We're building the intelligence layer that makes it measurable, actionable, and solvable — at any scale."
            center
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.1}>
              <div className="glass rounded-3xl p-8">
                <div className="font-display text-5xl font-semibold text-foreground sm:text-6xl">{s.v}</div>
                <div className="mt-3 text-sm text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    { icon: Wind, t: "Invisible pollutants", d: "PM2.5, VOCs and CO₂ silently accumulate indoors — undetectable to the human senses." },
    { icon: Activity, t: "Health risks", d: "Chronic exposure impacts cognition, respiratory health and long-term wellbeing." },
    { icon: Cpu, t: "Poor visibility", d: "Most buildings operate blind — no real-time data, no accountability." },
    { icon: Leaf, t: "Wasted energy", d: "HVAC systems run constantly, without knowing when air is actually clean." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The Problem"
            title={<>We can't improve<br /> what we can't measure.</>}
            center
          />
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-foreground/5 bg-white/60 p-6 transition hover:border-brand/40 hover:bg-white">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-foreground text-brand transition group-hover:bg-brand group-hover:text-foreground">
                  <it.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const items = [
    { icon: Radio, t: "Precision Sensors", d: "Multi-parameter arrays capturing PM, CO₂, VOC, temperature and humidity in real time." },
    { icon: Cpu, t: "AI Engine", d: "Onboard inference models detect anomalies, predict trends and auto-calibrate." },
    { icon: Cloud, t: "Cloud Platform", d: "A secure, scalable backbone streaming from thousands of devices simultaneously." },
    { icon: LineChart, t: "Real-time Analytics", d: "Live dashboards, historical trends and exportable air-quality intelligence." },
    { icon: Smartphone, t: "Mobile Access", d: "iOS & Android companions putting the health of every space in your pocket." },
  ];
  return (
    <section id="technology" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Technology"
            title={<>Powered by <span className="text-emerald-600">AI + IoT</span></>}
            sub="A vertically integrated stack — from silicon to insight — designed to make air visible."
            center
          />
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.08}>
              <div className="glass group h-full rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(94,242,166,0.35)]">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground text-brand">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const items = [
    { t: "Indoor Air Sensors", d: "Room-level precision. Compact, wireless, always-on.", tag: "IG-One" },
    { t: "Outdoor Monitoring", d: "Weatherproof arrays for cities, campuses and streets.", tag: "IG-Sky" },
    { t: "Industrial Monitoring", d: "Rugged sensors for factories, warehouses and cleanrooms.", tag: "IG-Pro" },
    { t: "Smart Dashboard", d: "Every building, every room, every reading — unified.", tag: "IG-Studio" },
    { t: "Analytics Platform", d: "AI-driven trends, alerts and compliance reporting.", tag: "IG-Cloud" },
  ];
  return (
    <section id="products" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title={<>Engineered for every space.</>}
            sub="A modular family of hardware and software — deployable in minutes, meaningful for years."
            center
          />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.07} className={i === 0 ? "lg:col-span-2" : ""}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-foreground p-8 text-background transition hover:shadow-[0_30px_80px_-20px_rgba(7,18,26,0.5)]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/30 blur-3xl transition-opacity group-hover:opacity-60" />
                <div className="pointer-events-none absolute -bottom-24 -left-8 h-48 w-48 rounded-full bg-brand/20 blur-3xl" />

                <div className="relative flex h-full min-h-[240px] flex-col justify-between">
                  <div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-widest text-brand">
                      {p.tag}
                    </span>
                    <h3 className="mt-6 font-display text-3xl font-semibold text-balance sm:text-4xl">
                      {p.t}
                    </h3>
                    <p className="mt-3 max-w-md text-sm text-background/60">{p.d}</p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm text-brand">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [8, -8]);

  const metrics = [
    { l: "AQI", v: 42, u: "", c: "text-emerald-500", icon: Wind },
    { l: "Temp", v: 22.6, u: "°C", c: "text-foreground", icon: Thermometer },
    { l: "Humidity", v: 48, u: "%", c: "text-foreground", icon: Droplets },
    { l: "CO₂", v: 612, u: "ppm", c: "text-foreground", icon: Cloud },
    { l: "VOC", v: 0.28, u: "mg/m³", c: "text-foreground", icon: Activity },
    { l: "Devices", v: 128, u: "", c: "text-emerald-500", icon: CheckCircle2 },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Platform"
            title={<>Every breath, in one view.</>}
            sub="A single command center for real-time air quality across every building you operate."
            center
          />
        </Reveal>

        <motion.div
          style={{ rotateX: rotate }}
          className="mt-16 [transform-style:preserve-3d] [perspective:1200px]"
        >
          <div className="glass rounded-[28px] p-3 shadow-[0_40px_100px_-30px_rgba(7,18,26,0.35)]">
            <div className="overflow-hidden rounded-[20px] bg-foreground text-background">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand" />
                </div>
                <div className="text-xs text-background/50">studio.intelligreen.io</div>
                <div className="text-xs text-brand">● live</div>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-3">
                {metrics.map((m) => (
                  <div key={m.l} className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between text-xs text-background/50">
                      <span>{m.l}</span>
                      <m.icon className="h-4 w-4" />
                    </div>
                    <div className={`mt-2 font-display text-3xl font-semibold ${m.c}`}>
                      {m.v}
                      <span className="ml-1 text-sm text-background/40">{m.u}</span>
                    </div>
                    {/* mini spark */}
                    <svg viewBox="0 0 100 24" className="mt-3 h-6 w-full">
                      <path
                        d="M0 18 L15 12 L28 15 L42 6 L58 10 L72 4 L88 9 L100 5"
                        fill="none"
                        stroke="#5EF2A6"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/5 p-6">
                <div className="mb-3 flex items-center justify-between text-xs text-background/50">
                  <span>24h · Air Quality Index</span>
                  <span className="text-brand">All zones healthy</span>
                </div>
                <svg viewBox="0 0 600 120" className="h-28 w-full">
                  <defs>
                    <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#5EF2A6" stopOpacity="0.4" />
                      <stop offset="1" stopColor="#5EF2A6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 90 C60 60, 120 100, 180 70 S 300 30, 360 55 S 480 20, 540 50 L 600 40 L 600 120 L 0 120 Z"
                    fill="url(#g)"
                  />
                  <path
                    d="M0 90 C60 60, 120 100, 180 70 S 300 30, 360 55 S 480 20, 540 50 L 600 40"
                    fill="none"
                    stroke="#5EF2A6"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Industries() {
  const items = [
    { icon: School, t: "Schools" },
    { icon: Hospital, t: "Hospitals" },
    { icon: Factory, t: "Factories" },
    { icon: Building2, t: "Corporate Offices" },
    { icon: Warehouse, t: "Warehouses" },
    { icon: Landmark, t: "Government" },
    { icon: Hotel, t: "Hotels" },
    { icon: ShoppingBag, t: "Retail" },
  ];
  return (
    <section id="industries" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title={<>Trusted across every environment.</>}
            center
          />
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((i, idx) => (
            <Reveal key={i.t} delay={idx * 0.05}>
              <div className="group relative h-40 overflow-hidden rounded-3xl border border-foreground/5 bg-white/60 p-6 transition hover:border-brand hover:bg-foreground hover:text-background">
                <i.icon className="h-6 w-6 text-foreground transition group-hover:text-brand" />
                <h3 className="absolute bottom-6 left-6 font-display text-xl font-semibold text-foreground transition group-hover:text-background">
                  {i.t}
                </h3>
                <ArrowRight className="absolute right-6 bottom-6 h-4 w-4 -translate-x-2 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const items = [
    { v: 500, s: "+", l: "Sensors installed" },
    { v: 99, s: "%", l: "Monitoring accuracy" },
    { v: 24, s: "/7", l: "Real-time monitoring" },
    { v: 100000, s: "+", l: "People impacted" },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Impact" title={<>Measured. Meaningful. Massive.</>} center />
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="rounded-3xl border border-foreground/5 bg-white/60 p-8">
                <div className="font-display text-5xl font-semibold text-foreground sm:text-6xl">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "IntelliGreen turned an invisible risk into a boardroom metric. Our schools have never been safer.",
      a: "Meera V.",
      r: "Director of Facilities, K-12 Network",
    },
    {
      q: "Beautifully engineered hardware, thoughtful software. It's the standard we've been waiting for.",
      a: "Rohan A.",
      r: "Head of Sustainability, Tech Campus",
    },
    {
      q: "Deployment took a morning. The insights arrived the same afternoon.",
      a: "Dr. Kavya S.",
      r: "Chief of Operations, City Hospital",
    },
  ];
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Voices" title={<>What partners say.</>} center />
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {quotes.map((qt, i) => (
            <Reveal key={qt.a} delay={i * 0.1}>
              <figure className="glass h-full rounded-3xl p-7">
                <blockquote className="font-display text-lg leading-snug text-foreground text-balance">
                  "{qt.q}"
                </blockquote>
                <figcaption className="mt-6 border-t border-foreground/10 pt-4 text-sm">
                  <div className="font-semibold text-foreground">{qt.a}</div>
                  <div className="text-muted-foreground">{qt.r}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const logos = ["Aurora", "Northwind", "Helios", "Vertex", "Meridian", "Kepler", "Aetheria", "Lumen"];
  const doubled = [...logos, ...logos];
  return (
    <section className="border-y border-foreground/5 bg-white/40 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by forward-looking teams
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-14">
            {doubled.map((n, i) => (
              <div
                key={i}
                className="font-display text-2xl font-semibold text-foreground/30 grayscale transition hover:text-foreground hover:grayscale-0"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/60 via-transparent to-transparent" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <Eyebrow>Sustainability</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-semibold text-balance text-foreground sm:text-5xl md:text-6xl">
              Cleaner air is a<br /> climate strategy.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Smarter ventilation, lower emissions and healthier occupants — all measured continuously,
              reported transparently.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Optimize HVAC energy up to 30%",
                "Track CO₂ footprint per building",
                "Contribute to net-zero commitments",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  {t}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-square">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-brand/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-brand/20"
              />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="animate-float-slow rounded-full bg-foreground p-8 text-brand shadow-2xl">
                  <TreePine className="h-14 w-14" strokeWidth={1.5} />
                </div>
              </div>
              {[Leaf, Wind, Cloud, Droplets].map((Icon, i) => {
                const angle = (i / 4) * Math.PI * 2;
                return (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.4 }}
                    className="absolute"
                    style={{
                      left: `${50 + Math.cos(angle) * 42}%`,
                      top: `${50 + Math.sin(angle) * 42}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="glass grid h-12 w-12 place-items-center rounded-2xl">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass overflow-hidden rounded-[36px] p-8 sm:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mt-6 font-display text-4xl font-semibold text-balance text-foreground sm:text-5xl">
                Let's engineer the air of your space.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Talk to our team about a pilot, an audit or a full-building deployment.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <div className="flex items-center gap-3 text-foreground/80">
                  <Mail className="h-4 w-4 text-emerald-600" /> hello@intelligreen.io
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <MapPin className="h-4 w-4 text-emerald-600" /> Bengaluru · Singapore · Dubai
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    placeholder="Full name"
                    className="rounded-2xl border border-foreground/10 bg-white px-5 py-4 text-sm outline-none transition focus:border-brand"
                  />
                  <input
                    type="email"
                    placeholder="Work email"
                    className="rounded-2xl border border-foreground/10 bg-white px-5 py-4 text-sm outline-none transition focus:border-brand"
                  />
                </div>
                <input
                  placeholder="Company"
                  className="rounded-2xl border border-foreground/10 bg-white px-5 py-4 text-sm outline-none transition focus:border-brand"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your space"
                  className="rounded-2xl border border-foreground/10 bg-white px-5 py-4 text-sm outline-none transition focus:border-brand"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition hover:bg-foreground/85"
                >
                  Send message
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-8 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-xl font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-foreground">
                <Leaf className="h-4 w-4" strokeWidth={2.5} />
              </span>
              IntelliGreen
            </div>
            <p className="mt-5 max-w-sm text-sm text-background/60">
              Building the intelligence layer for the air we breathe.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-sm items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 pl-5"
            >
              <input
                placeholder="Your email"
                className="flex-1 bg-transparent text-sm text-background outline-none placeholder:text-background/40"
              />
              <button className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-foreground">
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-background/40">Company</div>
            <ul className="mt-4 space-y-3 text-sm text-background/80">
              <li><a href="#about" className="hover:text-brand">About</a></li>
              <li><a href="#industries" className="hover:text-brand">Industries</a></li>
              <li><a href="#contact" className="hover:text-brand">Careers</a></li>
              <li><a href="#contact" className="hover:text-brand">Press</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-background/40">Resources</div>
            <ul className="mt-4 space-y-3 text-sm text-background/80">
              <li><a href="#products" className="hover:text-brand">Products</a></li>
              <li><a href="#technology" className="hover:text-brand">Technology</a></li>
              <li><a href="#contact" className="hover:text-brand">Support</a></li>
              <li><a href="#contact" className="hover:text-brand">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-background/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} IntelliGreen Technologies. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-brand"><svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V22H7.72V8z"/></svg></a>
            <a href="#" aria-label="Twitter" className="hover:text-brand"><svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.83l-5.34-6.98L4.7 22H1.44l8.03-9.17L1 2h6.99l4.83 6.39L18.244 2zm-1.2 18h1.86L7.06 4H5.1l11.94 16z"/></svg></a>
            <a href="#" aria-label="Github" className="hover:text-brand"><svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */

function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <GlobalChallenge />
        <Problem />
        <Technology />
        <Products />
        <Dashboard />
        <Industries />
        <Impact />
        <Testimonials />
        <Clients />
        <Sustainability />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
