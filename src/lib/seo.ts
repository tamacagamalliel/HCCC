import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  type = "website",
  publishedTime,
}: BuildMetadataInput = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : `${siteConfig.name} | ${siteConfig.shortName}`;
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(absoluteUrl("/")),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_PH",
      type,
      publishedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.legalName,
    alternateName: [siteConfig.name, siteConfig.shortName, "HCCCI"],
    url: absoluteUrl("/"),
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.street,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.province,
      postalCode: siteConfig.location.postalCode,
      addressCountry: "PH",
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.facebookCollege],
    description: siteConfig.description,
    logo: absoluteUrl("/images/logo.webp"),
    image: absoluteUrl("/images/logo.webp"),
  };
}
