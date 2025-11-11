"use client";

import { useEffect } from "react";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function Page() {
  useEffect(() => {
    swbTrackPage("iam", { source: "page_component" });
  }, []);
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-10" data-analytics-id="iam_page">
      <section className="space-y-4">
        <p className="text-orange-300/80 text-xs tracking-[0.35em] uppercase">I AM</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          I help creators and professionals build adaptive systems
        </h1>
        <p className="text-white/60 max-w-2xl">
          using AI, behavioral design, and strategic thinking to launch and sustain their own ecosystems.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            className="px-5 py-2.5 bg-orange-500 rounded-md text-sm font-medium text-white hover:bg-orange-400 transition"
            data-analytics-id="iam_apply_mentorship"
            onClick={() => swbTrackClick("iam", "apply_mentorship", { cta: "Apply for Mentorship" })}
          >
            Apply for Mentorship
          </button>
          <button
            className="px-5 py-2.5 border border-white/10 rounded-md text-sm font-medium text-white/80 hover:text-white hover:border-white/40 transition"
            data-analytics-id="iam_learn_more"
            onClick={() => swbTrackClick("iam", "learn_more", { cta: "Learn More" })}
          >
            Learn More
          </button>
        </div>
      </section>

      <section className="space-y-4" data-analytics-id="iam_announcements">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">Announcements</h2>
          <span className="text-xs text-white/40">Updated regularly</span>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <h3 className="text-sm font-medium text-white">Daily InsightLab drops</h3>
            <p className="text-xs text-white/50">Short, dense videos on systems, AI and behavior.</p>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <h3 className="text-sm font-medium text-white">AI music packs incoming</h3>
            <p className="text-xs text-white/50">Experimental, royalty-safe tracks.</p>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <h3 className="text-sm font-medium text-white">Mentorship slots limited</h3>
            <p className="text-xs text-white/50">Requests reviewed manually.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4" data-analytics-id="iam_featured_insight">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">From InsightLab</h2>
          <span className="text-xs text-white/40">Latest video spotlight</span>
        </div>
        <div className="bg-gradient-to-tr from-orange-500/10 via-white/5 to-white/0 border border-white/5 rounded-xl p-5 flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1 space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-orange-200/80">Episode 014</p>
            <h3 className="text-xl font-semibold text-white">Trial & Error as a scalable life strategy</h3>
            <p className="text-sm text-white/60 max-w-xl">
              Why experimentation beats perfection, how to collect signals from your audience, and how to connect it with AI-assisted content pipelines.
            </p>
            <button
              className="mt-1 inline-flex items-center gap-2 text-sm text-orange-200 hover:text-white transition"
              data-analytics-id="iam_featured_insight_cta"
              onClick={() => swbTrackClick("iam", "featured_insight_cta", { episode: 14 })}
            >
              Watch / Open InsightLab <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="w-full md:w-56 h-32 bg-black/30 border border-white/5 rounded-lg flex items-center justify-center text-xs text-white/40">
            Video placeholder
          </div>
        </div>
      </section>
    </div>
  );
}
