import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ExitSurvey } from '@/components/exit-survey'

export const metadata: Metadata = {
  title: 'Lokaal AI Draaien — Jouw Gids voor LLM\'s op Eigen Hardware | LokaalAI',
  description: 'Leer hoe je je eigen AI draait op je computer. Volledig privé, gratis en zonder beperkingen. Stap-voor-stap uitleg met Ollama, hardware tips en modelkeuze.',
  keywords: ['lokaal AI draaien', 'LLM lokaal', 'Ollama', 'eigen AI', 'privacy AI', 'lokale taalmodellen', 'GPU AI', 'open source AI'],
  openGraph: {
    title: 'Lokaal AI Draaien — Jouw Gids voor LLM\'s op Eigen Hardware',
    description: 'Draai je eigen AI, volledig privé. Gratis gids met hardware tips, modelkeuze en stap-voor-stap installatie.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'LokaalAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lokaal AI Draaien — Jouw Gids',
    description: 'Draai je eigen AI, volledig privé. Gratis gids met hardware tips en stap-voor-stap installatie.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'LokaalAI',
              description: 'Jouw gids voor het draaien van AI op eigen hardware',
              url: 'https://mijnchatbot.nl',
              inLanguage: 'nl',
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <ExitSurvey />
      </body>
    </html>
  )
}
