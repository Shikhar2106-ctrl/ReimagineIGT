import { Leaf } from "lucide-react";

import StoryHighlight from "./StoryHighlight";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { storyContent } from "@/content/about";

export default function OurStory() {
  return (
    <Section>

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <Badge>
              {storyContent.badge}
            </Badge>

            <h2 className="mt-6 text-4xl font-bold text-text-primary lg:text-5xl">
              {storyContent.title}
            </h2>

            {storyContent.description.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 leading-8 text-text-secondary"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {storyContent.highlights.map((item) => (
                <StoryHighlight
                  key={item}
                  text={item}
                />
              ))}

            </div>

          </div>

          {/* Right */}

          <Card className="flex min-h-[500px] items-center justify-center bg-gradient-to-br from-brand/10 via-cyan-500/10 to-teal-500/10">

            <div className="text-center">

              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-brand/20">
                <Leaf
                  size={64}
                  className="text-brand"
                />
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

        </div>

      </Container>

    </Section>
  );
}