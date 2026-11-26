"use client"

import type { MouseEvent } from "react"
import { Languages } from "lucide-react"
import { getDictionary } from "@/lib/dictionary"
import { LANG_STORAGE_KEY, localeInfo, otherLocale, type Locale } from "@/lib/locale"

type Props = {
  locale: Locale
  variant?: "full" | "compact" | "menu"
  onNavigate?: () => void
}

/**
 * 手动切换语言：把选择写进 localStorage 再跳转，
 * 之后的访问以手动选择为准，没选过才按系统语言自动判断。
 * 带修饰键 / 中键的点击保留浏览器默认行为（新标签页打开）。
 */
export function LanguageSwitcher({ locale, variant = "full", onNavigate }: Props) {
  const dict = getDictionary(locale)
  const next = otherLocale(locale)
  const nextInfo = localeInfo[next]

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next)
    } catch {
      /* localStorage 不可用时照样跳转 */
    }
    onNavigate?.()
    event.preventDefault()
    // 保留查询参数与锚点，切换后还停在同一段
    window.location.assign(nextInfo.path + window.location.search + window.location.hash)
  }

  if (variant === "compact") {
    return (
      <a
        href={nextInfo.path}
        onClick={onClick}
        aria-label={dict.nav.switchAria}
        title={dict.nav.switchAria}
        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        {dict.nav.switchButton}
      </a>
    )
  }

  if (variant === "menu") {
    return (
      <a
        href={nextInfo.path}
        onClick={onClick}
        aria-label={dict.nav.switchAria}
        className="mb-1 flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
      >
        <Languages className="size-4 shrink-0 text-white/40" />
        {dict.nav.switchMenuLabel}
      </a>
    )
  }

  return (
    <a
      href={nextInfo.path}
      onClick={onClick}
      aria-label={dict.nav.switchAria}
      title={dict.nav.switchAria}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-white/60 transition-colors hover:text-white"
    >
      <Languages className="size-3.5" />
      {dict.nav.switchButton}
    </a>
  )
}
