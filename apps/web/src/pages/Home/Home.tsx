import Showcase from "@/components/showcase/Showcase";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import LatestCarousel from "@/components/sections/LatestCarousel";
import ScrollToneStatement from "@/components/sections/ScrollToneStatement";
import WebElementsSection from "@/components/sections/WebElementsSection";
import Clients from "@/components/sections/Clients"

export default function Home() {
  return (
    <main className="bg-surface">
      <Hero />
      <ScrollToneStatement />
      <WebElementsSection />
      <LatestCarousel />
      <Products />

      <Showcase/>
      <Clients/>
      <Footer />
    </main>
  );
}
