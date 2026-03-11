import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BenchmarkChart } from "@/components/benchmark-chart"
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "De inhaalslag van open source AI-modellen — LokaalAI",
  description:
    "Open source LLM's komen steeds dichter bij gesloten modellen zoals GPT-4 en Claude. Bekijk de data, benchmarks en wat dit betekent voor lokaal AI draaien.",
  openGraph: {
    title: "De inhaalslag van open source AI-modellen",
    description:
      "Open source LLM's komen steeds dichter bij gesloten modellen. Bekijk de benchmarks en ontdek wat dit betekent.",
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
              De inhaalslag van open source AI-modellen
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Drie jaar geleden waren open source modellen niet meer dan een speeltje. Vandaag
              bijten ze de gevestigde orde in de hielen — en soms lopen ze voorop.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                7 maart 2026 (bijgewerkt)
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                8 min leestijd
              </span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Toen Meta in februari 2023 LLaMA uitbracht — per ongeluk gelekt, officieel alleen voor
              onderzoekers — veranderde het AI-landschap voorgoed. Voor het eerst had de open source
              community een fundament om op voort te bouwen. Wat volgde was een ongekende
              acceleratie.
            </p>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Van speeltje naar concurrent
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In maart 2023 scoorde het beste open source model — LLaMA 65B — zo&apos;n 64% op de
              MMLU-benchmark, een veelgebruikte maatstaf voor kennisgebaseerd redeneren. GPT-4
              stond op dat moment op 86,4%. Een kloof van ruim 22 procentpunt.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Twee jaar later, begin 2025, scoort DeepSeek R1 90,8% op diezelfde benchmark —
              terwijl OpenAI&apos;s o1 op 91,8% staat. De kloof is van 22 procentpunt gekrompen
              tot slechts 1 punt. Op sommige benchmarks scoort open source zelfs hoger.
            </p>
          </div>

          {/* Chart */}
          <div className="my-12 bg-gray-50 rounded-2xl p-4 sm:p-8 border border-gray-100">
            <h3 className="text-lg font-semibold text-dark mb-6 text-center">
              Open source vs. gesloten modellen — MMLU benchmark
            </h3>
            <BenchmarkChart />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              De doorbraken van 2024
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              2024 was het jaar waarin open source modellen serieus werden genomen:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Llama 3.1 405B</strong> (Meta, juli 2024) was het
                  eerste open source model dat op MMLU-niveau GPT-4 evenaarde. Met 405 miljard
                  parameters bewijst het dat schaal niet exclusief is voor Big Tech.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Mixtral en Mistral Large</strong> (Mistral AI)
                  lieten zien dat een Frans bedrijf met een fractie van de middelen modellen kan
                  bouwen die concurreren met de Amerikaanse giganten.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">DeepSeek V3 en R1</strong> (DeepSeek, dec
                  2024–jan 2025) scoorden op veel benchmarks op het niveau van GPT-4o en Claude
                  3.5 Sonnet — en dat als volledig open source modellen met openbare gewichten.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Qwen 2.5 72B</strong> (Alibaba) werd een
                  favoriet in de community voor zijn sterke meertalige prestaties en efficiënte
                  architectuur.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              2025–2026: de versnelling gaat door
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Als 2024 het jaar van de doorbraak was, dan is 2025 het jaar waarin open source
              modellen de gesloten concurrentie daadwerkelijk inhaalden:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Llama 4 Scout &amp; Maverick</strong> (Meta, april 2025)
                  introduceerden Mixture-of-Experts in de Llama-familie. Scout heeft 109B totale
                  parameters maar activeert er slechts 17B — met een contextvenster van 10 miljoen tokens.
                  Maverick schaalt naar 400B totaal met 128 experts.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Qwen 3</strong> (Alibaba, 2025) overtrof Llama als het
                  meest gedownloade en meest gebruikte basismodel voor fine-tuning. Met hybride
                  MoE-architectuur evenaarde het GPT-4o en DeepSeek-V3 op de meeste benchmarks.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">DeepSeek-V3.2</strong> (DeepSeek, 2025) werd een van
                  de beste open source modellen voor redeneren en agentic workflows, met verbeterde
                  efficiëntie voor lange contexten en tool-gebruik.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Qwen 3.5</strong> (Alibaba, februari 2026) zette een
                  nieuwe standaard. Het vlaggenschip Qwen3.5-397B-A17B scoort 91,3% op AIME 2026
                  en 76,4% op SWE-bench — op het niveau van GPT-5.2 en Claude Opus 4.6. Het
                  9B-model verslaat zelfs modellen die 13x groter zijn.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Kleiner maar krachtiger
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Misschien nog indrukwekkender dan de grote modellen is de vooruitgang bij kleinere
              varianten. De Qwen3.5-9B verslaat OpenAI&apos;s GPT-OSS-120B — een model dat 13 keer
              zo groot is — op benchmarks als GPQA Diamond (81,7 vs. 71,5) en MMMU-Pro (70,1 vs. 59,7).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dit betekent concreet: je kunt vandaag een model van 9 miljard parameters op je
              eigen laptop draaien dat beter presteert dan modellen waar je een jaar geleden
              een serverpark voor nodig had. Volledig offline, zonder abonnement, en met
              volledige privacy.
            </p>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              De ranglijsten spreken voor zich
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Op de{" "}
              <a
                href="https://lmarena.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-dark font-medium"
              >
                LMSYS Chatbot Arena
              </a>{" "}
              — een platform waar gebruikers blind twee modellen vergelijken — staan open source
              modellen inmiddels structureel in de top 10 tussen gesloten giganten. Qwen 3.5
              en DeepSeek-V3.2 concurreren direct met GPT-5.2 en Claude Opus 4.6.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ook op de{" "}
              <a
                href="https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-dark font-medium"
              >
                Open LLM Leaderboard van Hugging Face
              </a>{" "}
              zie je de trend: elk kwartaal verschijnt er een nieuw model dat records breekt.
              De competitie tussen Meta, Mistral, DeepSeek, Alibaba en de community drijft de
              kwaliteit in een ongekend tempo omhoog.
            </p>
          </div>

          {/* Ranking Table */}
          <div className="my-12 overflow-x-auto">
            <h3 className="text-lg font-semibold text-dark mb-4">
              Top open source modellen — maart 2026
            </h3>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Model</th>
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Parameters</th>
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Min. VRAM</th>
                  <th className="text-left py-3 font-semibold text-dark">Sterk in</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">Qwen 3.5 397B-A17B</td>
                  <td className="py-3 pr-4">397B (MoE, 17B actief)</td>
                  <td className="py-3 pr-4">80+ GB</td>
                  <td className="py-3">Redeneren, coderen, agentic AI</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">DeepSeek-V3.2</td>
                  <td className="py-3 pr-4">671B (MoE)</td>
                  <td className="py-3 pr-4">80+ GB</td>
                  <td className="py-3">Redeneren, lange context, tools</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">Llama 4 Maverick</td>
                  <td className="py-3 pr-4">400B (MoE, 17B actief)</td>
                  <td className="py-3 pr-4">80+ GB</td>
                  <td className="py-3">Multimodaal, 1M context</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">Llama 4 Scout</td>
                  <td className="py-3 pr-4">109B (MoE, 17B actief)</td>
                  <td className="py-3 pr-4">24 GB</td>
                  <td className="py-3">Multimodaal, 10M context</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">Qwen 3.5 9B</td>
                  <td className="py-3 pr-4">9B</td>
                  <td className="py-3 pr-4">8 GB</td>
                  <td className="py-3">Verslaat modellen 13x groter</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-dark">DeepSeek R1</td>
                  <td className="py-3 pr-4">671B (MoE)</td>
                  <td className="py-3 pr-4">80+ GB</td>
                  <td className="py-3">Redeneren, wiskunde</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Wat betekent dit voor jou?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              De boodschap is helder: je hebt geen duur abonnement meer nodig voor krachtige AI.
              Met een fatsoenlijke GPU en gratis software als{" "}
              <a
                href="https://ollama.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-dark font-medium"
              >
                Ollama
              </a>{" "}
              draai je modellen die twee jaar geleden science fiction waren.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En het gaat alleen maar sneller. Elke maand verschijnen er nieuwe modellen die
              efficiënter zijn, beter presteren en op minder hardware draaien. De trend is
              onmiskenbaar: open source AI is niet langer een compromis — het is een volwaardig
              alternatief.
            </p>

            <div className="bg-brand/5 border border-brand/20 rounded-xl p-6 mt-8">
              <p className="text-dark font-semibold mb-2">Zelf aan de slag?</p>
              <p className="text-muted-foreground text-base">
                Op onze{" "}
                <Link href="/" className="text-brand hover:text-brand-dark font-medium">
                  homepagina
                </Link>{" "}
                vind je een stap-voor-stap handleiding om vandaag nog je eerste lokale AI-model
                te draaien.
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
            headline: "De inhaalslag van open source AI-modellen",
            description:
              "Open source LLM's komen steeds dichter bij gesloten modellen zoals GPT-4 en Claude. Bekijk de data en benchmarks.",
            datePublished: "2026-03-05",
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
              "@id": "https://mijnchatbot.nl/blog/open-source-modellen-inhaalslag",
            },
          }),
        }}
      />

      <Footer />
    </div>
  )
}
