import { ArrowUpRight, Home, Landmark, MapPin, Sprout, TrendingUp } from "lucide-react"

import lotImage from "@/assets/available-lots-florida-land.png"
import { Button } from "@/components/ui/button"

const featuredLot = {
  title: "The Hammock Reserve",
  acreage: "12.8 Acres",
  price: "$485,000",
  location: "Central Florida Growth Corridor",
}

const benefits = [
  {
    title: "Florida growth opportunity",
    description:
      "Positioned within a state defined by population momentum, expanding infrastructure, and sustained demand for thoughtfully located land.",
    icon: TrendingUp,
  },
  {
    title: "Residential potential",
    description:
      "Generous acreage supports a private estate vision, future residential planning, or a refined land-banking strategy.",
    icon: Home,
  },
  {
    title: "Long-term appreciation",
    description:
      "Scarcity, access, and regional growth fundamentals create a measured path for patient capital and enduring value.",
    icon: Sprout,
  },
  {
    title: "Investment advantages",
    description:
      "A tangible asset class with privacy, optionality, and the ability to anchor a diversified real estate portfolio.",
    icon: Landmark,
  },
]

export function AvailableLotsSection() {

     function scrollToContact() {
  const el = document.getElementById("Contact");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

  return (
    <section className="w-full bg-[#f3eee4] px-6 py-20 text-left text-stone-950 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#9b723c]">
            Available Lots
          </p>
          <h2 className="max-w-3xl  text-4xl font-semibold leading-[0.98] tracking-[-0.04em] !text-[#21170e] sm:text-6xl">
            A considered land position in Florida's next chapter.
          </h2>
        </div>

        <p className="max-w-xl text-base leading-8 text-stone-700 sm:text-lg">
          Presented with the restraint of an architectural editorial, this
          release pairs expansive acreage with a clear investment narrative:
          privacy today, residential possibility tomorrow, and a long-view stake
          in one of Florida's most watched growth landscapes.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <article className=" relative overflow-hidden rounded-[2rem] bg-stone-950 shadow-[0_30px_90px_rgba(33,23,14,0.18)]">
          <div className=" min-h-[1000px]">
            <img
              src={lotImage}
              alt="Aerial view of available Florida acreage with roads and open land"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="max-w-xl border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-md sm:p-8">
                <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#ead8b5]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {featuredLot.location}
                </div>

                <h3 className="text-4xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-5xl">
                  {featuredLot.title}
                </h3>

                <div className="mt-7 grid gap-5 border-y border-white/15 py-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.26em] text-white/50">
                      Acreage
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {featuredLot.acreage}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.26em] text-white/50">
                      Price
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {featuredLot.price}
                    </p>
                  </div>
                </div>

                <Button
                 onClick={scrollToContact}
                  type="button"
                  className="mt-7 h-14 rounded-full border border-[#d9b16e]/70 bg-[#d9b16e] px-7 text-xs font-bold uppercase tracking-[0.24em] text-stone-950 hover:bg-[#f1d59d]"
                >
                  Explore Lot Details
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <article
                key={benefit.title}
                className="group border border-stone-950/10 bg-[#fbf8f0] p-6 transition-colors hover:border-[#b98b4b]/40 sm:p-7"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-[var(--heading)] text-3xl text-[#b98b4b]">
                    0{index + 1}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-950 text-[#ead8b5] transition-transform group-hover:-translate-y-1">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-stone-950">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">
                  {benefit.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
