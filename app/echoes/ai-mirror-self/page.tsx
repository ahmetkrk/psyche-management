"use client";

import { useEffect } from "react";
import { swbTrackPage } from "@/lib/analytics";

export default function EchoTopicPage() {
  useEffect(() => {
    swbTrackPage("echoes_topic", { topic: "ai-mirror-self" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-8" data-analytics-id="echoes_topic_ai-mirror-self">
      <header className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-orange-200/80">Echoes · Topic</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          AI as a mirror of self
        </h1>
      </header>

      <section className="space-y-3">
          <p className="text-sm text-white/70 max-w-3xl">Tools don’t just answer questions. They reflect how you ask, what you notice and what you avoid.</p>
          <p className="text-sm text-white/70 max-w-3xl">Here the focus is on using AI as a mirror: prompt patterns, emotional tone, avoidance, ambition and fear.</p>
          <p className="text-sm text-white/70 max-w-3xl">Over time this page will hold experiments that show how Psyche and AI can loop together in a useful way.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-white">Questions to sit with</h2>
        <ul className="space-y-2">
            <li className="text-sm text-white/70">• When you talk to AI, do you feel more like you’re hiding or revealing?</li>
            <li className="text-sm text-white/70">• What do your prompts say about what you are really looking for?</li>
            <li className="text-sm text-white/70">• Where would a sharper mirror be helpful — and where would it be uncomfortable?</li>
        </ul>
      </section>
    </div>
  );
}
