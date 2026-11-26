import type { Metadata, Viewport } from "next"
import { getDictionary } from "@/lib/dictionary"
import { localeInfo, otherLocale, type Locale } from "@/lib/locale"
import { site } from "@/lib/site"

export const viewport: Viewport = {
  themeColor: "#08090b",
  colorScheme: "dark",
}

export function buildMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale)
  const info = localeInfo[locale]
  const other = localeInfo[otherLocale(locale)]
  const url = site.url + info.path

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.title,
      template: `%s · ${site.author.name}`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    applicationName: dict.nav.brand,
    authors: [{ name: site.author.name, url: site.github }],
    creator: site.author.name,
    alternates: {
      canonical: url,
      languages: {
        "zh-CN": site.url + "/",
        en: site.url + "/en/",
        "x-default": site.url + "/",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url,
      siteName: dict.nav.brand,
      locale: info.ogLocale,
      alternateLocale: [other.ogLocale],
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: dict.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/og.png"],
    },
    icons: {
      icon: "/icon.png",
      apple: "/icon.png",
    },
  }
}

export function buildJsonLd(locale: Locale) {
  const dict = getDictionary(locale)
  const info = localeInfo[locale]

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: site.author.name,
        alternateName: site.author.handle,
        url: site.url,
        email: `mailto:${site.author.email}`,
        jobTitle: dict.meta.jobTitle,
        sameAs: [site.github, site.bilibili],
        knowsAbout: dict.meta.knowsAbout,
      },
      {
        "@type": "WebSite",
        name: dict.nav.brand,
        url: site.url + info.path,
        description: dict.meta.description,
        inLanguage: info.htmlLang,
        author: {
          "@type": "Person",
          name: site.author.name,
          alternateName: site.author.handle,
        },
      },
    ],
  }
}
