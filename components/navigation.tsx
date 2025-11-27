"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Plane, Zap, Shield } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Bosh sahifa", href: "#hero" },
    { label: "Muammolar", href: "#problem" },
    { label: "Afzalliklar", href: "#advantages" },
    { label: "Statistika", href: "#stats" },
    { label: "Istiqbollar", href: "#prospects" },
    { label: "Aloqa", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-blue-100"
          : "bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => scrollToSection("#hero")}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Plane className="w-6 h-6 text-white transform -rotate-45" />
              </div>
            </div>

            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent ${
                  !isScrolled ? "text-white bg-gradient-to-r from-white to-blue-100" : ""
                }`}
              >
                DronPost
              </span>
              <span className={`text-xs font-medium ${isScrolled ? "text-blue-600" : "text-blue-100"}`}>
                Kelajak Texnologiyasi
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 relative group ${
                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity ${
                    isScrolled ? "bg-blue-50" : "bg-white/10 backdrop-blur-sm"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("#advantages")}
              variant="outline"
              className={`rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "border-blue-600 text-blue-600 hover:bg-blue-50"
                  : "border-white text-white hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              <Zap className="w-4 h-4 mr-2" />
              Afzalliklar
            </Button>

            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6"
            >
              <Shield className="w-4 h-4 mr-2" />
              Bog'lanish
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled ? "text-blue-600 hover:bg-blue-50" : "text-white hover:bg-white/20"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-blue-100 shadow-2xl animate-slide-in-down">
          <div className="container mx-auto px-4 py-6 space-y-2">

            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all font-semibold animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 space-y-3">

              <Button
                onClick={() => scrollToSection("#advantages")}
                variant="outline"
                className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold"
              >
                <Zap className="w-4 h-4 mr-2" />
                Afzalliklar
              </Button>

              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-xl font-semibold shadow-lg"
              >
                <Shield className="w-4 h-4 mr-2" />
                Bog'lanish
              </Button>

            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
