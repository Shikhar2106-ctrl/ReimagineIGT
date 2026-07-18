import { ArrowRight, CheckCircle2 } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import HeroIllustration from "@/components/illustrations/HeroIllustration";

import { heroContent } from "@/content/hero";


export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-10 lg:pt-20">
      <div className="absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-teal-100/40 blur-3xl" />
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

           <Badge>
                {heroContent.badge}
           </Badge>

            <Heading className="mt-8">
            {heroContent.title.map((line) => (
                <span key={line}>
                {line}
                <br />
                </span>
            ))}
            </Heading>

            <Text className="mt-8 max-w-xl">
                {heroContent.description}
            </Text>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button variant="primary" size="lg">
                {heroContent.primaryCTA}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="gap-2"
            >
                {heroContent.secondaryCTA}  
                <ArrowRight size={18} />
            </Button>

            </div>

            <div className="mt-12 space-y-4">

              {heroContent.features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-green-600"
                  />

                  <span className="text-slate-700">
                    {feature}
                  </span>

                </div>

              ))}

              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">

                {heroContent.stats.map((stat) => (

                    <div key={stat.label}>

                    <h3 className="text-3xl font-bold text-slate-900">
                        {stat.value}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        {stat.label}
                    </p>

                    </div>

                ))}

                </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative">
            <HeroIllustration />
          </div>

        </div>
      </Container>
    </Section>
  );
}