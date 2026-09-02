import React from 'react';
import SEO from '../components/common/SEO';
import ClientsSection from '../components/sections/ClientsSection';
import LatestCarouselSection from '../components/sections/LatestCarouselSection';
import ClientGridSection from '../components/sections/ClientGridSection';

export default function ClientsPage() {
  return (
    <>
      <SEO
        title="Clients & Case Studies | IntelliGreen CleanTech"
        description="Trusted by over 500+ commercial, educational, and medical spaces. Read testimonials, explore our client network, and discover success stories."
        keywords="IntelliGreen clients, case studies, air quality testimonials, enterprise IAQ feedback, client logos"
      />
      <ClientsSection />
      <LatestCarouselSection />
      <ClientGridSection />
    </>
  );
}
