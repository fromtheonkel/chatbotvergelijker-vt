'use client'

import React from 'react'
import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Check, X, Star, ExternalLink, Filter, Calculator, ArrowLeft, Euro, Bot } from "lucide-react"
import { chatbotData, formatPrice, getSetupCost, type Company } from "@/lib/chatbot-data"

function calculateTotalCost(company: Company, monthlyConversations: number) {
  let setupCost = 0;
  let monthlyCost = 0;

  if (typeof company.pricing.setup_fee.amount === 'number') {
    setupCost = company.pricing.setup_fee.amount;
  } else if (company.pricing.setup_fee.amount !== 'Op aanvraag') {
    const range = company.pricing.setup_fee.amount.split('-');
    setupCost = parseInt(range[0]);
  }

  if (typeof company.pricing.monthly_fixed.amount === 'number') {
    monthlyCost = company.pricing.monthly_fixed.amount;
  } else {
    const range = company.pricing.monthly_fixed.amount.split('-');
    monthlyCost = parseInt(range[0]);
  }

  if (company.pricing.monthly_variable.per_conversation) {
    monthlyCost += company.pricing.monthly_variable.per_conversation * monthlyConversations;
  }
  if (company.pricing.monthly_variable.per_message) {
    monthlyCost += company.pricing.monthly_variable.per_message * monthlyConversations;
  }

  return { setupCost, monthlyCost, yearlyTotal: setupCost + (monthlyCost * 12) };
}

interface FullComparisonProps {
  onBack?: () => void;
}

