import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Ooci Studio - 技术工作室",
  description:
    "Ooci 工作室 - 专注于 Minecraft 服务器开发运营、Web 应用开发和后端服务。6年经验,超过2万玩家的信赖之选。",
  keywords: ["Ooci", "Minecraft", "服务器开发", "Bukkit", "PaperMC", "Fabric", "Web开发", "小程序开发"],
  openGraph: {
    title: "Ooci Studio - 技术工作室",
    description: "专注于 Minecraft 服务器开发运营、Web 应用开发和后端服务",
    url: "https://ooci.co",
    siteName: "Ooci Studio",
    locale: "zh_CN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <NavigationTransition />
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  )
}
