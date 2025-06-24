export interface Company {
  id: string;
  name: string;
  product: string;
  logo: string;
  location: string;
  founded: number;
  website: string;
  description: string;
  pricing: {
    setup_fee: {
      amount: number | string;
      currency: string;
      note: string;
    };
    monthly_fixed: {
      amount: number | string;
      currency: string;
      note: string;
    };
    monthly_variable: {
      per_conversation?: number;
      per_extra_agent?: number;
      per_extra_language?: number;
      per_message?: number;
      per_extra_user?: number;
      currency: string;
      included_conversations?: string;
      ai_surcharge?: string;
      note?: string;
    };
    development_support: {
      customer_success_manager: boolean;
      onboarding_included: boolean;
      training_included: boolean;
      pilot_period?: string;
      ai_playground?: boolean;
      monitoring_included?: boolean;
      lease_options?: boolean;
    };
  };
  functionality: {
    ai_model: string;
    agents_included: number | string;
    team_members: string;
    url_crawling: number | string;
    natural_language: boolean;
    sentiment_analysis: boolean;
    multi_channel: string[];
    languages: string[];
    integrations: string[];
    analytics: boolean | string;
    live_handover: boolean;
    voice_support: boolean;
    custom_training: boolean;
    ai_search?: boolean;
    document_scraper?: boolean;
    javascript_rendering?: boolean;
    ai_actions?: boolean;
    suggested_replies?: boolean;
    autopilot_mode?: boolean;
    backend_integration?: boolean;
    data_processing?: boolean;
    custom_databases?: boolean;
    file_upload?: boolean;
    calendar_integration?: boolean;
    human_pilot?: boolean;
    gradual_automation?: boolean;
  };
  service: {
    implementation_time: string;
    sla_uptime: string;
    support_hours: string;
    support_language: string;
    dedicated_manager: boolean;
    training_included: boolean;
    maintenance_included: boolean | string;
    white_label?: boolean;
    strategic_partnership?: boolean;
    monitoring_service?: string;
    pilot_service?: boolean;
    ai_playground?: boolean;
  };
  compliance: {
    gdpr: boolean;
    data_location: string;
    privacy_audit: boolean;
    enterprise_security: boolean;
  };
  target_company_size: string[];
  industries: string[];
  automation_level: string;
  rating: number;
  reviews_count: number;
  notable_clients: string[];
}

