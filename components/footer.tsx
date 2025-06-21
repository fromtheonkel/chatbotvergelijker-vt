import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-[#2ECC71] mb-4">mijnchatbot</h3>
            <p className="text-gray-300 mb-6">De nummer 1 vergelijkingssite voor chatbot oplossingen in Nederland.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#2ECC71] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2ECC71] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2ECC71] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Snelle Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#comparison" className="text-gray-300 hover:text-[#2ECC71] transition-colors">
                  Vergelijking
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-[#2ECC71] transition-colors">
                  Functies
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-[#2ECC71] transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2ECC71] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2ECC71] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2ECC71] transition-colors">
                  Veelgestelde Vragen
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2ECC71] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2ECC71] transition-colors">
                  Privacy Beleid
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#2ECC71]" />
                <span className="text-gray-300">info@mijnchatbot.nl</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#2ECC71]" />
                <span className="text-gray-300">+31 20 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#2ECC71]" />
                <span className="text-gray-300">Amsterdam, Nederland</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 mijnchatbot. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
