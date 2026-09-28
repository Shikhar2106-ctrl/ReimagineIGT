import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAssetUrl } from '../../utils/assetHelper';

export default function SEO({
  title = 'IntelliGreen Technologies | CleanTech Air Purification, CTFAs, ERV & Smart IAQ Systems',
  description = 'IntelliGreen Technologies delivers intelligent air purification, Wall & Ceiling CTFAs units, Cross-Flow ERV energy recovery, UL 2998 Zero-Ozone Bipolar Ionisation, and AWS IoT IAQ monitoring.',
  keywords = 'IntelliGreen Technologies, air purification, clean tech, indoor air quality, IAQ monitoring, Wall Mounted CTFA, CTFAs, ERV, bipolar ionisation, electronic air cleaner',
  image = '/media/intelligreen-logo.png',
  schemaData = null,
}) {
  const location = useLocation();
  const resolvedImage = getAssetUrl(image);
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
    if (resolvedImage) {
      updateMetaTag('og:image', resolvedImage, 'property');
    }

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    if (resolvedImage) {
      updateMetaTag('twitter:image', resolvedImage);
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
      name: 'IntelliGreen Technologies Private Limited',
      url: currentUrl,
      logo: `${window.location.origin}${getAssetUrl('/media/intelligreen-logo.png')}`,
      description: description,
      sameAs: [
        'https://linkedin.com',
        'https://twitter.com',
      ],
    };

    schemaScript.textContent = JSON.stringify(schemaData || defaultSchema);
  }, [title, description, keywords, resolvedImage, currentUrl, schemaData]);

  return null;
}
