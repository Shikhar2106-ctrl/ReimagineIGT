import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { trustedBy } from "@/constants/trustedBy";
import Card from "@/components/ui/Card";

export default function TrustedBy() {
  return (
    <Section size="compact" className="border-y border-border bg-surface-muted">
      <Container>
        <FadeIn>
          <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.35em] text-text-muted">
            Trusted by organizations focused on healthier spaces
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {trustedBy.map((item) => (
            <StaggerItem key={item}>
              <Card
                padding="md"
                hover={false}
                className="flex h-20 items-center justify-center border-border-subtle bg-surface-card/50 text-sm font-medium text-text-secondary"
              >
                {item}
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
