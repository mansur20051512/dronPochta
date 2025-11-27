import { Zap, DollarSign, Leaf, Shield, Clock, Globe } from "lucide-react"

export function AdvantagesSection() {
  const advantages = [
    {
      number: "01",
      icon: Zap,
      title: "Yuqori tezlik",
      description: "Dronlar to'g'ridan-to'g'ri yo'l orqali uchib, yetkazish vaqtini 10 barobarga qisqartiradi",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      icon: DollarSign,
      title: "Iqtisodiy samaradorlik",
      description: "Yoqilg'i va transport xarajatlarini 60% gacha kamaytirish imkoniyati",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      number: "03",
      icon: Globe,
      title: "Keng qamrov",
      description: "Qiyin kirish mumkin bo'lgan tog'li va qishloq hududlarni qamrab olish",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "04",
      icon: Leaf,
      title: "Ekologik toza",
      description: "Elektr dronlar karbonat angidrid chiqindilarini minimal darajaga tushiradi",
      gradient: "from-teal-500 to-green-500",
    },
    {
      number: "05",
      icon: Shield,
      title: "Xavfsizlik",
      description: "Zamonaviy GPS va sun'iy intellekt tizimlar orqali xavfsiz yetkazib berish",
      gradient: "from-orange-500 to-red-500",
    },
    {
      number: "06",
      icon: Clock,
      title: "24/7 xizmat",
      description: "Ob-havo sharoitidan qat'i nazar, doimiy xizmat ko'rsatish imkoniyati",
      gradient: "from-indigo-500 to-blue-500",
    },
  ]

  return (
    <section id="advantages" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Dron Texnologiyasining Afzalliklari</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Zamonaviy dron texnologiyasi pochta xizmatlarini tubdan o'zgartirish imkoniyatini beradi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative bg-card p-8 rounded-2xl border-2 border-border hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <div className="absolute top-6 right-6 text-7xl font-bold bg-gradient-to-br from-primary/10 to-accent/10 bg-clip-text text-transparent group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                  {advantage.number}
                </div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {advantage.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
