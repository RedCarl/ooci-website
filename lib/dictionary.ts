import type { Locale } from "@/lib/locale"

export type Dictionary = {
  meta: {
    title: string
    description: string
    keywords: string[]
    jobTitle: string
    knowsAbout: string[]
  }
  nav: {
    homeAria: string
    brand: string
    brandSub: string
    links: { label: string; href: string }[]
    cta: string
    openMenu: string
    closeMenu: string
    switchButton: string
    switchAria: string
    switchMenuLabel: string
  }
  hero: {
    badge: string
    line1: string
    line2Prefix: string
    words: string[]
    wordWidth: number
    rotatingAria: string
    intro: string
    ctaPrimary: string
    ctaSecondary: string
    mailSubject: string
    socials: { github: string; bilibili: string; email: string }
    card: {
      role: string
      available: string
      blurb: string
      nowLabel: string
      now: string[]
      stats: { value: string; label: string }[]
      more: string
    }
  }
  work: {
    eyebrow: string
    title: string
    intro: string
    groups: Record<"ios" | "desktop" | "web", { label: string; meta: string }>
    comingSoon: string
    rustpro: {
      subtitle: string
      description: string
      rustplus: string
      clan: string
    }
    dsh: { eyebrow: string; title: string; note: string }
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    muted: string
    stack: string[]
    principlesLabel: string
    principles: { index: string; title: string; description: string }[]
    quote: string
    quoteBy: string
  }
  contact: {
    eyebrow: string
    title: string[]
    intro: string
    emailCta: string
    mailSubject: string
    notes: string[]
    items: Record<"email" | "github" | "qq" | "afdian", { label: string; note: string }>
    qqHint: string
    wechat: { eyebrow: string; title: string; description: string }
    qr: {
      altSuffix: string
      bigTitle: string
      wechat: { title: string; description: string }
      official: { title: string; description: string }
    }
  }
  footer: {
    description: string
    siteLabel: string
    elsewhereLabel: string
    elsewhere: Record<"email" | "bilibili" | "afdian", string>
    copyright: string
  }
}

