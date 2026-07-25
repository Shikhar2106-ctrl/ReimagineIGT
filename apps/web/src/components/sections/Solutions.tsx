import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import SectionHeader from "@/components/common/SectionHeader";
import SolutionCard from "@/components/common/SolutionCard";

import { solutionsContent } from "@/content/solutions";

export default function Solutions() {
  return (
    <Section size="spacious" className="bg-surface-muted">
      <Container>
        <FadeIn>
          <SectionHeader
            badge={solutionsContent.badge}
            title={solutionsContent.title}
            description={solutionsContent.description}
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:mt-20">
          {solutionsContent.items.map((item) => (
            <StaggerItem key={item.title}>
              <SolutionCard {...item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
