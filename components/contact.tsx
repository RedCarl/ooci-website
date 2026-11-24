import Image from "next/image"
import { ArrowUpRight, Github, Heart, Mail, MessageCircle } from "lucide-react"
import { site } from "@/lib/site"

const contacts = [
  {
    id: "email",
    label: "邮件",
    value: site.author.email,
    href: `mailto:${site.author.email}?subject=来自 carljoy.cn 的留言`,
    icon: Mail,
    note: "定制开发 / 合作 / 反馈",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/RedCarl",
    href: site.github,
    icon: Github,
    note: "看源码 / 提 Issue",
  },
  {
    id: "qq",
    label: "QQ",
    value: site.author.qq,
    href: "https://wpa.qq.com/msgrd?v=3&uin=2940966174&site=qq&menu=yes",
    icon: MessageCircle,
    note: "快速沟通",
  },
  {
    id: "afdian",
    label: "爱发电",
    value: "afdian.com/a/nyanyastudios",
    href: site.afdian,
    icon: Heart,
    note: "支持独立开发",
  },
]

function QrCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-2.5 sm:w-[172px]">
      <a
        href={image}
        target="_blank"
        rel="noreferrer"
        title={`查看${title}二维码大图`}
        className="block overflow-hidden rounded-xl bg-white p-1.5"
      >
        <Image
          src={image}
          alt={`${title}二维码`}
          width={720}
          height={720}
          className="h-auto w-full"
        />
      </a>
      <p className="mt-2.5 text-center text-[11px] text-white/75">{title}</p>
      <p className="mt-0.5 text-center text-[9px] text-white/30">{description}</p>
    </div>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-16 px-4 pb-24 pt-8 md:pb-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/12 bg-[radial-gradient(60%_120px_at_50%_0%,rgba(255,255,255,0.08),transparent)] p-6 md:p-10 lg:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(110,160,255,0.14),transparent_70%)] blur-2xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">联系 / CONTACT</p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              想做个东西，
              <br />
              或者想吐槽一个 Bug？
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              定制开发、产品反馈、合作，都可以直接找我。邮件通常 1–2 天内回复。
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${site.author.email}?subject=定制开发咨询`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
              >
                <Mail className="size-4" />
                发邮件
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm text-white/75 transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                <Github className="size-4" />
                GitHub
              </a>
            </div>

            <div className="mt-7 space-y-2 text-[11px] leading-relaxed text-white/35">
              <p>定制开发请简单说明：要做什么、给谁用、什么时候要。</p>
              <p>反馈 Bug 请附上系统版本和复现步骤，会快很多。</p>
            </div>
          </div>

          <div className="space-y-2.5">
            {contacts.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.id === "email" ? undefined : "_blank"}
                  rel={item.id === "email" ? undefined : "noreferrer"}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/50 transition-colors group-hover:text-white">
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="text-sm text-white/80">{item.label}</span>
                      <span className="truncate text-[11px] text-white/35">{item.note}</span>
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-white/45">
                      {item.value}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>
              )
            })}

            <p className="pt-2 text-center text-[10px] tracking-wide text-white/25">
              也可以直接加 QQ 或微信，备注「来自 carljoy.cn」。
            </p>
          </div>
        </div>

        <div className="relative mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-sm">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">扫码 / WECHAT</p>
              <p className="mt-3 text-lg font-medium text-white">微信扫码，备注来意</p>
              <p className="mt-2 text-xs leading-relaxed text-white/40">
                加好友请备注「来自 carljoy.cn」。公众号会发一些开发记录和新品消息。
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto">
              <QrCard image="/contact/wechat.jpg" title="微信" description="扫码添加好友" />
              <QrCard image="/contact/wechat-public.jpg" title="公众号" description="扫码关注" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
