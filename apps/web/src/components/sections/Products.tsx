import ProductCard from "@/components/common/ProductCard";
import SectionHeader from "@/components/common/SectionHeader";

import { productsContent } from "@/content/products";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Products() {
  return (
    <Section>

      <Container>

        <SectionHeader
          badge={productsContent.badge}
          title={productsContent.title}
          description={productsContent.description}
          align="center"
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {productsContent.items.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
            />
          ))}
        </div>

      </Container>

    </Section>
  );
}