import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-20 bg-[#2E5BBA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Klaar om de perfecte chatbot te vinden?</h2>

        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Start vandaag nog met onze gratis vergelijking en ontdek binnen 5 minuten welke chatbot het beste past bij
          jouw bedrijf.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-white text-[#2E5BBA] hover:bg-gray-100" asChild>
            <Link href="/vergelijking">
              Start Gratis Vergelijking
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2E5BBA]" asChild>
            <a href="#contact">
              Plan een Demo
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-blue-100">
            <CheckCircle className="h-5 w-5" />
            <span>100% Gratis</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-blue-100">
            <CheckCircle className="h-5 w-5" />
            <span>Geen Verplichtingen</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-blue-100">
            <CheckCircle className="h-5 w-5" />
            <span>Direct Resultaat</span>
          </div>
        </div>
      </div>
    </section>
  )
}
