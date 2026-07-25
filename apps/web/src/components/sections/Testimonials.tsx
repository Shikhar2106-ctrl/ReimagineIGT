import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import TestimonialCard from "@/components/common/TestimonialCard";
import SectionHeader from "@/components/common/SectionHeader";

import { testimonialsContent } from "@/content/testimonials";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Testimonials() {
  return (
    <Section size="spacious">
      <Container>
        <FadeIn>
          <SectionHeader
            badge={testimonialsContent.badge}
            title={testimonialsContent.title}
            description={testimonialsContent.description}
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {testimonialsContent.items.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <TestimonialCard {...testimonial} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
