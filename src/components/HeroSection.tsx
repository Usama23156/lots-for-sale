import { ArrowUpRight } from "lucide-react"

import heroBackground from "@/assets/trusted.jpg"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen w-full overflow-hidden bg-stone-950 text-left text-white">
      <img
        src={heroBackground}
        alt="Aerial view of expansive premium land parcels and countryside roads"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_38%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#060403]/95 via-[#060403]/70 to-[#060403]/25" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_22%,rgba(218,185,121,0.28),transparent_34%),linear-gradient(to_top,rgba(6,4,3,0.9),transparent_48%)]" />

      <div className="mx-auto flex w-full max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-4xl pt-16">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#ead8b5] shadow-2xl shadow-black/20 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#d9b16e]" />
            Private Land Advisory
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.42em] text-white/70">
            Editorial Estate Portfolio
          </p>

          <h1 className="max-w-4xl font-[var(--heading)] text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
            Where enduring land becomes a private legacy.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            A curated approach to rare acreage, architectural horizons, and
            generational land positions - composed for buyers who see property
            as both sanctuary and story.
          </p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <Button
              type="button"
              className="h-14 rounded-full border border-[#d9b16e]/60 bg-[#d9b16e] px-8 text-sm font-bold uppercase tracking-[0.24em] text-stone-950 shadow-[0_18px_60px_rgba(0,0,0,0.35)] hover:bg-[#f1d59d]"
            >
              Request Private Brief
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-14 rounded-full border-white/35 bg-white/10 px-8 text-sm font-bold uppercase tracking-[0.24em] text-white backdrop-blur-md hover:bg-white hover:text-stone-950"
            >
              View Estate Story
            </Button>
          </div>

          <div className="mt-14 flex max-w-md items-center gap-4 border-l border-[#d9b16e]/60 pl-5">
            <span className="font-[var(--heading)] text-3xl text-[#ead8b5]">
              01
            </span>
            <p className="text-sm leading-6 text-white/70">
              Trusted private advisory for discerning land buyers seeking
              scarcity, privacy, and long-view value.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
