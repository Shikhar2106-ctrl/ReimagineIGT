import SectionHeader from "@/components/common/SectionHeader";

import CertificationCard from "./CertificationCard";
import PartnerCard from "./PartnerCard";

import { certificationsContent } from "@/content/about";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Certifications() {
  return (
    <Section className="bg-surface-muted">

      <Container>

        <SectionHeader
          badge={certificationsContent.badge}
          title={certificationsContent.title}
          description={certificationsContent.description}
          align="center"
        />

        {/* Certifications */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {certificationsContent.certifications.map((item) => (
            <CertificationCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

        {/* Partners */}

        <h2 className="mt-24 text-center text-3xl font-bold text-text-primary">
          Technology Partners
        </h2>

        <div className="mt-12 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

          {certificationsContent.partners.map((partner) => (
            <PartnerCard
              key={partner.name}
              {...partner}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}