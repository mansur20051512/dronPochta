"use client"

import { Building2, Heart, ShoppingBag, Truck } from "lucide-react"

export function UseCasesSection() {
  const useCases = [
    {
      icon: ShoppingBag,
      title: "Elektron tijorat",
      description:
        "Online do'konlardan xaridlarni tez yetkazib berish. Buyurtmalar bir necha daqiqada mijozlarga yetib boradi.",
      stats: "30 daqiqada yetkazish",
      color: "from-blue-500 to-cyan-500",
      image: "/online-shopping-delivery-drone.jpg",
    },
    {
      icon: Heart,
      title: "Tibbiy yordam",
      description:
        "Shoshilinch tibbiy buyumlar, dorilar va qon namunalarini tezkor yetkazish. Hayot qutqaruvchi xizmat.",
      stats: "15 daqiqada yetkazish",
      color: "from-red-500 to-pink-500",
      image: "/medical-emergency-drone-delivery.jpg",
    },
    {
      icon: Building2,
      title: "Biznes hujjatlari",
      description: "Muhim hujjatlar, shartnomalar va korporativ posilkalarni xavfsiz va tez yetkazish.",
      stats: "20 daqiqada yetkazish",
      color: "from-purple-500 to-indigo-500",
      image: "/business-documents-delivery.jpg",
    },
    {
      icon: Truck,
      title: "Qishloq joylari",
      description:
        "Qiyin kirish mumkin bo'lgan hududlarga pochta va posilkalarni yetkazish. Geografik to'siqlarni bartaraf etish.",
      stats: "Har qanday joy",
      color: "from-green-500 to-emerald-500",
      image: "/rural-area-drone-delivery.jpg",
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-semibold text-primary">QO'LLASH SOHALARI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Real Hayotda Foydalanish</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dron texnologiyasi turli sohalarda samarali qo'llanilmoqda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${useCase.color} opacity-60`} />
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/30 inline-block">
                      <span className="text-white font-semibold text-sm">{useCase.stats}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
