"use client";

import { useEffect } from "react";
import { swbTrackPage } from "@/lib/analytics";

export default function Episode1InsightsPage() {
  useEffect(() => {
    swbTrackPage("insightlab", { source: "episode_1_insights", episode: 1 });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 space-y-8">
      <header className="space-y-2">
        <p className="text-orange-300/70 text-[10px] tracking-[0.35em] uppercase">
          InsightLab · Episode 1
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Episode 1 – Written Insights & Strategic Patterns
        </h1>
        <p className="text-sm text-white/60 max-w-3xl">
          This page will hold the written outputs generated from the Episode 1 script:
          articles, strategic thinking structures, cognitive patterns and key takeaways.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Coming soon</h2>
        <p className="text-sm text-white/60 max-w-3xl">
          As soon as the full script for Episode 1 is processed, this page will
          be filled with structured insights — ready to read without watching
          the video again.
        </p>
        <p className="text-xs text-white/40">
          You&apos;ll see sections like: strategic thinking models, behavioral
          maps, psyche layers, and long-form reflections extracted directly
          from the episode.
        </p>
      </section>
    </div>
  );
}