export const chatbotData = {
  companies: [
    {
      id: "watermelon-business",
      name: "Watermelon",
      product: "Business Pakket",
      logo: "/logos/watermelon.png",
      location: "Utrecht",
      founded: 2018,
      website: "https://watermelon.ai",
      description: "GPT-4 geïntegreerde AI Agents voor volledige klantenservice automatisering",

      pricing: {
        setup_fee: {
          amount: 0,
          currency: "EUR",
          note: "Geen setup kosten"
        },
        monthly_fixed: {
          amount: 399,
          currency: "EUR",
          note: "Business pakket startprijs"
        },
        monthly_variable: {
          per_conversation: 0.007,
          per_extra_agent: 49,
          per_extra_language: 49,
          currency: "EUR",
          included_conversations: "Basis bundel"
        },
        development_support: {
          customer_success_manager: true,
          onboarding_included: true,
          training_included: true
        }
      },

      functionality: {
        ai_model: "GPT-4",
        agents_included: 3,
        team_members: "Onbeperkt",
        url_crawling: 25000,
        natural_language: true,
        sentiment_analysis: true,
        multi_channel: ["Website", "WhatsApp", "Facebook", "Instagram"],
        languages: ["Nederlands", "Engels", "100+ talen"],
        integrations: ["Zapier", "API", "Webhooks", "AI Acties"],
        analytics: true,
        live_handover: true,
        voice_support: false,
        custom_training: true,
        ai_search: true,
        document_scraper: true,
        javascript_rendering: true
      },

      service: {
        implementation_time: "Enkele dagen",
        sla_uptime: "99.5%",
        support_hours: "24/7",
        support_language: "Nederlands",
        dedicated_manager: true,
        training_included: true,
        maintenance_included: true,
        white_label: true
      },

      compliance: {
        gdpr: true,
        data_location: "EU",
        privacy_audit: true,
        enterprise_security: true
      },

      target_company_size: ["MKB", "Enterprise"],
      industries: ["E-commerce", "Zorg", "Financieel", "Telecom", "Retail"],
      automation_level: "96%",
      rating: 4.6,
      reviews_count: 127,
      notable_clients: ["PrintAbout", "Greenwheels", "Brunel", "AFAS"]
    },

    {
      id: "trengo-ai",
      name: "Trengo",
      product: "AI HelpMate",
      logo: "/logos/trengo.png",
      location: "Utrecht",
      founded: 2020,
      website: "https://trengo.com/nl",
      description: "Omnichannel AI chatbot die 80%+ van repetitieve gesprekken automatiseert",

      pricing: {
        setup_fee: {
          amount: 0,
          currency: "EUR",
          note: "Geen setup kosten"
        },
        monthly_fixed: {
          amount: 205,
          currency: "EUR",
          note: "Boost plan, maandelijks gefactureerd"
        },
        monthly_variable: {
          per_conversation: 0.05,
          per_extra_user: 25,
          currency: "EUR",
          included_conversations: "300 per maand",
          ai_surcharge: "Voor WhatsApp, Voice en SMS"
        },
        development_support: {
          customer_success_manager: false,
          onboarding_included: true,
          training_included: true,
          ai_playground: true
        }
      },

      functionality: {
        ai_model: "GPT-4/Custom hybrid",
        agents_included: "AI HelpMate",
        team_members: "10 gebruikers",
        url_crawling: "Onbeperkt",
        natural_language: true,
        sentiment_analysis: true,
        multi_channel: ["Website", "WhatsApp", "Facebook", "Instagram", "Email", "SMS"],
        languages: ["Nederlands", "Engels", "26 talen ondersteuning"],
        integrations: ["API", "Zapier", "CRM", "Help Center", "Webhooks"],
        analytics: true,
        live_handover: true,
        voice_support: true,
        custom_training: true,
        ai_actions: true,
        suggested_replies: true,
        autopilot_mode: true
      },

      service: {
        implementation_time: "1-2 weken",
        sla_uptime: "99%",
        support_hours: "24/7",
        support_language: "Nederlands",
        dedicated_manager: false,
        training_included: true,
        maintenance_included: true,
        ai_playground: true
      },

      compliance: {
        gdpr: true,
        data_location: "EU",
        privacy_audit: false,
        enterprise_security: true
      },

      target_company_size: ["MKB", "Enterprise"],
      industries: ["Retail", "E-commerce", "Automotive", "Banking", "Hospitality", "Energy"],
      automation_level: "80-85%",
      rating: 4.3,
      reviews_count: 89,
      notable_clients: ["BAS World", "Betersport", "Billink", "Valk Exclusief Group"]
    },

    {
      id: "ai-chatbot-nl",
      name: "AI-chatbot.nl",
      product: "Business Automation Bot",
      logo: "/logos/ai-chatbot-nl.png",
      location: "Nederland",
      founded: 2020,
      website: "https://ai-chatbot.nl",
      description: "Betaalbare Nederlandse AI chatbots voor klantenservice automatisering",

      pricing: {
        setup_fee: {
          amount: 595,
          currency: "EUR",
          note: "Customer Service AI Chatbot inclusief setup"
        },
        monthly_fixed: {
          amount: 9.95,
          currency: "EUR",
          note: "Basis abonnement"
        },
        monthly_variable: {
          per_message: 0.07,
          currency: "EUR",
          note: "Per verwerkt bericht"
        },
        development_support: {
          customer_success_manager: false,
          onboarding_included: true,
          training_included: false,
          monitoring_included: true
        }
      },

      functionality: {
        ai_model: "GPT-3.5/Custom",
        agents_included: 1,
        team_members: "Beperkt",
        url_crawling: "Basis",
        natural_language: true,
        sentiment_analysis: false,
        multi_channel: ["Website", "WhatsApp", "Telegram", "Facebook", "SMS", "Email"],
        languages: ["Nederlands", "Engels"],
        integrations: ["Google Sheets", "Basic API", "Payment options"],
        analytics: "Basis",
        live_handover: true,
        voice_support: false,
        custom_training: true,
        file_upload: true,
        calendar_integration: true
      },

      service: {
        implementation_time: "1-2 weken",
        sla_uptime: "99%",
        support_hours: "Kantooruren",
        support_language: "Nederlands",
        dedicated_manager: false,
        training_included: false,
        maintenance_included: true,
        monitoring_service: "Optioneel"
      },

      compliance: {
        gdpr: true,
        data_location: "EU",
        privacy_audit: false,
        enterprise_security: false
      },

      target_company_size: ["Startup", "MKB"],
      industries: ["Retail", "Dienstverlening", "E-commerce"],
      automation_level: "70-80%",
      rating: 4.0,
      reviews_count: 28,
      notable_clients: ["MKB bedrijven", "Webshops"]
    },

    {
      id: "chatkracht",
      name: "Chatkracht",
      product: "Managed Chatbot Service",
      logo: "/logos/chatkracht.png",
      location: "Nederland",
      founded: 2019,
      website: "https://chatkracht.nl",
      description: "Chatbot service met 6 maanden menselijke pilot en geleidelijke automatisering",

      pricing: {
        setup_fee: {
          amount: "Op aanvraag",
          currency: "EUR",
          note: "Inclusief 6 maanden pilot door specialisten"
        },
        monthly_fixed: {
          amount: "300-800",
          currency: "EUR",
          note: "Geschat op basis van service niveau"
        },
        monthly_variable: {
          per_conversation: 0,
          currency: "EUR",
          note: "All-inclusive service model",
          included_conversations: "Inbegrepen"
        },
        development_support: {
          customer_success_manager: true,
          onboarding_included: true,
          training_included: true,
          pilot_period: "6 maanden"
        }
      },

      functionality: {
        ai_model: "GPT/Custom hybrid",
        agents_included: "Op maat",
        team_members: "Onbeperkt",
        url_crawling: "Onbeperkt",
        natural_language: true,
        sentiment_analysis: true,
        multi_channel: ["Website", "Social Media", "WhatsApp", "Multiple platforms"],
        languages: ["Nederlands", "Engels"],
        integrations: ["CRM", "Social Media", "Custom"],
        analytics: true,
        live_handover: true,
        voice_support: false,
        custom_training: true,
        human_pilot: true,
        gradual_automation: true
      },

      service: {
        implementation_time: "6 maanden pilot + implementatie",
        sla_uptime: "99%",
        support_hours: "24/7",
        support_language: "Nederlands",
        dedicated_manager: true,
        training_included: true,
        maintenance_included: true,
        pilot_service: true
      },

      compliance: {
        gdpr: true,
        data_location: "Nederland",
        privacy_audit: true,
        enterprise_security: true
      },

      target_company_size: ["MKB", "Enterprise"],
      industries: ["Alle sectoren"],
      automation_level: "Geleidelijk opbouwend naar 85%+",
      rating: 4.4,
      reviews_count: 67,
      notable_clients: ["Service bedrijven", "Retail organisaties"]
    }
  ]
};

export function getTopCompaniesForCustomerService(): Company[] {
  return chatbotData.companies.slice(0, 3);
}

export function formatPrice(amount: number | string): string {
  if (typeof amount === "number") {
    return `€${amount}`;
  }
  return amount.startsWith("€") ? amount : `€${amount}`;
}

export function getSetupCost(company: Company): string {
  if (typeof company.pricing.setup_fee.amount === "number") {
    return company.pricing.setup_fee.amount === 0 ? "Gratis" : `€${company.pricing.setup_fee.amount}`;
  }
  return company.pricing.setup_fee.amount;
}

export function getMonthlyStartingPrice(company: Company): number {
  if (typeof company.pricing.monthly_fixed.amount === "number") {
    return company.pricing.monthly_fixed.amount;
  }
  const range = company.pricing.monthly_fixed.amount.split("-");
  return parseInt(range[0]);
}