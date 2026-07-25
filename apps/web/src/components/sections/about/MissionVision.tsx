import FadeIn from "@/components/motion/FadeIn";
import SectionHeader from "@/components/common/SectionHeader";

import MissionVisionCard from "./MissionVisionCard";

import { missionVisionContent } from "@/content/about";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function MissionVision() {
  return (
    <Section size="spacious" className="bg-surface-muted">
      <Container>
        <FadeIn className=" mx-auto max-w-4xl">
          <SectionHeader 
            badge={missionVisionContent.badge}
            title={missionVisionContent.title}
            description={missionVisionContent.description}
            align="center"
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          {missionVisionContent.cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.08}>
              <MissionVisionCard {...card} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
