"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function EchoTopicPage() {
  useEffect(() => {
    swbTrackPage("echoes_topic", { topic: "balancing-discipline-intuition" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-8" data-analytics-id="echoes_topic_balancing-discipline-intuition">
      <header className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-orange-200/80">Echoes · Topic</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Balancing discipline and intuition
        </h1>
      </header>

      <section className="space-y-3">
          <p className="text-sm text-white/70 max-w-3xl">Too much discipline burns you out. Too much intuition leaves you drifting.</p>
          <p className="text-sm text-white/70 max-w-3xl">This page explores the tension between structure and flow: when to be strict with yourself and when to listen deeper.</p>
          <p className="text-sm text-white/70 max-w-3xl">It connects sport, training, creative work and emotional honesty into one long-term practice.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-white">Questions to sit with</h2>
        <ul className="space-y-2">
            <li className="text-sm text-white/70">• Where are you currently too rigid?</li>
            <li className="text-sm text-white/70">• Where are you currently too loose or chaotic?</li>
            <li className="text-sm text-white/70">• If you had 20% more discipline and 20% more intuition at the same time, what would actually change?</li>
        </ul>
            <div className="pt-6">
        <Link
          href="/echoes"
          onClick={() =>
            swbTrackClick("echoes_topic", "back_to_echoes", { topic: "balancing-discipline-intuition" })
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
