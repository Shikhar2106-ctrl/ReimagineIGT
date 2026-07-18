import TestimonialCard from "@/components/common/TestimonialCard";
import SectionHeader from "@/components/common/SectionHeader";

import { testimonialsContent } from "@/content/testimonials";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Testimonials() {
  return (
    <Section>

      <Container>

        <SectionHeader
          badge={testimonialsContent.badge}
          title={testimonialsContent.title}
          description={testimonialsContent.description}
          align="center"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonialsContent.items.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}