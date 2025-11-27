import { Check, X } from "lucide-react"

export function ComparisonSection() {
  const features = [
    { feature: "Yetkazish tezligi", traditional: "5-7 kun", drone: "30-60 daqiqa", droneWins: true },
    { feature: "Geografik qamrov", traditional: "Cheklangan", drone: "Keng qamrov", droneWins: true },
    { feature: "Xarajatlar", traditional: "Yuqori", drone: "60% arzon", droneWins: true },
    { feature: "Ekologik ta'sir", traditional: "CO₂ chiqindi", drone: "Ekologik toza", droneWins: true },
    { feature: "Ob-havo bog'liqligi", traditional: "Yuqori", drone: "Past", droneWins: true },
    { feature: "Xizmat vaqti", traditional: "8-18", drone: "24/7", droneWins: true },
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Taqqoslash</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              An'anaviy yetkazib berish va dron texnologiyasi o'rtasidagi farq
            </p>
          </div>

          <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-primary to-accent text-white">
              <div className="font-bold text-lg">Xususiyat</div>
              <div className="font-bold text-lg text-center">An'anaviy usul</div>
              <div className="font-bold text-lg text-center">Dron texnologiyasi</div>
            </div>

            {/* Rows */}
            {features.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 gap-4 p-6 ${index % 2 === 0 ? "bg-muted/30" : "bg-card"}`}>
                <div className="font-semibold text-foreground flex items-center">{item.feature}</div>
                <div className="text-center flex items-center justify-center gap-2 text-muted-foreground">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>{item.traditional}</span>
                </div>
                <div className="text-center flex items-center justify-center gap-2 text-foreground font-semibold">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{item.drone}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl">
              <p className="text-lg font-bold">Dron texnologiyasi barcha ko'rsatkichlarda ustunlik qiladi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
