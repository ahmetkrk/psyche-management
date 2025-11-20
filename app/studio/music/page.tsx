"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

const MUSIC_PACK_CHECKOUT =
  "https://swb-ai.lemonsqueezy.com/buy/48e4bde6-7921-4df3-875a-b5b35d12f188";

const STEM_PACK_CHECKOUT =
  "https://swb-ai.lemonsqueezy.com/buy/e34480a1-860d-44c2-b9d5-a79f4b986798";

export default function StudioMusicPage() {
  useEffect(() => {
    swbTrackPage("studio_music", { source: "studio" });
  }, []);

  return (
    <div
      className="max-w-5xl mx-auto py-16 px-4 space-y-10"
      data-analytics-id="studio_music"
    >
      {/* Header */}
      <header className="space-y-3 text-left md:text-center">
        <p className="text-orange-300/80 text-[10px] tracking-[0.35em] uppercase">
          Studio · Music
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          SWB-AI Music Studio
        </h1>
        <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-0 md:mx-auto">
          Cinematic, AI-assisted background music designed for deep reflection,
          long-form videos and Psyche System storytelling — plus full producer
          stems for advanced creators.
        </p>
      </header>

      {/* Products */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Music Pack */}
        <div className="flex flex-col justify-between rounded-2xl border border-orange-500/20 bg-black/60 p-6 space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">
              SWB-AI Music Pack Vol. 1
            </h2>
            <p className="text-sm text-gray-300">
              A curated set of background tracks built for podcasts, YouTube
              videos and focus sessions. Each track is mixed to sit beneath
              voice without fighting for attention.
            </p>
            <ul className="text-xs text-gray-400 space-y-1 mt-3">
              <li>· Ready-to-use stereo mixes (WAV/MP3)</li>
              <li>· Royalty-free for your own content usage*</li>
              <li>· Optimized loudness for YouTube & podcasts</li>
            </ul>
          </div>
          <div className="pt-4">
            <Link
              href={MUSIC_PACK_CHECKOUT}
              onClick={() =>
                swbTrackClick("studio_music", "buy_music_pack", {})
              }
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition"
            >
              Buy Music Pack
            </Link>
          </div>
        </div>

        {/* Stem Pack */}
        <div className="flex flex-col justify-between rounded-2xl border border-orange-500/20 bg-black/60 p-6 space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">
              Producer Stem Pack Vol. 1
            </h2>
            <p className="text-sm text-gray-300">
              Individual stems (drums, bass, leads, pads, FX) for producers who
              want to re-mix, re-arrange or design their own versions of the
              SWB-AI sound.
            </p>
            <ul className="text-xs text-gray-400 space-y-1 mt-3">
              <li>· 24-bit WAV stems (kick, snare, hats, bass, leads, pads)</li>
              <li>· Commercial-use license for music producers*</li>
              <li>· Ideal for re-sampling, layering and hybrid production</li>
            </ul>
          </div>
          <div className="pt-4">
            <Link
              href={STEM_PACK_CHECKOUT}
              onClick={() =>
                swbTrackClick("studio_music", "buy_stem_pack", {})
              }
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-orange-400 text-black font-semibold text-sm hover:bg-orange-300 transition"
            >
              Buy Stem Pack
            </Link>
          </div>
        </div>
      </section>

      {/* Footnote + back */}
      <section className="space-y-3 text-xs text-gray-400 max-w-3xl">
        <p>
          * For detailed licensing terms, please refer to the license text
          included inside the download or future dedicated license page.
        </p>
      </section>

      <div className="pt-6">
        <Link
          href="/studio"
          onClick={() =>
            swbTrackClick("studio_music", "back_to_studio", {})
          }
          className="text-sm text-orange-300 hover:text-orange-200"
        >
          ← Back to Studio
        </Link>
      </div>
    </div>
  );
}
