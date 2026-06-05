import { AvailableLotsSection } from "@/components/AvailableLotsSection"
import { ContactSection } from "@/components/ContactSection"
import { HeroSection } from "@/components/HeroSection"
import { TrustSection } from "@/components/TrustSection"

function App() {
  return (
    <main className="min-h-screen bg-stone-950">
      <HeroSection />
      <AvailableLotsSection />
      <TrustSection />
      <ContactSection />
    </main>
  )
}

export default App