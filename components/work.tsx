import {
  ArrowUpRight,
  Clock3,
  Github,
  Globe,
  Plug,
  RefreshCw,
  Server,
  Smartphone,
  Wallet,
} from "lucide-react"
import { getDictionary } from "@/lib/dictionary"
import { tr, type Locale } from "@/lib/locale"
import {
  apps,
  dshPlugins,
  mhub,
  type DshPlugin,
  type Product,
  type ProductGroup,
  type ProductLink,
} from "@/lib/site"

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
function LinkChip({ link, locale }: { link: ProductLink; locale: Locale }) {
  const dict = getDictionary(locale)
  const icon = <LinkIcon kind={link.kind} className="size-3 shrink-0" />
  const label = tr(link.label, locale)

  if (!link.href) {
    return (
      <span
        title={`${label} · ${dict.work.comingSoon}`}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-1 text-[10px] text-white/35"
      >
        {icon}
        <span className="hidden sm:inline">{dict.work.comingSoon}</span>
      </span>
    )
  }

  const primary = link.kind === "appstore"

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className={
        primary
          ? "inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-medium text-black transition-transform hover:scale-105"
          : "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/55 transition-colors hover:border-white/25 hover:text-white"
      }
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      <ArrowUpRight className="size-2.5 opacity-40" />
    </a>
  )
}

function AppRow({ product, locale }: { product: Product; locale: Locale }) {
  return (
    <li className="flex items-center gap-4 border-b border-white/[0.06] py-3.5 transition-colors last:border-0 hover:bg-white/[0.02]">
      {/* 图标用 background-image：远端图标挂了时，底下的首字母还在 */}
      <span
        aria-hidden
        className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-white/10 bg-white/[0.06] bg-cover bg-center text-[13px] font-semibold text-white/30"
        style={{ backgroundImage: "url(" + product.icon + ")" }}
      >
        {tr(product.name, locale).slice(0, 1)}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <h3 className="truncate text-sm font-medium text-white/90">
            {tr(product.name, locale)}
          </h3>
          <span className="truncate text-[11px] text-white/30">{tr(product.subtitle, locale)}</span>
        </div>
        <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-white/40">
          {tr(product.description, locale)}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        {product.links.map((link) => (
          <LinkChip key={tr(link.label, locale) + link.kind} link={link} locale={locale} />
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

const groupOrder: ProductGroup[] = ["ios", "desktop"]

function RustProRow({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)
  const rustpro = dict.work.rustpro
  const links: ProductLink[] = [
    { label: rustpro.rustplus, href: "https://plus.rustpro.cc", kind: "website" },
    { label: rustpro.clan, href: "https://clan.rustpro.cc", kind: "website" },
  ]

  return (
    <li className="flex items-center gap-4 border-b border-white/[0.06] py-3.5 transition-colors last:border-0 hover:bg-white/[0.02]">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.04] text-white/55">
        <Server className="size-4" />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <h3 className="truncate text-sm font-medium text-white/90">RustPro</h3>
          <span className="truncate text-[11px] text-white/30">{rustpro.subtitle}</span>
        </div>
        <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-white/40">
          {rustpro.description}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        {links.map((link) => (
          <LinkChip key={link.label + link.kind} link={link} locale={locale} />
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

export function Work({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)

  return (
    <section id="work" className="relative px-4 pb-20 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
            {dict.work.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {dict.work.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
            {dict.work.intro}
          </p>
        </div>

        <div className="mt-10 space-y-9 md:mt-12">
          {groupOrder.map((groupId) => {
            const group = dict.work.groups[groupId]
            const items = [...apps, mhub].filter((product) => product.group === groupId)
            return (
              <div key={groupId}>
                <GroupHeader label={group.label} meta={group.meta} />
                <ul className="mt-2 border-t border-white/10">
                  {items.map((product) => (
                    <AppRow key={product.id} product={product} locale={locale} />
                  ))}
                </ul>
              </div>
            )
          })}

          <div>
            <GroupHeader
              label={dict.work.groups.web.label}
              meta={dict.work.groups.web.meta}
            />
            <ul className="mt-2 border-t border-white/10">
              <RustProRow locale={locale} />
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 md:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                {dict.work.dsh.eyebrow}
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                {dict.work.dsh.title}
              </h2>
            </div>
            <p className="text-[11px] text-white/30">{dict.work.dsh.note}</p>
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
                      <span className="text-[13px] font-medium text-white/85">
                        {tr(plugin.name, locale)}
                      </span>
                      <span className="font-mono text-[10px] text-white/20">{plugin.repo}</span>
                    </span>
                    <span className="mt-0.5 block line-clamp-2 text-[11px] leading-relaxed text-white/40">
                      {tr(plugin.description, locale)}
                    </span>
                  </span>
                </>
              )
              const shell =
                "flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-2.5"

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
