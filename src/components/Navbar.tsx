import { ArrowUpRight } from "lucide-react"

import logo from "@/assets/logoo.jpeg"
import { Button } from "@/components/ui/button"

export function Navbar() {

   function scrollToContact() {
  const el = document.getElementById("Contact");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}


  return (
    <header className=" inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/45 px-6 py-4 text-white backdrop-blur-xl sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#d9b16e]/40 bg-white shadow-[0_12px_34px_rgba(0,0,0,0.24)]">
            <img
              src={logo}
              alt="Florida Land Advisory logo"
              className="h-full w-full object-cover"
            />
          </span>
          <div>
            <p className=" text-xl font-semibold leading-none tracking-[-0.03em] text-white">
              Florida Lots
            </p>
            <p className="mt-1 hidden text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[#d9b16e] sm:block">
              Private Advisory
            </p>
          </div>
        </div>

        <Button
        onClick={scrollToContact}
          type="button"
          className="h-11 rounded-full border border-[#d9b16e]/70 bg-[#d9b16e] px-5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-stone-950 hover:bg-[#f1d59d] sm:h-12 sm:px-7"
        >
          Request Brief
          <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </header>
  )
}
