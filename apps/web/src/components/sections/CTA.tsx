import { ArrowRight, Download } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { ctaContent } from "@/content/cta";

export default function CTA() {
  return (
    <Section className="overflow-hidden">
      <Container>

        <div
          className="
          relative
          overflow-hidden
          rounded-panel
          bg-linear-to-br
          from-brand
          via-teal-600
          to-cyan-600
          px-8
          py-20
          text-center
          text-white
          lg:px-20
        "
        >
          {/* Background Glow */}

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">

            <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight lg:text-6xl">
              {ctaContent.title}
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80">
              {ctaContent.description}
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

              <Button
                size="lg"
                className="bg-white text-brand hover:bg-slate-100"
              >
                {ctaContent.primaryButton}

                <ArrowRight className="ml-2" size={18} />
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="border border-white/30 text-white hover:bg-white/10"
              >
                {ctaContent.secondaryButton}

                <Download className="ml-2" size={18} />
              </Button>

            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}