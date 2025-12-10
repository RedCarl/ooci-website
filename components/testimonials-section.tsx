"use client"

import { useEffect, useRef } from "react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      text: "这个服务器真的太好玩了！玩法创新，服务器也很稳定。已经玩了半年多，还会继续玩下去！",
      name: "玩家 Steve",
      role: "Minecraft 玩家",
    },
    {
      text: "插件开发很专业，功能强大且稳定。我们服务器的玩家都很喜欢这些定制功能！",
      name: "服务器主 Alex",
      role: "服务器运营者",
    },
    {
      text: "从服务器搭建到插件定制，一条龙服务非常到位。技术过硬，响应迅速，强烈推荐！",
      name: "小明",
      role: "服务器管理员",
    },
    {
      text: "官网做得非常漂亮，功能也很完善。玩家们都说看起来很专业，提升了服务器的整体形象。",
      name: "小红",
      role: "服务器运营者",
    },
    {
      text: "在这个服务器玩了很久，社区氛围好，管理团队也很负责。是我玩过最好的 MC 服务器！",
      name: "玩家 Creeper",
      role: "Minecraft 玩家",
    },
    {
      text: "小程序开发质量很高，用户体验流畅。上线后用户反馈很好，合作非常愉快！",
      name: "张先生",
      role: "小程序运营者",
    },
    {
      text: "后台管理系统功能强大且易用，大大提高了我们的工作效率。技术支持也很及时！",
      name: "李女士",
      role: "企业客户",
    },
    {
      text: "服务器优化做得非常好，现在 TPS 稳定在 20，玩家体验提升很多。真的很专业！",
      name: "服务器主",
      role: "技术负责人",
    },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section - Keep as user loves it */}
        <div className="text-center mb-16 md:mb-32">
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
            <div className="w-8 h-px bg-white/30"></div>
            客户评价
            <div className="w-8 h-px bg-white/30"></div>
          </div>
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
            玩家与客户的 <span className="font-medium italic">真实评价</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            来自 Minecraft 玩家、服务器运营者和合作客户的真实反馈
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[600px] md:min-h-[800px] overflow-hidden">
          <div
            className="flex gap-8 max-w-6xl"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <TestimonialsColumn testimonials={testimonials.slice(0, 3)} duration={15} className="flex-1" />
            <TestimonialsColumn
              testimonials={testimonials.slice(2, 5)}
              duration={12}
              className="flex-1 hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(1, 4)}
              duration={18}
              className="flex-1 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
