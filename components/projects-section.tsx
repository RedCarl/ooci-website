"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Minecraft 服务器开发",
    description: "专业的 Bukkit、PaperMC、Fabric 插件和模组开发。6年服务器搭建运营经验，为超过2万玩家提供优质游戏体验。",
    tags: ["Bukkit", "PaperMC", "Fabric", "Java"],
  },
  {
    title: "服务器运营管理",
    description: "提供完整的 Minecraft 服务器运营方案，包括服务器搭建、优化、维护和社区管理，让您的服务器稳定高效运行。",
    tags: ["运营", "优化", "管理"],
  },
  {
    title: "Web 应用开发",
    description: "官网、后台管理系统等 Web 应用开发。使用现代技术栈，打造高性能、易维护的网站应用。",
    tags: ["Next.js", "React", "Vue", "TypeScript"],
  },
  {
    title: "微信小程序开发",
    description: "微信小程序定制开发，从需求分析到上线运营，提供一站式解决方案。",
    tags: ["微信小程序", "UniAPP"],
  },
  {
    title: "后端服务开发",
    description: "Java 后端服务和 Python 应用程序开发，构建稳定可靠的后端系统。",
    tags: ["Java", "Spring", "Python"],
  },
  {
    title: "定制化开发服务",
    description: "根据您的需求提供定制化开发服务，从游戏插件到 Web 应用，我们都能为您实现。",
    tags: ["定制开发", "技术咨询"],
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            我们提供的服务
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            我们的{" "}
            <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              服务项目
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            从 Minecraft 服务器到 Web 应用，我们提供专业的开发和运营服务。
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative transition-all duration-1000"
              style={{
                transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
              }}
            >
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
