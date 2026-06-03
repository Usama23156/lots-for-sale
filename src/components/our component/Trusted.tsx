import { Separator } from "@/components/ui/separator";
import Trust from "@/assets/trusted.jpg";

function Trusted() {
  return (
    <section className="relative">
      <div className="mx-auto px-28 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
          <div className="mt-12">
            <div className="text-sm font-extrabold  text-emerald-300 tracking-wide">
              TRUSTED PROCESS
            </div>
            <h2 className="mt-2 text-3xl  px-10 md:text-4xl font-extrabold pb-7">
              A clear process from inquiry to next steps
            </h2>
            <p className="mt-3 text-white/70 leading-7 px-10 pb-7">
              We make it easy to understand what’s available and what you can do
              next. Our goal is to help you make a confident decision.
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
                <div key={s.step} className="mb-4  ">
                  <div className="flex items-start pb-4 gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-black">
                      {s.step}
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="font-extrabold ">{s.title}</div>
                      <div className="mt-1  text-white/60 leading-6">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-white/10 bg-gradient-to-b border-b-0 rounded-b-none from-white/10 to-white/5  md:pt-7 backdrop-blur shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
            <div className="text-xl font-extrabold pb-4">
              Ready for current availability?
            </div>
            <div className="mt-2 text-sm text-white/65 leading-6 px-4 pb-4">
              Submit an inquiry and get matched with residential or investment
              lots in Florida.
            </div>

            <Separator className="my-4 bg-white/10" />

            <div className="space-y-3 pb-5 ">
              {[
                "Response within 24–48 hours",
                "Shortlist tailored to your budget + preferences",
                "No spam—only relevant lot options",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 text-sm px-5 text-white/75 pb-3"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 font-black">
                    ✓
                  </span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <img src={Trust} alt="" className="pb-0 object-cover  " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
