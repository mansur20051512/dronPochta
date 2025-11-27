"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Play, Sparkles, Rocket, TrendingUp, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 animate-gradient"
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-40 right-20 w-56 h-56 bg-cyan-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-36 h-36 bg-indigo-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-40 right-10 w-44 h-44 bg-sky-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="inline-block mb-8 px-8 py-4 glass-effect rounded-full border-2 border-white/40 animate-pulse-glow shadow-2xl">
            <span className="text-sm font-bold tracking-wider flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              KELAJAK TEXNOLOGIYASI
              <Rocket className="w-5 h-5 text-yellow-300" />
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in-up drop-shadow-2xl">
            Dronlar bilan
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Tezkor Yetkazib Berish
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-blue-50 leading-relaxed max-w-4xl mx-auto font-medium animate-fade-in-up drop-shadow-lg"
            style={{ animationDelay: "0.2s" }}
          >
            O'zbekiston pochta tizimidagi "oxirgi mil" muammolarini zamonaviy dron texnologiyasi yordamida hal qilish
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-12 py-8 rounded-full shadow-2xl hover:shadow-white/50 transition-all hover:scale-110 font-bold group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Award className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Bog'lanish
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-3 border-white text-white hover:bg-white/30 text-lg px-12 py-8 rounded-full bg-white/15 backdrop-blur-md font-bold group shadow-xl"
              onClick={() => document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-125 transition-transform" />
              Batafsil ma'lumot
            </Button>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              {
                value: "85%",
                label: "Tezroq",
                sublabel: "An'anaviy usulga nisbatan",
                icon: Rocket,
                color: "from-cyan-400 to-blue-500",
              },
              {
                value: "60%",
                label: "Arzonroq",
                sublabel: "Xarajatlar kamayishi",
                icon: TrendingUp,
                color: "from-blue-400 to-indigo-500",
              },
              {
                value: "24/7",
                label: "Xizmat",
                sublabel: "Uzluksiz ishlash",
                icon: Award,
                color: "from-indigo-400 to-purple-500",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="glass-effect rounded-3xl p-8 border-2 border-white/30 hover:bg-white/25 transition-all hover:scale-110 hover:shadow-2xl group"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-black mb-3 drop-shadow-lg">{item.value}</div>
                  <div className="text-blue-100 font-bold text-xl mb-2">{item.label}</div>
                  <div className="text-blue-200 text-sm font-medium opacity-90">{item.sublabel}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
          <ArrowDown className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
      </div>
    </section>
  )
}
