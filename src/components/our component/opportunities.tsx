import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Opportunities from "@/assets/opportunities.jpg";

function opportunities() {
  function scrollToInquiry() {
    const el = document.getElementById("inquiry");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <section id="opportunities" className="relative bg-slate-800">
      <div className="mx-auto px-28 py-10 md:py-14">
        <div className=" flex flex-col items-center">
          <div className="text-sm font-extrabold text-emerald-300 tracking-wide">
            OPPORTUNITY TYPES
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
            Available land opportunities in Florida
          </h2>
          <p className="mt-3 max-w-[68ch] text-white/70 leading-7">
            Choose the type that fits your goal. Submit an inquiry and we’ll
            match you with current listings and next steps.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 ">
          {[
            {
              title: "Residential Lots",
              desc: "Great for building a home or investing in a family-ready area.",
              bullets: [
                "Zoning & basics explained",
                "Location fit by preferences",
                "Buyer guidance",
              ],
            },
            {
              title: "Investment Lots",
              desc: "For long-term potential and portfolio growth with clear expectations.",
              bullets: [
                "Investment-focused options",
                "Timeline support",
                "Next-step clarity",
              ],
            },
            {
              title: "Mixed / Flexible",
              desc: "Not sure yet? Tell us your budget and we’ll offer the best match.",
              bullets: [
                "Shortlist tailored to you",
                "Multiple option categories",
                "No pressure—just clarity",
              ],
            },
          ].map((card) => (
            <Card
              key={card.title}
              className="rounded-none border-white/10 bg-white/5 p-6 backdrop-blue"
            >
              <div className="text-xl font-extrabold">{card.title}</div>
              <div className=" text-sm text-white/65 leading-6">
                {card.desc}
              </div>
              <Separator className=" bg-white/10" />
              <ul className="space-y-2">
                {card.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-white/70">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-200 font-black">
                      ✓
                    </span>
                    <span className="leading-6">{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default opportunities;
