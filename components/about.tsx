import { ArrowUpRight, Github, Mail } from "lucide-react"
import { site } from "@/lib/site"

const principles = [
  {
    index: "01",
    title: "先能用，再好用",
    description: "功能不做半成品，第一版就要能解决一个具体问题。",
  },
  {
    index: "02",
    title: "数据留在用户手里",
    description: "能本地就本地，能自己存就自己存；不靠收集数据活着。",
  },
  {
    index: "03",
    title: "文档和上架也算产品",
    description: "写清楚怎么用、怎么反馈，比多加一个功能更重要。",
  },
]

const stack = [
  "Swift / SwiftUI",
  "TypeScript / React",
  "Rust / Tauri",
  "Node.js",
  "PostgreSQL",
  "AppKit",
]

export function About() {
  return (
    <section id="about" className="relative px-4 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">关于 / ABOUT</p>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            写代码，也写点生活。
          </h2>

          <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-white/55 sm:text-[15px]">
            <p>
              我是 CarlJoy，独立开发者，常驻湖北。做过 Minecraft 服务器、Rust
              游戏工具和几个上架的 App。
            </p>
            <p>
              现在主要写 Swift 和 TypeScript，偶尔写 Rust。喜欢把一件事做完整：界面、后端、上架、文档，都自己来。
            </p>
            <p className="text-white/40">
              这个网站用来放我做的东西，偶尔也写点技术和生活。
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => (
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
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">做事方式</p>

            <div className="mt-6 space-y-6">
              {principles.map((item) => (
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
              <p className="text-sm leading-relaxed text-white/55">
                “把复杂留给自己，把简单留给用的人。”
              </p>
              <p className="mt-2 text-[10px] tracking-wider text-white/25">— CarlJoy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
