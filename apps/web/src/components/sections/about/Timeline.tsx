import FadeIn from "@/components/motion/FadeIn";
import SectionHeader from "@/components/common/SectionHeader";

import TimelineCard from "./TimelineCard";

import { timelineContent } from "@/content/about";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Timeline() {
  return (
    <Section size="spacious" className="bg-surface-muted">
      <Container>
        <FadeIn>
          <SectionHeader
            badge={timelineContent.badge}
            title={timelineContent.title}
            description={timelineContent.description}
            align="center"
          />
        </FadeIn>

        <div className="relative mx-auto mt-16 max-w-4xl lg:mt-20">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-linear-to-b from-accent/60 via-accent/20 to-transparent sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {timelineContent.milestones.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.06}>
                <TimelineCard {...item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
