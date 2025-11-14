"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

const EPISODE_1_URL = "https://www.youtube.com/watch?v=k6AddqLIbJA";

export default function InsightLabPage() {
  useEffect(() => {
    swbTrackPage("insightlab", { source: "insightlab_home_v1" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 space-y-12">
      {/* HEADER */}
      <section className="space-y-2">
        <p className="text-orange-300/70 text-xs tracking-[0.35em] uppercase">
          SWB-AI · INSIGHTLAB
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          InsightLab – Strategic Thinking & Psyche Analysis
        </h1>
        <p className="text-gray-300 max-w-3xl">
          Every episode is turned into structured insights: strategic thinking
          patterns, cognitive models, behavioral maps, and distilled
          takeaways extracted directly from the scripts.
        </p>
      </section>

      {/* BIG RECTANGLE → YOUTUBE REDIRECT */}
      <Link
        href={EPISODE_1_URL}
        target="_blank"
        onClick={() =>
          swbTrackClick("insightlab", "episode_1_open_youtube", {
            episode: 1,
            destination: EPISODE_1_URL,
          })
        }
        className="block"
      >
        <section className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition cursor-pointer">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Episode 1 – Key Insights
              </h2>
              <p className="text-sm text-white/60">
                Click to open the full episode on YouTube.
              </p>
            </div>
            <div className="shrink-0">
              <span className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm inline-flex items-center gap-2">
                Watch on YouTube
                <span className="text-xs">↗</span>
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white/90 font-medium text-sm uppercase tracking-wide">
              Inside this episode
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Strategic thinking structures</li>
              <li>• Cognitive and behavioral patterns</li>
              <li>• Key takeaways & distilled insights</li>
              <li>• Frameworks & mental models</li>
              <li>• Articles and written reflections based on the episode</li>
            </ul>
            <p className="text-xs text-white/40 mt-3">
              In the next phase, these will expand into full written pieces
              extracted from the episode script.
            </p>
          </div>
        </section>
      </Link>

      {/* EPISODE 1 NOTES: INTAKE & EXTRACTS */}
      <section className="grid md:grid-cols-2 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
          <h3 className="text-sm font-semibold text-white uppercase tracking-[0.18em]">
            Intake – what I&apos;m listening for
          </h3>
          <p className="text-xs text-white/65">
            Episode 1 is not just an intro; it&apos;s where we set the lens. I&apos;m listening for how you think about
            who you are, what you&apos;re building and what you&apos;re afraid to say out loud.
          </p>
          <ul className="text-xs text-white/55 space-y-1">
            <li>• How you describe yourself under pressure.</li>
            <li>• Which parts of your story you repeat — and which parts you skip.</li>
            <li>• The gap between what you say you value and how you actually spend time.</li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
          <h3 className="text-sm font-semibold text-white uppercase tracking-[0.18em]">
            Extracts – what this episode teaches
          </h3>
          <p className="text-xs text-white/65">
            The first episode is a map of &quot;Who am I and what am I teaching?&quot; It frames PSYCHE, SWB-AI and the
            kind of long-term work we&apos;ll do together.
          </p>
          <ul className="text-xs text-white/55 space-y-1">
            <li>• Why Trial &amp; Error matters more than perfection.</li>
            <li>• How sport, travel and code shape the way I see systems.</li>
            <li>• What you can expect from the series in terms of depth and pace.</li>
          </ul>
        </div>
      </section>


      {/* FUTURE EPISODES PLACEHOLDER */}
      <section className="space-y-4">
        <h2 className="text-lg text-white/80">Upcoming Episodes</h2>
        <p className="text-white/40 text-sm max-w-2xl">
          Episode 2, 3, 4 and more will appear here as the YouTube series
          continues. Each episode will have its own block with insights,
          models and written analysis generated from the script.
        </p>
      </section>
    </div>
  );
}
