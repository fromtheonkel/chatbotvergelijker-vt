'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send, User, Building, MessageSquare, Clock, CheckCircle, Phone, MapPin, Calendar } from "lucide-react"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Vul alle verplichte velden in (*)')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Voer een geldig e-mailadres in')
      return
    }

    setIsSubmitting(true)
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Naam: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Bedrijf: ${formData.company || 'Niet opgegeven'}\n\n` +
      `Bericht:\n${formData.message}\n\n` +
      `---\nVerzonden via contactformulier mijnchatbot.nl`
    )
    
    const mailtoLink = `mailto:info@mijnchatbot.nl?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
    
    // Show confirmation
    setTimeout(() => {
      alert('Uw email programma wordt geopend. Als dit niet automatisch gebeurt, stuur dan een email naar info@mijnchatbot.nl')
      setIsSubmitting(false)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@mijnchatbot.nl",
      action: "mailto:info@mijnchatbot.nl",
      actionText: "Direct emailen",
      color: "text-[#2ECC71]"
    },
    {
      icon: Clock,
      title: "Responstijd",
      value: "Binnen 24 uur",
      description: "Werkdagen binnen 8 uur",
      color: "text-[#4A90E2]"
    }
  ]



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-[#D5EDDB] p-3 rounded-full">
                <Mail className="h-8 w-8 text-[#2ECC71]" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Contact</h1>
                <p className="text-gray-600">Voor vragen kunt u ons mailen</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#2ECC71]" />
                    Contactgegevens
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-gray-100 p-2 rounded-lg">
                          <IconComponent className={`h-5 w-5 ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{info.title}</h4>
                          <p className="text-gray-700">{info.value}</p>
                          {info.description && (
                            <p className="text-sm text-gray-500">{info.description}</p>
                          )}
                          {info.action && (
                            <Button 
                              size="sm" 
                              className="mt-2 bg-[#2ECC71] hover:bg-[#27AE60] text-white"
                              asChild
                            >
                              <a href={info.action}>
                                {info.actionText}
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              <Card className="bg-[#D5EDDB] border-[#2ECC71]">
                <CardHeader>
                  <CardTitle className="text-[#2ECC71] flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Waarom vergelijken via ons?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#2ECC71]" />
                      <span>ervaring met AI chatbots</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#2ECC71]" />
                      <span>100% Nederlandse support</span>
                    </li>
                    
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Send className="h-5 w-5 text-[#4A90E2]" />
                      Stuur ons een bericht
                    </CardTitle>
                    <Badge className="bg-[#2ECC71] text-white">
                      Gratis advies
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Alle velden met een * zijn verplicht. Wij nemen binnen 24 uur contact met u op.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Naam *</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="Uw volledige naam"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-mailadres *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="uw.email@bedrijf.nl"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Bedrijfsnaam</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Uw bedrijfsnaam (optioneel)"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Onderwerp *</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Waar gaat uw bericht over?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Bericht *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Vertel ons over uw project en hoe wij kunnen helpen. Bijvoorbeeld: aantal klantvragen per dag, gewenste integraties, budget, etc."
                        className="resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-[#2ECC71] hover:bg-[#27AE60] text-white"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Versturen...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Verstuur Bericht
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="text-[#4A90E2] border-[#4A90E2] hover:bg-[#EBF4FF]"
                        asChild
                      >
                        <a href="mailto:info@mijnchatbot.nl">
                          <Mail className="mr-2 h-4 w-4" />
                          Direct emailen
                        </a>
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

            {/* Services Section */}



          {/* CTA Section */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-[#D5EDDB] to-[#EBF4FF] border-none">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Klaar om te starten met uw chatbot?
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  
                  <Button size="lg" variant="outline" className="text-[#4A90E2] border-[#4A90E2] hover:bg-[#EBF4FF]" asChild>
                    <a href="/vergelijking">
                      Bekijk vergelijking
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}