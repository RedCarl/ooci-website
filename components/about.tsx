import { ArrowUpRight, Github, Mail } from "lucide-react"
import { getDictionary } from "@/lib/dictionary"
import { type Locale } from "@/lib/locale"
import { site } from "@/lib/site"

export function About({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)
  const about = dict.about

  return (
    <section id="about" className="relative px-4 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">{about.eyebrow}</p>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {about.title}
          </h2>

          <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-white/55 sm:text-[15px]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="text-white/40">{about.muted}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {about.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/45"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-[11px] text-white/40">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Github className="size-3.5" />
              github.com/RedCarl
              <ArrowUpRight className="size-3 opacity-50" />
            </a>
            <a
              href={`mailto:${site.author.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="size-3.5" />
              {site.author.email}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(60%_60%_at_60%_20%,rgba(120,200,170,0.10),transparent_70%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-8">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">
              {about.principlesLabel}
            </p>

            <div className="mt-6 space-y-6">
              {about.principles.map((item) => (
                <div key={item.index} className="flex gap-4">
                  <span className="mt-0.5 font-mono text-[11px] text-white/25">{item.index}</span>
                  <div>
                    <h3 className="text-sm font-medium text-white/85">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/40">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm leading-relaxed text-white/55">{about.quote}</p>
              <p className="mt-2 text-[10px] tracking-wider text-white/25">{about.quoteBy}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
