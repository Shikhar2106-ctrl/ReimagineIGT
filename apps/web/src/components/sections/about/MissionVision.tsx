import SectionHeader from "@/components/common/SectionHeader";

import MissionVisionCard from "./MissionVisionCard";

import { missionVisionContent } from "@/content/about";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function MissionVision() {
  return (
    <Section className="bg-surface-muted">

      <Container>

        <SectionHeader
          badge={missionVisionContent.badge}
          title={missionVisionContent.title}
          description={missionVisionContent.description}
          align="center"
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {missionVisionContent.cards.map((card) => (
            <MissionVisionCard
              key={card.title}
              {...card}
            />
          ))}
        </div>

      </Container>

    </Section>
  );
}