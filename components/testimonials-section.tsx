"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Aziz Rahimov",
      role: "Onlayn do'kon egasi",
      company: "TezSavdo.uz",
      image: "/uzbek-businessman.jpg",
      rating: 5,
      text: "Dron yetkazib berish xizmati bizning biznesimizni butunlay o'zgartirdi. Mijozlar buyurtmalarini bir soat ichida olishadi va bu juda katta ustunlik!",
    },
    {
      name: "Dilnoza Karimova",
      role: "Tibbiyot muassasasi direktori",
      company: "Sog'lom Hayot klinikasi",
      image: "/uzbek-doctor-woman.jpg",
      rating: 5,
      text: "Shoshilinch dori-darmonlarni yetkazib berishda dronlar hayot qutqarmoqda. Tezlik va ishonchlilik - bu biz uchun eng muhim.",
    },
    {
      name: "Jamshid Tursunov",
      role: "Qishloq xo'jaligi fermer",
      company: "Yashil Vodiy fermasi",
      image: "/uzbek-farmer.jpg",
      rating: 5,
      text: "Qishloq joylariga yetkazib berish har doim muammo edi. Endi dronlar orqali barcha kerakli narsalarni tez va arzon olamiz.",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Mijozlarimiz fikrlari</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dron yetkazib berish xizmatidan foydalanuvchilarning haqiqiy sharhlari
            </p>
          </div>

          <div className="relative">
            <div className="bg-card rounded-3xl p-12 border border-border shadow-2xl">
              <Quote className="w-16 h-16 text-primary/20 mb-6" />

              <div className="mb-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-2xl text-foreground leading-relaxed mb-8">"{testimonials[activeIndex].text}"</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">{testimonials[activeIndex].name}</h4>
                  <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                  <p className="text-sm text-primary font-semibold">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-transparent"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-primary w-8" : "bg-muted hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-transparent"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
