import { ArrowRight } from "lucide-react";

import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import FloatingColumn from "./FloatingColumn";
import {
  columnOne,
  columnTwo,
  columnThree,
} from "./showcaseData";

export default function Showcase() {
  return (
    <Section
      id="technology"
      size="spacious"
      className="relative overflow-hidden bg-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-300/10 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="grid  items-center gap-16 lg:grid-cols-[1fr_1.05fr] xl:gap-24">

            {/* LEFT */}

            <div className="max-w-2xl p-2 ">

              <span className="inline-flex rounded-full bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand">
                Technology
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight tracking-[-0.04em] text-slate-900 sm:text-5xl xl:text-6xl">
                Smarter Buildings.
                <br />
                Healthier Spaces.
              </h2>

              <p className="mt-8 p-2 text-lg leading-8 text-slate-600">
                IntelliGreen combines intelligent monitoring,
                AI-powered insights, and advanced purification
                systems to create healthier indoor environments
                for offices, hospitals, schools and commercial
                spaces.
              </p>

              <div className="mt-10 p-2 space-y-5">

                {[
                  "Real-time Air Monitoring",
                  "Predictive AI Analytics",
                  "IoT Enabled Sensors",
                  "Energy Efficient Ventilation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-brand" />

                    <span className="text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-12 p-4 ">

                <Button size="lg">
                  Explore Technology
                  <ArrowRight className="" size={18} />
                </Button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              {/* Desktop */}

              <div className="hidden grid-cols-3 gap-7 lg:grid">

                <FloatingColumn
                  images={columnOne}
                  direction="up"
                  duration={22}
                  offset={0}
                />

                <FloatingColumn
                  images={columnTwo}
                  direction="down"
                  duration={18}
                  offset={2}
                />

                <FloatingColumn
                  images={columnThree}
                  direction="up"
                  duration={26}
                  offset={1}
                />

              </div>

              {/* Tablet */}

              <div className="hidden grid-cols-2 gap-6 md:grid lg:hidden">

                <FloatingColumn
                  images={columnOne}
                  direction="up"
                  duration={22}
                  offset={0}
                />

                <FloatingColumn
                  images={columnTwo}
                  direction="down"
                  duration={18}
                  offset={2}
                />

              </div>

              {/* Mobile */}

              <div className="grid grid-cols-2 gap-4 md:hidden">

                <FloatingColumn
                  images={columnOne}
                  direction="up"
                  duration={18}
                  offset={0}
                />

                <FloatingColumn
                  images={columnTwo}
                  direction="down"
                  duration={15}
                  offset={2}
                />

              </div>

            </div>

          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}