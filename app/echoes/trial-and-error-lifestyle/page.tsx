"use client";

import { useEffect } from "react";
import { swbTrackPage } from "@/lib/analytics";

export default function EchoTopicPage() {
  useEffect(() => {
    swbTrackPage("echoes_topic", { topic: "trial-and-error-lifestyle" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-8" data-analytics-id="echoes_topic_trial-and-error-lifestyle">
      <header className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-orange-200/80">Echoes · Topic</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Trial & Error lifestyle – sport, risk, learning
        </h1>
      </header>

      <section className="space-y-3">
          <p className="text-sm text-white/70 max-w-3xl">Trial & Error is not just a slogan; it’s a way of living under real feedback.</p>
          <p className="text-sm text-white/70 max-w-3xl">This page focuses on sport, risk, failure, recovery and long arcs of skill-building.</p>
          <p className="text-sm text-white/70 max-w-3xl">It connects your body, your decisions and your long-term experiments into one narrative.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-white">Questions to sit with</h2>
        <ul className="space-y-2">
            <li className="text-sm text-white/70">• Where in your life are you willing to fail on purpose in order to learn?</li>
            <li className="text-sm text-white/70">• Which area feels too fragile to experiment in right now?</li>
            <li className="text-sm text-white/70">• What is one experiment you could run in the next 7 days that would teach you something important?</li>
        </ul>
      </section>
    </div>
  );
}
