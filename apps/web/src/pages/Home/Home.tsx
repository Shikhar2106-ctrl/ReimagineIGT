import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Industries from "@/components/sections/Industries";
import Problem from "@/components/sections/Problem";
import Projects from "@/components/sections/Projects";
import Solutions from "@/components/sections/Solutions";
import Technology from "@/components/sections/Technology";
import Testimonials from "@/components/sections/Testimonials";
import TrustedBy from "@/components/sections/TrustedBy";
import Products from "@/components/sections/Products";
import Contact from "@/components/sections/Contact";


export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Problem />
      <Solutions />
      <Technology />
      <Products />
      <Industries />
      <Projects />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}