import { AvailableLotsSection } from "@/components/AvailableLotsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { Navbar } from "@/components/Navbar"
import { TrustSection } from "@/components/TrustSection"

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-stone-950">
        <HeroSection />
        <AvailableLotsSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App