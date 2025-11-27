import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Plane className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl">DronPost</h3>
                  <p className="text-sm text-blue-200">Kelajak yetkazib berish tizimi</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
                O'zbekiston pochta tizimini zamonaviy dron texnologiyasi bilan modernizatsiya qilish orqali tez, xavfsiz
                va ekologik toza yetkazib berish xizmatini taqdim etamiz.
              </p>
              
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Tezkor Havolalar</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#hero" className="text-blue-200 hover:text-white transition-colors">
                    Bosh sahifa
                  </a>
                </li>
                <li>
                  <a href="#problem" className="text-blue-200 hover:text-white transition-colors">
                    Muammolar
                  </a>
                </li>
                <li>
                  <a href="#advantages" className="text-blue-200 hover:text-white transition-colors">
                    Afzalliklar
                  </a>
                </li>
                <li>
                  <a href="#prospects" className="text-blue-200 hover:text-white transition-colors">
                    Istiqbollar
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-200 hover:text-white transition-colors">
                    Aloqa
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Aloqa</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <a href="mailto:munirakushimova6@gmail.com " className="text-blue-200 hover:text-white transition-colors">
                  munirakushimova6@gmail.com 
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <a href="tel:+998 (93) 752 55 66" className="text-blue-200 hover:text-white transition-colors">
                  +998 (93) 752 55 66
                  
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-blue-200">
                  Xorazm viloyati
                    <br />
                    Urganch shahar
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
              <p>© 2025 DronPost. Barcha huquqlar himoyalangan.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">
                  Maxfiylik siyosati
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Foydalanish shartlari
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Yordam
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
