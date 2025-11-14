"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function IamQuotePage() {
  useEffect(() => {
    swbTrackPage("iam_quote_detail", { source: "iam_quote_link" });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 space-y-8" data-analytics-id="iam_quote_detail">
      <header className="space-y-3 text-center">
        <p className="text-orange-300/80 text-[10px] tracking-[0.35em] uppercase">
          PSYCHE · SWB-AI
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          The long conversation with yourself
        </h1>
      </header>

      <section className="space-y-4 text-left">
        <blockquote className="text-lg md:text-xl text-white/90 italic border-l-2 border-orange-300/70 pl-4">
          “The psyche doesn’t transform in one big moment, but in a thousand honest conversations you have with yourself.”
        </blockquote>
        <p className="text-xs text-white/50 text-right pr-2">— SWB-AI</p>

        <p className="text-sm text-white/80">
          This quote is the core of PSYCHE. No viral moment, no single decision, no one book fixes everything. What actually changes you
          is the repeated, honest contact you have with yourself when nobody is watching.
        </p>
        <p className="text-sm text-white/70">
          Those conversations happen in micro-moments: on a run, between flights, after an argument, when you&apos;re exhausted but still
          choose the thing that&apos;s aligned with who you are becoming. Most of them are invisible from the outside. But they compound.
        </p>
        <p className="text-sm text-white/70">
          PSYCHE, the 200-step map, the videos, the studio work — all of it is just structure around those conversations. Tools, language,
          and systems that help you see yourself more clearly and stay with the long arc, instead of getting trapped in short-term noise.
        </p>
      </section>

      <div className="pt-4">
        <Link
          href="/"
          onClick={() =>
            swbTrackClick("iam_quote_detail", "back_to_iam", { from: "quote" })
          }
          className="text-sm text-orange-300 hover:text-orange-200"
        >
          ← Back to I AM
        </Link>
      </div>
    </div>
  );
}
