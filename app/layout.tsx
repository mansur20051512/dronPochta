import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "DronPost - Kelajak Yetkazib Berish Tizimi | O'zbekiston",
  description:
    "O'zbekiston pochta tizimidagi oxirgi mil muammolarini zamonaviy dron texnologiyasi orqali hal qilish. Tez, arzon va ekologik toza yetkazib berish xizmati.",
  keywords: ["dron", "yetkazib berish", "O'zbekiston", "pochta", "texnologiya", "innovatsiya"],
  authors: [{ name: "DronPost Team" }],
  openGraph: {
    title: "DronPost - Kelajak Yetkazib Berish Tizimi",
    description: "Zamonaviy dron texnologiyasi bilan tez va xavfsiz yetkazib berish",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
