import type { L, Text } from "@/lib/locale"

export const site = {
  name: { zh: "技术与生活", en: "Tech & Life" } as L,
  url: "https://carljoy.cn",
  author: {
    name: "CarlJoy",
    handle: "CarlJoy",
    email: "carl030101@icloud.com",
    qq: "2940966174",
    location: { zh: "湖北 · 武汉", en: "Hubei, China" } as L,
  },
  github: "https://github.com/RedCarl",
  bilibili: "https://space.bilibili.com/398647207",
  afdian: "https://afdian.com/a/nyanyastudios",
} as const

export type LinkKind = "appstore" | "website" | "github" | "soon"

export type ProductLink = {
  label: Text
  href?: string
  kind: LinkKind
}

export type ProductGroup = "ios" | "desktop" | "web"

export type Product = {
  id: string
  group: ProductGroup
  name: Text
  subtitle: Text
  description: Text
  tags: Text[]
  icon: string
  image?: string
  imageAlt?: Text
  badge?: Text
  note?: Text
  links: ProductLink[]
}

export const apps: Product[] = [
  {
    id: "liteshot",
    group: "desktop",
    name: "Liteshot",
    subtitle: { zh: "macOS · 截图与标注", en: "macOS · Screenshot & annotate" },
    description: {
      zh: "菜单栏里的截图工具。框选、标注、滚动截图、OCR、贴图，一个覆盖层里完成。",
      en: "A screenshot tool that lives in your menu bar. Region capture, markup, scrolling capture, OCR and pinning — all in one overlay.",
    },
    tags: ["Swift", "AppKit", "macOS"],
    icon: "https://liteshot.carljoy.cn/assets/icon.png",
    image: "/products/liteshot.jpg",
    imageAlt: { zh: "Liteshot 截图界面", en: "Liteshot capture overlay" },
    badge: "macOS",
    links: [
      { label: { zh: "官网", en: "Website" }, href: "https://liteshot.carljoy.cn/", kind: "website" },
      { label: "Mac App Store", kind: "soon" },
    ],
  },
  {
    id: "otp",
    group: "ios",
    name: "OTP",
    subtitle: { zh: "iOS · 两步验证", en: "iOS · Two-factor codes" },
    description: {
      zh: "验证码只放在 iCloud 钥匙串里。支持 TOTP / HOTP、Face ID、加密备份，不联网。",
      en: "Your codes live in iCloud Keychain. TOTP / HOTP, Face ID and encrypted backup, with no network access.",
    },
    tags: ["SwiftUI", { zh: "iCloud 钥匙串", en: "iCloud Keychain" }, "App Store"],
    icon: "https://otp.carljoy.cn/assets/icon.png",
    image: "/products/otp.jpg",
    imageAlt: { zh: "OTP 令牌列表与设置界面", en: "OTP token list and settings" },
    badge: "App Store",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/cn/app/id6835475936",
        kind: "appstore",
      },
      { label: { zh: "官网", en: "Website" }, href: "https://otp.carljoy.cn/", kind: "website" },
    ],
  },
  {
    id: "phototidy",
    group: "ios",
    name: { zh: "照片整理", en: "Photo Tidy" },
    subtitle: { zh: "iOS · 照片与截图整理", en: "iOS · Photos & screenshots cleanup" },
    description: {
      zh: "本地优先的照片整理工具：截图在本机识字分类、支持中文全文搜索，照片按行程拆成小批次，右滑保留、左滑不要。",
      en: "Local-first photo cleanup. Screenshots are read and sorted on device with full-text search, photos are split into small batches by trip — swipe right to keep, left to drop.",
    },
    tags: ["SwiftUI", "Vision", "SQLite"],
    icon: "https://phototidy.carljoy.cn/assets/icon.png",
    image: "/products/phototidy.jpg",
    imageAlt: {
      zh: "照片整理的照片网格与滑卡整理工作台",
      en: "Photo Tidy grid and swipe cleanup workspace",
    },
    badge: "iOS",
    note: {
      zh: "删除必须「标记 → 复核 → 系统确认」三步；照片、缩略图与识别出的文字都不出设备。",
      en: "Deleting takes three steps — mark, review, system confirm. Photos, thumbnails and recognized text never leave the device.",
    },
    links: [
      { label: { zh: "官网", en: "Website" }, href: "https://phototidy.carljoy.cn/", kind: "website" },
      { label: "App Store", kind: "soon" },
    ],
  },
  {
    id: "tinymusic-desktop",
    group: "desktop",
    name: "TinyMusic",
    subtitle: { zh: "桌面端 · Windows / macOS", en: "Desktop · Windows / macOS" },
    description: {
      zh: "一个约 4 MB 的音乐客户端。搜索、试听、歌词、下载，也可以接到自己的 S3 网盘。",
      en: "A ~4 MB music client. Search, preview, lyrics and downloads — and it can point at your own S3 storage.",
    },
    tags: ["Tauri 2", "Svelte 5", "Rust"],
    icon: "https://tinymusic.carljoy.cn/assets/icon.png",
    image: "/products/tinymusic-desktop.jpg",
    imageAlt: { zh: "TinyMusic 桌面端界面", en: "TinyMusic desktop app" },
    badge: { zh: "免费", en: "Free" },
    note: {
      zh: "非官方客户端，只调用平台公开接口，供个人学习使用；不绕过会员权限，也不分发音频。",
      en: "Unofficial client. It only calls public platform APIs for personal study — it does not bypass memberships or redistribute audio.",
    },
    links: [{ label: { zh: "官网", en: "Website" }, href: "https://tinymusic.carljoy.cn/", kind: "website" }],
  },
  {
    id: "tinymusic-ios",
    group: "ios",
    name: "TinyMusic",
    subtitle: { zh: "iOS · S3 网盘播放器", en: "iOS · S3 music player" },
    description: {
      zh: "只播放你自己 S3 网盘里的音乐：流式播放、离线缓存、后台音频，不内置任何曲库。",
      en: "Plays only the music in your own S3 storage: streaming, offline cache and background audio, with no built-in catalog.",
    },
    tags: ["SwiftUI", "Liquid Glass", "S3"],
    icon: "https://tinymusic.carljoy.cn/assets/icon.png",
    image: "/products/tinymusic-ios.jpg",
    imageAlt: { zh: "TinyMusic iOS 资料库与歌单界面", en: "TinyMusic iOS library and playlists" },
    badge: "App Store",
    note: {
      zh: "和桌面端是两个独立产品：iOS 端没有平台曲库、搜索和登录，只读你自己的存储。",
      en: "Two separate products: the iOS app has no platform catalog, search or login — it only reads your own storage.",
    },
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/app/id6835780946",
        kind: "appstore",
      },
      {
        label: { zh: "官网", en: "Website" },
        href: "https://tinymusic.carljoy.cn/tinymusic/",
        kind: "website",
      },
    ],
  },
  {
    id: "catgame",
    group: "ios",
    name: { zh: "猫猫游戏屋", en: "CatGame" },
    subtitle: { zh: "iOS · 给猫玩的全屏小游戏", en: "iOS · Full-screen games for cats" },
    description: {
      zh: "六个给猫拍的小游戏：抓小鱼、捉蝌蚪、打地鼠、追光点、戳泡泡、逗猫棒。按猫的二色视觉调过对比度，双指慢滑才退出，全屏纯单机，没有积分、排名和广告。",
      en: "Six full-screen games made for cats — fish, tadpoles, whack-a-mole, light chasing, bubbles and a feather wand. Tuned for feline dichromatic vision, with a mis-tap-proof two-finger exit. No scores, rankings, accounts or ads.",
    },
    tags: ["SwiftUI", "Canvas", "iOS"],
    icon: "https://catgame.carljoy.cn/assets/icon.png",
    badge: "App Store",
    note: {
      zh: "猫爪乱拍容易误触，退出改成双指慢滑；建议再打开系统「引导式访问」。",
      en: "Cats tap everywhere, so exiting takes a slow two-finger swipe — pair it with Guided Access.",
    },
    links: [
      { label: { zh: "官网", en: "Website" }, href: "https://catgame.carljoy.cn/", kind: "website" },
      {
        label: "App Store",
        href: "https://apps.apple.com/cn/app/id6838260474",
        kind: "appstore",
      },
    ],
  },
  {
    id: "dsh-remote",
    group: "ios",
    name: "DSH Remote",
    subtitle: { zh: "iOS · 远程查看与审批 DSH 任务", en: "iOS · Watch & approve DSH tasks" },
    description: {
      zh: "原生 SwiftUI 客户端：扫码连到电脑上的 DeepSeek Harness，看工作区与会话、跟着实时输出，在手机上批准或拒绝工具调用。不跑 Agent、不加载动态代码，计算都留在电脑。",
      en: "A native SwiftUI client that pairs with the DeepSeek Harness on your computer: browse workspaces and sessions, follow live output, and approve or reject tool calls from your phone. No agent runtime, no dynamic code — the work stays on your machine.",
    },
    tags: ["SwiftUI", "WebSocket", "Keychain"],
    icon: "/products/dshremote-icon.png",
    badge: "iOS",
    note: {
      zh: "电脑端跑仓库里自带的 Node 插件就能配对；中国区上架还差 App 备案。",
      en: "The computer side runs the bundled Node plugin; the China store release is waiting on filing.",
    },
    links: [{ label: "App Store", kind: "soon" }],
  },
]

