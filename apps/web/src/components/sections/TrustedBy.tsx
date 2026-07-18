import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { trustedBy } from "@/constants/trustedBy";
import Card from "@/components/ui/Card";

export default function TrustedBy() {
  return (
    <Section className="py-12">
      <Container>

        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Trusted by organizations focused on healthier spaces
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">

          {trustedBy.map((item) => (
            <Card
                padding="md"
                className="flex h-20 items-center justify-center"
            >
                {item}
            </Card>
          ))}

        </div>

      </Container>
    </Section>
  );
}