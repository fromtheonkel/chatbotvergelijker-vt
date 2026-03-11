import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Zakelijk — LokaalAI | Lokale AI voor bedrijven",
  description: "Ontdek hoe je als bedrijf kunt overstappen op privacy-vriendelijke, lokale AI-oplossingen. Geen data naar de cloud, volledige controle.",
}

export default function ZakelijkPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-8 h-8 text-brand" />
          </div>
          <h1 className="text-3xl font-bold text-dark mb-3">Zakelijk</h1>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Binnenkort: een uitgebreide gids over hoe bedrijven kunnen overstappen op lokale AI. Privacy-vriendelijk, kostenefficiënt en zonder afhankelijkheid van externe diensten.
          </p>
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-brand hover:text-brand-dark transition-colors"
          >
            &larr; Terug naar home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
