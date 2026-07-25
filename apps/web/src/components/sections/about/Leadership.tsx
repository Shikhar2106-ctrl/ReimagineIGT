import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import SectionHeader from "@/components/common/SectionHeader";

import TeamCard from "./TeamCard";

import { leadershipContent } from "@/content/about";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Leadership() {
  return (
    <Section size="spacious">
      <Container>
        <FadeIn>
          <SectionHeader
            badge={leadershipContent.badge}
            title={leadershipContent.title}
            description={leadershipContent.description}
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:mt-20 xl:grid-cols-4">
          {leadershipContent.members.map((member) => (
            <StaggerItem key={member.name}>
              <TeamCard {...member} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
