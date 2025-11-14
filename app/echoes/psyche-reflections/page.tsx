"use client";

import { useEffect } from "react";
import { swbTrackPage } from "@/lib/analytics";

export default function EchoTopicPage() {
  useEffect(() => {
    swbTrackPage("echoes_topic", { topic: "psyche-reflections" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-8" data-analytics-id="echoes_topic_psyche-reflections">
      <header className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-orange-200/80">Echoes · Topic</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Psyche reflections – where you feel stuck
        </h1>
      </header>

      <section className="space-y-3">
          <p className="text-sm text-white/70 max-w-3xl">Not every block is visible from the outside. Some are patterns, loops, emotional knots that repeat quietly.</p>
          <p className="text-sm text-white/70 max-w-3xl">This page collects reflections, questions and maps for working with those stuck places.</p>
          <p className="text-sm text-white/70 max-w-3xl">It is closely linked with the 200-step Psyche framework and how it plays out in real people.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-white">Questions to sit with</h2>
        <ul className="space-y-2">
            <li className="text-sm text-white/70">• Where in your life do you feel the strongest sense of ‘I keep ending up here’?</li>
            <li className="text-sm text-white/70">• What emotion shows up most often when you’re alone and honest?</li>
            <li className="text-sm text-white/70">• Which part of your Psyche feels under-developed or over-protected?</li>
        </ul>
      </section>
    </div>
  );
}
