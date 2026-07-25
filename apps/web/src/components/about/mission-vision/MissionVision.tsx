import FadeIn from "@/components/motion/FadeIn";
import SectionHeader from "@/components/common/SectionHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import BentoCard from "./BentoCard";
import AICore from "./AICore";

import { missionVisionContent } from "@/content/misionVision";

export default function MissionVision() {
  const {
    badge,
    title,
    description,
    mission,
    vision,
    pillars,
  } = missionVisionContent;

  return (
    <Section
      size="spacious"
      className="relative overflow-hidden bg-surface-muted"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-brand/10 blur-[140px]" />

        <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-amber-50/10 blur-[140px]" />

      </div>

      <Container className="relative z-10">

        {/* Header */}

        {/* <FadeIn>

          <SectionHeader
            badge={badge}
            title={title}
            description={description}
            align="center"
            className="mx-auto max-w-4xl"
          />

        </FadeIn> */}

        {/* Bento Grid */}

        <div className="mt-20 grid auto-rows-[180px] gap-6 lg:grid-cols-6">

          {/* Mission */}

          <FadeIn className="lg:col-span-4 lg:row-span-2">

            <BentoCard
              title={mission.title}
              description={mission.description}
              icon={mission.icon}
              features={mission.features}
              large
            />

          </FadeIn>

          {/* AI Core */}

          {/* <FadeIn delay={0.1} className="lg:col-span-2 lg:row-span-2">

            <AICore />

          </FadeIn> */}

          {/* Pillar 1 */}

          <FadeIn
            delay={0.15}
            className="lg:col-span-2"
          >

            <BentoCard
              title={pillars[0].title}
              description={pillars[0].description}
              icon={pillars[0].icon}
              compact
            />

          </FadeIn>

          {/* Pillar 2 */}

          <FadeIn
            delay={0.2}
            className="lg:col-span-2"
          >

            <BentoCard
              title={pillars[1].title}
              description={pillars[1].description}
              icon={pillars[1].icon}
              compact
            />

          </FadeIn>

          {/* Vision */}

          <FadeIn
            delay={0.25}
            className="lg:col-span-4"
          >

            <BentoCard
              title={vision.title}
              description={vision.description}
              icon={vision.icon}
              features={vision.features}
              horizontal
            />

          </FadeIn>

        </div>

      </Container>
    </Section>
  );
}