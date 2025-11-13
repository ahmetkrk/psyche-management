"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

const STUDIO_VIDEO_URL = "https://www.youtube.com/watch?v=k6AddqLIbJA"; 
// İstersen burada başka bir Studio videosu da kullanabiliriz.

export default function StudioPage() {
  useEffect(() => {
    swbTrackPage("studio", { source: "studio_home_v1" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 space-y-12">
      
      {/* HEADER */}
      <section className="space-y-2">
        <p className="text-orange-300/70 text-xs tracking-[0.35em] uppercase">
          SWB-AI · STUDIO
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Studio – Creative Direction & E-Book Development
        </h1>
        <p className="text-gray-300 max-w-3xl">
          This section holds creative production work: video concepts, e-book
          drafts, soundtrack experiments and long-term project design.
          More elements will unfold as the full ecosystem grows.
        </p>
      </section>

      {/* BIG RECTANGLE – YOUTUBE REDIRECT */}
      <Link
        href={STUDIO_VIDEO_URL}
        target="_blank"
        onClick={() =>
          swbTrackClick("studio", "open_youtube", {
            destination: STUDIO_VIDEO_URL,
          })
        }
        className="block"
      >
        <section className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition cursor-pointer">
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Video Concepts & Creative Direction
              </h2>
              <p className="text-sm text-white/60">
                Click to open the current direction video on YouTube.
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
              Current components inside the Studio
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Video structure & framing logic</li>
              <li>• Soundtrack & ambient direction</li>
              <li>• Visual tone & brand composition</li>
              <li>• Episode script refinement</li>
            </ul>
          </div>
        </section>
      </Link>

      {/* E-BOOK PLACEHOLDER */}
      <section
        className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3"
        data-analytics-id="studio_ebook"
      >
        <h2 className="text-xl font-semibold text-white">Psyche E-Book</h2>
        <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
          The e-book is currently being written. Chapters, frameworks and 
          mental models from the Psyche system will be progressively added here 
          as drafts. A preview version will be released soon.
        </p>
        <p className="text-xs text-white/40">
          Updates will appear automatically as the writing progresses.
        </p>
      </section>

      {/* FUTURE SECTIONS */}
      <section className="space-y-4">
        <h2 className="text-lg text-white/80">Upcoming Elements</h2>
        <p className="text-white/40 text-sm max-w-2xl">
          Additional studio tools and creative assets will appear here as your
          production pipeline (videos, music, e-book, documentaries) expands.
        </p>
      </section>
    </div>
  );
}