const zh: Dictionary = {
  meta: {
    title: "技术与生活 - CarlJoy",
    description:
      "CarlJoy 的个人网站：记录我做的软件——Liteshot、OTP、照片整理、TinyMusic、MHUB Lite、RustPro，以及一些 DeepSeek Harness 插件。",
    keywords: [
      "CarlJoy",
      "技术与生活",
      "个人网站",
      "独立开发",
      "Liteshot",
      "OTP",
      "TinyMusic",
      "RustPro",
      "DeepSeek Harness",
    ],
    jobTitle: "独立开发者",
    knowsAbout: ["iOS", "macOS", "SwiftUI", "Rust", "TypeScript", "Web"],
  },
  nav: {
    homeAria: "技术与生活首页",
    brand: "技术与生活",
    brandSub: "CARLJOY",
    links: [
      { label: "作品", href: "#work" },
      { label: "关于", href: "#about" },
      { label: "联系", href: "#contact" },
    ],
    cta: "联系我",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    switchButton: "EN",
    switchAria: "切换到英文",
    switchMenuLabel: "English",
  },
  hero: {
    badge: "技术与生活 · CarlJoy 的个人网站",
    line1: "把想法做成",
    line2Prefix: "能用的",
    words: ["软件", "工具", "产品", "插件"],
    wordWidth: 2.6,
    rotatingAria: "软件、工具、产品、插件",
    intro:
      "我是 CarlJoy，独立开发者。做 iOS、macOS 与桌面应用，也维护 Rust 游戏工具和 DeepSeek Harness 插件。",
    ctaPrimary: "看看作品",
    ctaSecondary: "聊聊合作",
    mailSubject: "定制开发咨询",
    socials: { github: "GitHub", bilibili: "哔哩哔哩", email: "邮件" },
    card: {
      role: "独立开发者 · iOS / macOS / Rust",
      available: "可合作",
      blurb: "喜欢把一件事做完整：从界面、后端，到上架和文档。",
      nowLabel: "现在",
      now: [
        "维护 Liteshot 与 RustPro",
        "OTP、TinyMusic iOS 已上架",
        "照片整理 即将上架",
        "折腾 DeepSeek Harness 插件",
      ],
      stats: [
        { value: "7", label: "个产品" },
        { value: "4", label: "个 DSH 插件" },
      ],
      more: "看完整列表",
    },
  },
  work: {
    eyebrow: "作品 / WORK",
    title: "一直在做的东西",
    intro: "挑几个还在维护的项目，按平台分。",
    groups: {
      ios: { label: "iPhone · iPad", meta: "App Store" },
      desktop: { label: "macOS · Windows", meta: "桌面端" },
      web: { label: "Web", meta: "浏览器里直接用" },
    },
    comingSoon: "即将上架",
    rustpro: {
      subtitle: "Rust（腐蚀）· 服务器与战队工具",
      description: "Rust+ 服务器控制台、战队开荒与成员管理，基因计算与清档查询还在做。",
      rustplus: "RustPlus",
      clan: "RustPro Clan",
    },
    dsh: {
      eyebrow: "DeepSeek Harness",
      title: "顺手做的几个 DSH 插件",
      note: "给日常开发加一点方便",
    },
  },
  about: {
    eyebrow: "关于 / ABOUT",
    title: "写代码，也写点生活。",
    paragraphs: [
      "我是 CarlJoy，独立开发者，常驻湖北。做过 Minecraft 服务器、Rust 游戏工具和几个上架的 App。",
      "现在主要写 Swift 和 TypeScript，偶尔写 Rust。喜欢把一件事做完整：界面、后端、上架、文档，都自己来。",
    ],
    muted: "这个网站用来放我做的东西，偶尔也写点技术和生活。",
    stack: ["Swift / SwiftUI", "TypeScript / React", "Rust / Tauri", "Node.js", "PostgreSQL", "AppKit"],
    principlesLabel: "做事方式",
    principles: [
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
    ],
    quote: "“把复杂留给自己，把简单留给用的人。”",
    quoteBy: "— CarlJoy",
  },
  contact: {
    eyebrow: "联系 / CONTACT",
    title: ["想做个东西，", "或者想吐槽一个 Bug？"],
    intro: "定制开发、产品反馈、合作，都可以直接找我。邮件通常 1–2 天内回复。",
    emailCta: "发邮件",
    mailSubject: "定制开发咨询",
    notes: [
      "定制开发请简单说明：要做什么、给谁用、什么时候要。",
      "反馈 Bug 请附上系统版本和复现步骤，会快很多。",
    ],
    items: {
      email: { label: "邮件", note: "定制开发 / 合作 / 反馈" },
      github: { label: "GitHub", note: "看源码 / 提 Issue" },
      qq: { label: "QQ", note: "快速沟通" },
      afdian: { label: "爱发电", note: "支持独立开发" },
    },
    qqHint: "也可以直接加 QQ 或微信，备注「来自 carljoy.cn」。",
    wechat: {
      eyebrow: "扫码 / WECHAT",
      title: "微信扫码，备注来意",
      description: "加好友请备注「来自 carljoy.cn」。公众号会发一些开发记录和新品消息。",
    },
    qr: {
      altSuffix: "二维码",
      bigTitle: "查看%s二维码大图",
      wechat: { title: "微信", description: "扫码添加好友" },
      official: { title: "公众号", description: "扫码关注" },
    },
  },
  footer: {
    description: "CarlJoy 的个人网站。记录做过的软件，也记录一点生活。",
    siteLabel: "站内",
    elsewhereLabel: "别处",
    elsewhere: { email: "邮件", bilibili: "哔哩哔哩", afdian: "爱发电" },
    copyright: "© %s CarlJoy · 技术与生活",
  },
}

