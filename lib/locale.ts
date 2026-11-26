export type Locale = "zh" | "en"

export type L = { zh: string; en: string }

/** 可本地化的文本：字面量（语言无关）或中英双语 */
export type Text = string | L

export const localeInfo: Record<
  Locale,
  {
    htmlLang: string
    path: string
    ogLocale: string
  }
> = {
  zh: { htmlLang: "zh-CN", path: "/", ogLocale: "zh_CN" },
  en: { htmlLang: "en", path: "/en/", ogLocale: "en_US" },
}

/** 手动切换语言后写入 localStorage，优先于系统语言 */
export const LANG_STORAGE_KEY = "carljoy-lang"

export function otherLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh"
}

/** 取本地化文本；语言无关的字面量原样返回 */
export function tr(value: Text, locale: Locale): string {
  return typeof value === "string" ? value : value[locale]
}

/**
 * 首屏语言判定脚本，同步执行在 body 开头：命中重定向时浏览器还没绘制内容。
 * 规则：
 * - 手动选择过（localStorage）优先；
 * - 否则首次访问按系统 / 浏览器语言判断：首选语言是中文 → 中文，其余 → 英文；
 * - 直接打开 /en/ 时尊重 URL，只有手动选过中文才跳回 /。
 */
export function buildLocaleRedirectScript(locale: Locale): string {
  return String.raw`(function(){try{
var KEY='carljoy-lang';
var home={zh:'/',en:'/en/'};
var cur='${locale}';
var path=location.pathname.replace(/\/+$/,'')||'/';
if(/bot|crawler|spider|slurp|bingpreview/i.test(navigator.userAgent||''))return;
var saved=null;try{saved=localStorage.getItem(KEY)}catch(e){}
var target=saved;
if(target!=='zh'&&target!=='en'){
var langs=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||''];
target=String(langs[0]||'').toLowerCase().indexOf('zh')===0?'zh':'en';
}
var dest=null;
if(cur==='zh'&&path==='/'&&target==='en')dest=home.en;
else if(cur==='en'&&path==='/en'&&target==='zh')dest=home.zh;
if(dest)location.replace(dest+location.search+location.hash);
}catch(e){}})();`
}
