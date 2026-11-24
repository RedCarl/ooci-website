import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "CarlJoy",
    "技术与生活",
    "个人网站",
    "独立开发",
    "Liteshot",
    "OTP",
    "TinyMusic",
    "RustPro",
    "DeepSeek Harness",
  ],
  authors: [{ name: site.author.name, url: site.github }],
  creator: site.author.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#08090b",
  colorScheme: "dark",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.author.name,
      alternateName: site.author.handle,
      url: site.url,
      email: `mailto:${site.author.email}`,
      jobTitle: "独立开发者",
      sameAs: [site.github, site.bilibili],
      knowsAbout: ["iOS", "macOS", "SwiftUI", "Rust", "TypeScript", "Web"],
    },
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.description,
      inLanguage: "zh-CN",
      author: {
        "@type": "Person",
        name: site.author.name,
        alternateName: site.author.handle,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="dark scroll-smooth">
      <body className={`${GeistSans.className} font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
