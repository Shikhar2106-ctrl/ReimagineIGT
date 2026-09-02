import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({
  title = 'IntelliGreen - CleanTech & Smart Air Quality Solutions',
  description = 'IntelliGreen delivers intelligent air purification, real-time IAQ monitoring, and sustainable clean-air solutions for commercial, healthcare, and industrial environments.',
  keywords = 'air purification, clean tech, indoor air quality, IAQ monitoring, HEPA filter, bipolar ionisation, electronic air cleaner, smart building',
  image = '/media/intelligreen-logo.png',
  schemaData = null,
}) {
  const location = useLocation();
  const currentUrl = typeof window !== 'undefined' ? `${window.location.origin}${location.pathname}` : '';

  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update or set meta tag
    const updateMetaTag = (name, content, attrName = 'name') => {
      let element = document.querySelector(`meta[${attrName}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    if (image) {
      updateMetaTag('og:image', image, 'property');
    }

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    if (image) {
      updateMetaTag('twitter:image', image);
    }

    // Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Update JSON-LD Schema
    let schemaScript = document.getElementById('json-ld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'IntelliGreen CleanTech',
      url: currentUrl,
      logo: `${window.location.origin}/media/intelligreen-logo.png`,
      description: description,
      sameAs: [
        'https://linkedin.com',
        'https://twitter.com',
      ],
    };

    schemaScript.textContent = JSON.stringify(schemaData || defaultSchema);
  }, [title, description, keywords, image, currentUrl, schemaData]);

  return null;
}
