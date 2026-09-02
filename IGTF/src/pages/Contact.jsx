import React from 'react';
import SEO from '../components/common/SEO';
import ContactHeroSection from '../components/sections/ContactHeroSection';
import ContactFormSection from '../components/sections/ContactFormSection';
import FAQSection from '../components/sections/FAQSection';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us & Book Audit | IntelliGreen CleanTech"
        description="Book a free on-site air quality audit or get in touch with an IntelliGreen specialist for custom enterprise clean air solutions."
        keywords="Contact IntelliGreen, air quality audit, IAQ consultation, clean air inquiry"
      />
      <ContactHeroSection />
      <ContactFormSection />
      <FAQSection />
    </>
  );
}
