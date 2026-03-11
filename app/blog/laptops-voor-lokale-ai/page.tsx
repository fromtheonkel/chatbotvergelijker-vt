import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Clock, ExternalLink, Monitor, Cpu, MemoryStick } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "De beste laptops voor lokaal AI draaien in 2026 — LokaalAI",
  description:
    "Welke laptop heb je nodig om lokaal een LLM te draaien? Overzicht van de beste opties met VRAM-vergelijking, prijzen van Coolblue, MediaMarkt en Tweakers.",
  openGraph: {
    title: "De beste laptops voor lokaal AI draaien in 2026",
    description:
      "Welke laptop heb je nodig voor lokale AI? Overzicht met prijzen en VRAM-vergelijking.",
    type: "article",
    locale: "nl_NL",
  },
}

export default function LaptopsArticle() {
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
              De beste laptops voor lokaal AI draaien in 2026
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              VRAM is de sleutel. We vergelijken Windows-laptops en MacBooks op prijs, geheugen en
              welke modellen je erop kunt draaien.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                5 maart 2026
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
              Wil je lokaal een AI-model draaien? Dan draait alles om één ding: <strong className="text-dark">VRAM</strong> — het
              geheugen op je videokaart. Hoe meer VRAM, hoe grotere en slimmere modellen je kunt
              laden. In dit artikel leggen we uit wat je nodig hebt, wat het kost, en welke
              laptops op dit moment de beste keuze zijn.
            </p>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Waarom VRAM alles bepaalt
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Een taalmodel (LLM) moet volledig in het geheugen geladen worden om snel te
              werken. Bij Windows-laptops is dat het VRAM van de NVIDIA GPU. Bij MacBooks is
              het het unified memory dat gedeeld wordt tussen CPU en GPU.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              De vuistregel: <strong className="text-dark">een model van 7 miljard parameters
              (7B) heeft ~4-5 GB nodig</strong> in geoptimaliseerd formaat (Q4). Een 13B-model
              vraagt ~8 GB, een 70B-model ~40 GB. Hoe meer VRAM, hoe groter het model dat je
              kunt draaien — en hoe beter de antwoorden.
            </p>
          </div>

          {/* VRAM Overview */}
          <div className="my-12 bg-gray-50 rounded-2xl p-4 sm:p-8 border border-gray-100">
            <h3 className="text-lg font-semibold text-dark mb-6 text-center">
              Wat kun je draaien met hoeveel VRAM?
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="text-3xl font-bold text-brand mb-1">8 GB</div>
                <div className="text-sm font-medium text-dark mb-3">Instapniveau</div>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>Llama 3.2 3B</li>
                  <li>Phi-3 Mini (3.8B)</li>
                  <li>Mistral 7B (Q4)</li>
                  <li>Gemma 2 2B</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border-2 border-brand">
                <div className="text-3xl font-bold text-brand mb-1">12–16 GB</div>
                <div className="text-sm font-medium text-dark mb-3">Sweet spot</div>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>Llama 3.1 8B</li>
                  <li>Mistral 7B (volledige kwaliteit)</li>
                  <li>Gemma 2 9B</li>
                  <li>DeepSeek Coder 6.7B</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="text-3xl font-bold text-brand mb-1">24+ GB</div>
                <div className="text-sm font-medium text-dark mb-3">Serieus</div>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>Llama 3.1 70B (Q4)</li>
                  <li>Mixtral 8x7B</li>
                  <li>Qwen 2.5 32B</li>
                  <li>DeepSeek V3 (deels)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Windows-laptops: GPU is koning
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Bij Windows-laptops bepaalt de NVIDIA-videokaart wat je kunt draaien. Let op: de
              laptop-versie van een GPU heeft soms minder VRAM dan de desktop-versie. Hieronder
              de belangrijkste opties met actuele richtprijzen.
            </p>
          </div>

          {/* Windows Laptops Table */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-dark">GPU</th>
                  <th className="text-left py-3 pr-4 font-semibold text-dark">VRAM</th>
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Laptop vanaf</th>
                  <th className="text-left py-3 font-semibold text-dark">Geschikt voor</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">RTX 4060</td>
                  <td className="py-3 pr-4">8 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€1.100</span>
                  </td>
                  <td className="py-3">Kleine modellen (3B-7B). Goed startpunt</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">RTX 4070</td>
                  <td className="py-3 pr-4">8 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€1.500 – €1.850</span>
                  </td>
                  <td className="py-3">7B-modellen comfortabel, snellere inferentie</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">RTX 4080</td>
                  <td className="py-3 pr-4">12 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€2.200</span>
                  </td>
                  <td className="py-3">13B-modellen, meerdere kleine modellen tegelijk</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">RTX 4090</td>
                  <td className="py-3 pr-4">16 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€3.000+</span>
                  </td>
                  <td className="py-3">Grotere modellen tot ~30B</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-dark">RTX 5070 Ti / 5090</td>
                  <td className="py-3 pr-4">16–24 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€2.500+</span>
                  </td>
                  <td className="py-3">Nieuwe generatie, 32B-modellen volledig in VRAM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-bold text-dark mt-8 mb-4">
              Concrete voorbeelden
            </h3>
            <ul className="space-y-3 my-6">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Lenovo Legion Slim 5</strong> — 16 inch, AMD
                  Ryzen 7, RTX 4070 (8 GB), 32 GB RAM, 1 TB SSD.{" "}
                  <span className="text-brand font-semibold">€1.849</span> bij{" "}
                  <a href="https://www.mediamarkt.nl" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark">MediaMarkt</a>.
                  Prima voor 7B-modellen met snelle inferentie.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">ASUS ROG Strix / Lenovo Legion Pro</strong> — met
                  RTX 4070 of hoger. Vanaf{" "}
                  <span className="text-brand font-semibold">~€1.500</span> bij{" "}
                  <a href="https://www.coolblue.nl/laptops/gaming-laptops/met-nvidia-geforce-rtx-4070" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark">Coolblue</a>.
                  Kijk ook naar aanbiedingen op{" "}
                  <a href="https://tweakers.net/laptops/vergelijken/" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark">Tweakers Pricewatch</a>{" "}
                  voor de laagste prijs.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Budget tip:</strong> een RTX 4060-laptop
                  (8 GB VRAM) vanaf ~€1.100 is genoeg om modellen als Phi-3 Mini en Llama 3.2 3B
                  vlot te draaien. Perfect om te beginnen.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              MacBook: unified memory als troef
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Apple&apos;s M-serie chips hebben een groot voordeel voor lokale AI: het geheugen
              wordt gedeeld tussen CPU en GPU. Een MacBook Pro met 24 GB unified memory kan dat
              volledige geheugen gebruiken voor het laden van een model — veel meer dan de 8 GB
              VRAM van een gemiddelde Windows-laptop-GPU.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Het nadeel: Apple&apos;s GPU is trager per berekening dan een NVIDIA-chip. Maar
              voor modellen die <em>net niet</em> in het VRAM van een NVIDIA-kaart passen, wint
              de Mac door het grotere geheugen.
            </p>
          </div>

          {/* MacBook Table */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Model</th>
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Chip</th>
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Geheugen</th>
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Prijs vanaf</th>
                  <th className="text-left py-3 font-semibold text-dark">Geschikt voor</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">MacBook Air 15&quot;</td>
                  <td className="py-3 pr-4">M4</td>
                  <td className="py-3 pr-4">16 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€1.579</span>
                  </td>
                  <td className="py-3">7B-modellen, stil en draagbaar</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">MacBook Pro 14&quot;</td>
                  <td className="py-3 pr-4">M4 Pro</td>
                  <td className="py-3 pr-4">24 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€2.149</span>
                  </td>
                  <td className="py-3">13B-modellen, comfortabel 7B</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">MacBook Pro 16&quot;</td>
                  <td className="py-3 pr-4">M4 Max</td>
                  <td className="py-3 pr-4">36–48 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€3.999</span>
                  </td>
                  <td className="py-3">70B-modellen (Q4), Mixtral</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-dark">MacBook Pro 16&quot;</td>
                  <td className="py-3 pr-4">M4 Max</td>
                  <td className="py-3 pr-4">128 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€6.099</span>
                  </td>
                  <td className="py-3">Llama 3.1 405B (Q4)</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-2">
              Prijzen gebaseerd op Coolblue.nl en Apple.nl (maart 2026). Bekijk ook{" "}
              <a href="https://tweakers.net/macbooks/vergelijken/" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark">Tweakers</a>{" "}
              voor prijsvergelijking.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Desktop: meer VRAM voor minder geld
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Heb je geen laptop nodig? Een desktop biedt veel meer VRAM per euro. Desktop-GPU&apos;s
              hebben meer VRAM dan hun laptop-varianten, en je kunt er eventueel twee plaatsen.
            </p>
          </div>

          {/* Desktop GPU Table */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Videokaart</th>
                  <th className="text-left py-3 pr-4 font-semibold text-dark">VRAM</th>
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Prijs vanaf</th>
                  <th className="text-left py-3 font-semibold text-dark">Geschikt voor</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">RTX 4060 Ti</td>
                  <td className="py-3 pr-4">8–16 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€350</span>
                  </td>
                  <td className="py-3">7B-modellen, goede instap</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">RTX 4070 Super</td>
                  <td className="py-3 pr-4">12 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€530</span>
                  </td>
                  <td className="py-3">13B-modellen comfortabel</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-dark">RTX 4080</td>
                  <td className="py-3 pr-4">16 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€1.050</span>
                  </td>
                  <td className="py-3">Grotere modellen tot 30B</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-dark">RTX 4090</td>
                  <td className="py-3 pr-4">24 GB</td>
                  <td className="py-3 pr-4">
                    <span className="text-brand font-semibold">~€1.400</span>
                  </td>
                  <td className="py-3">70B-modellen (Q4), de koning</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-2">
              Richtprijzen maart 2026. Vergelijk actuele prijzen op{" "}
              <a href="https://tweakers.net/videokaarten/vergelijken/" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark">Tweakers Pricewatch</a>,{" "}
              <a href="https://www.coolblue.nl/videokaarten" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark">Coolblue</a>{" "}
              en{" "}
              <a href="https://www.mediamarkt.nl" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark">MediaMarkt</a>.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-brand/5 border border-brand/20 rounded-xl p-6 my-8">
              <p className="text-dark font-semibold mb-2 flex items-center gap-2">
                <MemoryStick className="w-5 h-5 text-brand" />
                Pro tip: tweedehands RTX 3090
              </p>
              <p className="text-muted-foreground text-base">
                Een tweedehands NVIDIA RTX 3090 met <strong className="text-dark">24 GB VRAM</strong> is
                te vinden vanaf ~€700 op Marktplaats of Tweakers Vraag &amp; Aanbod. Qua VRAM
                evenveel als een RTX 4090, voor de helft van de prijs. Iets langzamer, maar
                voor LLM-inferentie maakt dat weinig uit. Eén van de beste prijs-prestatie
                opties voor lokale AI.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Windows of Mac: wat moet je kiezen?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              De keuze hangt af van je prioriteiten:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Kies Windows</strong> als je de snelste inferentie
                  wilt, een desktop kunt gebruiken, of een beperkt budget hebt. NVIDIA-GPU&apos;s
                  zijn sneller per euro.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Kies Mac</strong> als je grotere modellen op een
                  laptop wilt draaien. 24-48 GB unified memory maakt modellen mogelijk die op een
                  Windows-laptop niet in het VRAM passen.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <strong className="text-dark">Kies een desktop</strong> als je het maximale wilt.
                  Een RTX 4090 met 24 GB VRAM kost ~€1.400 los — een fractie van een high-end
                  laptop.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Onze aanbeveling per budget
            </h2>
          </div>

          {/* Recommendations */}
          <div className="my-8 grid gap-4 sm:grid-cols-3">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-sm font-medium text-brand mb-1">Budget</div>
              <div className="text-2xl font-bold text-dark mb-1">~€1.100</div>
              <div className="text-sm text-muted-foreground mb-4">Windows laptop</div>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>RTX 4060 (8 GB VRAM)</li>
                <li>16 GB RAM, 512 GB SSD</li>
                <li>Draait: 3B-7B modellen</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-brand">
              <div className="text-sm font-medium text-brand mb-1">Beste keus</div>
              <div className="text-2xl font-bold text-dark mb-1">~€2.149</div>
              <div className="text-sm text-muted-foreground mb-4">MacBook Pro M4 Pro</div>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>24 GB unified memory</li>
                <li>Stil, draagbaar, efficiënt</li>
                <li>Draait: 7B-13B modellen</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-sm font-medium text-brand mb-1">Krachtigst</div>
              <div className="text-2xl font-bold text-dark mb-1">~€1.400</div>
              <div className="text-sm text-muted-foreground mb-4">Desktop + RTX 4090</div>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>24 GB VRAM</li>
                <li>Snelste inferentie</li>
                <li>Draait: tot 70B modellen</li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mt-12 mb-4">
              Waar kopen?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vergelijk altijd de prijs. De drie grootste Nederlandse platformen:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <a href="https://tweakers.net/pricewatch/" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark font-medium">Tweakers Pricewatch</a>{" "}
                  — de beste prijsvergelijker. Vergelijkt tientallen winkels en toont
                  prijsgeschiedenis.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <a href="https://www.coolblue.nl" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark font-medium">Coolblue</a>{" "}
                  — uitstekende service en snelle levering. Iets hogere prijzen, maar fijne
                  retourregeling.
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-brand font-bold mt-0.5">→</span>
                <span>
                  <a href="https://www.mediamarkt.nl" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark font-medium">MediaMarkt</a>{" "}
                  — regelmatig scherpe aanbiedingen, vooral bij uitlopende modellen.
                </span>
              </li>
            </ul>

            <div className="bg-brand/5 border border-brand/20 rounded-xl p-6 mt-8">
              <p className="text-dark font-semibold mb-2">Klaar om te beginnen?</p>
              <p className="text-muted-foreground text-base">
                Heb je je hardware? Op onze{" "}
                <Link href="/" className="text-brand hover:text-brand-dark font-medium">
                  homepagina
                </Link>{" "}
                vind je een stap-voor-stap handleiding om Ollama te installeren en je eerste
                model te draaien.
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
            headline: "De beste laptops voor lokaal AI draaien in 2026",
            description:
              "Welke laptop heb je nodig om lokaal een LLM te draaien? Overzicht met VRAM-vergelijking en prijzen.",
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
              "@id": "https://mijnchatbot.nl/blog/laptops-voor-lokale-ai",
            },
          }),
        }}
      />

      <Footer />
    </div>
  )
}
