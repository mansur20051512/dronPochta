import { AlertCircle, Clock, MapPin, TrendingUp } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Sekin yetkazib berish",
      description: "Qishloq va uzoq hududlarga pochta jo'natmalarini yetkazish 5-7 kungacha cho'ziladi",
      stat: "5-7 kun",
    },
    {
      icon: MapPin,
      title: "Geografik qiyinchiliklar",
      description: "Tog'li va qiyin kirish mumkin bo'lgan hududlarga xizmat ko'rsatishda katta muammolar",
      stat: "40% qamrov",
    },
    {
      icon: TrendingUp,
      title: "Yuqori xarajatlar",
      description: "An'anaviy transport vositalari bilan yetkazib berish iqtisodiy jihatdan samarasiz",
      stat: "3x qimmat",
    },
    {
      icon: AlertCircle,
      title: "Cheklangan qamrov",
      description: "Barcha hududlarni qamrab olish uchun yetarli infratuzilma va resurslar yo'q",
      stat: "60% etishmovchilik",
    },
  ]

  return (
    <section id="problem" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Hozirgi Muammolar</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O'zbekiston pochta tizimida "oxirgi mil" yetkazib berish jarayonida bir qator jiddiy muammolar mavjud
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start gap-6 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <problem.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-foreground">{problem.title}</h3>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {problem.stat}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
