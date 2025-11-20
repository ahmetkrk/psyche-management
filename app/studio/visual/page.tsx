"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function StudioVisualPage() {
  useEffect(() => {
    swbTrackPage("studio_visual", { source: "studio" });
  }, []);

  return (
    <div
      className="max-w-4xl mx-auto py-16 px-4 space-y-8"
      data-analytics-id="studio_visual"
    >
      <header className="space-y-3 text-left md:text-center">
        <p className="text-orange-300/80 text-[10px] tracking-[0.35em] uppercase">
          Studio · AI Visualization
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Psyche Visuals & AI Backgrounds
        </h1>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-0 md:mx-auto">
          A visual layer on top of the Psyche System: AI-generated backgrounds,
          chapter covers and psyche maps that follow the same 200-step roadmap.
        </p>
      </header>

      <section className="space-y-4 text-sm text-gray-200">
        <p>
          The AI-visualization line will translate the internal journey into
          visual language: color palettes, shapes and compositions that reflect
          different Nefs stages and mental architectures.
        </p>
        <p>
          The plan is to release <strong>visual packs</strong> that can be used
          as:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Video and podcast backgrounds</li>
          <li>Chapter cover art for the Psyche System series</li>
          <li>Wallpapers for desktop and mobile</li>
          <li>Presentation & slide backgrounds for teaching</li>
        </ul>
        <p className="pt-2 text-gray-400">
          Status: <span className="text-orange-300">Concept & prompt design.</span>{" "}
          Early tests will run in parallel with the YouTube series, and the best
          sets will be bundled as downloadable packs here.
        </p>
      </section>

      <section className="space-y-3 text-xs text-gray-500">
        <p>
          Once the first packs are stable and consistent with the Psyche
          roadmap, Studio will host both free examples and premium collections
          for creators who want to visually sync with the same narrative.
        </p>
      </section>

      <div className="pt-4">
        <Link
          href="/studio"
          onClick={() =>
            swbTrackClick("studio_visual", "back_to_studio", {})
          }
          className="text-sm text-orange-300 hover:text-orange-200"
        >
          ← Back to Studio
        </Link>
      </div>
    </div>
  );
}
