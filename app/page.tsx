"use client";

import { useEffect } from "react";
import Link from "next/link";
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
        <div className="flex justify-center">
          <Link
            href="/iam/quote"
            className="text-[11px] uppercase tracking-[0.25em] text-orange-300/80 hover:text-orange-200"
          >
            Open the full reflection →
          </Link>
        </div>
      </section>

      {/* WHO AM I */}
      <section className="space-y-4" data-analytics-id="iam_about">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Who am I?</h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I&apos;m the creator of SWB-AI. My path moves across law, industrial engineering,
          aviation, prompt engineering and machine learning. I&apos;ve worked inside complex
          systems — airlines, contracts, operations — while constantly building my own tools
          on the side.
        </p>
        <p className="text-gray-400 text-sm max-w-3xl mx-auto">
          If you want the full story — how sport, travel, code and real constraints shaped this
          ecosystem — you can read the extended version.
        </p>
        <div className="flex justify-center">
          <Link
            href="/iam/who"
            className="text-xs uppercase tracking-[0.25em] text-orange-300/80 hover:text-orange-200"
          >
            Read the full story →
          </Link>
        </div>
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
        <div className="flex justify-center">
          <Link
            href="/iam/announcements"
            className="text-[11px] uppercase tracking-[0.25em] text-orange-300/80 hover:text-orange-200"
          >
            How I use announcements →
          </Link>
        </div>

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
