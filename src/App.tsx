import { AvailableLotsSection } from "@/components/AvailableLotsSection"
import { HeroSection } from "@/components/HeroSection"
import { TrustSection } from "@/components/TrustSection"

function App() {
  return (
    <main className="min-h-screen bg-stone-950">
      <HeroSection />
      <AvailableLotsSection />
      <TrustSection />
    </main>
  )
}

export default App