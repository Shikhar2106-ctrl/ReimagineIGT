import IndustryCard from "@/components/common/IndustryCard";
import SectionHeader from "@/components/common/SectionHeader";

import { industriesContent } from "@/content/industries";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Industries() {
  return (
    <Section>

      <Container>

        <SectionHeader
          badge={industriesContent.badge}
          title={industriesContent.title}
          description={industriesContent.description}
          align="center"
        />

        <div className="mt-20 grid auto-rows-45 gap-6 md:grid-cols-4">

          {industriesContent.items.map((industry) => (
            <IndustryCard
              key={industry.title}
              {...industry}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}