export function FullComparison({ onBack }: FullComparisonProps) {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [currentView, setCurrentView] = useState('overview');
  const [conversations, setConversations] = useState([1000]);
  const [filters, setFilters] = useState({
    maxMonthlyFee: 1000,
    companySize: '',
  });

  const filteredCompanies = useMemo(() => {
    return chatbotData.companies.filter(company => {
      const monthlyFee = typeof company.pricing.monthly_fixed.amount === 'string'
        ? parseInt(company.pricing.monthly_fixed.amount.split('-')[0])
        : company.pricing.monthly_fixed.amount;
      
      if (monthlyFee > filters.maxMonthlyFee) return false;
      if (filters.companySize && !company.target_company_size.includes(filters.companySize)) return false;
      
      return true;
    });
  }, [filters]);

  const CompanyCard = ({ company, isSelected, onToggleSelect }: any) => {
    const costs = calculateTotalCost(company, conversations[0]);
    
    return (
      <Card className={`h-full transition-all duration-200 hover:shadow-lg ${isSelected ? 'ring-2 ring-[#2ECC71]' : ''}`}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="w-12 h-12 bg-[#D5EDDB] rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-[#2ECC71]">
                  {company.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">{company.name}</CardTitle>
              <p className="text-sm text-gray-600 mt-1">{company.product}</p>
              <div className="flex items-center mt-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">
                  {company.rating} ({company.reviews_count} reviews)
                </span>
              </div>
            </div>
            <Button
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => onToggleSelect(company.id)}
              className={`ml-4 ${isSelected ? 'bg-[#2ECC71] hover:bg-[#27AE60]' : 'text-[#4A90E2] border-[#4A90E2] hover:bg-[#EBF4FF]'}`}
            >
              {isSelected ? "Geselecteerd" : "Vergelijken"}
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-700">{company.description}</p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center text-[#2ECC71]">
              <Euro className="w-4 h-4 mr-2" />
              Kosten
            </h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Setup:</span>
                <span className="font-medium">{getSetupCost(company)}</span>
              </div>
              <div className="flex justify-between">
                <span>Per maand:</span>
                <span className="font-medium">{formatPrice(company.pricing.monthly_fixed.amount)}</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t text-[#2ECC71]">
                <span>Jaar 1 totaal:</span>
                <span>€{costs.yearlyTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center text-[#4A90E2]">
              <Bot className="w-4 h-4 mr-2" />
              Features
            </h4>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="bg-[#D5EDDB] text-[#2ECC71]">{company.functionality.ai_model}</Badge>
              <Badge variant="secondary" className="bg-[#EBF4FF] text-[#4A90E2]">{company.automation_level}</Badge>
              <Badge variant="secondary">{company.service.implementation_time}</Badge>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <div className="text-sm text-gray-600">
              {company.service.implementation_time}
            </div>
            <Button variant="ghost" size="sm" className="text-[#2ECC71] hover:text-[#27AE60]" asChild>
              <a href={company.website} target="_blank" rel="noopener noreferrer">
                Website <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  const ComparisonTable = () => {
    const selectedCompaniesData = chatbotData.companies.filter(c => selectedCompanies.includes(c.id));
    
    if (selectedCompaniesData.length === 0) {
      return (
        <Card>
          <CardContent className="p-8 text-center">
            <Bot className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Geen chatbots geselecteerd</h3>
            <p className="text-gray-600 mb-4">Selecteer ten minste 2 chatbots om te vergelijken</p>
            <Button 
              onClick={() => setCurrentView('overview')}
              className="bg-[#2ECC71] hover:bg-[#27AE60] text-white"
            >
              Terug naar overzicht
            </Button>
          </CardContent>
        </Card>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Vergelijking</h2>
          <Button 
            variant="outline" 
            onClick={() => setCurrentView('overview')}
            className="text-[#4A90E2] border-[#4A90E2] hover:bg-[#EBF4FF]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar overzicht
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-[#2ECC71]">
              <Calculator className="w-5 h-5 mr-2" />
              Kosten vergelijking ({conversations[0].toLocaleString()} gesprekken/maand)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {selectedCompaniesData.map(company => {
                const costs = calculateTotalCost(company, conversations[0]);
                return (
                  <div key={company.id} className="bg-gray-50 p-4 rounded-lg border border-[#D5EDDB]">
                    <h4 className="font-semibold text-lg mb-3 text-[#2ECC71]">{company.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Setup kosten:</span>
                        <span>€{costs.setupCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Maandelijkse kosten:</span>
                        <span>€{costs.monthlyCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-base pt-2 border-t border-[#2ECC71]">
                        <span>Totaal jaar 1:</span>
                        <span className="text-[#2ECC71]">€{costs.yearlyTotal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const FilterPanel = () => (
    <Card className="mb-6 border-[#D5EDDB]">
      <CardHeader>
        <CardTitle className="flex items-center text-[#2ECC71]">
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Max maandelijkse kosten: €{filters.maxMonthlyFee.toLocaleString()}
            </label>
            <Slider
              value={[filters.maxMonthlyFee]}
              onValueChange={(value) => setFilters(prev => ({ ...prev, maxMonthlyFee: value[0] }))}
              max={1000}
              min={0}
              step={50}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Bedrijfsgrootte</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md focus:border-[#2ECC71] focus:ring-1 focus:ring-[#2ECC71]"
              value={filters.companySize}
              onChange={(e) => setFilters(prev => ({ ...prev, companySize: e.target.value }))}
            >
              <option value="">Alle</option>
              <option value="Startup">Startup</option>
              <option value="MKB">MKB</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Gesprekken per maand: {conversations[0].toLocaleString()}
            </label>
            <Slider
              value={conversations}
              onValueChange={setConversations}
              max={10000}
              min={100}
              step={100}
              className="w-full"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'overview' && (
          <div className="space-y-6">
            <div className="text-center py-8">
              <div className="flex items-center justify-center mb-4">
                {onBack && (
                  <Button variant="ghost" onClick={onBack} className="mr-4 text-[#4A90E2] hover:text-[#2ECC71]">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Terug
                  </Button>
                )}
                <div className="flex items-center gap-4">
<a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
    <img 
      src="/mijnchatbot_logo.svg" 
      alt="MijnChatbot.nl Logo" 
      className="h-24 w-auto"
    />
</a>
<div className="text-gray-300">|</div>
<h1 className="text-4xl font-bold text-gray-900">Populaire Chatbot Providers</h1>
</div>
                
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vergelijk alle Nederlandse chatbot oplossingen met interactieve filters en kostencalculatie.
              </p>
            </div>

            <FilterPanel />

            {selectedCompanies.length > 0 && (
              <Card className="bg-[#EBF4FF] border-[#4A90E2]">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-[#4A90E2]">
                        {selectedCompanies.length} chatbot{selectedCompanies.length !== 1 ? 's' : ''} geselecteerd
                      </h3>
                      <p className="text-sm text-gray-600">
                        {selectedCompanies.map(id => 
                          chatbotData.companies.find(c => c.id === id)?.name
                        ).join(', ')}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => setCurrentView('comparison')}
                        disabled={selectedCompanies.length < 2}
                        className="bg-[#2ECC71] hover:bg-[#27AE60] text-white"
                      >
                        Vergelijken ({selectedCompanies.length})
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setSelectedCompanies([])}
                        className="text-[#4A90E2] border-[#4A90E2] hover:bg-[#EBF4FF]"
                      >
                        Wissen
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCompanies.map(company => (
                <CompanyCard
                  key={company.id}
                  company={company}
                  isSelected={selectedCompanies.includes(company.id)}
                  onToggleSelect={(id: string) => {
                    setSelectedCompanies(prev => 
                      prev.includes(id) 
                        ? prev.filter(cId => cId !== id)
                        : [...prev, id]
                    );
                  }}
                />
              ))}
            </div>
          </div>
        )}
        {currentView === 'comparison' && <ComparisonTable />}
      </div>
    </div>
  );
}