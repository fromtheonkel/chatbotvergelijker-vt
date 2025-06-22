// lib/chatbot-data.ts

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
      per_message?: number;
      per_extra_agent?: number;
      per_extra_language?: number;
      development_hours?: number;
      currency: string;
      note?: string;
      included_conversations?: string;
    };
    development_support: {
      customer_success_manager: boolean;
      onboarding_included: boolean;
      training_included: boolean;
      pilot_period?: string;
      lease_options?: boolean;
      monitoring_included?: boolean;
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
    [key: string]: any;
  };
  service: {
    implementation_time: string;
    sla_uptime: string;
    support_hours: string;
    support_language: string;
    dedicated_manager: boolean;
    training_included: boolean;
    maintenance_included: boolean | string;
    [key: string]: any;
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

export const chatbotData: { companies: Company[] } = {
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
      id: "certigon-maatwerk",
      name: "Certigon",
      product: "Maatwerk Chatbot Oplossing",
      logo: "/logos/certigon.png",
      location: "Nederland",
      founded: 2010,
      website: "https://chatbotontwikkeling.nl",
      description: "Volledig maatwerk chatbots met enterprise systeem integraties",
      
      pricing: {
        setup_fee: {
          amount: "5000-25000",
          currency: "EUR",
          note: "Maatwerk ontwikkeling, ook lease opties"
        },
        monthly_fixed: {
          amount: "200-1000",
          currency: "EUR",
          note: "Hosting, onderhoud en monitoring"
        },
        monthly_variable: {
          per_conversation: 0.02,
          development_hours: 75,
          currency: "EUR",
          note: "Doorlopende ontwikkeling beschikbaar"
        },
        development_support: {
          customer_success_manager: false,
          onboarding_included: true,
          training_included: true,
          lease_options: true
        }
      },
      
      functionality: {
        ai_model: "Custom/GPT hybrid",
        agents_included: "Op maat",
        team_members: "Onbeperkt",
        url_crawling: "Onbeperkt",
        natural_language: true,
        sentiment_analysis: true,
        multi_channel: ["Website", "WhatsApp", "Facebook", "SMS", "Skype"],
        languages: ["Nederlands", "Engels"],
        integrations: ["Exact", "AFAS", "Microsoft Dynamics", "Hubspot", "Salesforce", "Custom API"],
        analytics: true,
        live_handover: true,
        voice_support: false,
        custom_training: true,
        backend_integration: true,
        data_processing: true,
        custom_databases: true
      },
      
      service: {
        implementation_time: "6-12 weken",
        sla_uptime: "99%",
        support_hours: "Kantooruren",
        support_language: "Nederlands",
        dedicated_manager: false,
        training_included: true,
        maintenance_included: "Optioneel",
        strategic_partnership: true
      },
      
      compliance: {
        gdpr: true,
        data_location: "Nederland",
        privacy_audit: false,
        enterprise_security: true
      },
      
      target_company_size: ["MKB", "Enterprise"],
      industries: ["Productie", "Logistiek", "B2B Services", "Manufacturing"],
      automation_level: "80-90%",
      rating: 4.2,
      reviews_count: 45,
      notable_clients: ["Diverse productie bedrijven", "Logistieke dienstverleners"]
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
          note: "All-inclusive service model"
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
    }
  ]
};

// Utility functions
export function getTopCompaniesForCustomerService(): Company[] {
  return chatbotData.companies
    .sort((a, b) => {
      // Betere parsing voor automatisering percentages
      const getAutomationNumber = (level: string): number => {
        if (level.includes('96%')) return 96;
        if (level.includes('80-90%')) return 85; // Gemiddelde van range
        if (level.includes('85%+')) return 85;
        if (level.includes('70-80%')) return 75; // Gemiddelde van range
        
        // Fallback: neem eerste nummer
        const match = level.match(/(\d+)/);
        return match ? parseInt(match[1]) : 0;
      };
      
      const aAuto = getAutomationNumber(a.automation_level);
      const bAuto = getAutomationNumber(b.automation_level);
      return bAuto - aAuto;
    })
    .slice(0, 3);
}

export function formatPrice(amount: number | string): string {
  if (typeof amount === 'string') {
    if (amount === 'Op aanvraag') return 'Op aanvraag';
    const range = amount.split('-');
    return `€${range[0]}-${range[1]}`;
  }
  return `€${amount.toLocaleString()}`;
}

export function getSetupCost(company: Company): string {
  const amount = company.pricing.setup_fee.amount;
  if (amount === 0) return 'Gratis';
  if (typeof amount === 'string') return amount;
  return `€${amount.toLocaleString()}`;
}

export function getMonthlyStartingPrice(company: Company): number {
  const amount = company.pricing.monthly_fixed.amount;
  if (typeof amount === 'string') {
    return parseInt(amount.split('-')[0]);
  }
  return amount;
}
