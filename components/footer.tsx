import Image from "next/image"
import { ArrowUpRight, Github, Mail } from "lucide-react"
import { site } from "@/lib/site"

const navLinks = [
  { name: "作品", href: "#work" },
  { name: "关于", href: "#about" },
  { name: "联系", href: "#contact" },
]

const elsewhere = [
  { name: "GitHub", href: site.github, icon: Github },
  { name: "邮件", href: `mailto:${site.author.email}`, icon: Mail },
  { name: "哔哩哔哩", href: site.bilibili, icon: null },
  { name: "爱发电", href: site.afdian, icon: null },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 pb-10 pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_0.7fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <Image
                  src="/logo.png"
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 brightness-0 invert"
                />
              </span>
              <div>
                <p className="text-sm font-semibold tracking-wide text-white">技术与生活</p>
                <p className="mt-0.5 text-[10px] tracking-[0.18em] text-white/30">CARLJOY</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-xs leading-relaxed text-white/40">
              CarlJoy 的个人网站。记录做过的软件，也记录一点生活。
            </p>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.22em] text-white/30">站内</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs text-white/45 transition-colors hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.22em] text-white/30">别处</h3>
            <ul className="mt-4 space-y-2.5">
              {elsewhere.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={item.href.startsWith("mailto") ? undefined : "noreferrer"}
                      className="group inline-flex items-center gap-1.5 text-xs text-white/45 transition-colors hover:text-white"
                    >
                      {Icon ? <Icon className="size-3.5" /> : null}
                      {item.name}
                      <ArrowUpRight className="size-3 text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/60" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[10px] text-white/30 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} CarlJoy · 技术与生活</p>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white/60"
          >
            鄂ICP备2024059854号-2
          </a>
        </div>
      </div>
    </footer>
  )
}
