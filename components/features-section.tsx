import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, BarChart3, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Uitgebreide Vergelijking",
    description: "Vergelijk alle belangrijke functies, prijzen en reviews van chatbot providers op één plek.",
  },
  {
    icon: BarChart3,
    title: "Data-gedreven Inzichten",
    description: "Krijg toegang tot echte gebruikersdata en prestatiemetrieken om de beste keuze te maken.",
  },
  {
    icon: Shield,
    title: "Onafhankelijk & Betrouwbaar",
    description: "Onze vergelijkingen zijn volledig onafhankelijk en gebaseerd op objectieve criteria.",
  },
  {
    icon: Zap,
    title: "Snelle Implementatie",
    description: "Vind binnen 5 minuten de perfecte chatbot oplossing voor jouw specifieke behoeften.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Waarom mijnchatbot?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wij maken het kiezen van de juiste chatbot eenvoudig en betrouwbaar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#D5EDDB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-[#2ECC71]" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
