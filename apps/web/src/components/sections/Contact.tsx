import FadeIn from "@/components/motion/FadeIn";
import ContactInfoCard from "@/components/common/ContactInfoCard";
import SectionHeader from "@/components/common/SectionHeader";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { contactContent } from "@/content/contact";

export default function Contact() {
  return (
    <Section size="spacious" className="bg-surface-muted">
      <Container>
        <FadeIn>
          <SectionHeader
            badge={contactContent.badge}
            title={contactContent.title}
            description={contactContent.description}
            align="center"
          />
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="space-y-6">
              {contactContent.details.map((item) => (
                <ContactInfoCard key={item.title} {...item} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} direction="left">
            <Card className="border-border-subtle bg-surface-card">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent"
                />

                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent"
                />

                <Button size="lg">Send Message</Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
