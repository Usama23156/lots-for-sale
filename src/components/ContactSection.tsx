import { ArrowUpRight, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const contactDetails = [
  {
    label: "Private Desk",
    value: "+1 (407) 555-0188",
    icon: Phone,
  },
  {
    label: "Email",
    value: "advisory@floridaland.co",
    icon: Mail,
  },
  {
    label: "Market Focus",
    value: "Central Florida Growth Corridor",
    icon: MapPin,
  },
]

export function ContactSection() {
  return (
    <section className="w-full bg-[#f3eee4] px-6 py-24 text-left text-stone-950 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#17110b] shadow-[0_35px_120px_rgba(33,23,14,0.22)]">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative isolate flex flex-col justify-between overflow-hidden p-8 text-white sm:p-10 lg:p-14">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(217,177,110,0.24),transparent_36%),radial-gradient(circle_at_88%_72%,rgba(255,255,255,0.1),transparent_32%)]" />
            <div className="absolute inset-y-0 right-0 -z-10 hidden w-px bg-white/10 lg:block" />

            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.34em] text-[#d9b16e]">
                Private Buyer Consultation
              </p>
              <h2 className="font-[var(--heading)] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Begin the conversation around your Florida land position.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
                Share your acquisition goals and our advisory desk will prepare
                a focused response with lot context, next-step guidance, and
                the details needed to evaluate with confidence.
              </p>
            </div>

            <div className="mt-12 grid gap-5">
              <div className="border border-white/10 bg-white/[0.06] p-6">
                <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#ead8b5]">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Trust Statement
                </div>
                <p className="text-sm leading-7 text-white/70">
                  Your inquiry is handled discreetly by a private land advisory
                  team focused on verified information, secure next steps, and
                  buyer-first communication.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="border border-white/10 bg-white/[0.06] p-5">
                  <Clock className="mb-4 h-5 w-5 text-[#d9b16e]" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-white/45">
                    Response Time
                  </p>
                  <p className="mt-2 font-[var(--heading)] text-2xl font-semibold text-white">
                    Within 24 hours
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.06] p-5">
                  <ArrowUpRight className="mb-4 h-5 w-5 text-[#d9b16e]" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-white/45">
                    Next Step
                  </p>
                  <p className="mt-2 font-[var(--heading)] text-2xl font-semibold text-white">
                    Private lot briefing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fbf8f0] p-8 sm:p-10 lg:p-14">
            <div className="mb-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[#9b723c]">
                Lead Capture
              </p>
              <h3 className="font-[var(--heading)] text-4xl font-semibold leading-none tracking-[-0.04em] text-[#21170e] sm:text-5xl">
                Request access to the current land brief.
              </h3>
            </div>

            <form className="grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="grid gap-3">
                  <Label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.22em] text-stone-600">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className="h-14 rounded-none border-0 border-b border-stone-950/20 bg-transparent px-0 text-stone-950 placeholder:text-stone-400 focus-visible:border-[#9b723c] focus-visible:ring-0"
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.22em] text-stone-600">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-14 rounded-none border-0 border-b border-stone-950/20 bg-transparent px-0 text-stone-950 placeholder:text-stone-400 focus-visible:border-[#9b723c] focus-visible:ring-0"
                  />
                </div>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-[0.22em] text-stone-600">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Best contact number"
                  className="h-14 rounded-none border-0 border-b border-stone-950/20 bg-transparent px-0 text-stone-950 placeholder:text-stone-400 focus-visible:border-[#9b723c] focus-visible:ring-0"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.22em] text-stone-600">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your timeline, budget, and preferred Florida location."
                  className="min-h-36 rounded-none border-0 border-b border-stone-950/20 bg-transparent px-0 text-stone-950 placeholder:text-stone-400 focus-visible:border-[#9b723c] focus-visible:ring-0"
                />
              </div>

              <Button
                type="submit"
                className="mt-2 h-14 w-full rounded-full border border-[#d9b16e]/70 bg-[#d9b16e] px-8 text-xs font-bold uppercase tracking-[0.24em] text-stone-950 hover:bg-[#f1d59d] sm:w-fit"
              >
                Submit Private Inquiry
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </form>

            <div className="mt-12 grid gap-4 border-t border-stone-950/10 pt-8">
              {contactDetails.map((detail) => {
                const Icon = detail.icon

                return (
                  <div
                    key={detail.label}
                    className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-950 text-[#ead8b5]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-stone-500">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-base font-semibold text-stone-950">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
