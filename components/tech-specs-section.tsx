"use client"

import { Battery, Gauge, Package, Radio, Ruler, Weight } from "lucide-react"

export function TechSpecsSection() {
  const specs = [
    {
      icon: Gauge,
      title: "Maksimal tezlik",
      value: "80 km/soat",
      description: "Yuqori tezlikda xavfsiz parvoz",
    },
    {
      icon: Ruler,
      title: "Parvoz masofasi",
      value: "50 km",
      description: "Bir zaryadda uzoq masofa",
    },
    {
      icon: Weight,
      title: "Yuk sig'imi",
      value: "5 kg gacha",
      description: "Turli xil posilkalar uchun",
    },
    {
      icon: Battery,
      title: "Batareya quvvati",
      value: "45 daqiqa",
      description: "Uzoq muddatli ishlash",
    },
    {
      icon: Radio,
      title: "Boshqaruv radiusi",
      value: "10 km",
      description: "Keng qamrovli aloqa",
    },
    {
      icon: Package,
      title: "Kunlik yetkazish",
      value: "200+ ta",
      description: "Yuqori unumdorlik",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233b82f6' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-semibold text-primary">TEXNIK XUSUSIYATLAR</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Zamonaviy Dron Texnologiyasi</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Yuqori sifatli komponentlar va ilg'or texnologiyalar bilan jihozlangan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <spec.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">{spec.title}</h3>
                <div className="text-3xl font-bold text-primary mb-3">{spec.value}</div>
                <p className="text-muted-foreground">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
