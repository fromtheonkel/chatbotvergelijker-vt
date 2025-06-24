import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactPage } from "@/components/contact-page"

export const metadata = {
  title: 'Contact - Mijn Chatbot | Gratis Adviesgesprek',
  description: 'Neem contact op voor een gratis adviesgesprek over AI chatbot oplossingen. Nederlandse support en maatwerk chatbots voor uw bedrijf.',
  keywords: 'contact, chatbot advies, AI implementatie, Nederlandse chatbot service, gratis adviesgesprek'
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactPage />
      <Footer />
    </div>
  )
}