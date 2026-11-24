import Image from "next/image"
import { ArrowDown, ArrowUpRight, MapPin, Mail } from "lucide-react"
import { RotatingWord } from "./rotating-word"
import { site } from "@/lib/site"

const current = [
  { label: "维护 Liteshot 与 RustPro", tone: "bg-emerald-400" },
  { label: "OTP、TinyMusic iOS 已上架", tone: "bg-sky-400" },
  { label: "照片整理 即将上架", tone: "bg-violet-400" },
  { label: "折腾 DeepSeek Harness 插件", tone: "bg-amber-300" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-0 items-start px-4 pb-16 pt-32 md:min-h-[100svh] md:items-center md:pt-36">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="animate-fade-in-hero">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] tracking-wide text-white/65 backdrop-blur-md">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
            技术与生活 · CarlJoy 的个人网站
          </div>

          <h1 className="text-balance text-[2.7rem] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-6xl md:text-[4.5rem]">
            把想法做成
            <br />
            <span className="mt-3 inline-flex flex-wrap items-center gap-x-3 gap-y-2">
              <span>能用的</span>
              <RotatingWord />
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
            我是 CarlJoy，独立开发者。做 iOS、macOS 与桌面应用，也维护 Rust
            游戏工具和 DeepSeek Harness 插件。
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
            >
              看看作品
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={`mailto:${site.author.email}?subject=定制开发咨询`}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm text-white/80 backdrop-blur-md transition-colors hover:bg-white/[0.08] hover:text-white"
            >
              <Mail className="size-4 text-white/50 transition-colors group-hover:text-white" />
              聊聊合作
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/40">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              {site.author.location}
            </span>
            <a href={site.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              GitHub
            </a>
            <a href={site.bilibili} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              哔哩哔哩
            </a>
            <a href={`mailto:${site.author.email}`} className="transition-colors hover:text-white">
              邮件
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
                <p className="mt-1 text-xs text-white/45">独立开发者 · iOS / macOS / Rust</p>
              </div>
              <span className="ml-auto shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-300">
                可合作
              </span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/55">
              喜欢把一件事做完整：从界面、后端，到上架和文档。
            </p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">现在</p>
              <ul className="mt-3.5 space-y-3">
                {current.map((item) => (
                  <li key={item.label} className="flex items-center gap-2.5 text-sm text-white/65">
                    <span className={`size-1.5 shrink-0 rounded-full ${item.tone}`} />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
                <p className="text-xl font-semibold text-white">7</p>
                <p className="mt-0.5 text-[11px] text-white/40">个产品</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
                <p className="text-xl font-semibold text-white">4</p>
                <p className="mt-0.5 text-[11px] text-white/40">个 DSH 插件</p>
              </div>
            </div>

            <a
              href="#work"
              className="mt-5 inline-flex items-center gap-1 text-xs text-white/40 transition-colors hover:text-white"
            >
              看完整列表
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
