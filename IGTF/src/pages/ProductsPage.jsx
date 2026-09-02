import React from 'react';
import SEO from '../components/common/SEO';
import ProductsSection from '../components/sections/ProductsSection';
import ShowcaseSection from '../components/sections/ShowcaseSection';
import FAQSection from '../components/sections/FAQSection';

export default function ProductsPage() {
  return (
    <>
      <SEO
        title="Air Quality Products & Systems | IntelliGreen CleanTech"
        description="Explore IntelliGreen's smart air quality product lineup including CTFA wall purifiers, Active Bipolar Ionisation, EAC Electronic Air Cleaners, IAQ Sensors, and Cloud AI."
        keywords="CTFA air purifier, bipolar ionisation, EAC electronic air cleaner, IAQ smart sensor, clean air products"
      />
      <ProductsSection />
      <ShowcaseSection />
      <FAQSection />
    </>
  );
}
