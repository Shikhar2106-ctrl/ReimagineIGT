import React from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../components/sections/HeroSection';
import UrbanAirRealitySection from '../components/sections/UrbanAirRealitySection';
import InteriorAnatomySection from '../components/sections/InteriorAnatomySection';
import ProductsSection from '../components/sections/ProductsSection';
import LatestCarouselSection from '../components/sections/LatestCarouselSection';
import ClientsSection from '../components/sections/ClientsSection';
import ScrollReveal from '../components/common/ScrollReveal';

export default function Home() {
  return (
    <>
      <SEO
        title="IntelliGreen | CleanTech Air Purification, TFAS, ERV & IAQ Solutions"
        description="IntelliGreen delivers intelligent treated fresh air (TFAS), cross-flow ERV heat recovery, active needlepoint bi-polar ionisation, and real-time IAQ monitoring for modern spaces."
        keywords="IntelliGreen, CleanTech, TFAS fresh air, ERV heat recovery, indoor air quality, IAQ sensor, HEPA filtration, bipolar ionisation, electronic air cleaner"
      />
      
      {/* Hero section */}
      <HeroSection />

      {/* Modern Urban Air Reality Comparison (Smog Infiltration vs Positive Pressure) */}
      <ScrollReveal>
        <UrbanAirRealitySection />
      </ScrollReveal>

      {/* Interactive 6-Stage Interior Architecture & Hardware Anatomy */}
      <ScrollReveal delay={0.05}>
        <InteriorAnatomySection />
      </ScrollReveal>

      {/* Product Ecosystem Grid */}
      <ScrollReveal delay={0.1}>
        <ProductsSection />
      </ScrollReveal>

      <ScrollReveal delay={0.12}>
        <LatestCarouselSection />
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <ClientsSection />
      </ScrollReveal>
    </>
  );
}
