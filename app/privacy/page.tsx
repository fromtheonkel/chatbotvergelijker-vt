import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PrivacyPage } from "@/components/privacy-page"

export const metadata = {
  title: 'Privacybeleid - Mijn Chatbot',
  description: 'Lees ons privacybeleid over hoe wij omgaan met uw gegevens en uw privacy beschermen.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PrivacyPage />
      <Footer />
    </div>
  )
}