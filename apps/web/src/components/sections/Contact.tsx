import ContactInfoCard from "@/components/common/ContactInfoCard";
import SectionHeader from "@/components/common/SectionHeader";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { contactContent } from "@/content/contact";

export default function Contact() {
  return (
    <Section>

      <Container>

        <SectionHeader
          badge={contactContent.badge}
          title={contactContent.title}
          description={contactContent.description}
          align="center"
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-6">
            {contactContent.details.map((item) => (
              <ContactInfoCard
                key={item.title}
                {...item}
              />
            ))}
          </div>

          {/* Right */}

          <Card>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-brand"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-brand"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-brand"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full resize-none rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-brand"
              />

              <Button size="lg">
                Send Message
              </Button>

            </form>

          </Card>

        </div>

      </Container>

    </Section>
  );
}