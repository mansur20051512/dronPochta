"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Clock, DollarSign, Leaf } from "lucide-react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: TrendingUp,
      value: 85,
      suffix: "%",
      label: "Tezlik oshishi",
      description: "An'anaviy usulga nisbatan",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      value: 30,
      suffix: " daq",
      label: "O'rtacha yetkazish vaqti",
      description: "Shahar ichida",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: DollarSign,
      value: 60,
      suffix: "%",
      label: "Xarajatlar kamayishi",
      description: "Transport va yoqilg'i",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Leaf,
      value: 95,
      suffix: "%",
      label: "CO₂ kamayishi",
      description: "Ekologik toza",
      color: "from-teal-500 to-green-500",
    },
  ]

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-primary via-blue-600 to-accent relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Raqamlarda Samaradorlik</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Dron texnologiyasi real natijalar va yuqori samaradorlik bilan isbotlangan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-4">
                  {isVisible && <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-blue-100 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({ end, suffix, duration }: { end: number; suffix: string; duration: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <div className="text-5xl font-bold text-white">
      {count}
      <span className="text-3xl">{suffix}</span>
    </div>
  )
}
