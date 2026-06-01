import React from 'react'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function Trusted() {
    function scrollToInquiry() {
  const el = document.getElementById("inquiry");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}
  return (
     <section className="relative">
        <div className="mx-auto w-[min(1120px,92vw)] py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
            <div>
              <div className="text-sm font-extrabold text-emerald-300 tracking-wide">
                TRUSTED PROCESS
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                A clear process from inquiry to next steps
              </h2>
              <p className="mt-3 text-white/70 leading-7">
                We make it easy to understand what’s available and what you can
                do next. Our goal is to help you make a confident decision.
              </p>

              <div className="gap-4 mt-7">
                {[
                  {
                    step: "1",
                    title: "Submit your preferences",
                    desc: "Tell us your budget, interest type, and location goals.",
                  },
                  {
                    step: "2",
                    title: "Get a curated shortlist",
                    desc: "We match you with available lots and relevant details.",
                  },
                  {
                    step: "3",
                    title: "Review & ask questions",
                    desc: "We explain next steps and help you move forward.",
                  },
                  {
                    step: "4",
                    title: "Proceed confidently",
                    desc: "You’ll know what’s next—without confusion.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="mb-4 "
                  >
                    <div className="flex items-start  gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-black">
                        {s.step}
                      </div>
                      <div className='flex flex-col items-start'>
                        <div className="font-extrabold">{s.title}</div>
                        <div className="mt-1 text-sm text-white/60 leading-6">
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="rounded-2xl border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 md:p-7 backdrop-blur shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
              <div className="text-xl font-extrabold">Ready for current availability?</div>
              <div className="mt-2 text-sm text-white/65 leading-6">
                Submit an inquiry and get matched with residential or investment lots in California.
              </div>

              <Separator className="my-4 bg-white/10" />

              <div className="space-y-3">
                {[
                  "Response within 24–48 hours",
                  "Shortlist tailored to your budget + preferences",
                  "No spam—only relevant lot options",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-white/75">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 font-black">
                      ✓
                    </span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  onClick={scrollToInquiry}
                  className="w-full py-6 bg-emerald-500 hover:bg-emerald-500/90 text-black font-extrabold"
                  size="lg"
                >
                  Request More Information
                </Button>
              </div>

              <div className="mt-4 text-xs text-white/55 leading-5">
                Have questions before submitting? Fill the form—our team will respond.
              </div>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default Trusted