export const mhub: Product = {
  id: "mhub-lite",
  group: "desktop",
  name: "MHUB Lite",
  subtitle: { zh: "Windows / macOS · MCHOSE 设备管理", en: "Windows / macOS · MCHOSE device manager" },
  description: {
    zh: "一个几 MB 的鼠标 / 键盘管理工具。DPI、改键、灯效、回报率，都在一个窗口里，配置直接写进设备。开源 MIT。",
    en: "A few-megabyte mouse and keyboard manager. DPI, remapping, lighting and polling rate in one window, with settings written straight to the device. MIT licensed.",
  },
  tags: ["Tauri 2", "Svelte 5", "Rust", "MIT"],
  icon: "/products/mhub-icon.png",
  image: "/products/mhub.jpg",
  imageAlt: { zh: "MHUB Lite 主界面", en: "MHUB Lite main window" },
  badge: { zh: "开源", en: "Open source" },
  note: {
    zh: "非官方工具；配置写在设备板载存储里，不上传。",
    en: "Unofficial tool. Settings are stored on the device itself and never uploaded.",
  },
  links: [
    {
      label: { zh: "官网与下载", en: "Website & download" },
      href: "https://redcarl.github.io/MHUB-Lite/",
      kind: "website",
    },
    { label: "GitHub", href: "https://github.com/RedCarl/MHUB-Lite", kind: "github" },
  ],
}

