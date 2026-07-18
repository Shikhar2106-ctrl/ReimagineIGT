import SectionHeader from "@/components/common/SectionHeader";

import TeamCard from "./TeamCard";

import { leadershipContent } from "@/content/about";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Leadership() {
  return (
    <Section>

      <Container>

        <SectionHeader
          badge={leadershipContent.badge}
          title={leadershipContent.title}
          description={leadershipContent.description}
          align="center"
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {leadershipContent.members.map((member) => (
            <TeamCard
              key={member.name}
              {...member}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}