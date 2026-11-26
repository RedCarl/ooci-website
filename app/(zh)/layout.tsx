import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "../globals.css"
import { LocaleGuard } from "@/components/locale-guard"
import { buildJsonLd, buildMetadata, viewport } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata("zh")

export { viewport }

export default function ZhRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="dark scroll-smooth">
      <body className={`${GeistSans.className} font-sans antialiased`}>
        <LocaleGuard locale="zh" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd("zh")) }}
        />
      </body>
    </html>
  )
}
