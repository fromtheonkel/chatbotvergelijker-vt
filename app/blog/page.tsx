import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog — LokaalAI | Nieuws over lokale AI en open source modellen",
  description:
    "Artikelen over nieuwe open source LLM-modellen, GPU-ontwikkelingen, VRAM-tips en alles over lokaal AI draaien.",
}

const articles = [
  {
    slug: "open-source-modellen-via-cloud",
    title: "Open source modellen via de cloud: gratis of goedkoop zonder eigen hardware",
    description:
      "Geen zware GPU? Draai open source modellen via Groq, Together AI en OpenRouter. Met prijsvergelijking en setup-instructies voor Claude Code.",
    date: "6 maart 2026",
    readTime: "6 min",
  },
  {
    slug: "claude-code-ollama-lokaal",
    title: "Claude Code met Ollama: lokaal programmeren met AI",
    description:
      "Anthropic's code-assistent werkt nu met lokale modellen via Ollama. Wat zijn de voor- en nadelen? En wat voegt het toe boven gewoon Ollama gebruiken?",
    date: "5 maart 2026",
    readTime: "7 min",
  },
  {
    slug: "laptops-voor-lokale-ai",
    title: "De beste laptops voor lokaal AI draaien in 2026",
    description:
      "VRAM is de sleutel. We vergelijken Windows-laptops en MacBooks op prijs, geheugen en welke modellen je erop kunt draaien. Met prijzen van Coolblue, MediaMarkt en Tweakers.",
    date: "5 maart 2026",
    readTime: "8 min",
  },
  {
    slug: "open-source-modellen-inhaalslag",
    title: "De inhaalslag van open source AI-modellen",
    description:
      "Open source LLM's komen steeds dichter bij gesloten modellen zoals GPT-4 en Claude. Bekijk de data, benchmarks en wat dit betekent voor lokaal AI draaien.",
    date: "5 maart 2026",
    readTime: "6 min",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <div className="bg-dark text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Blog</h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Artikelen over open source modellen, hardware, en alles wat je moet weten over
              lokaal AI draaien.
            </p>
          </div>
        </div>

        {/* Articles */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-brand/40 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-dark group-hover:text-brand transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:gap-2.5 transition-all">
                  Lees artikel
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
