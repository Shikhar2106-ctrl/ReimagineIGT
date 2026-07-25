import {
  ArrowUpRight,
  Building2,
  Clock3,
  MapPin,
} from "lucide-react";

import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function OfficeLocation() {
  return (
    <Section
      size="spacious"
      className="bg-surface-muted"
    >
      <Container>

        <FadeIn>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">

            {/* Left */}

            <div>

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                Our Office
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-primary lg:text-5xl">
                Visit Our Headquarters
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-text-secondary">
                We'd love to meet you. Whether you're planning a new
                project or looking to learn more about IntelliGreen,
                our team is ready to welcome you.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-start gap-4">

                  <div className="rounded-2xl bg-brand/10 p-3 text-brand">
                    <MapPin size={22} />
                  </div>

                  <div>

                    <p className="font-semibold text-text-primary">
                      Address
                    </p>

                    <p className="mt-2 leading-7 text-text-secondary">
                      IntelliGreen Technologies
                      <br />
                      Bhopal, Madhya Pradesh
                      <br />
                      India
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="rounded-2xl bg-brand/10 p-3 text-brand">
                    <Clock3 size={22} />
                  </div>

                  <div>

                    <p className="font-semibold text-text-primary">
                      Office Hours
                    </p>

                    <p className="mt-2 text-text-secondary">
                      Monday – Friday
                      <br />
                      9:00 AM – 6:00 PM
                    </p>

                  </div>

                </div>

              </div>

              <Button
                size="lg"
                className="mt-12"
              >
                View on Google Maps

                <ArrowUpRight
                  className="ml-2"
                  size={18}
                />

              </Button>

            </div>

            {/* Right */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-border
                bg-white
                p-8
                shadow-sm
              "
            >

              {/* Background Glow */}

              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/10 blur-[90px]" />

              <div className="relative z-10 flex h-[420px] flex-col justify-between">

                {/* Building */}

                <div className="flex justify-center">

                  <div
                    className="
                      flex
                      h-28
                      w-28
                      items-center
                      justify-center
                      rounded-full
                      bg-brand/10
                      text-brand
                    "
                  >
                    <Building2 size={52} />
                  </div>

                </div>

                {/* Card */}

                <div
                  className="
                    rounded-3xl
                    border
                    border-border
                    bg-surface
                    p-8
                  "
                >

                  <p className="text-sm uppercase tracking-[0.25em] text-brand">
                    Headquarters
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-text-primary">
                    IntelliGreen Office
                  </h3>

                  <p className="mt-4 leading-8 text-text-secondary">
                    Our headquarters serves as the center for
                    innovation, engineering, and customer success,
                    bringing together expertise in AI-powered indoor
                    environmental solutions.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </FadeIn>

      </Container>
    </Section>
  );
}