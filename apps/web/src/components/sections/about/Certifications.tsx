import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import SectionHeader from "@/components/common/SectionHeader";

import CertificationCard from "./CertificationCard";
import PartnerCard from "./PartnerCard";

import { certificationsContent } from "@/content/about";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Certifications() {
  return (
    <Section size="spacious" className="bg-surface-muted">
      <Container>
        <FadeIn>
          <SectionHeader
            badge={certificationsContent.badge}
            title={certificationsContent.title}
            description={certificationsContent.description}
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3 lg:mt-20">
          {certificationsContent.certifications.map((item) => (
            <StaggerItem key={item.title}>
              <CertificationCard {...item} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-20 lg:mt-28">
          <h2 className="text-center text-2xl font-bold text-text-primary sm:text-3xl">
            Technology Partners
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {certificationsContent.partners.map((partner) => (
            <StaggerItem key={partner.name}>
              <PartnerCard {...partner} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
