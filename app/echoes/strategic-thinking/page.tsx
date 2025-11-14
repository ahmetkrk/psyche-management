"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function EchoTopicPage() {
  useEffect(() => {
    swbTrackPage("echoes_topic", { topic: "strategic-thinking" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-8" data-analytics-id="echoes_topic_strategic-thinking">
      <header className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-orange-200/80">Echoes · Topic</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Strategic thinking – long-term bets & decisions
        </h1>
      </header>

      <section className="space-y-3">
          <p className="text-sm text-white/70 max-w-3xl">Strategy is not just for companies. It’s how you place your time, attention and reputation over years.</p>
          <p className="text-sm text-white/70 max-w-3xl">This page explores frameworks for long-term bets, reversibility, risk and optionality in real human lives.</p>
          <p className="text-sm text-white/70 max-w-3xl">It connects Psyche layers with decisions about work, geography, relationships and creative arcs.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-white">Questions to sit with</h2>
        <ul className="space-y-2">
            <li className="text-sm text-white/70">• Which decision in your life feels the heaviest right now?</li>
            <li className="text-sm text-white/70">• If you zoomed out 5–10 years, what would you wish you had started earlier?</li>
            <li className="text-sm text-white/70">• What are you secretly optimizing for — safety, status, freedom, impact, or something else?</li>
        </ul>
            <div className="pt-6">
        <Link
          href="/echoes"
          onClick={() =>
            swbTrackClick("echoes_topic", "back_to_echoes", { topic: "strategic-thinking" })
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
