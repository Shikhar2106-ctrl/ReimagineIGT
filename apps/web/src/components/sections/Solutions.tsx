import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import SectionHeader from "@/components/common/SectionHeader";
import SolutionCard from "@/components/common/SolutionCard";

import { solutionsContent } from "@/content/solutions";

export default function Solutions() {
  return (
    <Section>

      <Container>

        <SectionHeader
          badge={solutionsContent.badge}
          title={solutionsContent.title}
          description={solutionsContent.description}
          align="center"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {solutionsContent.items.map((item) => (
            <SolutionCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}