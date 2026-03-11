import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Clock, Cloud, Shield, Zap, DollarSign, Server, Globe, Terminal } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Open source modellen via de cloud: gratis of goedkoop zonder eigen hardware — LokaalAI",
  description:
    "Geen zware GPU? Draai open source modellen zoals Qwen 3.5, Llama en DeepSeek via cloud-providers als Groq, Together AI en OpenRouter. Gratis tiers, prijsvergelijking en setup met Claude Code.",
  openGraph: {
    title: "Open source modellen via de cloud: gratis of goedkoop zonder eigen hardware",
    description:
      "Gebruik krachtige open source AI-modellen via de cloud. Vergelijk providers, prijzen en ontdek hoe je ze koppelt aan Claude Code.",
    type: "article",
    locale: "nl_NL",
  },
}

export default function BlogArticle() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Article Header */}
        <div className="bg-dark text-white py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-brand transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar blog
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Open source modellen via de cloud: gratis of goedkoop zonder eigen hardware
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Niet iedereen heeft een RTX 4090 in huis. Gelukkig kun je krachtige open source
              modellen ook via de cloud draaien — soms zelfs gratis. We vergelijken de
              opties en laten zien hoe je ze koppelt aan Claude Code.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                6 maart 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                6 min leestijd
              </span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              In onze eerdere artikelen bespraken we hoe je{" "}
              <Link
                href="/blog/claude-code-ollama-lokaal"
                className="text-brand hover:text-brand-dark font-medium"
              >
                AI lokaal draait met Ollama
              </Link>{" "}
              en welke{" "}
              <Link
                href="/blog/laptops-voor-lokale-ai"
                className="text-brand hover:text-brand-dark font-medium"
              >
                laptops daarvoor geschikt zijn
              </Link>
              . Maar wat als je hardware niet krachtig genoeg is? Of als je een model
              met 400 miljard parameters wil proberen zonder €2.500 aan GPU&apos;s uit te geven?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dan zijn er cloud-providers die open source modellen hosten en via een API
              aanbieden. Dezelfde modellen, dezelfde kwaliteit — maar op hun hardware.
            </p>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Hoe werkt het?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Het principe is simpel: in plaats van een model op je eigen GPU te laden,
              stuur je je vraag naar een server die het model al draait. Je krijgt een
              API-sleutel, en betaalt per gebruik (of het is gratis binnen bepaalde limieten).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Het verschil met diensten als ChatGPT of Claude? Je kiest zelf welk open source
              model je wilt gebruiken. Je bent niet gebonden aan één aanbieder of één model.
              En de modellen zijn dezelfde die je ook lokaal kunt draaien — alleen dan op
              snellere hardware.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              De beste providers vergeleken
            </h2>
          </div>

          {/* Provider cards */}
          <div className="my-8 space-y-4">
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">Groq</h3>
                  <span className="text-xs text-muted-foreground">groq.com</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                De snelste optie. Groq draait modellen op eigen LPU-chips (Language Processing
                Units) die speciaal ontworpen zijn voor AI-inferentie. Resultaat: razendsnelle
                antwoorden met een eerste token in ~0,13 seconden.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Gratis tier beschikbaar</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Extreem snel</span>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <p><strong className="text-dark">Modellen:</strong> Llama 3.3 70B, Gemma 2 9B, Mistral, DeepSeek R1</p>
                <p><strong className="text-dark">Gratis limiet:</strong> ~30 verzoeken per minuut</p>
                <p><strong className="text-dark">Betaald:</strong> Vanaf ~$0,05 per miljoen tokens</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">Together AI</h3>
                  <span className="text-xs text-muted-foreground">together.ai</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Breed aanbod van 200+ open source modellen met eigen inference-clusters.
                Vaste, transparante prijzen per model — geen routing-toeslag. Populair bij
                developers die een betrouwbare API willen.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">$1 gratis tegoed</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">200+ modellen</span>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <p><strong className="text-dark">Modellen:</strong> Qwen 3.5, Llama 3.3, DeepSeek, Mistral, Phi-3</p>
                <p><strong className="text-dark">Prijs:</strong> Vanaf ~$0,10 per miljoen tokens (klein model) tot ~$1,20 (groot model)</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">OpenRouter</h3>
                  <span className="text-xs text-muted-foreground">openrouter.ai</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Een marktplaats die 300+ modellen van verschillende providers bundelt onder
                één API. Handig als je wilt wisselen tussen modellen zonder meerdere accounts
                aan te maken. Voegt een kleine toeslag toe (5–10%) bovenop de onderliggende prijs.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Gratis modellen beschikbaar</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">300+ modellen</span>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <p><strong className="text-dark">Modellen:</strong> Alles — van Llama tot Claude tot GPT, open source én commercieel</p>
                <p><strong className="text-dark">Gratis modellen:</strong> ~20 req/min, 200 req/dag limiet</p>
                <p><strong className="text-dark">Betaald:</strong> Variabel per model, transparant op de site</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">NVIDIA NIM</h3>
                  <span className="text-xs text-muted-foreground">build.nvidia.com</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                NVIDIA biedt geselecteerde modellen aan via hun NIM-platform, geoptimaliseerd
                voor hun eigen GPU&apos;s. Interessant als je de allergrootste modellen wil
                testen, zoals Qwen3.5-397B.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Gratis tier</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Geoptimaliseerd voor snelheid</span>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <p><strong className="text-dark">Modellen:</strong> Qwen 3.5 397B, Llama 3.3, Nemotron, Mistral Large</p>
                <p><strong className="text-dark">Gratis:</strong> Beperkt aantal verzoeken per dag</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Wat kost het in de praktijk?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Laten we een concreet voorbeeld nemen. Stel je stelt 50 vragen per dag aan een
              model, met gemiddeld 500 tokens per antwoord. Dat is zo&apos;n 25.000 output-tokens
              per dag, of ~750.000 per maand.
            </p>
          </div>

          {/* Cost comparison */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Provider + model</th>
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Prijs / M tokens</th>
                  <th className="text-left py-3 font-semibold text-dark">~Kosten / maand</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">Groq — Llama 3.3 70B</td>
                  <td className="py-3 pr-4">$0,05</td>
                  <td className="py-3">
                    <span className="text-brand font-semibold">Gratis</span>
                    <span className="text-xs ml-1">(binnen limiet)</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">OpenRouter — gratis model</td>
                  <td className="py-3 pr-4">$0,00</td>
                  <td className="py-3">
                    <span className="text-brand font-semibold">Gratis</span>
                    <span className="text-xs ml-1">(200 req/dag)</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">Together AI — Llama 3.3 70B</td>
                  <td className="py-3 pr-4">~$0,90</td>
                  <td className="py-3">~€0,65</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">Together AI — Qwen 3.5 397B</td>
                  <td className="py-3 pr-4">~$1,20</td>
                  <td className="py-3">~€0,85</td>
                </tr>
                <tr className="border-b border-gray-100 bg-red-50/50">
                  <td className="py-3 pr-4 font-medium text-dark">ChatGPT Plus (ter vergelijking)</td>
                  <td className="py-3 pr-4">vast</td>
                  <td className="py-3">€20,00</td>
                </tr>
                <tr className="bg-red-50/50">
                  <td className="py-3 pr-4 font-medium text-dark">Claude Pro (ter vergelijking)</td>
                  <td className="py-3 pr-4">vast</td>
                  <td className="py-3">€20,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Voor normaal gebruik betaal je met open source modellen via de cloud
              minder dan €1 per maand — of helemaal niets met een gratis tier. Vergelijk
              dat met €20/maand voor ChatGPT Plus of Claude Pro.
            </p>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Koppelen aan Claude Code
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Het mooie is dat je deze cloud-providers kunt gebruiken als backend voor{" "}
              <Link
                href="/blog/claude-code-ollama-lokaal"
                className="text-brand hover:text-brand-dark font-medium"
              >
                Claude Code
              </Link>
              . Daarmee krijg je de agentic workflow van Claude Code (bestanden lezen,
              code schrijven, tests draaien) maar dan aangedreven door een open source model
              in de cloud.
            </p>
          </div>

          {/* Setup examples */}
          <div className="my-8 space-y-4">
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-brand" />
                </div>
                <h3 className="font-semibold text-dark">Via OpenRouter</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Maak een account op openrouter.ai en kopieer je API-key. Dan:
              </p>
              <code className="block bg-dark text-white rounded-lg p-4 text-sm font-mono whitespace-pre-wrap">
                {`ANTHROPIC_BASE_URL=https://openrouter.ai/api/v1 \\
ANTHROPIC_API_KEY=sk-or-... \\
claude --model qwen/qwen3.5-397b-a17b`}
              </code>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-brand" />
                </div>
                <h3 className="font-semibold text-dark">Via Together AI</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Maak een account op together.ai en gebruik je API-key:
              </p>
              <code className="block bg-dark text-white rounded-lg p-4 text-sm font-mono whitespace-pre-wrap">
                {`ANTHROPIC_BASE_URL=https://api.together.xyz/v1 \\
ANTHROPIC_API_KEY=... \\
claude --model meta-llama/Llama-3.3-70B-Instruct-Turbo`}
              </code>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-brand" />
                </div>
                <h3 className="font-semibold text-dark">Via Groq (gratis)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Maak een gratis account op groq.com en pak je API-key:
              </p>
              <code className="block bg-dark text-white rounded-lg p-4 text-sm font-mono whitespace-pre-wrap">
                {`ANTHROPIC_BASE_URL=https://api.groq.com/openai/v1 \\
ANTHROPIC_API_KEY=gsk_... \\
claude --model llama-3.3-70b-versatile`}
              </code>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Lokaal vs. cloud: wanneer kies je wat?
            </h2>
          </div>

          {/* Comparison */}
          <div className="my-8 grid gap-4 sm:grid-cols-2">
            <div className="bg-green-50 border border-green-200/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-dark">Kies lokaal als...</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex gap-2">
                  <span className="text-brand font-bold">→</span>
                  <span>Privacy essentieel is (gevoelige code, klantdata)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">→</span>
                  <span>Je offline wilt werken</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">→</span>
                  <span>Je al een GPU hebt met 12+ GB VRAM</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand font-bold">→</span>
                  <span>Je geen terugkerende kosten wilt</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Cloud className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-dark">Kies cloud als...</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>Je hardware niet krachtig genoeg is</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>Je de grootste modellen (70B+) wilt gebruiken</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>Snelheid belangrijker is dan privacy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>Je wilt experimenteren met verschillende modellen</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Het privacy-verhaal
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Eerlijk is eerlijk: zodra je een cloud-provider gebruikt, verlaat je data je
              computer. Dat is het belangrijkste verschil met lokaal draaien. Maar er zijn
              nuances:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  De meeste providers (Together AI, Groq) geven aan dat ze je data{" "}
                  <strong className="text-dark">niet gebruiken voor training</strong> van hun modellen.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  Je data wordt getransporteerd via HTTPS (versleuteld), maar staat wel
                  tijdelijk op hun servers.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  Voor gevoelige bedrijfsdata is lokaal altijd veiliger. Voor persoonlijke
                  projecten en leren is cloud prima.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Ons advies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Begin met <strong className="text-dark">Groq</strong> — het is gratis, extreem snel,
              en je kunt direct aan de slag met Llama 3.3 70B. Wil je meer modellen of hogere
              limieten? Stap over naar <strong className="text-dark">OpenRouter</strong> voor de
              meeste flexibiliteit, of <strong className="text-dark">Together AI</strong> voor
              de laagste prijzen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En als je privacy echt belangrijk vindt? Gebruik de cloud om te experimenteren
              en te leren, en investeer daarna in{" "}
              <Link
                href="/blog/laptops-voor-lokale-ai"
                className="text-brand hover:text-brand-dark font-medium"
              >
                hardware om lokaal te draaien
              </Link>
              .
            </p>

            <div className="bg-brand/5 border border-brand/20 rounded-xl p-6 mt-8">
              <p className="text-dark font-semibold mb-2">Direct proberen?</p>
              <p className="text-muted-foreground text-base">
                Maak een gratis account op{" "}
                <a
                  href="https://groq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-dark font-medium"
                >
                  groq.com
                </a>
                , pak je API-key, en draai binnen 2 minuten een 70B-model. Geen creditcard
                nodig, geen installatie, geen GPU.
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* JSON-LD Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Open source modellen via de cloud: gratis of goedkoop zonder eigen hardware",
            description:
              "Gebruik krachtige open source AI-modellen via cloud-providers als Groq, Together AI en OpenRouter. Gratis tiers, prijsvergelijking en setup met Claude Code.",
            datePublished: "2026-03-06",
            author: {
              "@type": "Organization",
              name: "LokaalAI",
            },
            publisher: {
              "@type": "Organization",
              name: "LokaalAI",
              url: "https://mijnchatbot.nl",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://mijnchatbot.nl/blog/open-source-modellen-via-cloud",
            },
          }),
        }}
      />

      <Footer />
    </div>
  )
}
