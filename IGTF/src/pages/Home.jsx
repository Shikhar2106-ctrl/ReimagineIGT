import React from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../components/sections/HeroSection';
import BlueprintToFreshAirSection from '../components/sections/BlueprintToFreshAirSection';
import UrbanAirRealitySection from '../components/sections/UrbanAirRealitySection';
import InteriorAnatomySection from '../components/sections/InteriorAnatomySection';
import LatestCarouselSection from '../components/sections/LatestCarouselSection';
import ClientsSection from '../components/sections/ClientsSection';
import ScrollReveal from '../components/common/ScrollReveal';

export default function Home() {
  return (
    <>
      <SEO
        title="IntelliGreen | CleanTech Air Purification, CTFAs, ERV & IAQ Solutions"
        description="IntelliGreen delivers intelligent treated fresh air (CTFAs), cross-flow ERV heat recovery, active needlepoint bi-polar ionisation, and real-time IAQ monitoring for modern spaces."
        keywords="IntelliGreen, CleanTech, CTFAs fresh air, ERV heat recovery, indoor air quality, IAQ sensor, HEPA filtration, bipolar ionisation, electronic air cleaner"
      />
      
      {/* Hero section */}
      <HeroSection />

      {/* Scroll-Driven 3D Blueprint -> Solid Product -> Dirty Air Filtration -> Fresh Air Output */}
      <BlueprintToFreshAirSection />

      {/* Modern Urban Air Reality Comparison (Smog Infiltration vs Positive Pressure) */}
      <ScrollReveal>
        <UrbanAirRealitySection />
      </ScrollReveal>

      {/* Interactive 6-Stage Interior Architecture & Hardware Anatomy */}
      <ScrollReveal delay={0.05}>
        <InteriorAnatomySection />
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
