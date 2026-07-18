import SectionHeader from "@/components/common/SectionHeader";

import CoreValueCard from "./CoreValueCard";

import { coreValuesContent } from "@/content/about";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CoreValues() {
  return (
    <Section>

      <Container>

        <SectionHeader
          badge={coreValuesContent.badge}
          title={coreValuesContent.title}
          description={coreValuesContent.description}
          align="center"
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {coreValuesContent.values.map((value) => (
            <CoreValueCard
              key={value.title}
              {...value}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}