import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah van der Berg",
    company: "TechStart Amsterdam",
    role: "CEO",
    content:
      "Dankzij mijnchatbot hebben we binnen een week de perfecte chatbot gevonden. De vergelijking was helder en heeft ons veel tijd bespaard.",
    rating: 5,
  },
  {
    name: "Mark Janssen",
    company: "RetailPlus",
    role: "Marketing Manager",
    content:
      "Fantastische service! De objectieve vergelijking heeft ons geholpen om de juiste keuze te maken voor onze e-commerce chatbot.",
    rating: 5,
  },
  {
    name: "Lisa de Vries",
    company: "ServiceDesk Pro",
    role: "Operations Director",
    content:
      "Eindelijk een platform dat alle chatbot providers eerlijk vergelijkt. Zeer tevreden met onze uiteindelijke keuze.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Wat onze klanten zeggen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek waarom bedrijven mijnchatbot vertrouwen voor hun chatbot keuze
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6">"{testimonial.content}"</blockquote>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-emerald-600 font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
