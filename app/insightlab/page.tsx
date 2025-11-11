"use client";

import { useEffect } from "react";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

const EPISODES = [
  {
    id: "ins-01",
    title: "Energy mapping for long-term creators",
    themes: ["Behavioral pacing", "Fatigue-proof systems", "AI-assisted outlining"],
  },
  {
    id: "ins-02",
    title: "Linking YouTube episodes to products",
    themes: ["Content-to-commerce", "Lemon Squeezy", "Audience signaling"],
  },
  {
    id: "ins-03",
    title: "Soul-Web-Mind AI: a narrative layer",
    themes: ["Personal myth", "AI as mirror", "Story-based retention"],
  },
];

export default function Page() {
  useEffect(() => {
    swbTrackPage("insidelab", { source: "page_component" });
  }, []);
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-8" data-analytics-id="insidelab_page">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-orange-200/70">InsightLab</p>
        <h1 className="text-3xl font-bold text-white">Episodes & Core Themes</h1>
        <p className="text-white/50 max-w-2xl text-sm">
          Each episode is a dense unit. Click through to open a dedicated understanding layer for that topic.
        </p>
      </header>
      <div className="grid md:grid-cols-3 gap-5">
        {EPISODES.map((ep) => (
          <article key={ep.id} className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-3" data-analytics-id={`insidelab_episode_${ep.id}`}>
            <h2 className="text-sm font-semibold text-white">{ep.title}</h2>
            <ul className="space-y-1 text-xs text-white/50">
              {ep.themes.map((t) => (
                <li key={t}>• {t}</li>
              ))}
            </ul>
            <button
              className="mt-auto inline-flex items-center gap-1 text-xs text-orange-200 hover:text-white transition"
              onClick={() => swbTrackClick("insidelab", "open_episode", { id: ep.id })}
            >
              Open episode detail <span aria-hidden="true">→</span>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
