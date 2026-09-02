import React from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../components/sections/HeroSection';
import ProductsSection from '../components/sections/ProductsSection';
import LatestCarouselSection from '../components/sections/LatestCarouselSection';
import ClientsSection from '../components/sections/ClientsSection';
import ScrollReveal from '../components/common/ScrollReveal';

export default function Home() {
  return (
    <>
      <SEO
        title="IntelliGreen | CleanTech Air Purification & IAQ Solutions"
        description="IntelliGreen delivers intelligent air purification, real-time IAQ monitoring, bipolar ionisation, and sustainable clean-air technology for commercial & healthcare spaces."
        keywords="IntelliGreen, CleanTech, air purifier, indoor air quality, IAQ sensor, HEPA filtration, bipolar ionisation, electronic air cleaner"
      />
      
      {/* Hero section */}
      <HeroSection />

      {/* Lazy scroll reveal sections */}
      <ScrollReveal>
        <ProductsSection />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <LatestCarouselSection />
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <ClientsSection />
      </ScrollReveal>
    </>
  );
}
