import { ArrowRight, MessageCircle } from "lucide-react";

import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function ContactHero() {
  return (
    <Section
      size="spacious"
      className="relative overflow-hidden border-b border-border bg-surface"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand/8 blur-[120px]" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/8 blur-[120px]" />
      </div>

      <Container className="relative z-10">

        <FadeIn> 
          <div className="mx-auto w-full max-w-7xl min-w-5xl flex flex-col items-center text-center ">
            {/* Badge */}

            <span
              className="
                inline-flex
                rounded-full
                border
                border-brand/20
                bg-brand/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-brand

              "
            >
              Contact
            </span>

            {/* Heading */}

            <h1
              className="
                mt-8
                text-5xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-text-primary
                sm:text-6xl
                lg:text-7xl
              "
            >
              <>
                Let's Build
                <span className="text-brand"> Healthier</span>
                <br />
                Spaces Together.
                </>
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-8
                w-full
                max-w-3xl
                items-center
                text-l
                p-4
                leading-8
                text-text-secondary
              "
            >
              Whether you're planning a new project, exploring our
              intelligent air quality solutions, or simply have a
              question, our team is here to help.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-12
                flex
                flex-col
                items-center
                justify-center
                gap-12
                sm:flex-row
              "
            >
              <Button size="lg" variant="primary">
                Get in Touch
                <ArrowRight
                  size={18}
                  className="ml-2"
                />
              </Button>

              <Button
                variant="secondary"
                size="lg"
              >
                <MessageCircle
                  size={18}
                  className="mr-2"
                />

                Live Support
              </Button>
            </div>

          </div>

        </FadeIn>

      </Container>
    </Section>
  );
}