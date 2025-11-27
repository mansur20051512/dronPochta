"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Dronlar qanday qilib xavfsizlikni ta'minlaydi?",
      answer:
        "Zamonaviy dronlar GPS navigatsiya, to'siqlarni aniqlash sensori, avtomatik qaytish tizimi va real vaqtda monitoring bilan jihozlangan. Har bir parvoz oldindan rejalashtiriladi va nazorat qilinadi.",
    },
    {
      question: "Ob-havo sharoitlari dron ishlashiga ta'sir qiladimi?",
      answer:
        "Ha, kuchli shamol, yomg'ir yoki tuman kabi og'ir ob-havo sharoitlarida dronlar parvoz qilmaydi. Tizim avtomatik ravishda ob-havoni tekshiradi va xavfsiz sharoitlarda ishlaydi.",
    },
    {
      question: "Dron yetkazib berish qancha vaqt oladi?",
      answer:
        "Shahar ichida o'rtacha 15-30 daqiqa, qishloq joylarda 30-45 daqiqa. Bu an'anaviy yetkazib berishdan 3-5 marta tezroq.",
    },
    {
      question: "Qanday turdagi posilkalarni yetkazish mumkin?",
      answer:
        "5 kg gacha bo'lgan har qanday posilka: hujjatlar, dorilar, oziq-ovqat, kichik buyumlar va boshqalar. Maxsus qadoqlash orqali xavfsizlik ta'minlanadi.",
    },
    {
      question: "Dron yetkazib berish xizmati qancha turadi?",
      answer:
        "Narxlar an'anaviy yetkazib berishdan 40-60% arzonroq. Yoqilg'i va haydovchi xarajatlari yo'qligi tufayli tejamkor.",
    },
    {
      question: "Texnologiya qonuniy jihatdan tartibga solinganmi?",
      answer:
        "Ha, O'zbekiston hukumati dron texnologiyasi uchun maxsus qoidalar ishlab chiqmoqda. Pilot loyihalar allaqachon muvaffaqiyatli sinovdan o'tkazilmoqda.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-semibold text-primary">KO'P BERILADIGAN SAVOLLAR</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Sizni qiziqtirgan savollar</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dron yetkazib berish xizmati haqida eng ko'p so'raladigan savollar
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-border"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-foreground pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
