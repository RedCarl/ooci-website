import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "../globals.css"
import { LocaleGuard } from "@/components/locale-guard"
import { buildJsonLd, buildMetadata, viewport } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata("en")

export { viewport }

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${GeistSans.className} font-sans antialiased`}>
        <LocaleGuard locale="en" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd("en")) }}
        />
      </body>
    </html>
  )
}
