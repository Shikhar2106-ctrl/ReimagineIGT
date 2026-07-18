import SectionHeader from "@/components/common/SectionHeader";

import TimelineCard from "./TimelineCard";

import { timelineContent } from "@/content/about";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Timeline() {
  return (
    <Section className="bg-surface-muted">

      <Container>

        <SectionHeader
          badge={timelineContent.badge}
          title={timelineContent.title}
          description={timelineContent.description}
          align="center"
        />

        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-brand/20" />

          <div className="space-y-12">

            {timelineContent.milestones.map((item) => (
              <TimelineCard
                key={item.year}
                {...item}
              />
            ))}

          </div>

        </div>

      </Container>

    </Section>
  );
}