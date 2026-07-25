import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import SectionHeader from "@/components/common/SectionHeader";

import CoreValueCard from "./CoreValueCard";

import { coreValuesContent } from "@/content/about";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CoreValues() {
  return (
    <Section size="spacious">
      <Container className="flex flex-col">
        <div className="flex pl-40">
          <FadeIn>
            <SectionHeader
              badge={coreValuesContent.badge}
              title={coreValuesContent.title}
              description={coreValuesContent.description}
              align="center"
            />
          </FadeIn>
        </div>
        

        <StaggerContainer className="mt-16 grid p-8 gap-8 lg:mt-20 xl:grid-cols-3">
          {coreValuesContent.values.map((value) => (
            <StaggerItem key={value.title}>
              <CoreValueCard {...value} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
