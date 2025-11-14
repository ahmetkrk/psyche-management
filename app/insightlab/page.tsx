"use client";

import Link from "next/link";
import { useEffect } from "react";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function InsightLabPage() {
  useEffect(() => {
    swbTrackPage("insightlab", { source: "page_component_v2" });
  }, []);

  return (
    <div
      className="max-w-5xl mx-auto py-16 px-4 space-y-10"
      data-analytics-id="insightlab_page"
    >
      {/* HEADER */}
      <header className="space-y-3">
        <p className="text-[10px] uppercase tracking-[0.35em] text-orange-200/80">
          InsightLab
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Episodes as labs, not just content
        </h1>
        <p className="text-sm text-white/60 max-w-3xl">
          InsightLab is where each episode becomes a lab: video, extracts and
          written notes that show how PSYCHE, systems and real life connect.
          Episode 1 is about who I am, what I&apos;m building and what you can
          expect.
        </p>
      </header>

      {/* EPISODE 1 CARD */}
      <section className="space-y-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 space-y-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-orange-200/80">
            Episode 1 · Who am I &amp; what am I building?
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            YouTube · PSYCHE / Episode 1
          </h2>
          <p className="text-sm text-white/60 max-w-3xl">
            This episode is the orientation: who I am, the systems I&apos;ve
            worked inside, the experiments behind SWB-AI and what kind of work
            we&apos;ll do together across PSYCHE, sport, code and long-term
            alignment.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {/* WATCH ON YOUTUBE */}
            <a
              href="https://www.youtube.com/watch?v=k6AddqLIbJA"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-orange-300/60 text-orange-200 hover:bg-orange-300/10 transition"
              onClick={() =>
                swbTrackClick("insightlab", "episode_1_open_youtube", {
                  episode: 1,
                  from: "primary_button",
                })
              }
            >
              Watch on YouTube
              <span className="text-[10px]">↗</span>
            </a>

            {/* READ EXTRACTS */}
            <Link
              href="/insightlab/episode-1/extracts"
              className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/5 transition"
              onClick={() =>
                swbTrackClick("insightlab", "episode_1_open_extracts", {
                  episode: 1,
                  from: "extracts_button",
                })
              }
            >
              Read Extracts
            </Link>
          </div>
        </div>
      </section>

      {/* Burada daha sonra diğer bölümler için aynı yapıyı çoğaltabilirsin */}
    </div>
  );
}
