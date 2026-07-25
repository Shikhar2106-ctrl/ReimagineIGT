import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Container from "@/components/ui/Container";

export default function ParallaxBackground() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // move background slower than scroll for parallax
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

  return (
    <section ref={ref} className="parallax-section">
      <motion.div
        className="parallax-bg"
        style={{ translateY: y, opacity }}
        aria-hidden
      />

      <Container>
        <div className="relative z-10 py-24 text-center text-white">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Cleaner Air, Everywhere
          </h2>

          <p className="mt-4 mx-auto max-w-2xl text-lg text-white/90">
            Our systems are designed to quietly move air and remove contaminants
            so people can breathe easier in schools, hospitals, and workplaces.
          </p>
        </div>
      </Container>
    </section>
  );
}
