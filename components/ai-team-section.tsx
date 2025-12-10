"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, Clock, Zap } from "lucide-react"

const conversations = [
  {
    title: "Minecraft 服务器插件定制咨询",
    messages: [
      { text: "你好！我想开发一个 RPG 系统的插件，你们能做吗？", sender: "customer", delay: 0 },
      {
        text: "当然可以！我们有丰富的 Bukkit/PaperMC 插件开发经验。您需要实现哪些具体功能呢？",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "需要职业系统、技能树、装备系统，还有与玩家经济系统的整合。大概多久能完成？",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "这是一个比较完整的系统，预计需要 2-3 周开发时间。我们会先提供详细的技术方案和报价，您看过后再决定是否合作。",
        sender: "ai",
        delay: 3500,
      },
      { text: "好的！你们支持 1.20.x 版本吗？", sender: "customer", delay: 5000 },
      {
        text: "完全支持！1.12 到最新的 1.21 版本我们都可以开发。我马上给您发送详细方案，请留下您的联系方式。",
        sender: "ai",
        delay: 6500,
      },
    ],
  },
  {
    title: "官网开发需求",
    messages: [
      { text: "我们服务器需要一个官网，要有玩家排行榜、商城等功能。", sender: "customer", delay: 0 },
      {
        text: "没问题！我们可以用 Next.js + React 打造现代化的服务器官网。需要与服务器数据打通吗？",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "是的，需要实时显示服务器在线人数、玩家数据等。还有一个在线商城。",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "我们可以开发一个完整的后端 API，用 Java Spring 或 Node.js，实现服务器数据同步和商城系统。预算大概多少？",
        sender: "ai",
        delay: 4000,
      },
      { text: "预算 1-2 万左右，能做吗？", sender: "customer", delay: 5500 },
      {
        text: "可以的！这个预算能实现您的需求。我立即安排技术人员跟您沟通具体细节，给出详细的开发方案。",
        sender: "ai",
        delay: 6500,
      },
    ],
  },
  {
    title: "服务器运维支持",
    messages: [
      {
        text: "我的服务器最近卡顿很严重，TPS 只有 15 左右，能帮忙优化一下吗？",
        sender: "customer",
        delay: 0,
      },
      {
        text: "当然！请问您的服务器现在多少玩家在线？装了哪些插件？",
        sender: "ai",
        delay: 1000,
      },
      { text: "高峰期 100 人左右，插件大概 30 个，有很多生物和粒子效果。", sender: "customer", delay: 2500 },
      {
        text: "明白了。需要从几个方面优化：插件配置调优、实体限制、区块加载优化等。我们提供远程诊断服务，需要我现在帮您看看吗？",
        sender: "ai",
        delay: 3500,
      },
      {
        text: "太好了！远程诊断是免费的吗？",
        sender: "customer",
        delay: 5000,
      },
      {
        text: "首次诊断是免费的！我现在就可以帮您安排，通过 QQ 远程协助就能完成。请稍后添加我们的技术支持 QQ。",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
]

export function AITeamSection() {
  const sectionRef = useRef<HTMLElement>(null) // Added section ref for intersection observer
  const [isVisible, setIsVisible] = useState(false)
  const [currentConversation, setCurrentConversation] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("[v0] AI Team Section is now visible")
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

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [displayedMessages, isTyping])

  useEffect(() => {
    const conversation = conversations[currentConversation]
    setDisplayedMessages([])
    setIsTyping(false)

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    let messageIndex = 0

    const showNextMessage = () => {
      if (messageIndex >= conversation.messages.length) {
        // Wait 3 seconds then move to next conversation
        timeoutRef.current = setTimeout(() => {
          setCurrentConversation((prev) => (prev + 1) % conversations.length)
        }, 3000)
        return
      }

      const message = conversation.messages[messageIndex]

      timeoutRef.current = setTimeout(() => {
        if (message.sender === "ai") {
          setIsTyping(true)
          timeoutRef.current = setTimeout(() => {
            setDisplayedMessages((prev) => [...prev, message])
            setIsTyping(false)
            messageIndex++
            showNextMessage()
          }, 800) // Reduced typing delay from 1500ms to 800ms for faster replies
        } else {
          setDisplayedMessages((prev) => [...prev, message])
          messageIndex++
          showNextMessage()
        }
      }, message.delay)
    }

    showNextMessage()

    // Cleanup timeout on unmount or conversation change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentConversation])

  return (
    <section id="team" ref={sectionRef} className="relative z-10">
      <div className="bg-white rounded-b-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              关于我们
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              专注游戏与{" "}
              <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                Web 开发
              </span>
            </h2>

            <p
              className={`text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              我们是一群热爱游戏和技术的开发者，致力于为玩家和客户提供优质的服务。
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:h-[600px] space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div
                className={`transition-all duration-1000 delay-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">
                  6年的积累与成长
                </h3>

                <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-slate-700 leading-relaxed">
                  <p>
                    从2018年开始，我们专注于 Minecraft 服务器开发和运营，积累了丰富的经验。
                  </p>

                  <p>
                    超过2万玩家在我们的服务器中留下了足迹，这是对我们工作最好的认可。
                  </p>

                  <p className="text-lg lg:text-xl font-semibold text-slate-900">
                    现在，我们将这份热情延伸到更多领域。
                  </p>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-800 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="p-4 lg:p-6 bg-slate-50 rounded-xl border-l-4 border-slate-900">
                  <p className="text-slate-800 font-medium text-sm lg:text-base">
                    "从最初的插件开发到现在的服务器运营，Ooci 团队一直在进步。看到服务器里玩家们的欢声笑语，就是我们最大的动力。"
                  </p>
                  <p className="text-xs lg:text-sm text-slate-600 mt-2">— Ooci 团队成员</p>
                </div>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="max-w-md w-full">
                <div
                  className={`relative transition-all duration-1000 delay-600 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2rem] p-1">
                      <div className="bg-white rounded-[1.5rem] overflow-hidden">
                        {/* Status bar */}
                        <div className="bg-slate-50 px-6 py-3 flex justify-between items-center text-sm">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-medium text-slate-700">Ooci 工作室</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">在线</span>
                          </div>
                        </div>

                        <div className="bg-slate-900 px-6 py-4 text-white">
                          <div className="flex items-center gap-3">
                            <img
                              src="/logo.png"
                              alt="Ooci Studio"
                              className="w-8 h-8 rounded-full object-cover mr-2 mt-1 flex-shrink-0 bg-white p-1.5"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-sm">Ooci 工作室</h3>
                              <p className="text-xs text-slate-300">在线咨询服务</p>
                            </div>
                            <div className="text-xs text-green-400 flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              在线
                            </div>
                          </div>
                        </div>

                        {/* Chat messages */}
                        <div
                          ref={chatContainerRef}
                          className="h-96 overflow-y-scroll scrollbar-hide p-4 space-y-3 bg-slate-50"
                          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                          {displayedMessages.map((message, index) => (
                            <div
                              key={index}
                              className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
                            >
                              {message.sender === "ai" && (
                                <img
                                  src="/logo.png"
                                  alt="Ooci"
                                  className="w-6 h-6 rounded-full object-cover mr-2 mt-1 flex-shrink-0 bg-white p-1"
                                />
                              )}
                              <div
                                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                                  message.sender === "customer"
                                    ? "bg-slate-900 text-white rounded-br-md"
                                    : "bg-white text-slate-800 shadow-sm border border-slate-200 rounded-bl-md"
                                }`}
                              >
                                {message.text.split("\n").map((line, i) => (
                                  <div key={i}>{line}</div>
                                ))}
                              </div>
                              {message.sender === "customer" && (
                                <div className="w-6 h-6 rounded-full bg-slate-400 ml-2 mt-1 flex-shrink-0 flex items-center justify-center text-xs text-white font-medium">
                                  C
                                </div>
                              )}
                            </div>
                          ))}

                          {/* Typing indicator */}
                          {isTyping && (
                            <div className="flex justify-start items-start">
                              <img
                                src="/logo.png"
                                alt="Ooci"
                                className="w-6 h-6 rounded-full object-cover mr-2 mt-1 flex-shrink-0 bg-white p-1"
                              />
                              <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-slate-200">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                  <div
                                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                  ></div>
                                  <div
                                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="p-4 bg-white border-t border-slate-200">
                          <div className="flex items-center gap-3 bg-slate-100 rounded-full px-4 py-2">
                            <span className="text-slate-500 text-sm lg:text-base flex-1">正在回复中...</span>
                            <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                              <Zap className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
