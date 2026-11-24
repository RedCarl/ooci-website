import {
  ArrowUpRight,
  Clock3,
  Github,
  Globe,
  Plug,
  RefreshCw,
  Server,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react"
import { apps, dshPlugins, mhub, type DshPlugin, type Product, type ProductGroup, type ProductLink } from "@/lib/site"

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.05 12.54c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.84 3.34-.84 1.56 0 2 .84 3.36.81 1.39-.02 2.27-1.27 3.12-2.52.98-1.44 1.39-2.84 1.41-2.91-.03-.01-2.7-1.04-2.73-4.15ZM14.48 4.73c.71-.86 1.19-2.05 1.06-3.24-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.14 1.14.09 2.3-.58 3.01-1.44Z" />
    </svg>
  )
}

function LinkIcon({ kind, className }: { kind: ProductLink["kind"]; className?: string }) {
  if (kind === "appstore") return <AppleIcon className={className} />
  if (kind === "soon") return <Clock3 className={className} />
  if (kind === "github") return <Github className={className} />
  return <Globe className={className} />
}

/* 列表里的小胶囊按钮：手机上只留图标，避免把行撑宽 */
function LinkChip({ link }: { link: ProductLink }) {
  const icon = <LinkIcon kind={link.kind} className="size-3 shrink-0" />

  if (!link.href) {
    return (
      <span
        title={link.label + " · 即将上架"}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-1 text-[10px] text-white/35"
      >
        {icon}
        <span className="hidden sm:inline">即将上架</span>
      </span>
    )
  }

  const primary = link.kind === "appstore"

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      aria-label={link.label}
      title={link.label}
      className={
        primary
          ? "inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-medium text-black transition-transform hover:scale-105"
          : "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/55 transition-colors hover:border-white/25 hover:text-white"
      }
    >
      {icon}
      <span className="hidden sm:inline">{link.label}</span>
      <ArrowUpRight className="size-2.5 opacity-40" />
    </a>
  )
}

function AppRow({ product }: { product: Product }) {
  return (
    <li className="flex items-center gap-4 border-b border-white/[0.06] py-3.5 transition-colors last:border-0 hover:bg-white/[0.02]">
      {/* 图标用 background-image：远端图标挂了时，底下的首字母还在 */}
      <span
        aria-hidden
        className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-white/10 bg-white/[0.06] bg-cover bg-center text-[13px] font-semibold text-white/30"
        style={{ backgroundImage: "url(" + product.icon + ")" }}
      >
        {product.name.slice(0, 1)}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <h3 className="truncate text-sm font-medium text-white/90">{product.name}</h3>
          <span className="truncate text-[11px] text-white/30">{product.subtitle}</span>
        </div>
        <p className="mt-0.5 truncate text-xs leading-relaxed text-white/40">{product.description}</p>
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        {product.links.map((link) => (
          <LinkChip key={link.label + link.kind} link={link} />
        ))}
      </div>
    </li>
  )
}

function GroupHeader({ label, meta }: { label: string; meta: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="text-[11px] uppercase tracking-[0.22em] text-white/35">{label}</h3>
      <span className="font-mono text-[10px] tracking-wide text-white/20">{meta}</span>
    </div>
  )
}

const groups: { id: ProductGroup; label: string; meta: string }[] = [
  { id: "ios", label: "iPhone · iPad", meta: "App Store" },
  { id: "desktop", label: "macOS · Windows", meta: "桌面端" },
]

function rustproRow() {
  const links: ProductLink[] = [
    { label: "RustPlus", href: "https://plus.rustpro.cc", kind: "website" },
    { label: "RustPro Clan", href: "https://clan.rustpro.cc", kind: "website" },
  ]

  return (
    <li className="flex items-center gap-4 border-b border-white/[0.06] py-3.5 transition-colors last:border-0 hover:bg-white/[0.02]">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.04] text-white/55">
        <Server className="size-4" />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <h3 className="truncate text-sm font-medium text-white/90">RustPro</h3>
          <span className="truncate text-[11px] text-white/30">Rust（腐蚀）· 服务器与战队工具</span>
        </div>
        <p className="mt-0.5 truncate text-xs leading-relaxed text-white/40">
          Rust+ 服务器控制台、战队开荒与成员管理，基因计算与清档查询还在做。
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        {links.map((link) => (
          <LinkChip key={link.label} link={link} />
        ))}
      </div>
    </li>
  )
}

const dshIcons: Record<DshPlugin["icon"], typeof Plug> = {
  plug: Plug,
  sync: RefreshCw,
  phone: Smartphone,
  wallet: Wallet,
}

export function Work() {
  return (
    <section id="work" className="relative px-4 pb-20 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">作品 / WORK</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            一直在做的东西
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
            挑几个还在维护的项目，按平台分。
          </p>
        </div>

        <div className="mt-10 space-y-9 md:mt-12">
          {groups.map((group) => {
            const items = [...apps, mhub].filter((product) => product.group === group.id)
            return (
              <div key={group.id}>
                <GroupHeader label={group.label} meta={group.meta} />
                <ul className="mt-2 border-t border-white/10">
                  {items.map((product) => (
                    <AppRow key={product.id} product={product} />
                  ))}
                </ul>
              </div>
            )
          })}

          <div>
            <GroupHeader label="Web" meta="浏览器里直接用" />
            <ul className="mt-2 border-t border-white/10">
              {rustproRow()}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 md:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                DeepSeek Harness
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                顺手做的几个 DSH 插件
              </h2>
            </div>
            <p className="text-[11px] text-white/30">给日常开发加一点方便</p>
          </div>

          <div className="mt-5 grid gap-2.5 md:grid-cols-2">
            {dshPlugins.map((plugin) => {
              const Icon = dshIcons[plugin.icon]
              const body = (
                <>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/55">
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2">
                      <span className="text-[13px] font-medium text-white/85">{plugin.name}</span>
                      <span className="font-mono text-[10px] text-white/20">{plugin.repo}</span>
                    </span>
                    <span className="mt-0.5 block truncate text-[11px] leading-relaxed text-white/40">
                      {plugin.description}
                    </span>
                  </span>
                </>
              )
              const shell = "flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-2.5"

              if (!plugin.href) {
                return (
                  <div key={plugin.id} className={shell}>
                    {body}
                  </div>
                )
              }

              return (
                <a
                  key={plugin.id}
                  href={plugin.href}
                  target="_blank"
                  rel="noreferrer"
                  className={shell + " group transition-colors hover:border-white/20 hover:bg-white/[0.05]"}
                >
                  {body}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
