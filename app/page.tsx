"use client";

import { useEffect } from "react";
import { swbTrackPage } from "@/lib/analytics";

export default function Page() {
  useEffect(() => {
    swbTrackPage("iam", { source: "psyche_home_v3" });
  }, []);

  return (
    <div
      className="min-h-screen max-w-5xl mx-auto py-16 px-4 space-y-16 text-center flex flex-col justify-center"
      data-analytics-id="iam_page"
    >
      {/* QUOTE */}
      <section className="space-y-4" data-analytics-id="iam_quote">
        <p className="text-orange-300/80 text-xs tracking-[0.35em] uppercase">
          PSYCHE · SWB-AI
        </p>
        <blockquote className="text-xl md:text-2xl text-white/90 italic mx-auto max-w-3xl">
          “The psyche doesn’t transform in one big moment, but in a thousand
          honest conversations you have with yourself.”
        </blockquote>
        <p className="text-xs text-white/40">— SWB-AI</p>
      </section>

      {/* WHO AM I */}
      <section className="space-y-4" data-analytics-id="iam_about">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Who am I?</h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I&apos;m the creator of SWB-AI. My path moves across law, industrial
          engineering, aviation, prompt engineering and machine learning. I&apos;ve
          worked inside complex systems — airlines, contracts, operations — while
          constantly building my own tools on the side.
        </p>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Over the years I wrote and tested my own quantum-inspired code,
          custom ML experiments and automation flows. Not as abstract research,
          but in real constraints: time pressure, fatigue, travel, sport,
          money, relationships. I care about how ideas survive contact with
          reality.
        </p>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          SWB-AI and the Psyche framework are the result: a long-term ecosystem
          for inner alignment, strategic thinking and creative work. It connects
          psyche work, AI, music and systems-thinking into something you can
          actually live with — not just consume as content.
        </p>
      </section>

      {/* ANNOUNCEMENTS */}
      <section
        className="space-y-4"
        data-analytics-id="iam_announcements"
      >
        <h2 className="text-lg font-semibold text-white">Announcements</h2>
        <p className="text-white/50 text-sm max-w-2xl mx-auto">
          This space will be updated based on what&apos;s actually live:
          episodes, experiments, music packs, cohorts and new projects.
        </p>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <h3 className="text-sm font-medium text-white">
              Psyche video series
            </h3>
            <p className="text-xs text-white/50">
              Long-form episodes exploring the 200-step psyche map.
            </p>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <h3 className="text-sm font-medium text-white">
              AI music experiments
            </h3>
            <p className="text-xs text-white/50">
              Royalty-safe background tracks for deep work and reflection.
            </p>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <h3 className="text-sm font-medium text-white">
              Coaching & mentorship
            </h3>
            <p className="text-xs text-white/50">
              Very limited 1:1 work, announced first through Echoes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
