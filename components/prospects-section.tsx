import { Rocket, Users, Building2, TrendingUp } from "lucide-react"

export function ProspectsSection() {
  const prospects = [
    {
      icon: Rocket,
      title: "2025-2027",
      subtitle: "Pilot loyiha",
      description: "Toshkent va atrofdagi hududlarda dron yetkazib berish xizmatini sinab ko'rish",
    },
    {
      icon: Building2,
      title: "2027-2029",
      subtitle: "Kengaytirish",
      description: "Barcha viloyat markazlari va yirik shaharlarni qamrab olish",
    },
    {
      icon: Users,
      title: "2029-2031",
      subtitle: "Ommaviylashtirish",
      description: "Qishloq va tog'li hududlarni to'liq qamrab olish, xizmatni barcha fuqarolarga yetkazish",
    },
    {
      icon: TrendingUp,
      title: "2031+",
      subtitle: "Mintaqaviy lider",
      description: "Markaziy Osiyo mintaqasida dron yetkazib berish sohasida yetakchi davlat maqomini qo'lga kiritish",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-blue-50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Rivojlanish Istiqbollari</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O'zbekistonda dron yetkazib berish tizimini joriy etish bo'yicha bosqichma-bosqich rejamiz
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-400 to-primary -translate-x-1/2" />

            <div className="space-y-12">
              {prospects.map((prospect, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 lg:text-right" style={{ textAlign: index % 2 === 0 ? "right" : "left" }}>
                    <div className="bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div
                        className="flex items-center gap-4 mb-4"
                        style={{ justifyContent: index % 2 === 0 ? "flex-end" : "flex-start" }}
                      >
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                          <prospect.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold mb-2 text-primary">{prospect.title}</h3>
                      <h4 className="text-xl font-semibold mb-4 text-foreground">{prospect.subtitle}</h4>
                      <p className="text-muted-foreground leading-relaxed">{prospect.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block relative z-10">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
                  </div>

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
