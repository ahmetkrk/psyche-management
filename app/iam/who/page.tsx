"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function IamWhoPage() {
  useEffect(() => {
    swbTrackPage("iam_who_detail", { source: "iam_who_link" });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 space-y-8" data-analytics-id="iam_who_detail">
      <header className="space-y-3 text-left md:text-center">
        <p className="text-orange-300/80 text-[10px] tracking-[0.35em] uppercase">
          Who am I?
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Law, systems, sport, code — and long-term experiments
        </h1>
      </header>

      <section className="space-y-4 text-left text-sm text-white/80">
        <p>
          I started in law and industrial engineering — two worlds that pretend to be very different,
          but both obsess over rules, constraints and edge cases. From there I moved into aviation and complex
          operations, working inside systems where small mistakes have real consequences.
        </p>
        <p>
          In parallel, I kept building my own tools: prompt engineering before it had a name, custom machine learning
          experiments, quantum-inspired notes and weird, hand-written automations. I never cared about publishing a paper.
          I cared about whether the thing in front of me survived contact with reality: fatigue, travel, risk, money, time.
        </p>
        <p>
          Sport and training were the other half of the story. Trial & Error under a barbell, on a field, in a pool,
          tells you truths that theory doesn&apos;t. Your body doesn&apos;t care about your story — it cares about load,
          adaptation and whether you actually show up.
        </p>
        <p>
          SWB-AI and the PSYCHE framework sit at the intersection of all of this: high-pressure systems, law and contracts,
          code and automation, sport and long-term inner work. It&apos;s not a brand built out of thin air; it&apos;s the
          record of what survived my own experiments.
        </p>
      </section>

      <div className="pt-4">
        <Link
          href="/"
          onClick={() =>
            swbTrackClick("iam_who_detail", "back_to_iam", { from: "who" })
          }
          className="text-sm text-orange-300 hover:text-orange-200"
        >
          ← Back to I AM
        </Link>
      </div>
    </div>
  );
}
