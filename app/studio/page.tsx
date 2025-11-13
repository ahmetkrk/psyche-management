"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function StudioPage() {
  useEffect(() => {
    swbTrackPage("studio", { source: "studio_home_v2" });
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 space-y-10">

      {/* HEADER */}
      <div className="space-y-2">
        <p className="text-orange-300/70 text-xs tracking-[0.35em] uppercase">
          SWB-AI · STUDIO
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Studio – Creative Workspace
        </h1>
        <p className="text-gray-300 max-w-3xl">
          This page contains the core creative work: videos, drafts, soundtrack exploration and e-book development.
        </p>
      </div>

      {/* MAIN BLOCK – SAME AS ZIP VERSION */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Creative Production
        </h2>
        <p className="text-sm text-white/60 max-w-2xl">
          Scripts, concepts, music direction, visual design notes and the deeper architecture of the SWB-AI ecosystem.
        </p>

        {/* REMOVE LEMON SQUEEZY TEXT — CLEANED */}
        {/* Nothing about Lemon remains now */}

        {/* E-BOOK SECTION — UPDATED */}
        <div className="mt-8 space-y-2">
          <h3 className="text-lg font-medium text-white">Psyche E-Book</h3>
          <p className="text-gray-300 text-sm">
            The e-book will be released soon.
          </p>
        </div>
      </div>

      {/* FUTURE ITEMS */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-white">Upcoming Work</h3>
        <p className="text-white/40 text-sm max-w-xl">
          As video production, the Psyche framework, and the sound direction grows, new elements will appear here.
        </p>
      </div>

    </div>
  );
}
