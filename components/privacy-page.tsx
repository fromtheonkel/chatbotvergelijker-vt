import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Lock, Mail, Calendar, Globe, User, CheckCircle, AlertTriangle, Cookie } from "lucide-react"

export function PrivacyPage() {
  const lastUpdated = "Juni 2025"

  const privacySections = [
    {
      icon: User,
      title: "Inleiding",
      badge: "Transparantie",
      badgeColor: "bg-[#2ECC71]",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            MijnChatbot.nl respecteert uw privacy en is toegewijd aan het beschermen van uw persoonlijke gegevens. 
            Dit privacybeleid legt uit hoe wij omgaan met informatie wanneer u onze website bezoekt en gebruik 
            maakt van onze diensten.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wij houden ons aan alle toepasselijke privacywetten, waaronder de Algemene Verordening 
            Gegevensbescherming (AVG/GDPR).
          </p>
        </div>
      )
    },
    {
      icon: Globe,
      title: "Welke gegevens verzamelen wij?",
      badge: "Minimaal",
      badgeColor: "bg-[#4A90E2]",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-semibold text-[#4A90E2] mb-3 flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Website Analytics (Google Analytics)
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#2ECC71] mt-0.5 flex-shrink-0" />
                <span>Anonieme bezoekersstatistieken</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#2ECC71] mt-0.5 flex-shrink-0" />
                <span>Pagina weergaven en navigatiepatronen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#2ECC71] mt-0.5 flex-shrink-0" />
                <span>Technische informatie (browsertype, apparaat)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#2ECC71] mt-0.5 flex-shrink-0" />
                <span>Geografische locatie (stad/regio niveau)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="font-semibold text-[#2ECC71] mb-3 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contactformulieren
            </h4>
            <p className="text-sm text-gray-700">
              Wanneer u contact met ons opneemt, verzamelen wij alleen de informatie 
              die u vrijwillig verstrekt (naam, e-mailadres, bericht).
            </p>
          </div>
        </div>
      )
    },
    {
      icon: Eye,
      title: "Google Analytics",
      badge: "Anoniem",
      badgeColor: "bg-orange-500",
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-900 mb-3">Anonieme gegevensverzameling</h4>
            <div className="space-y-3 text-sm text-orange-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#2ECC71]" />
                  <span>IP-adressen geanonimiseerd</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[#2ECC71]" />
                  <span>Geen persoonlijke identificatie</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#2ECC71]" />
                  <span>Alleen geaggregeerde data</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  <span>Geen marketing cookies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Cookie,
      title: "Cookies",
      badge: "Beperkt",
      badgeColor: "bg-purple-500",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <CheckCircle className="h-8 w-8 text-[#2ECC71] mx-auto mb-2" />
              <h4 className="font-semibold text-[#2ECC71] mb-1">Functionele Cookies</h4>
              <p className="text-xs text-gray-600">Cookie voorkeuren onthouden</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <Eye className="h-8 w-8 text-[#4A90E2] mx-auto mb-2" />
              <h4 className="font-semibold text-[#4A90E2] mb-1">Analytics Cookies</h4>
              <p className="text-xs text-gray-600">Alleen met toestemming</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <h4 className="font-semibold text-red-500 mb-1">Marketing Cookies</h4>
              <p className="text-xs text-gray-600">Worden NIET gebruikt</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
            U kunt cookies weigeren via onze cookie-banner of uw browserinstellingen. 
            Het weigeren heeft geen invloed op de functionaliteit van onze website.
          </p>
        </div>
      )
    },
    {
      icon: Shield,
      title: "Uw rechten onder de AVG",
      badge: "Beschermd",
      badgeColor: "bg-indigo-500",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <h4 className="font-semibold text-gray-900">Recht op inzage</h4>
                <p className="text-sm text-gray-600">Weten welke gegevens wij van u hebben</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <h4 className="font-semibold text-gray-900">Recht op correctie</h4>
                <p className="text-sm text-gray-600">Onjuiste gegevens laten corrigeren</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <h4 className="font-semibold text-gray-900">Recht op verwijdering</h4>
                <p className="text-sm text-gray-600">Uw gegevens laten wissen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <h4 className="font-semibold text-gray-900">Recht op bezwaar</h4>
                <p className="text-sm text-gray-600">Bezwaar maken tegen verwerking</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Mail,
      title: "Contact & Vragen",
      badge: "24u Response",
      badgeColor: "bg-[#2ECC71]",
      content: (
        <div className="space-y-4">
          <div className="bg-[#D5EDDB] border border-[#2ECC71] rounded-lg p-6">
            <h4 className="font-semibold text-[#2ECC71] mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Privacyvragen of rechten uitoefenen?
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-[#2ECC71]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">info@mijnchatbot.nl</p>
                  <p className="text-sm text-gray-600">Wij reageren binnen 30 dagen (AVG vereiste)</p>
                </div>
              </div>
              <Button className="bg-[#2ECC71] hover:bg-[#27AE60] text-white" asChild>
                <a href="mailto:info@mijnchatbot.nl?subject=Privacy%20vraag">
                  Direct contact opnemen
                </a>
              </Button>
            </div>
          </div>
        </div>
      )
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
                <Shield className="h-8 w-8 text-[#2ECC71]" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacybeleid</h1>
                <p className="text-gray-600">Laatst bijgewerkt: {lastUpdated}</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-[#4A90E2] mt-0.5" />
                <div className="text-left">
                  <h3 className="font-semibold text-[#4A90E2] mb-1">Transparantie voorop</h3>
                  <p className="text-[#4A90E2] text-sm">
                    Wij geloven in volledige transparantie over hoe we omgaan met uw gegevens. 
                    Dit beleid legt uit welke minimale gegevens we verzamelen en waarom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {privacySections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl text-gray-900">{section.title}</CardTitle>
                          <Badge className={`${section.badgeColor} text-white`}>
                            {section.badge}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {section.content}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Laatste wijzigingen sectie */}
          <Card className="mt-8 bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <Calendar className="h-5 w-5" />
                Wijzigingen in dit beleid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 text-sm">
                Wij behouden ons het recht voor dit privacybeleid te wijzigen om het in overeenstemming 
                te houden met wijzigingen in wetgeving of onze dienstverlening. Wijzigingen worden op 
                deze pagina gepubliceerd met een nieuwe datum.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vragen over privacy?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ons team staat klaar om al uw privacy gerelateerde vragen te beantwoorden en 
              u te helpen bij het uitoefenen van uw rechten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#2ECC71] hover:bg-[#27AE60] text-white" asChild>
                <a href="mailto:info@mijnchatbot.nl?subject=Privacy%20vraag">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact opnemen
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-[#4A90E2] border-[#4A90E2] hover:bg-[#EBF4FF]" asChild>
                <a href="/">
                  Terug naar homepage
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}