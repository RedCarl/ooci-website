"use client"

import { useEffect, useState } from "react"

const words = ["软件", "工具", "产品", "插件"]

export function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % words.length)
    }, 2400)
    return () => clearInterval(timer)
  }, [])

  return (
    <span
      className="relative inline-flex h-[1.08em] w-[2.6em] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white align-middle shadow-[0_10px_40px_-12px_rgba(255,255,255,0.35)]"
      aria-label="软件、工具、产品、插件"
    >
      <span
        key={index}
        aria-hidden="true"
        className="absolute inset-0 flex animate-word-in items-center justify-center"
        style={{ color: "#000" }}
      >
        {words[index]}
      </span>
    </span>
  )
}
