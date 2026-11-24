export const site = {
  name: "技术与生活",
  title: "技术与生活 - CarlJoy",
  description:
    "CarlJoy 的个人网站：记录我做的软件——Liteshot、OTP、照片整理、TinyMusic、MHUB Lite、RustPro，以及一些 DeepSeek Harness 插件。",
  url: "https://carljoy.cn",
  author: {
    name: "CarlJoy",
    handle: "CarlJoy",
    email: "carl030101@icloud.com",
    qq: "2940966174",
    location: "湖北 · 武汉",
  },
  github: "https://github.com/RedCarl",
  bilibili: "https://space.bilibili.com/398647207",
  afdian: "https://afdian.com/a/nyanyastudios",
} as const

export type LinkKind = "appstore" | "website" | "github" | "soon"

export type ProductLink = {
  label: string
  href?: string
  kind: LinkKind
}

export type ProductGroup = "ios" | "desktop" | "web"

export type Product = {
  id: string
  group: ProductGroup
  name: string
  subtitle: string
  description: string
  tags: string[]
  icon: string
  image?: string
  imageAlt?: string
  badge?: string
  note?: string
  links: ProductLink[]
}

export const apps: Product[] = [
  {
    id: "liteshot",
    group: "desktop",
    name: "Liteshot",
    subtitle: "macOS · 截图与标注",
    description:
      "菜单栏里的截图工具。框选、标注、滚动截图、OCR、贴图，一个覆盖层里完成。",
    tags: ["Swift", "AppKit", "macOS"],
    icon: "https://liteshot.carljoy.cn/assets/icon.png",
    image: "/products/liteshot.jpg",
    imageAlt: "Liteshot 截图界面",
    badge: "macOS",
    links: [
      { label: "官网", href: "https://liteshot.carljoy.cn/", kind: "website" },
      { label: "Mac App Store", kind: "soon" },
    ],
  },
  {
    id: "otp",
    group: "ios",
    name: "OTP",
    subtitle: "iOS · 两步验证",
    description:
      "验证码只放在 iCloud 钥匙串里。支持 TOTP / HOTP、Face ID、加密备份，不联网。",
    tags: ["SwiftUI", "iCloud 钥匙串", "App Store"],
    icon: "https://otp.carljoy.cn/assets/icon.png",
    image: "/products/otp.jpg",
    imageAlt: "OTP 令牌列表与设置界面",
    badge: "App Store",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/cn/app/id6835475936",
        kind: "appstore",
      },
      { label: "官网", href: "https://otp.carljoy.cn/", kind: "website" },
    ],
  },
  {
    id: "phototidy",
    group: "ios",
    name: "照片整理",
    subtitle: "iOS · 照片与截图整理",
    description:
      "本地优先的照片整理工具：截图在本机识字分类、支持中文全文搜索，照片按行程拆成小批次，右滑保留、左滑不要。",
    tags: ["SwiftUI", "Vision", "SQLite"],
    icon: "https://phototidy.carljoy.cn/assets/icon.png",
    image: "/products/phototidy.jpg",
    imageAlt: "照片整理的照片网格与滑卡整理工作台",
    badge: "iOS",
    note: "删除必须「标记 → 复核 → 系统确认」三步；照片、缩略图与识别出的文字都不出设备。",
    links: [
      { label: "官网", href: "https://phototidy.carljoy.cn/", kind: "website" },
      { label: "App Store", kind: "soon" },
    ],
  },
  {
    id: "tinymusic-desktop",
    group: "desktop",
    name: "TinyMusic",
    subtitle: "桌面端 · Windows / macOS",
    description:
      "一个约 4 MB 的音乐客户端。搜索、试听、歌词、下载，也可以接到自己的 S3 网盘。",
    tags: ["Tauri 2", "Svelte 5", "Rust"],
    icon: "https://tinymusic.carljoy.cn/assets/icon.png",
    image: "/products/tinymusic-desktop.jpg",
    imageAlt: "TinyMusic 桌面端界面",
    badge: "免费",
    note: "非官方客户端，只调用平台公开接口，供个人学习使用；不绕过会员权限，也不分发音频。",
    links: [{ label: "官网", href: "https://tinymusic.carljoy.cn/", kind: "website" }],
  },
  {
    id: "tinymusic-ios",
    group: "ios",
    name: "TinyMusic",
    subtitle: "iOS · S3 网盘播放器",
    description:
      "只播放你自己 S3 网盘里的音乐：流式播放、离线缓存、后台音频，不内置任何曲库。",
    tags: ["SwiftUI", "Liquid Glass", "S3"],
    icon: "https://tinymusic.carljoy.cn/assets/icon.png",
    image: "/products/tinymusic-ios.jpg",
    imageAlt: "TinyMusic iOS 资料库与歌单界面",
    badge: "App Store",
    note: "和桌面端是两个独立产品：iOS 端没有平台曲库、搜索和登录，只读你自己的存储。",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/app/id6835780946",
        kind: "appstore",
      },
      { label: "官网", href: "https://tinymusic.carljoy.cn/tinymusic/", kind: "website" },
    ],
  },
]

export const mhub: Product = {
  id: "mhub-lite",
  group: "desktop",
  name: "MHUB Lite",
  subtitle: "Windows / macOS · MCHOSE 设备管理",
  description:
    "一个几 MB 的鼠标 / 键盘管理工具。DPI、改键、灯效、回报率，都在一个窗口里，配置直接写进设备。开源 MIT。",
  tags: ["Tauri 2", "Svelte 5", "Rust", "MIT"],
  icon: "/products/mhub-icon.png",
  image: "/products/mhub.jpg",
  imageAlt: "MHUB Lite 主界面",
  badge: "开源",
  note: "非官方工具；配置写在设备板载存储里，不上传。",
  links: [
    { label: "官网与下载", href: "https://redcarl.github.io/MHUB-Lite/", kind: "website" },
    { label: "GitHub", href: "https://github.com/RedCarl/MHUB-Lite", kind: "github" },
  ],
}

export type DshPlugin = {
  id: string
  name: string
  repo: string
  description: string
  href?: string
  icon: "plug" | "sync" | "phone" | "wallet"
}

export const dshPlugins: DshPlugin[] = [
  {
    id: "ccswitch-hub",
    name: "MCP 与技能",
    repo: "dsh-ccswitch-hub",
    description: "在侧栏管理 MCP 服务器和技能，也能从 CC Switch 导入。",
    icon: "plug",
  },
  {
    id: "date-sync",
    name: "多端同步",
    repo: "dsh-date-sync",
    description: "用 WebDAV 或 S3，把技能、配置和会话同步到另一台电脑。",
    icon: "sync",
  },
  {
    id: "mobile-shell",
    name: "手机外壳",
    repo: "dsh-mobile-shell",
    description: "把 DSH Web 界面搬到手机上：抽屉侧栏、底部导航、触屏优化。",
    icon: "phone",
  },
  {
    id: "balance-panel",
    name: "余额与用量",
    repo: "dsh-balance-panel",
    description: "侧栏直接看余额、用量和 Token 统计，支持多家 API。",
    icon: "wallet",
  },
]