export type DshPlugin = {
  id: string
  name: Text
  repo: string
  description: Text
  href?: string
  icon: "plug" | "sync" | "phone" | "wallet" | "flow"
}

export const dshPlugins: DshPlugin[] = [
  {
    id: "ccswitch-hub",
    name: { zh: "MCP 与技能", en: "MCP & Skills" },
    repo: "dsh-ccswitch-hub",
    description: {
      zh: "在侧栏管理 MCP 服务器和技能，也能从 CC Switch 导入。",
      en: "Manage MCP servers and skills in the sidebar, and import them from CC Switch.",
    },
    icon: "plug",
  },
  {
    id: "date-sync",
    name: { zh: "多端同步", en: "Multi-device sync" },
    repo: "dsh-date-sync",
    description: {
      zh: "用 WebDAV 或 S3，把技能、配置和会话同步到另一台电脑。",
      en: "Sync skills, settings and sessions to another computer over WebDAV or S3.",
    },
    icon: "sync",
  },
  {
    id: "mobile-shell",
    name: { zh: "手机外壳", en: "Mobile shell" },
    repo: "dsh-mobile-shell",
    description: {
      zh: "把 DSH Web 界面搬到手机上：抽屉侧栏、底部导航、触屏优化。",
      en: "Brings the DSH web UI to your phone: drawer sidebar, bottom navigation and touch tuning.",
    },
    icon: "phone",
  },
  {
    id: "balance-panel",
    name: { zh: "余额与用量", en: "Balance & usage" },
    repo: "dsh-balance-panel",
    description: {
      zh: "侧栏直接看余额、用量和 Token 统计，支持多家 API。",
      en: "See balance, usage and token stats in the sidebar, across multiple API providers.",
    },
    icon: "wallet",
  },
  {
    id: "ios-pipeline",
    name: { zh: "iOS 全流程", en: "iOS pipeline" },
    repo: "dsh-ios-pipeline",
    description: {
      zh: "把 iOS 从立项到提审拆成 /ios-* 命令，开发规范自动注入每个 iOS 会话。",
      en: "Splits iOS work from kickoff to review into /ios-* commands and injects dev standards into every iOS session.",
    },
    icon: "flow",
  },
]
