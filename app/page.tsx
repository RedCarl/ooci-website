import Aurora from "@/components/Aurora"
import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#08090b]">
      <div className="fixed inset-0 -z-10">
        <Aurora
          colorStops={["#334155", "#475569", "#1e293b"]}
          amplitude={1.0}
          blend={0.55}
          speed={0.6}
        />
      </div>

      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_55%)]" />

      <div className="relative z-10">
        <SiteNav />
        <main>
          <Hero />
          <Work />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
