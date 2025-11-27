"use client"

import { useState } from "react"
import { MapPin, Package, CheckCircle2 } from "lucide-react"

export function InteractiveMapSection() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  const regions = [
    { id: "tashkent", name: "Toshkent", coverage: 95, deliveries: 1250, x: 50, y: 40 },
    { id: "samarkand", name: "Samarqand", coverage: 85, deliveries: 890, x: 35, y: 50 },
    { id: "bukhara", name: "Buxoro", coverage: 80, deliveries: 650, x: 25, y: 55 },
    { id: "fergana", name: "Farg'ona", coverage: 90, deliveries: 1100, x: 70, y: 35 },
    { id: "namangan", name: "Namangan", coverage: 88, deliveries: 950, x: 75, y: 30 },
    { id: "andijan", name: "Andijon", coverage: 87, deliveries: 920, x: 80, y: 32 },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              O'zbekiston bo'ylab qamrov
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dron yetkazib berish xizmati barcha viloyatlarda faol ishlaydi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Map */}
            <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
              <div className="absolute inset-0 bg-[url('/uzbekistan-map-outline.jpg')] bg-contain bg-center bg-no-repeat opacity-20" />

              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeRegion === region.id
                      ? "bg-gradient-to-br from-primary to-accent scale-125 shadow-2xl"
                      : "bg-primary/60 hover:bg-primary hover:scale-110"
                  }`}
                  style={{ left: `${region.x}%`, top: `${region.y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </button>
              ))}
            </div>

            {/* Region Details */}
            <div className="space-y-6">
              {activeRegion ? (
                <>
                  {regions
                    .filter((r) => r.id === activeRegion)
                    .map((region) => (
                      <div
                        key={region.id}
                        className="bg-card rounded-2xl p-8 border border-border shadow-xl animate-in fade-in slide-in-from-right duration-500"
                      >
                        <h3 className="text-3xl font-bold mb-6 text-foreground">{region.name}</h3>

                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-muted-foreground">Qamrov darajasi</span>
                              <span className="text-2xl font-bold text-primary">{region.coverage}%</span>
                            </div>
                            <div className="h-3 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                                style={{ width: `${region.coverage}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl">
                            <Package className="w-8 h-8 text-primary" />
                            <div>
                              <p className="text-sm text-muted-foreground">Oylik yetkazilmalar</p>
                              <p className="text-2xl font-bold text-foreground">{region.deliveries.toLocaleString()}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl">
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                            <div>
                              <p className="text-sm text-muted-foreground">Muvaffaqiyatli yetkazish</p>
                              <p className="text-2xl font-bold text-foreground">98.5%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </>
              ) : (
                <div className="bg-card rounded-2xl p-8 border border-border text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-xl text-muted-foreground">
                    Viloyat ma'lumotlarini ko'rish uchun xaritadagi nuqtani bosing
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-2xl text-white">
                  <p className="text-sm opacity-90 mb-2">Jami viloyatlar</p>
                  <p className="text-4xl font-bold">14</p>
                </div>
                <div className="bg-gradient-to-br from-accent to-primary p-6 rounded-2xl text-white">
                  <p className="text-sm opacity-90 mb-2">O'rtacha qamrov</p>
                  <p className="text-4xl font-bold">87%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
