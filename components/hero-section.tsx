import { Bot } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#E8F8F5] to-[#EBF4FF] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-[#D5EDDB] p-4 rounded-full">
              <Bot className="h-12 w-12 text-[#2ECC71] animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Vind de perfecte <span className="text-[#2ECC71]">chatbot</span> voor jouw bedrijf
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Vergelijk de beste chatbot providers in Nederland. Ontdek welke oplossing het beste past bij jouw bedrijf
            met onze uitgebreide vergelijking van functies, prijzen en klantervaringen om je klantenservice te verbeteren.
          </p>

          <div className="mt-12 text-lg text-gray-600 max-w-4xl mx-auto">
            <p>Verhoog je klanttevredenheid en zorg dat je 24 uur bereikbaar bent met een op maat gemaakte eigen chatbot</p>
          </div>
        </div>
      </div>
    </section>
  )
}