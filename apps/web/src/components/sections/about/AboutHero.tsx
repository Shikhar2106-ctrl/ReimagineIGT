import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { aboutContent } from "@/content/about";

export default function AboutHero() {
  const { hero } = aboutContent;

  return (
    <Section
      size="spacious"
      className="overflow-hidden border-b border-border bg-surface-muted pt-28 sm:pt-32"
    >
      <Container size="wide">
        <div className="flex justify-center">
          {/* <FadeIn className="mx-auto w-full max-w-4xl text-center justify-center">
            <Badge>{hero.badge}</Badge>

            <h1 className="mt-8 text-balance border-2 border-red-500 text-4xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-7xl">
              {hero.title}
            </h1>

            <div className="mx-auto mt-8 max-w-3xl">
              <p className="text-lg leading-8 text-text-secondary border-2  border-red-500  sm:text-xl">
                {hero.description}
              </p>
            </div>
            

            <div className="mt-12 flex flex-col border-2 border-red-500 justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Our Technology
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </div>
          </FadeIn> */}
          <FadeIn className="mx-auto flex p-4 max-w-5xl flex-col items-center text-center">
            <Badge>{hero.badge}</Badge>

            <h1 className="mt-8 max-w-5xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-7xl">
              {hero.title}
            </h1>

            <p className="mt-8 max-w-3xl p-3 text-lg leading-8 text-text-secondary sm:text-xl">
              {hero.description}
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Our Technology
              </Button>

              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </FadeIn>
        </div>
        

        <StaggerContainer className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-12 md:mt-24 md:grid-cols-4">
          {hero.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold text-accent sm:text-4xl lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-text-muted">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
