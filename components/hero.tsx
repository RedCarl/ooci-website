import Image from "next/image"
import { ArrowDown, ArrowUpRight, MapPin, Mail } from "lucide-react"
import { RotatingWord } from "./rotating-word"
import { getDictionary } from "@/lib/dictionary"
import { tr, type Locale } from "@/lib/locale"
import { site } from "@/lib/site"

const tones = ["bg-emerald-400", "bg-sky-400", "bg-violet-400", "bg-amber-300"]

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)
  const hero = dict.hero
  const isEnglish = locale === "en"

  const headlineClass = isEnglish
    ? "text-balance text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[3.3rem] md:text-[4.05rem]"
    : "text-balance text-[2.7rem] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-6xl md:text-[4.5rem]"

  return (
    <section className="relative flex min-h-0 items-start px-4 pb-16 pt-32 md:min-h-[100svh] md:items-center md:pt-36">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="animate-fade-in-hero">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] tracking-wide text-white/65 backdrop-blur-md">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
            {hero.badge}
          </div>

          <h1 className={headlineClass}>
            {hero.line1}
            <br />
            <span className="mt-3 inline-flex flex-wrap items-center gap-x-3 gap-y-2">
              <span>{hero.line2Prefix}</span>
              <RotatingWord
                words={hero.words}
                ariaLabel={hero.rotatingAria}
                width={hero.wordWidth}
              />
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
            {hero.intro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
            >
              {hero.ctaPrimary}
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={`mailto:${site.author.email}?subject=${encodeURIComponent(hero.mailSubject)}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm text-white/80 backdrop-blur-md transition-colors hover:bg-white/[0.08] hover:text-white"
            >
              <Mail className="size-4 text-white/50 transition-colors group-hover:text-white" />
              {hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/40">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              {tr(site.author.location, locale)}
            </span>
            <a href={site.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              {hero.socials.github}
            </a>
            <a href={site.bilibili} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              {hero.socials.bilibili}
            </a>
            <a href={`mailto:${site.author.email}`} className="transition-colors hover:text-white">
              {hero.socials.email}
            </a>
          </div>
        </div>

        <div className="relative hidden animate-fade-in-subheading lg:block">
          <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_30%,rgba(110,160,255,0.16),transparent_70%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="flex items-center gap-4">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <Image
                  src="/logo.png"
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 brightness-0 invert"
                />
              </div>
              <div className="min-w-0">
                <p className="text-lg font-semibold text-white">CarlJoy</p>
                <p className="mt-1 text-xs text-white/45">{hero.card.role}</p>
              </div>
              <span className="ml-auto shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-300">
                {hero.card.available}
              </span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/55">{hero.card.blurb}</p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                {hero.card.nowLabel}
              </p>
              <ul className="mt-3.5 space-y-3">
                {hero.card.now.map((label, index) => (
                  <li key={label} className="flex items-center gap-2.5 text-sm text-white/65">
                    <span className={`size-1.5 shrink-0 rounded-full ${tones[index % tones.length]}`} />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {hero.card.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5"
                >
                  <p className="text-xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-0.5 text-[11px] text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#work"
              className="mt-5 inline-flex items-center gap-1 text-xs text-white/40 transition-colors hover:text-white"
            >
              {hero.card.more}
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
