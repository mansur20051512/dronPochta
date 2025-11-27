"use client"

import { useState } from "react"
import { Calculator, Package, MapPin, Clock } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function CostCalculator() {
  const [weight, setWeight] = useState([2])
  const [distance, setDistance] = useState([10])

  const calculateCost = () => {
    const baseCost = 5000
    const weightCost = weight[0] * 2000
    const distanceCost = distance[0] * 500
    return baseCost + weightCost + distanceCost
  }

  const calculateTime = () => {
    return Math.ceil((distance[0] / 60) * 60)
  }

  const traditionalCost = calculateCost() * 2.5

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full mb-6">
              <Calculator className="w-5 h-5" />
              <span className="font-semibold">Xarajatlarni hisoblang</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Yetkazib berish narxini aniqlang</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dron yetkazib berish xizmati qancha tejamkor ekanligini ko'ring
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator */}
            <div className="bg-card rounded-3xl p-8 border border-border shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Parametrlarni kiriting</h3>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      <label className="font-semibold text-foreground">Og'irligi</label>
                    </div>
                    <span className="text-2xl font-bold text-primary">{weight[0]} kg</span>
                  </div>
                  <Slider value={weight} onValueChange={setWeight} max={10} min={0.5} step={0.5} className="w-full" />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>0.5 kg</span>
                    <span>10 kg</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      <label className="font-semibold text-foreground">Masofa</label>
                    </div>
                    <span className="text-2xl font-bold text-accent">{distance[0]} km</span>
                  </div>
                  <Slider value={distance} onValueChange={setDistance} max={50} min={1} step={1} className="w-full" />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>1 km</span>
                    <span>50 km</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Dron yetkazib berish</h3>
                </div>
                <div className="text-5xl font-bold mb-2">{calculateCost().toLocaleString()} so'm</div>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-4 h-4" />
                  <span>Taxminiy vaqt: {calculateTime()} daqiqa</span>
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">An'anaviy yetkazish</h3>
                </div>
                <div className="text-4xl font-bold mb-2 text-muted-foreground line-through">
                  {traditionalCost.toLocaleString()} so'm
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Taxminiy vaqt: 3-5 kun</span>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                <p className="text-sm text-muted-foreground mb-2">Sizning tejamingiz</p>
                <p className="text-3xl font-bold text-green-600">
                  {(traditionalCost - calculateCost()).toLocaleString()} so'm
                </p>
                <p className="text-sm text-green-600 mt-2">
                  {Math.round(((traditionalCost - calculateCost()) / traditionalCost) * 100)}% arzonroq
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
