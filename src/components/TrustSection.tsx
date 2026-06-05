import {
  BadgeCheck,
  BriefcaseBusiness,
  FileCheck2,
  Hammer,
  HeartHandshake,
  Home,
  KeyRound,
  MapPinned,
  ShieldCheck,
} from "lucide-react"

import landImage from "@/assets/trusted.jpg"

const primeLocations = [
  "Central Florida Growth Corridor",
  "Orlando access markets",
  "Gulf-to-Atlantic connector routes",
  "Emerging residential enclaves",
]

const trustIndicators = [
  {
    title: "Verified land positioning",
    description:
      "Each opportunity is presented with a clear location narrative, practical access context, and investment-oriented due diligence.",
    icon: BadgeCheck,
  },
  {
    title: "Secure transactions",
    description:
      "Buyer confidence is supported through disciplined documentation, closing coordination, and transparent deal milestones.",
    icon: ShieldCheck,
  },
  {
    title: "Investment credibility",
    description:
      "Editorial storytelling is paired with fundamentals: growth corridors, land scarcity, residential demand, and long-term optionality.",
    icon: FileCheck2,
  },
]

const buyerPersonas = [
  {
    title: "Investors",
    description:
      "For buyers seeking tangible assets, land banking potential, and exposure to Florida's expanding residential map.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Future Home Builders",
    description:
      "For families and custom-build clients imagining privacy, acreage, and the freedom to shape a future estate.",
    icon: Hammer,
  },
  {
    title: "Retirement Buyers",
    description:
      "For long-view buyers planning a quieter Florida chapter with room, access, and enduring lifestyle value.",
    icon: Home,
  },
]

export function TrustSection() {
  return (
    <section className="w-full bg-[#15110c] px-6 py-24 text-left text-white sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#d9b16e]">
              Trust & Location
            </p>
            <h2 className="font-[var(--heading)] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Confidence shaped around place, process, and possibility.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Florida land demands more than a pin on a map. It asks for a clear
            reading of growth, access, buyer intent, and the transaction
            discipline that turns acreage into a credible long-term position.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <article className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#21170e] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(217,177,110,0.24),transparent_34%),radial-gradient(circle_at_78%_68%,rgba(255,255,255,0.08),transparent_30%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-[#ead8b5] backdrop-blur">
                  <MapPinned className="h-4 w-4" aria-hidden="true" />
                  Florida Map Showcase
                </div>

                <div className="mx-auto max-w-sm">
                  <svg
                    viewBox="0 0 260 360"
                    role="img"
                    aria-label="Stylized Florida map with prime location markers"
                    className="h-auto w-full drop-shadow-[0_24px_55px_rgba(0,0,0,0.35)]"
                  >
                    <path
                      d="M86 21c25 12 51 15 78 11 19-3 36 7 45 24 7 14 5 31-5 43l-13 16c-9 12-10 28-2 41l41 66c9 15 14 32 13 49l-3 54c-1 20-17 35-37 34-11-1-21-7-27-17l-30-54c-10-19-26-34-46-42l-43-18c-18-8-26-29-18-47l18-40c8-18 6-39-6-55L30 59c-10-14 0-33 17-33h18c7 0 14-2 21-5Z"
                      fill="#ead8b5"
                      opacity="0.96"
                    />
                    <path
                      d="M79 37c24 10 50 12 76 8 14-2 28 5 35 18 6 11 4 24-4 34l-14 18c-12 16-13 38-3 55l41 65c7 12 11 26 10 40l-3 48c0 6-5 10-11 10-4 0-8-2-10-6l-30-54c-13-24-33-43-58-53l-43-18c-5-2-8-8-5-13l18-41c11-26 8-56-9-79L49 46h15c5 0 10-1 15-3Z"
                      fill="#5f7131"
                      opacity="0.86"
                    />
                    {[
                      { cx: 151, cy: 111, label: "Orlando" },
                      { cx: 121, cy: 168, label: "Lakeland" },
                      { cx: 177, cy: 203, label: "Atlantic access" },
                      { cx: 201, cy: 282, label: "South corridor" },
                    ].map((marker) => (
                      <g key={marker.label}>
                        <circle cx={marker.cx} cy={marker.cy} r="12" fill="#15110c" />
                        <circle cx={marker.cx} cy={marker.cy} r="5" fill="#d9b16e" />
                      </g>
                    ))}
                  </svg>
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {primeLocations.map((location) => (
                  <div
                    key={location}
                    className="border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white/78"
                  >
                    {location}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="flex flex-col justify-center bg-[#f3eee4] p-8 text-stone-950 sm:p-10 lg:p-12">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#9b723c]">
              Prime Locations
            </p>
            <h3 className="font-[var(--heading)] text-4xl font-semibold leading-none tracking-[-0.04em] text-[#21170e] sm:text-5xl">
              A location story built for buyers who think beyond the parcel.
            </h3>
            <p className="mt-7 text-base leading-8 text-stone-700">
              The most compelling Florida lots sit at the intersection of
              movement and restraint: close enough to growth corridors to carry
              momentum, yet composed enough to preserve privacy, open land, and
              the feeling of arrival.
            </p>

            <div className="mt-10 grid gap-5">
              {trustIndicators.map((indicator) => {
                const Icon = indicator.icon

                return (
                  <div
                    key={indicator.title}
                    className="grid gap-4 border-t border-stone-950/15 pt-5 sm:grid-cols-[auto_1fr]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 text-[#ead8b5]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-[var(--heading)] text-2xl font-semibold tracking-[-0.03em] text-stone-950">
                        {indicator.title}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-stone-700">
                        {indicator.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </article>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <article className="order-2 flex flex-col justify-between border border-white/10 bg-white/[0.06] p-8 sm:p-10 lg:order-1 lg:p-12">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#d9b16e]">
                Buyer Personas
              </p>
              <h3 className="font-[var(--heading)] text-4xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-5xl">
                Three paths into the same enduring landscape.
              </h3>
            </div>

            <div className="mt-12 grid gap-5">
              {buyerPersonas.map((persona, index) => {
                const Icon = persona.icon

                return (
                  <div
                    key={persona.title}
                    className="group grid gap-5 border border-white/10 bg-[#15110c] p-6 transition-colors hover:border-[#d9b16e]/50 sm:grid-cols-[auto_1fr]"
                  >
                    <div className="flex items-center gap-4 sm:block">
                      <span className="font-[var(--heading)] text-3xl text-[#d9b16e]">
                        0{index + 1}
                      </span>
                      <span className="mt-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#ead8b5] sm:mt-5">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <div>
                      <h4 className="font-[var(--heading)] text-2xl font-semibold tracking-[-0.03em] text-white">
                        {persona.title}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-white/64">
                        {persona.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </article>

          <article className="order-1 overflow-hidden rounded-[2rem] bg-stone-950 shadow-[0_30px_90px_rgba(0,0,0,0.28)] lg:order-2">
            <div className="relative min-h-[560px]">
              <img
                src={landImage}
                alt="Florida land viewed from above with road access and open acreage"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <div className="max-w-md border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                  <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#ead8b5]">
                    <KeyRound className="h-4 w-4" aria-hidden="true" />
                    Secure Transactions
                  </div>
                  <p className="font-[var(--heading)] text-3xl font-semibold leading-tight tracking-[-0.035em] text-white">
                    Guided acquisition, credible documentation, and a discreet
                    path from interest to closing.
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-white/72">
                    <HeartHandshake className="h-5 w-5 text-[#d9b16e]" aria-hidden="true" />
                    Private buyer support from first review.
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
