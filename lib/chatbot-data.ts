import chatbotData from "@/data/chatbot-companies.json"

export interface Company {
  id: string
  name: string
  product: string
  logo: string
  location: string
  founded: number
  website: string
  description: string
  pricing: {
    setup_fee: {
      amount: number | string
      currency: string
      note: string
    }
    monthly_fixed: {
      amount: number | string
      currency: string
      note: string
    }
    monthly_variable?: any
    development_support: any
  }
  functionality: {
    ai_model: string
    agents_included: number | string
    team_members: string
    url_crawling: number | string
    natural_language: boolean
    sentiment_analysis: boolean
    multi_channel: string[]
    languages: string[]
    integrations: string[]
    analytics: boolean | string
    live_handover: boolean
    voice_support: boolean
    custom_training: boolean
    [key: string]: any
  }
  service: {
    implementation_time: string
    sla_uptime: string
    support_hours: string
    support_language: string
    dedicated_manager: boolean
    training_included: boolean
    maintenance_included: boolean | string
    [key: string]: any
  }
  compliance: {
    gdpr: boolean
    data_location: string
    privacy_audit: boolean
    enterprise_security: boolean
  }
  target_company_size: string[]
  industries: string[]
  automation_level: string
  rating: number
  reviews_count: number
  notable_clients: string[]
}

export function getCompanies(): Company[] {
  return chatbotData.companies as Company[]
}

export function getTopCompaniesForCustomerService(): Company[] {
  const companies = getCompanies()

  // Filter companies focused on customer service automation (80%+ automation)
  const customerServiceFocused = companies.filter((company) => {
    const automationLevel = Number.parseFloat(company.automation_level.replace(/[^\d.-]/g, ""))
    return automationLevel >= 80
  })

  // Sort by automation level (descending) and then by monthly cost (ascending)
  return customerServiceFocused
    .sort((a, b) => {
      const aAutomation = Number.parseFloat(a.automation_level.replace(/[^\d.-]/g, ""))
      const bAutomation = Number.parseFloat(b.automation_level.replace(/[^\d.-]/g, ""))

      if (aAutomation !== bAutomation) {
        return bAutomation - aAutomation // Higher automation first
      }

      // If automation is similar, sort by monthly cost
      const aMonthlyCost = getMonthlyStartingPrice(a)
      const bMonthlyCost = getMonthlyStartingPrice(b)
      return aMonthlyCost - bMonthlyCost // Lower cost first
    })
    .slice(0, 3) // Top 3
}

export function getMonthlyStartingPrice(company: Company): number {
  const monthlyFixed = company.pricing.monthly_fixed.amount
  if (typeof monthlyFixed === "number") {
    return monthlyFixed
  }
  if (typeof monthlyFixed === "string") {
    // Extract the lowest number from ranges like "200-1000" or "300-800"
    const match = monthlyFixed.match(/(\d+)/)
    return match ? Number.parseInt(match[1]) : 0
  }
  return 0
}

export function formatPrice(amount: number | string, currency = "EUR"): string {
  if (typeof amount === "number") {
    return `€${amount}`
  }
  if (typeof amount === "string") {
    if (amount.includes("-")) {
      return `€${amount}`
    }
    return amount
  }
  return "Op aanvraag"
}

export function getSetupCost(company: Company): string {
  const setupFee = company.pricing.setup_fee.amount
  if (setupFee === 0) {
    return "Gratis"
  }
  if (typeof setupFee === "string") {
    if (setupFee.includes("aanvraag")) {
      return "Op aanvraag"
    }
    return `€${setupFee}`
  }
  return `€${setupFee}`
}
