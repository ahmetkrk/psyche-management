"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function EpisodeOneExtractsPage() {
  useEffect(() => {
    swbTrackPage("insightlab_episode_1_extracts", {
      episode: 1,
      source: "insightlab_extracts_link",
    });
  }, []);

  return (
    <div
      className="max-w-4xl mx-auto py-16 px-4 space-y-8"
      data-analytics-id="insightlab_episode_1_extracts"
    >
      <header className="space-y-3">
        <p className="text-[10px] uppercase tracking-[0.35em] text-orange-200/80">
          InsightLab · Episode 1
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Extracts · Who am I &amp; what am I building?
        </h1>
        <p className="text-sm text-white/60 max-w-3xl">
          These are written extracts from Episode 1 — the parts that matter if
          you care about who is speaking to you and what kind of long-term work
          we&apos;re actually doing.
        </p>
      </header>

      <section className="space-y-4 text-sm text-white/80">
        <p>
          The first episode is not a sales pitch. It&apos;s a map of the
          territory: law, industrial engineering, aviation, systems, sport,
          code and how all of that turned into PSYCHE and SWB-AI. If you
          understand this map, everything else you see later will make more
          sense.
        </p>
        <p>
          You&apos;ll hear how I worked inside complex systems — airlines,
          contracts, operations — while building my own tools on the side:
          prompts, machine learning experiments, automations. Not in a lab,
          but under pressure: fatigue, travel, risk, time constraints.
        </p>
        <p>
          You&apos;ll also see how sport and Trial &amp; Error shape the way I
          think. Training and competition expose lies quickly. Your body
          doesn&apos;t care about your story; it cares about load, recovery,
          adaptation and whether you actually show up.
        </p>
        <p>
          PSYCHE sits on top of all this. It&apos;s a 200-step framework for
          inner alignment that only makes sense if you know the person who
          built it has lived under real constraints. Episode 1 is where I show
          you those constraints so you can decide if my lens is useful for
          you.
        </p>
      </section>

      <div className="pt-6">
        <Link
          href="/insightlab"
          onClick={() =>
            swbTrackClick(
              "insightlab_episode_1_extracts",
              "back_to_insightlab",
              { episode: 1 }
            )
          }
          className="text-sm text-orange-300 hover:text-orange-200"
        >
          ← Back to InsightLab
        </Link>
      </div>
    </div>
  );
}
