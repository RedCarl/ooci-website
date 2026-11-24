"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { site } from "@/lib/site"

const links = [
  { name: "作品", href: "#work" },
  { name: "关于", href: "#about" },
  { name: "联系", href: "#contact" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:pt-5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#08090b] via-[#08090b]/85 to-transparent md:h-28" />
      <nav
        className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2.5 transition-colors duration-300 md:px-5 ${
          scrolled
            ? "border-white/15 bg-black/60 backdrop-blur-xl"
            : "border-white/10 bg-black/25 backdrop-blur-md"
        }`}
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-full pr-2"
          aria-label="技术与生活首页"
        >
          <span className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10">
            <Image
              src="/logo.png"
              alt=""
              width={26}
              height={26}
              className="size-6 brightness-0 invert"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[13px] font-semibold tracking-wide text-white">
              技术与生活
            </span>
            <span className="mt-1 text-[10px] tracking-[0.18em] text-white/40">
              CARLJOY
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/65 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
          >
            联系我
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex size-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "关闭菜单" : "打开菜单"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col p-2">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </a>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-black"
          >
            联系我
          </a>
        </div>
      </div>
    </header>
  )
}

