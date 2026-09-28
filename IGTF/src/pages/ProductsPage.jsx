import React from 'react';
import SEO from '../components/common/SEO';
import ProductsSection from '../components/sections/ProductsSection';
import InteriorAnatomySection from '../components/sections/InteriorAnatomySection';
import ShowcaseSection from '../components/sections/ShowcaseSection';
import FAQSection from '../components/sections/FAQSection';

export default function ProductsPage() {
  return (
    <>
      <SEO
        title="Air Quality Products & Interior Engineering | IntelliGreen CleanTech"
        description="Explore IntelliGreen's smart air quality product lineup including Concealed & Wall CTFAs units, Cross-Flow ERV Energy Recovery Ventilators, Active Needlepoint BPI, EAC Cleaners, and IAQ Sensors."
        keywords="CTFAs air purifier, ERV heat recovery, bipolar ionisation, EAC electronic air cleaner, IAQ smart sensor, clean air products"
      />
      <ProductsSection />
      <InteriorAnatomySection />
      <ShowcaseSection />
      <FAQSection />
    </>
  );
}
