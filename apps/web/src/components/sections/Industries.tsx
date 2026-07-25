import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import IndustryCard from "@/components/common/IndustryCard";
import SectionHeader from "@/components/common/SectionHeader";

import { industriesContent } from "@/content/industries";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Industries() {
  return (
    <Section size="spacious">
      <Container>
        <FadeIn>
          <SectionHeader
            badge={industriesContent.badge}
            title={industriesContent.title}
            description={industriesContent.description}
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid auto-rows-45 gap-6 md:grid-cols-4 lg:mt-20">
          {industriesContent.items.map((industry) => (
            <StaggerItem key={industry.title}>
              <IndustryCard {...industry} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
