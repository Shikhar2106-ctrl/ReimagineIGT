import { Leaf } from "lucide-react";

import FadeIn from "@/components/motion/FadeIn";
import StoryHighlight from "./StoryHighlight";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { storyContent } from "@/content/about";

export default function OurStory() {
  return (
    <Section size="spacious">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <FadeIn>
            <Badge>{storyContent.badge}</Badge>

            <h2 className="mt-8 text-balance text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              {storyContent.title}
            </h2>

            {storyContent.description.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-lg leading-8 text-text-secondary"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {storyContent.highlights.map((item) => (
                <StoryHighlight key={item} text={item} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12} direction="left">
            <Card className="flex min-h-80 items-center justify-center border-accent/10 bg-linear-to-br from-brand/10 via-accent/5 to-surface-card sm:min-h-[420px] lg:min-h-[520px]">
              <div className="text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-accent/15 glow-accent">
                  <Leaf size={64} className="text-accent" />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-text-primary">
                  Intelligent Sustainability
                </h3>

                <p className="mx-auto mt-4 max-w-sm text-text-secondary">
                  Combining AI, IoT, and environmental science to create healthier,
                  smarter, and more sustainable indoor spaces.
                </p>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
