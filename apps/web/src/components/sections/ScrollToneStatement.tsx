import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function ScrollToneStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 82%", "end 52%"],
  });
  const color = useTransform(scrollYProgress, [0, 1], ["#cbd5e1", "#0f172a"]);

  return (
    <div ref={sectionRef}>
      <Section id="technology" size="spacious" className="overflow-hidden bg-white">
        <Container size="narrow">
          <motion.p
            style={{ color }}
            className="text-balance text-4xl font-medium leading-[1.16] tracking-tight sm:text-5xl lg:text-7xl"
          >
            We build intelligent air systems for the places where people live,
            learn, heal, and create.
          </motion.p>
        </Container>
      </Section>
    </div>
  );
}
