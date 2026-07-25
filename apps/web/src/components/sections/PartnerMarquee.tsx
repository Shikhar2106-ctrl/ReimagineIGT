import { trustedBy } from "@/constants/trustedBy";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const partners = [...trustedBy, ...trustedBy];

export default function PartnerMarquee() {
  return (
    <Section id="partners" size="compact" className="overflow-hidden border-y border-border bg-surface">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.28em] text-text-muted sm:mb-10">
          Built for healthier environments
        </p>
      </Container>

      <div className="partner-marquee" aria-label="Industries IntelliGreen serves">
        <div className="partner-marquee__track">
          {partners.map((partner, index) => (
            <span
              key={`${partner}-${index}`}
              aria-hidden={index >= trustedBy.length}
              className="flex h-16 shrink-0 items-center rounded-full border border-border-subtle bg-surface-card px-7 text-sm font-medium text-text-secondary sm:h-20 sm:px-10 sm:text-base"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
