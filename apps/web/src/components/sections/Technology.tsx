import FadeIn from "@/components/motion/FadeIn";
import TimelineItem from "@/components/common/TimelineItem";
import SectionHeader from "@/components/common/SectionHeader";
import TechnologyIllustration from "@/components/illustrations/TechnologyIllustration";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { technologyContent } from "@/content/technology";

export default function Technology() {
  return (
    <Section size="spacious">
      <Container>
        <FadeIn>
          <SectionHeader
            badge={technologyContent.badge}
            title={technologyContent.title}
            description={technologyContent.description}
            align="center"
          />
        </FadeIn>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            {technologyContent.steps.map((step, index) => (
              <TimelineItem
                key={step.title}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === technologyContent.steps.length - 1}
              />
            ))}
          </FadeIn>

          <FadeIn delay={0.1} direction="left">
            <TechnologyIllustration />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
