"use client"

import { useEffect, useState } from "react"

export function RotatingWord({
  words,
  ariaLabel,
  width,
}: {
  words: string[]
  ariaLabel: string
  width: number
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % words.length)
    }, 2400)
    return () => clearInterval(timer)
  }, [words])

  return (
    <span
      className="relative inline-flex h-[1.08em] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white align-middle shadow-[0_10px_40px_-12px_rgba(255,255,255,0.35)]"
      style={{ width: `${width}em` }}
      aria-label={ariaLabel}
    >
      <span
        key={index}
        aria-hidden="true"
        className="absolute inset-0 flex animate-word-in items-center justify-center whitespace-nowrap"
        style={{ color: "#000" }}
      >
        {words[index]}
      </span>
    </span>
  )
}
