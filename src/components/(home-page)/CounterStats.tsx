"use client"

import { useEffect, useState, useRef } from "react"

function useOnScreen(ref: React.RefObject<HTMLDivElement | null>): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const current = ref.current
    if (!current) return

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.3 }
    )

    observer.observe(current)

    return () => {
      observer.disconnect()
    }
  }, [ref]) // ref rarely changes, or can use [] if you prefer

  return isIntersecting
}

export default function CounterStats() {
  const stats = [
    { number: 102, suffix: "k+", label: "Emails Sent" },
    { number: 64, suffix: "k+", label: "SMS Sent" },
    { number: 19, suffix: "k+", label: "Calls Triggered" },
    { number: 84, suffix: "k+", label: "WhatsApp Text" },
  ]

  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const intervalTime = duration / steps

    const intervals: NodeJS.Timeout[] = []

    stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.number / steps

      const id = setInterval(() => {
        current += increment

        setCounts((prev) => {
          const updated = [...prev]

          if (current >= stat.number) {
            updated[index] = stat.number
            clearInterval(id)
          } else {
            updated[index] = Math.floor(current)
          }

          return updated
        })
      }, intervalTime)

      intervals.push(id)
    })

    return () => {
      intervals.forEach(clearInterval)
    }
  }, [isVisible])

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-r from-blue-100 via-white to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map(({ label, suffix }, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <div className="text-5xl font-semibold text-gradient bg-clip-text text-transparent from-teal-600 to-teal-300 bg-gradient-to-r drop-shadow-lg">
                {counts[i]}
                <span className="text-3xl font-semibold">{suffix}</span>
              </div>
              <p className="mt-6 text-gray-700 text-xl font-semibold tracking-wide">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}