const en: Dictionary = {
  meta: {
    title: "Tech & Life — CarlJoy",
    description:
      "CarlJoy's personal site: notes on the software I build — Liteshot, OTP, Photo Tidy, TinyMusic, MHUB Lite and RustPro, plus a handful of DeepSeek Harness plugins.",
    keywords: [
      "CarlJoy",
      "Tech & Life",
      "personal website",
      "independent developer",
      "iOS",
      "macOS",
      "Liteshot",
      "OTP",
      "TinyMusic",
      "RustPro",
      "DeepSeek Harness",
    ],
    jobTitle: "Independent developer",
    knowsAbout: ["iOS", "macOS", "SwiftUI", "Rust", "TypeScript", "Web"],
  },
  nav: {
    homeAria: "Tech & Life — home",
    brand: "Tech & Life",
    brandSub: "CARLJOY",
    links: [
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Contact me",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchButton: "中文",
    switchAria: "Switch to Chinese",
    switchMenuLabel: "中文",
  },
  hero: {
    badge: "Tech & Life · CarlJoy's personal site",
    line1: "Turning ideas into",
    line2Prefix: "useful",
    words: ["software", "tools", "products", "plugins"],
    wordWidth: 5.3,
    rotatingAria: "software, tools, products, plugins",
    intro:
      "I'm CarlJoy, an independent developer. I build iOS, macOS and desktop apps, and maintain Rust game tools and DeepSeek Harness plugins.",
    ctaPrimary: "See my work",
    ctaSecondary: "Let's talk",
    mailSubject: "Custom development inquiry",
    socials: { github: "GitHub", bilibili: "Bilibili", email: "Email" },
    card: {
      role: "Independent developer · iOS / macOS / Rust",
      available: "Available",
      blurb: "I like seeing a thing through — interface, backend, shipping and docs.",
      nowLabel: "Now",
      now: [
        "Maintaining Liteshot and RustPro",
        "OTP and TinyMusic for iOS are live",
        "Photo Tidy — coming soon",
        "Tinkering with DeepSeek Harness plugins",
      ],
      stats: [
        { value: "7", label: "products" },
        { value: "4", label: "DSH plugins" },
      ],
      more: "See the full list",
    },
  },
  work: {
    eyebrow: "WORK",
    title: "What I keep building",
    intro: "A few projects I still maintain, grouped by platform.",
    groups: {
      ios: { label: "iPhone · iPad", meta: "App Store" },
      desktop: { label: "macOS · Windows", meta: "Desktop" },
      web: { label: "Web", meta: "Runs in the browser" },
    },
    comingSoon: "Coming soon",
    rustpro: {
      subtitle: "Rust · server and clan tools",
      description:
        "Rust+ server console, clan wipes and member management; the gene calculator and wipe lookup are still in progress.",
      rustplus: "RustPlus",
      clan: "RustPro Clan",
    },
    dsh: {
      eyebrow: "DeepSeek Harness",
      title: "A few DSH plugins built along the way",
      note: "Small conveniences for everyday development",
    },
  },
  about: {
    eyebrow: "ABOUT",
    title: "I write code, and a little about life.",
    paragraphs: [
      "I'm CarlJoy, an independent developer based in Hubei, China. I've built Minecraft servers, Rust game tools and a few shipped apps.",
      "These days I mostly write Swift and TypeScript, with some Rust now and then. I like taking a thing all the way: interface, backend, shipping and docs.",
    ],
    muted: "This site is where I collect what I make — and occasionally write about tech and life.",
    stack: ["Swift / SwiftUI", "TypeScript / React", "Rust / Tauri", "Node.js", "PostgreSQL", "AppKit"],
    principlesLabel: "How I work",
    principles: [
      {
        index: "01",
        title: "Ship it usable, then polish",
        description: "No half-finished features. The first version should solve one concrete problem.",
      },
      {
        index: "02",
        title: "Your data stays with you",
        description: "Local when possible, self-stored when possible. I don't live off collecting data.",
      },
      {
        index: "03",
        title: "Docs and shipping are part of the product",
        description:
          "Explaining how it works and how to report issues matters more than one more feature.",
      },
    ],
    quote: "“Keep the complexity to myself, leave the simplicity to the people using it.”",
    quoteBy: "— CarlJoy",
  },
  contact: {
    eyebrow: "CONTACT",
    title: ["Got something to build,", "or a bug to report?"],
    intro:
      "Custom development, product feedback or collaboration — just reach out. I usually reply to email within 1–2 days.",
    emailCta: "Send an email",
    mailSubject: "Custom development inquiry",
    notes: [
      "For custom work, tell me what it is, who it's for, and when you need it.",
      "For bugs, include your OS version and reproduction steps — it goes much faster.",
    ],
    items: {
      email: { label: "Email", note: "Custom work / collab / feedback" },
      github: { label: "GitHub", note: "Source / issues" },
      qq: { label: "QQ", note: "Quick questions" },
      afdian: { label: "Afdian", note: "Support independent dev" },
    },
    qqHint: "You can also add me on QQ or WeChat — just mention carljoy.cn.",
    wechat: {
      eyebrow: "QR / WECHAT",
      title: "Scan the QR code to add me",
      description:
        "Please mention carljoy.cn when adding me. The official account posts dev logs and release news.",
    },
    qr: {
      altSuffix: " QR code",
      bigTitle: "View %s QR code in full size",
      wechat: { title: "WeChat", description: "Scan to add me" },
      official: { title: "Official account", description: "Scan to follow" },
    },
  },
  footer: {
    description: "CarlJoy's personal site — notes on the software I've built, and a bit of life.",
    siteLabel: "Site",
    elsewhereLabel: "Elsewhere",
    elsewhere: { email: "Email", bilibili: "Bilibili", afdian: "Afdian" },
    copyright: "© %s CarlJoy · Tech & Life",
  },
}

export const dictionary: Record<Locale, Dictionary> = { zh, en }

export function getDictionary(locale: Locale): Dictionary {
  return dictionary[locale]
}
