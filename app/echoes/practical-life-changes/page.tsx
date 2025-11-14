"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function EchoTopicPage() {
  useEffect(() => {
    swbTrackPage("echoes_topic", { topic: "practical-life-changes" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-8" data-analytics-id="echoes_topic_practical-life-changes">
      <header className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-orange-200/80">Echoes · Topic</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Practical life changes – habits & daily structure
        </h1>
      </header>

      <section className="space-y-3">
          <p className="text-sm text-white/70 max-w-3xl">Theory doesn’t matter if your mornings, evenings and in‑between moments are chaos.</p>
          <p className="text-sm text-white/70 max-w-3xl">This page is about concrete changes: sleep, phone, food, training, work blocks, deep focus and recovery.</p>
          <p className="text-sm text-white/70 max-w-3xl">It connects Psyche ideas with day-to-day structure so that inner work has a physical place to land.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-white">Questions to sit with</h2>
        <ul className="space-y-2">
            <li className="text-sm text-white/70">• If someone followed you for 3 days, what would they say you actually value?</li>
            <li className="text-sm text-white/70">• Which part of your day feels the most misaligned with who you want to be?</li>
            <li className="text-sm text-white/70">• What is one small change that would have an unfairly large effect?</li>
        </ul>
            <div className="pt-6">
        <Link
          href="/echoes"
          onClick={() =>
            swbTrackClick("echoes_topic", "back_to_echoes", { topic: "practical-life-changes" })
          }
          className="text-sm text-orange-300 hover:text-orange-200"
        >
          ← Back to Echoes
        </Link>
      </div>

</section>
    </div>
  );
}
