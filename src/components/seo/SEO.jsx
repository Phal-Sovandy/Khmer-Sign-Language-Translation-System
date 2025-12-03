import { useEffect } from "react";

/**
 * SEO Component for dynamic meta tags
 * Usage: <SEO title="Page Title" description="Page description" />
 */
export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
}) {
  const siteUrl = "https://khmer-sign-language-translation-sys.vercel.app";
  const defaultImage = `${siteUrl}/favicon.png`;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image || defaultImage;
  const fullTitle = title ? `KSLTS | ${title}` : "KSLTS";
  const fullDescription =
    description ||
    "An AI-powered web application that translates Khmer sign language gestures into readable text and speech in real-time. Built to support communication between signers and non-signers across Cambodia.";

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update or create property tags (for Open Graph)
    const updatePropertyTag = (property, content) => {
      updateMetaTag(property, content, "property");
    };

    // Primary meta tags
    updateMetaTag("title", fullTitle);
    updateMetaTag("description", fullDescription);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Open Graph tags
    updatePropertyTag("og:title", fullTitle);
    updatePropertyTag("og:description", fullDescription);
    updatePropertyTag("og:image", fullImage);
    updatePropertyTag("og:url", fullUrl);
    updatePropertyTag("og:type", type);

    // Twitter Card tags
    updatePropertyTag("twitter:card", "summary_large_image");
    updatePropertyTag("twitter:title", fullTitle);
    updatePropertyTag("twitter:description", fullDescription);
    updatePropertyTag("twitter:image", fullImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);
  }, [fullTitle, fullDescription, fullImage, fullUrl, type, keywords]);

  return null;
}
