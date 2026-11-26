import { buildLocaleRedirectScript, type Locale } from "@/lib/locale"

/**
 * 首屏语言判定：同步内联脚本，放在 body 最前面，
 * 命中跳转时浏览器还没绘制任何内容，不会闪中文。
 */
export function LocaleGuard({ locale }: { locale: Locale }) {
  return <script dangerouslySetInnerHTML={{ __html: buildLocaleRedirectScript(locale) }} />
}
