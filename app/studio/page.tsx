"use client";

import { useEffect } from "react";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

const PRODUCTS = [
  { key: "ai_music", title: "AI Music", desc: "Royalty-safe background tracks for your content.", tag: "" },
  { key: "ai_visual", title: "AI Visualization", desc: "High-impact AI visuals and cover artwork.", tag: "" },
  { key: "ebook", title: "E-book", desc: "Short experimental e-books built from real daily moments, psyche work and Trial & Error notes.", tag: "" },
  { key: "donate", title: "Donate & Support", desc: "Support the studio to create more.", tag: "Support" },
];

export default function Page() {
  useEffect(() => {
    swbTrackPage("studio", { source: "page_component" });
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 space-y-10">
      <header className="space-y-3">
        <p className="text-orange-300/70 text-[10px] tracking-[0.35em] uppercase">
          Studio
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold text-white">SWB-AI Studio Work</h1>
        <p className="text-white/55 max-w-2xl text-sm">
          Everything here is designed as focused studio work. Choose what you need — music, visuals, experiments and support.
        </p>
      </header>

      <div className="grid md:grid-cols-4 gap-5">
        {PRODUCTS.map((p) => {
          const isEbook = p.key === "ebook";
          return (
            <div
              key={p.key}
              className={`bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3 ${
                isEbook ? "cursor-pointer hover:bg-white/10 transition" : ""
              }`}
              data-analytics-id={`studio_${p.key}`}
              onClick={() => {
                if (isEbook) {
                  swbTrackClick("studio", "ebook_info_open", { key: p.key });
                  window.location.href = "/studio/ebooks";
                }
              }}
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-orange-200/70 mb-1">
                  {p.tag}
                </p>
                <h2 className="text-sm font-semibold text-white">{p.title}</h2>
              </div>
              <p className="text-xs text-white/50 flex-1">{p.desc}</p>

              {!isEbook && (
                <a
                  href="https://swb-ai.lemonsqueezy.com/buy/ff2dbab4-067f-4cdc-875d-3871c53c0ab6"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs mt-auto inline-flex items-center gap-1 text-orange-200 hover:text-white transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    swbTrackClick("studio", "open_product", { key: p.key });
                  }}
                >
                  Open
                  <span className="text-[10px]">↗</span>
                </a>
              )}
            </div>
          );
        })}