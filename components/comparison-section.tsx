import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, ExternalLink } from "lucide-react"
import {
  getTopCompaniesForCustomerService,
  formatPrice,
  getSetupCost,
  getMonthlyStartingPrice,
  type Company,
} from "@/lib/chatbot-data"

function getCompanyPros(company: Company): string[] {
  const pros: string[] = []

  // Add pros based on company data
  if (company.service.support_hours === "24/7") {
    pros.push("24/7 Nederlandse support")
  }

  if (company.functionality.ai_model.includes("GPT-4")) {
    pros.push("Geavanceerde GPT-4 AI")
  }

  if (company.service.dedicated_manager) {
    pros.push("Dedicated customer success manager")
  }

  if (company.pricing.setup_fee.amount === 0) {
    pros.push("Geen setup kosten")
  }

  if (company.service.implementation_time.includes("dagen")) {
    pros.push("Snelle implementatie")
  }

  if (company.functionality.integrations.length > 5) {
    pros.push("Uitgebreide integraties")
  }

  if (company.compliance.enterprise_security) {
    pros.push("Enterprise beveiliging")
  }

  if (company.functionality.sentiment_analysis) {
    pros.push("Sentiment analyse")
  }

  // Add specific pros based on company
  if (company.id === "watermelon-business") {
    pros.push("Onbeperkte gesprekken")
    pros.push("100+ talen ondersteuning")
  }

  if (company.id === "certigon-maatwerk") {
    pros.push("Volledig maatwerk oplossing")
    pros.push("Enterprise systeem integraties")
  }

  if (company.id === "chatkracht") {
    pros.push("6 maanden menselijke pilot")
    pros.push("Geleidelijke automatisering")
  }

  return pros.slice(0, 4) // Max 4 pros
}

function getCompanyCons(company: Company): string[] {
  const cons: string[] = []

  // Add cons based on company data
  if (getMonthlyStartingPrice(company) > 300) {
    cons.push("Hogere maandelijkse kosten")
  }

  if (
    company.service.implementation_time.includes("weken") ||
    company.service.implementation_time.includes("maanden")
  ) {
    cons.push("Langere implementatietijd")
  }

  if (!company.service.dedicated_manager) {
    cons.push("Geen dedicated manager")
  }

  if (company.service.support_hours === "Kantooruren") {
    cons.push("Beperkte support uren")
  }

  if (
    company.pricing.setup_fee.amount !== 0 &&
    typeof company.pricing.setup_fee.amount === "number" &&
    company.pricing.setup_fee.amount > 1000
  ) {
    cons.push("Hoge setup kosten")
  }

  if (!company.functionality.sentiment_analysis) {
    cons.push("Geen sentiment analyse")
  }

  // Add specific cons based on company
  if (company.id === "certigon-maatwerk") {
    cons.push("Complexe setup vereist")
  }

  if (company.id === "ai-chatbot-nl") {
    cons.push("Beperkte enterprise functies")
  }

  return cons.slice(0, 3) // Max 3 cons
}

function getKeyFeatures(company: Company): Record<string, boolean> {
  return {
    "Nederlandse taal": company.functionality.languages.includes("Nederlands"),
    "WhatsApp integratie": company.functionality.multi_channel.includes("WhatsApp"),
    "Live chat handover": company.functionality.live_handover,
    "Analytics dashboard": company.functionality.analytics === true || company.functionality.analytics === "Basis",
    "API toegang": company.functionality.integrations.some((int) => int.toLowerCase().includes("api")),
    "24/7 Support": company.service.support_hours === "24/7",
    "Enterprise beveiliging": company.compliance.enterprise_security,
    "Sentiment analyse": company.functionality.sentiment_analysis,
  }
}

export function ComparisonSection() {
  const topCompanies = getTopCompaniesForCustomerService()

  return (
    <section id="comparison" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top 3 Chatbot Providers voor Klantenservice Automatisering
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vergelijk de beste Nederlandse chatbot oplossingen gespecialiseerd in volledige klantenservice
            automatisering
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {topCompanies.map((company, index) => {
            const isPopular = index === 0 // First company (highest automation) is most popular
            const pros = getCompanyPros(company)
            const cons = getCompanyCons(company)
            const features = getKeyFeatures(company)

            return (
              <Card key={company.id} className={`relative ${isPopular ? "ring-2 ring-[#2ECC71] shadow-lg" : ""}`}>
                {isPopular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2ECC71] text-white">
                    Hoogste Automatisering
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-[#D5EDDB] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#2ECC71]">
                      {company.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{company.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-2">{company.product}</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{company.rating}</span>
                    <span className="text-xs text-gray-500">({company.reviews_count} reviews)</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-[#2ECC71]">
                      {formatPrice(company.pricing.monthly_fixed.amount)}/maand
                    </div>
                    <div className="text-sm text-gray-600">Setup: {getSetupCost(company)}</div>
                    <div className="text-sm font-medium text-[#4A90E2]">{company.automation_level} automatisering</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Voordelen:</h4>
                    <ul className="space-y-1">
                      {pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Aandachtspunten:</h4>
                    <ul className="space-y-1">
                      {cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Belangrijkste functies:</h4>
                    <div className="space-y-2">
                      {Object.entries(features)
                        .slice(0, 6)
                        .map(([feature, available]) => (
                          <div key={feature} className="flex items-center justify-between text-sm">
                            <span>{feature}</span>
                            {available ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <X className="h-4 w-4 text-red-500" />
                            )}
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button
                      className={`w-full ${
                        isPopular
                          ? "bg-[#2ECC71] hover:bg-[#27AE60] text-white"
                          : "text-[#4A90E2] border border-[#4A90E2] hover:bg-[#EBF4FF]"
                      }`}
                      variant={isPopular ? "default" : "outline"}
                    >
                      Meer Informatie
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full text-gray-600 hover:text-[#2ECC71]" asChild>
                      <a href={company.website} target="_blank" rel="noopener noreferrer">
                        Bezoek Website <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="text-[#4A90E2] border-[#4A90E2] hover:bg-[#EBF4FF]">
            Bekijk Volledige Vergelijking van Alle 4 Providers
          </Button>
          <p className="text-sm text-gray-600 mt-2">Inclusief gedetailleerde kostenberekening en feature matrix</p>
        </div>
      </div>
    </section>
  )
}
