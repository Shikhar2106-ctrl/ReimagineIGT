import { CheckCircle2 } from "lucide-react";

import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import StatCard from "@/components/ui/StatCard";
import SectionHeader from "@/components/common/SectionHeader";

import { problemContent } from "@/content/problem";

export default function Problem() {
  return (
    <Section id="technology" size="spacious">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <SectionHeader
              badge={problemContent.badge}
              title={problemContent.title}
              description={problemContent.description}
            />

            <div className="mt-10 space-y-4">
              {problemContent.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={20} />
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {problemContent.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <StatCard value={stat.value} label={stat.label} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  );
}
