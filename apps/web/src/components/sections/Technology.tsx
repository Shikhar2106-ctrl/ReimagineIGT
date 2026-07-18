import TimelineItem from "@/components/common/TimelineItem";
import SectionHeader from "@/components/common/SectionHeader";
import TechnologyIllustration from "@/components/illustrations/TechnologyIllustration";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { technologyContent } from "@/content/technology";

export default function Technology() {
  return (
    <Section className="bg-slate-50 dark:bg-slate-950/40">

      <Container>

        <SectionHeader
          badge={technologyContent.badge}
          title={technologyContent.title}
          description={technologyContent.description}
          align="center"
        />

        <div className="mt-20 grid gap-20 lg:grid-cols-2">

          <div>

            {technologyContent.steps.map((step, index) => (
              <TimelineItem
                key={step.title}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === technologyContent.steps.length - 1}
              />
            ))}

          </div>

          <TechnologyIllustration />

        </div>

      </Container>

    </Section>
  );
}