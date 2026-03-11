import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Clock, Terminal, Shield, Zap, Server, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Claude Code met Ollama: lokaal programmeren met AI — LokaalAI",
  description:
    "Claude Code werkt nu met lokale Ollama-modellen. Wat betekent dat? Voor wie is het interessant? En wat zijn de voor- en nadelen ten opzichte van gewoon Ollama gebruiken?",
  openGraph: {
    title: "Claude Code met Ollama: lokaal programmeren met AI",
    description:
      "Claude Code werkt nu met lokale modellen via Ollama. Ontdek de voor- en nadelen en voor wie dit interessant is.",
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
              Claude Code met Ollama: lokaal programmeren met AI
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Anthropic&apos;s krachtige code-assistent werkt nu met lokale modellen via Ollama.
              Volledig privé, zonder API-kosten. Maar is het ook praktisch? We duiken in de
              voor- en nadelen.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                5 maart 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                7 min leestijd
              </span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Claude Code is de terminal-gebaseerde code-assistent van Anthropic. Het kan je
              bestanden lezen, code schrijven en aanpassen, terminal-commando&apos;s uitvoeren en
              complete projecten opzetten — allemaal vanuit je command line. Normaal draait het
              via de Anthropic API in de cloud, maar sinds Ollama v0.14 kun je het ook koppelen
              aan lokale modellen. Geen cloud, geen kosten, volledige privacy.
            </p>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Wat is Claude Code precies?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Claude Code is geen AI-model — het is een <strong className="text-dark">tool</strong>.
              Denk aan het als een slimme terminal-assistent die een taalmodel aanspreekt om
              taken uit te voeren. Normaal is dat Claude (Anthropic&apos;s eigen model), maar met
              de Ollama-integratie kun je elk compatibel model gebruiken.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Wat maakt het bijzonder? Claude Code kan:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>Je hele projectstructuur lezen en begrijpen</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>Bestanden aanmaken, bewerken en verwijderen</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>Terminal-commando&apos;s uitvoeren (npm install, git commit, tests draaien)</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>Meerstaps-taken plannen en uitvoeren</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Het verschil met &quot;gewoon chatten&quot; met een model via Ollama is dus groot: Claude
              Code is een <strong className="text-dark">agent</strong> die zelfstandig acties
              onderneemt in je codebase.
            </p>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Hoe stel je het in?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              De setup is verrassend eenvoudig. Zorg dat je{" "}
              <a
                href="https://ollama.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-dark font-medium"
              >
                Ollama
              </a>{" "}
              hebt geïnstalleerd, en voer dan uit:
            </p>
          </div>

          {/* Setup steps */}
          <div className="my-8 space-y-4">
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center">
                  <span className="text-brand font-bold text-sm">1</span>
                </div>
                <h3 className="font-semibold text-dark">Snelle methode</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Ollama regelt alles automatisch:
              </p>
              <code className="block bg-dark text-white rounded-lg p-4 text-sm font-mono">
                ollama launch claude
              </code>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center">
                  <span className="text-brand font-bold text-sm">2</span>
                </div>
                <h3 className="font-semibold text-dark">Handmatige methode</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Stel de omgevingsvariabelen in en kies je model:
              </p>
              <code className="block bg-dark text-white rounded-lg p-4 text-sm font-mono whitespace-pre-wrap">
                {`ANTHROPIC_AUTH_TOKEN=ollama \\
ANTHROPIC_BASE_URL=http://localhost:11434 \\
ANTHROPIC_API_KEY="" \\
claude --model qwen3-coder`}
              </code>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Dat is het. Claude Code praat nu met je lokale Ollama-server in plaats van met de
              Anthropic cloud.
            </p>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Welke modellen werken?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Niet elk model is geschikt. Claude Code heeft een groot contextvenster nodig
              (minimaal 64.000 tokens) en het model moet goed genoeg zijn om complexe
              instructies te volgen. De aanbevolen modellen:
            </p>
          </div>

          {/* Models table */}
          <div className="my-8 overflow-x-auto">
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
                  <td className="py-3 pr-4 font-medium text-dark">qwen3-coder</td>
                  <td className="py-3 pr-4">~30B</td>
                  <td className="py-3 pr-4">24 GB</td>
                  <td className="py-3">Code genereren en refactoren</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">glm-4.7</td>
                  <td className="py-3 pr-4">~9B</td>
                  <td className="py-3 pr-4">8 GB</td>
                  <td className="py-3">Lichtgewicht, snel</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">gpt-oss:20b</td>
                  <td className="py-3 pr-4">20B</td>
                  <td className="py-3 pr-4">16 GB</td>
                  <td className="py-3">Goede balans snelheid/kwaliteit</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-dark">gpt-oss:120b</td>
                  <td className="py-3 pr-4">120B</td>
                  <td className="py-3 pr-4">80+ GB</td>
                  <td className="py-3">Beste kwaliteit, zware hardware</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pros and cons */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              De voordelen
            </h2>
          </div>

          <div className="my-8 grid gap-4 sm:grid-cols-2">
            <div className="bg-green-50 border border-green-200/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-dark">Volledige privacy</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Je code verlaat je computer niet. Geen cloud, geen API-calls naar externe
                servers. Ideaal voor gevoelige projecten of bedrijfscode.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-dark">Geen kosten</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Claude Code via de API kan flink oplopen — tientallen euro&apos;s per maand bij
                actief gebruik. Lokaal draai je gratis, onbeperkt.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Server className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-dark">Offline beschikbaar</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Geen internet nodig. Handig in het vliegtuig, op trein, of in omgevingen
                met beperkte connectiviteit.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-dark">Agentic workflow</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Anders dan gewoon chatten met Ollama, kan Claude Code zelfstandig bestanden
                bewerken, tests draaien en git-commando&apos;s uitvoeren.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              De nadelen
            </h2>
          </div>

          <div className="my-8 space-y-4">
            <div className="bg-red-50 border border-red-200/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold text-dark">Aanzienlijk trager</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Dit is het grootste nadeel. Een simpel verzoek dat Claude in de cloud in
                2 seconden beantwoordt, kan lokaal 30–60 seconden duren. Op een M1 Max
                MacBook Pro met 64 GB RAM duurt zelfs een &quot;Hallo&quot; zo&apos;n 55 seconden.
                Voor complexe taken met meerdere stappen loop je al snel minuten vertraging op.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold text-dark">Lagere kwaliteit</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Claude Code is ontworpen voor Claude — een van de krachtigste modellen ter
                wereld. Lokale modellen als qwen3-coder zijn goed, maar niet zo goed. Je merkt
                dit bij complexe refactoring, subtiele bugs, en het begrijpen van grote codebases.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold text-dark">Zware hardware vereist</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Je hebt minimaal 8 GB VRAM nodig voor de lichtste modellen, en 24+ GB voor
                een fatsoenlijke ervaring. Bovendien moet het model minstens 64k tokens
                context aankunnen. Een gaming-laptop met RTX 4060 is het absolute minimum.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Wat voegt het toe boven &quot;gewoon Ollama&quot;?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dit is de kernvraag. Als je Ollama al gebruikt om lokaal te chatten met een
              model — waarom zou je dan Claude Code ertussen zetten?
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Het antwoord zit in het woord <strong className="text-dark">agent</strong>.
              Ollama zelf is een inference-engine: je stelt een vraag, je krijgt een antwoord.
              Claude Code is een laag daarboven die het model inzet als een zelfstandige
              programmeur:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Ollama:</strong> &quot;Schrijf een functie die
                  een CSV-bestand parsed.&quot; → Je krijgt code terug die je zelf moet kopiëren
                  en in het juiste bestand plakken.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Claude Code + Ollama:</strong> &quot;Voeg CSV-import
                  toe aan dit project.&quot; → Het leest je projectstructuur, maakt het bestand aan,
                  schrijft de code, installeert dependencies, en runt de tests.
                </span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              Dat verschil is enorm als je serieus aan projecten werkt. Maar het werkt alleen
              goed als het onderliggende model slim genoeg is om die meerstaps-taken
              betrouwbaar uit te voeren — en daar wringt de schoen bij lokale modellen.
            </p>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Voor wie is het interessant?
            </h2>
          </div>

          {/* Target audience cards */}
          <div className="my-8 space-y-4">
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-dark">Ontwikkelaars met gevoelige code</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Werk je met klantgegevens, medische data, of bedrijfsgeheimen? Dan wil je
                je code niet naar een externe API sturen. Claude Code + Ollama is dan een
                logische keuze, ook al is het trager.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-dark">Hobbyisten en experimenteerders</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Wil je leren hoe agentic AI werkt zonder maandelijks te betalen? Dit is
                een perfecte speeltuin. Je leert hoe AI-agents taken plannen en uitvoeren.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-dark">Teams die kosten willen drukken</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Als je een team hebt dat intensief Claude Code gebruikt, lopen API-kosten snel
                op. Voor routine-taken (boilerplate, tests schrijven, simpele refactoring) kan
                een lokaal model volstaan.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-400" />
                <h3 className="font-semibold text-dark">Niet ideaal voor: complexe projecten</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Als je werkt aan grote codebases, complexe architectuur, of subtiele bugs —
                dan merk je het kwaliteitsverschil met het echte Claude-model. Voor kritisch
                werk is de cloud-versie nog steeds superieur.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Ons oordeel
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              De Ollama-integratie met Claude Code is een belangrijke stap. Het bewijst dat
              de tooling rondom lokale AI snel volwassen wordt. Maar eerlijk is eerlijk: voor
              de meeste developers is het vandaag nog een <strong className="text-dark">
              trade-off</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Je wint privacy en bespaart kosten, maar je levert in op snelheid en kwaliteit.
              De sweet spot? Gebruik Claude Code lokaal voor routine-taken en gevoelige code,
              en schakel over naar de cloud-versie voor complexe uitdagingen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En met de snelheid waarmee lokale modellen verbeteren — zie ons artikel over{" "}
              <Link
                href="/blog/open-source-modellen-inhaalslag"
                className="text-brand hover:text-brand-dark font-medium"
              >
                de inhaalslag van open source modellen
              </Link>{" "}
              — is het een kwestie van tijd voordat lokaal net zo goed werkt als de cloud.
            </p>

            <div className="bg-brand/5 border border-brand/20 rounded-xl p-6 mt-8">
              <p className="text-dark font-semibold mb-2">Zelf proberen?</p>
              <p className="text-muted-foreground text-base">
                Installeer{" "}
                <a
                  href="https://ollama.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-dark font-medium"
                >
                  Ollama
                </a>
                , installeer{" "}
                <a
                  href="https://docs.ollama.com/integrations/claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-dark font-medium"
                >
                  Claude Code
                </a>
                , en draai <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ollama launch claude</code>.
                Binnen 5 minuten heb je een lokale AI-programmeur draaien. Bekijk ook
                welke{" "}
                <Link
                  href="/blog/laptops-voor-lokale-ai"
                  className="text-brand hover:text-brand-dark font-medium"
                >
                  laptops geschikt zijn
                </Link>{" "}
                voor lokaal AI draaien.
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
            headline: "Claude Code met Ollama: lokaal programmeren met AI",
            description:
              "Claude Code werkt nu met lokale Ollama-modellen. Voor- en nadelen, voor wie het interessant is, en de toegevoegde waarde boven gewoon Ollama.",
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
              "@id": "https://mijnchatbot.nl/blog/claude-code-ollama-lokaal",
            },
          }),
        }}
      />

      <Footer />
    </div>
  )
}
