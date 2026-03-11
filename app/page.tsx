import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import {
  Shield, Wifi, WifiOff, DollarSign, Infinity,
  Download, Monitor, MessageSquare, Globe, Cpu,
  HardDrive, Zap, ChevronRight, Terminal, ArrowRight,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    q: "Is het legaal om een lokaal AI-model te draaien?",
    a: "Ja, volledig legaal. Open source modellen zoals Llama, Mistral en Gemma worden expliciet vrijgegeven voor persoonlijk en vaak ook commercieel gebruik. Controleer altijd de specifieke licentie van het model dat je kiest."
  },
  {
    q: "Heb ik een dure videokaart nodig?",
    a: "Niet per se. Met 8 GB VRAM draai je al goede modellen voor dagelijks gebruik. Een NVIDIA RTX 3060 (12 GB) is een uitstekende instapper. Heb je geen videokaart? Dan kun je modellen ook op je processor (CPU) draaien — langzamer, maar het werkt."
  },
  {
    q: "Hoe verhoudt een lokaal model zich tot ChatGPT?",
    a: "De grootste modellen (70B parameters) komen dicht in de buurt van GPT-4 voor veel taken. Kleinere modellen (7-13B) zijn prima voor dagelijkse vragen, schrijfwerk en code. Het verschil wordt steeds kleiner."
  },
  {
    q: "Werkt het ook op een Mac?",
    a: "Ja, Ollama werkt uitstekend op macOS. Apple Silicon Macs (M1/M2/M3/M4) zijn bijzonder geschikt omdat ze unified memory gebruiken, waardoor zelfs een MacBook Air met 16 GB grotere modellen aankan."
  },
  {
    q: "Hoeveel opslagruimte heb ik nodig?",
    a: "Een klein model (7B) is ongeveer 4 GB. Een middelgroot model (13B) rond de 8 GB. Grote modellen (70B) kunnen 40+ GB zijn. Je kunt meerdere modellen installeren en wisselen wanneer je wilt."
  },
  {
    q: "Kan ik het ook voor mijn bedrijf gebruiken?",
    a: "Absoluut. Steeds meer bedrijven draaien lokale AI voor privacy-gevoelige taken. Denk aan het analyseren van interne documenten, e-mails beantwoorden of code schrijven — zonder dat data naar externe servers gaat."
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-dark text-white overflow-hidden">
          {/* Background illustration */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
            <div className="relative w-full max-w-5xl mx-auto opacity-[0.12]">
              <Image
                src="/hero-illustration.webp"
                alt=""
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                Draai je eigen AI,{' '}
                <span className="text-brand">volledig privé</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Geen abonnementen. Geen data die naar de cloud gaat. Geen beperkingen. Ontdek hoe je krachtige AI-modellen draait op je eigen computer — gratis en in een paar minuten.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#aan-de-slag"
                  className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-medium px-8 py-3.5 rounded-full transition-colors text-base shadow-lg shadow-brand/25"
                >
                  Aan de slag
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
                <a
                  href="#waarom-lokaal"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3.5 rounded-full transition-colors text-base"
                >
                  Waarom lokaal?
                </a>
              </div>
            </div>
          </div>

          {/* Foreground illustration at bottom */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 -mb-1">
            <Image
              src="/hero-illustration.webp"
              alt="Persoon werkt thuis met een privé AI-assistent op de computer"
              width={1200}
              height={600}
              className="w-full h-auto rounded-t-2xl"
              priority
            />
          </div>
        </section>

        {/* Waarom lokaal */}
        <section id="waarom-lokaal" className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
                Waarom je eigen AI draaien?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cloud-AI is handig, maar het heeft nadelen. Met een lokaal model heb jij de volledige controle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "100% Privacy", desc: "Je data verlaat nooit je computer. Geen logs, geen tracking, geen zorgen over vertrouwelijke informatie." },
                { icon: DollarSign, title: "Volledig gratis", desc: "Geen maandelijkse abonnementen of kosten per bericht. Download, installeer en gebruik — onbeperkt." },
                { icon: WifiOff, title: "Werkt offline", desc: "Geen internetverbinding nodig. Perfect voor onderweg, in het vliegtuig of op locaties zonder netwerk." },
                { icon: Infinity, title: "Onbeperkt gebruik", desc: "Geen limieten op het aantal berichten, tokens of verzoeken. Gebruik het zo veel als je wilt." },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-border/60 rounded-2xl p-6 hover:shadow-lg hover:border-brand/30 transition-all">
                  <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="font-semibold text-dark text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog preview */}
        <section className="py-16 sm:py-24 bg-secondary/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
                Uit de blog
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                De laatste artikelen over lokale AI, hardware en open source modellen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/blog/open-source-modellen-via-cloud"
                className="group bg-white rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:border-brand/30 transition-all"
              >
                <span className="text-xs text-muted-foreground">6 maart 2026 · 6 min</span>
                <h3 className="font-bold text-dark text-lg mt-2 mb-2 group-hover:text-brand transition-colors">
                  Open source modellen via de cloud: gratis zonder eigen hardware
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Geen GPU? Draai open source modellen via Groq, Together AI en OpenRouter.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:gap-2.5 transition-all">
                  Lees artikel <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/blog/claude-code-ollama-lokaal"
                className="group bg-white rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:border-brand/30 transition-all"
              >
                <span className="text-xs text-muted-foreground">5 maart 2026 · 7 min</span>
                <h3 className="font-bold text-dark text-lg mt-2 mb-2 group-hover:text-brand transition-colors">
                  Claude Code met Ollama: lokaal programmeren met AI
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Anthropic&apos;s code-assistent werkt nu met lokale modellen. Wat zijn de
                  voor- en nadelen?
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:gap-2.5 transition-all">
                  Lees artikel <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/blog/laptops-voor-lokale-ai"
                className="group bg-white rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:border-brand/30 transition-all"
              >
                <span className="text-xs text-muted-foreground">5 maart 2026 · 8 min</span>
                <h3 className="font-bold text-dark text-lg mt-2 mb-2 group-hover:text-brand transition-colors">
                  De beste laptops voor lokaal AI draaien in 2026
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  VRAM is de sleutel. We vergelijken Windows-laptops en MacBooks op prijs
                  en geheugen.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:gap-2.5 transition-all">
                  Lees artikel <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
              >
                Alle artikelen bekijken <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Wat heb je nodig */}
        <section className="py-16 sm:py-24 bg-secondary/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
                Wat heb je nodig?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Het draait allemaal om <strong>VRAM</strong> — het werkgeheugen van je videokaart. Hoe meer VRAM, hoe grotere en slimmere modellen je kunt draaien.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tier: "Instapper",
                  vram: "8 GB VRAM",
                  gpu: "RTX 3060 / RTX 4060",
                  models: "7B modellen",
                  desc: "Prima voor dagelijks gebruik: vragen beantwoorden, tekst schrijven, brainstormen. Een solide start.",
                  color: "bg-brand-light text-brand",
                },
                {
                  tier: "Serieus",
                  vram: "12–16 GB VRAM",
                  gpu: "RTX 3060 12GB / RTX 4070",
                  models: "13B modellen",
                  desc: "Merkbaar slimmere antwoorden, beter in complexe taken en langere teksten. De sweet spot voor de meeste gebruikers.",
                  color: "bg-brand text-white",
                },
                {
                  tier: "Professioneel",
                  vram: "24 GB+ VRAM",
                  gpu: "RTX 3090 / RTX 4090",
                  models: "33–70B modellen",
                  desc: "Bijna GPT-4 niveau. Ideaal voor professioneel gebruik, complexe analyses en het draaien van meerdere modellen.",
                  color: "bg-dark text-white",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg transition-all">
                  <div className={`${item.color} px-6 py-4`}>
                    <p className="text-sm font-medium opacity-80">{item.tier}</p>
                    <p className="text-2xl font-bold">{item.vram}</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Cpu className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-dark">{item.gpu}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <HardDrive className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{item.models}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              <Zap className="w-4 h-4 inline mr-1" />
              Geen videokaart? Je kunt modellen ook op je CPU draaien — langzamer, maar het werkt prima voor kleinere modellen.
            </p>
          </div>
        </section>

        {/* Aan de slag */}
        <section id="aan-de-slag" className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
                In 5 minuten je eigen AI
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Met <a href="https://ollama.com" target="_blank" rel="noopener noreferrer" className="text-brand font-medium hover:underline">Ollama</a> is het opzetten van een lokaal AI-model verrassend eenvoudig.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-8">
              {[
                {
                  step: "1",
                  icon: Download,
                  title: "Download Ollama",
                  desc: "Ga naar ollama.com en download de versie voor jouw besturingssysteem (Windows, macOS of Linux).",
                },
                {
                  step: "2",
                  icon: Terminal,
                  title: "Open je terminal",
                  desc: "Op Windows: zoek naar 'Terminal' of 'PowerShell'. Op Mac: open 'Terminal' vanuit Applications.",
                },
                {
                  step: "3",
                  icon: Monitor,
                  title: "Download een model",
                  desc: "Typ het volgende commando om Llama 3 te downloaden en te starten:",
                  code: "ollama run llama3",
                },
                {
                  step: "4",
                  icon: MessageSquare,
                  title: "Start met chatten",
                  desc: "Dat is alles! Je kunt nu direct vragen stellen in je terminal. Het model draait volledig op jouw computer.",
                },
                {
                  step: "5",
                  icon: Globe,
                  title: "Optioneel: installeer Open WebUI",
                  desc: "Wil je een mooie ChatGPT-achtige interface? Installeer Open WebUI voor een visuele chatervaring met bestanduploads en chatgeschiedenis.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold text-dark text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.desc}</p>
                    {item.code && (
                      <code className="block bg-dark text-brand font-mono text-sm px-4 py-3 rounded-lg">
                        $ {item.code}
                      </code>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Populaire modellen */}
        <section className="py-16 sm:py-24 bg-secondary/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
                Populaire open source modellen
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Er zijn tientallen modellen beschikbaar. Dit zijn de beste opties voor verschillende toepassingen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Llama 3", by: "Meta", size: "8B / 70B", vram: "5–40 GB", use: "Allround: schrijven, vragen, redeneren. De populairste keuze.", cmd: "ollama run llama3" },
                { name: "Mistral", by: "Mistral AI", size: "7B", vram: "5 GB", use: "Snel en compact. Uitstekend voor dagelijks gebruik en code.", cmd: "ollama run mistral" },
                { name: "Gemma 2", by: "Google", size: "9B / 27B", vram: "6–16 GB", use: "Sterk in instructies opvolgen. Goede balans tussen snelheid en kwaliteit.", cmd: "ollama run gemma2" },
                { name: "Phi-3", by: "Microsoft", size: "3.8B / 14B", vram: "3–8 GB", use: "Verrassend slim voor zijn formaat. Perfect als je weinig VRAM hebt.", cmd: "ollama run phi3" },
                { name: "DeepSeek Coder", by: "DeepSeek", size: "6.7B / 33B", vram: "4–20 GB", use: "Gespecialiseerd in programmeren. Begrijpt code en schrijft functies.", cmd: "ollama run deepseek-coder" },
                { name: "Qwen 2.5", by: "Alibaba", size: "7B / 72B", vram: "5–42 GB", use: "Sterk in meertalig gebruik en lange teksten. Goed alternatief voor Llama.", cmd: "ollama run qwen2.5" },
              ].map((model, i) => (
                <div key={i} className="bg-white rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:border-brand/30 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-dark text-lg">{model.name}</h3>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">{model.by}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{model.use}</p>
                  <div className="space-y-1 text-xs text-muted-foreground mb-3">
                    <p><span className="font-medium text-dark">Parameters:</span> {model.size}</p>
                    <p><span className="font-medium text-dark">VRAM nodig:</span> {model.vram}</p>
                  </div>
                  <code className="block bg-dark text-brand font-mono text-xs px-3 py-2 rounded-lg">
                    $ {model.cmd}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
                Veelgestelde vragen
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-left text-base font-medium text-dark hover:text-brand">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* FAQ structured data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: faqItems.map(item => ({
                    '@type': 'Question',
                    name: item.q,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: item.a,
                    },
                  })),
                }),
              }}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-brand">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Begin vandaag met je eigen AI
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Download Ollama, kies een model en draai binnen 5 minuten je eerste lokale AI. Volledig gratis.
            </p>
            <a
              href="https://ollama.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white hover:bg-white/90 text-brand-dark font-semibold px-8 py-3.5 rounded-full transition-colors text-base shadow-lg"
            >
              Download Ollama
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
