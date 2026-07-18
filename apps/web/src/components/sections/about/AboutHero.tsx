import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { aboutContent } from "@/content/about";

export default function AboutHero() {
  const { hero } = aboutContent;

  return (
    <Section className="pt-32">

      <Container>

        <div className="mx-auto max-w-5xl text-center">

          <Badge>
            {hero.badge}
          </Badge>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-text-primary lg:text-7xl">
            {hero.title}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-text-secondary">
            {hero.description}
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">
              Our Technology
            </Button>

            <Button
              variant="secondary"
              size="lg"
            >
              Contact Us
            </Button>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-4">

            {hero.stats.map((stat) => (
              <div key={stat.label}>

                <h2 className="text-4xl font-bold text-brand">
                  {stat.value}
                </h2>

                <p className="mt-2 text-text-secondary">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </Container>

    </Section>
  );
}