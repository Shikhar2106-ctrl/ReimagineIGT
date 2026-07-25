
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import ProductCard from "@/components/common/ProductCard";
import SectionHeader from "@/components/common/SectionHeader";
import { productsContent } from "@/content/products";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Products() {
  const productImages = [
    "/images/hero/frame-1.png",
    "/images/hero/frame-4.png",
    "/images/hero/frame-5.png",
  ];
  return (
    <Section id="products" size="spacious" className="bg-linear-to-b from-slate-900 via-slate-50 to-mist-400">
      <Container>
        <FadeIn>
          <div className="flex min-h-[50vh]  justify-center py-16">
          <SectionHeader
            badge={productsContent.badge}
            title={productsContent.title}
            description={productsContent.description}
            align="center"
            className="mx-auto max-w-3xl py-8 lg:py-12"
          />
          </div>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productsContent.items.map((product, index) => (
            <StaggerItem key={product.title}>
              <ProductCard
                {...product}
                image={productImages[index]}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}





// import FadeIn from "@/components/motion/FadeIn";
// import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
// import ProductCard from "@/components/common/ProductCard";
// import SectionHeader from "@/components/common/SectionHeader";

// import { productsContent } from "@/content/products";

// import Container from "@/components/ui/Container";
// import Section from "@/components/ui/Section";

// export default function Products() {  
//   return (
//     <Section id="products" size="spacious" className="bg-surface-muted">
//       <Container>
//         <FadeIn>
//           <SectionHeader
//             badge={productsContent.badge}
//             title={productsContent.title}
//             description={productsContent.description}
//             align="center"
//             className="max-w-5xl"
//           />
//         </FadeIn>

//         <StaggerContainer className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-7">
//           {productsContent.items.map((product) => (
//             <StaggerItem key={product.title}>
//               <ProductCard {...product} />
//             </StaggerItem>
//           ))}
//         </StaggerContainer>
//       </Container>
//     </Section>
//   );
// }
