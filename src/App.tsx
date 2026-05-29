import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import hero from "@/assets/hero.jpg"
import Navbar from "./components/our component/navbar";

 function App() {
  return (
    <section className="relative overflow-hidden ">
      <Navbar/>
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
      <img
    src={hero}
    alt=""
    className="absolute inset-0 w-full h-full lg:object-cover object-none  "
    style={{
      objectPosition:" center ",
    }}
  />
      </div>

      <div className="mx-auto w-[min(1160px,92vw)] py-10 md:py-16 ">
        <div className="grid grid-cols-1 gap-6  lg:gap-8 items-center justify-center ">
          {/* Left: Copy */}
          <div className="m-28 p-3 border rounded-3xl backdrop-blur">
            {/* Trust row */}
            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
              Find the right <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">residential or investment lot</span> fast.
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/70 leading-7 max-w-[60ch] m-auto">
              Explore available land opportunities and get matched with lots that fit your budget location goals and timeline.
              Submit an inquiry to receive current options pricing and next steps.
            </p>

            {/* Micro value points */}
       
            {/* Optional CTA line (kept visible; actual form CTA is on the right) */}
            <div className="mt-6 flex flex-wrap items-center gap-3 justify-center">
              <Button
                className="bg-emerald-500 hover:bg-emerald-500/90 text-black font-extrabold"
                size="lg"
                onClick={() => {
                  const el = document.getElementById("lots-inquiry");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Get Available Lots
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/15 bg-white/5 hover:bg-white/10 text-white font-extrabold"
                onClick={() => {
                  const el = document.getElementById("lots-inquiry");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Request More Info
              </Button>
            </div>
          </div>

          {/* Right: Lead form card */}
         
        </div>
      </div>
    </section>
  );
}

export default App;