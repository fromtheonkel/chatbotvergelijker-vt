import type { Metadata } from 'next'
import Script from 'next/script'
import CookieConsentBanner from '@/components/cookie-consent-banner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mijn Chatbot - AI Chatbot Service',
  description: 'Professionele AI chatbot service voor uw bedrijf. Verbeter klantenservice en automatiseer gesprekken.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-54RDN4QD');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-54RDN4QD"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        {children}
        {/* Cookie Consent Banner */}
        <CookieConsentBanner />
      </body>
    </html>
  )
}
