import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Leaf, Wind, Globe2, HeartHandshake } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const METRICS = [
  {
    icon: Leaf,
    value: "21.5M",
    label: "Clean Air Produced",
    sub: "CFM",
  },
  {
    icon: Globe2,
    value: "15.3M",
    label: "Area Safeguarded",
    sub: "ft²",
  },
  {
    icon: Wind,
    value: "120K+",
    label: "Healthy Lives",
    sub: "People",
  },
  {
    icon: HeartHandshake,
    value: "1,795",
    label: "Technical Consultations",
    sub: "Projects",
  },
];

export default function WebElementsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowX = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const glowY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div ref={sectionRef}>
      <Section
        id="impact"
        size="spacious"
        className="relative overflow-hidden bg-linear-to-b from-amber-100 via-slate-50 to-white"
      >
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="pointer-events-none absolute left-1/2 top-0 h-95 w-95 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[120px]"
        />

        <Container size="wide" className="relative">

          <div className="flex min-h-[50vh] items-center justify-center py-16">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
                Global Impact
              </span>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Measured.
                <br />
                Meaningful.
                <br />
                Massive.
              </h2>

            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {METRICS.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <motion.article
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                      {metric.sub}
                    </span>

                  </div>

                  <h3 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900">
                    {metric.value}
                  </h3>

                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                    {metric.label}
                  </p>
                </motion.article>
              );
            })}

          </div>
        </Container>
      </Section>
    </div>
  );
}
