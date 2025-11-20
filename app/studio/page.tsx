// app/studio/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

type ProductKey = "music" | "visual" | "ebook" | "donate";

type Product = {
  key: ProductKey;
  title: string;
  desc: string;
  tag: string;
};

const PRODUCTS: Product[] = [
  {
    key: "music",
    title: "AI Music",
    desc:
      "Focused instrumental packs built under real constraints, ready for videos, deep work and experiments.",
    tag: "Audio",
  },
  {
    key: "visual",
    title: "AI Visuals (Coming Soon)",
    desc:
      "Planned: minimal, loop-ready visual packs structured like the e-books — released later as the ecosystem matures.",
    tag: "Visual",
  },
  {
    key: "ebook",
    title: "E-Books & Guides",
    desc:
      "Structured written work: walkthroughs, frameworks and step-by-step breakdowns for the psyche and creator systems.",
    tag: "Text",
  },
  {
    key: "donate",
    title: "Donate & Support",
    desc:
      "If this ecosystem is useful, you can support its long arc. Every bit compounds into more experiments and tools.",
    tag: "Support",
  },
];

// TODO: Buraya gerçek Lemon Squeezy linkini koy
const LEMON_MUSIC_URL =
  "https://your-lemon-squeezy-product-link-here.com";

export default function Page() {
  useEffect(() => {
    swbTrackPage("studio", { source: "page_component" });
  }, []);

  const handleProductClick = (product: Product) => {
    switch (product.key) {
      case "ebook":
        swbTrackClick("studio", "ebook_open", { key: product.key });
        window.location.href = "/studio/ebooks";
        break;
      case "music":
        swbTrackClick("studio", "music_section_scroll", { key: product.key });
        if (typeof window !== "undefined") {
          const el = document.getElementById("music-section");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        break;
      case "visual":
        swbTrackClick("studio", "visual_coming_soon", { key: product.key });
        // Şimdilik sadece tracking + hiçbir yere gitmiyor
        break;
      case "donate":
        swbTrackClick("studio", "donate_click", { key: product.key });
        // İstersen burada bağış linki ekleyebilirsin
        break;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <header className="mb-10 md:mb-12">
        <p className="text-xs tracking-[0.25em] uppercase text-orange-300/75 mb-2">
          SWB-AI · Studio
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold text-white">
          SWB-AI Studio Work
        </h1>
        <p className="text-white/55 max-w-2xl text-sm md:text-base mt-2">
          Everything here is designed as focused studio work. Choose what you
          need — music, visuals, written frameworks and support for the
          ecosystem.
        </p>
      </header>

      {/* Üst grid: Music / Visual / E-Book / Donate */}
      <div className="grid md:grid-cols-4 gap-5 mb-12">
        {PRODUCTS.map((p) => {
          const isClickable = p.key === "ebook" || p.key === "music";
          return (
            <div
              key={p.key}
              className={`bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3 ${
                isClickable ? "cursor-pointer hover:bg-white/10 transition" : ""
              }`}
              data-analytics-id={`studio_${p.key}`}
              onClick={() => handleProductClick(p)}
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-orange-200/70 mb-1">
                  {p.tag}
                </p>
                <h2 className="text-base md:text-lg font-semibold text-white">
                  {p.title}
                </h2>
              </div>
              <p className="text-xs md:text-sm text-white/70">{p.desc}</p>

              {p.key === "ebook" && (
                <div className="mt-auto pt-1">
                  <span className="inline-flex items-center text-xs text-orange-300">
                    View all e-books
                    <span className="ml-1">↗</span>
                  </span>
                </div>
              )}

              {p.key === "music" && (
                <div className="mt-auto pt-1">
                  <span className="inline-flex items-center text-xs text-orange-300">
                    Open music section
                    <span className="ml-1">↓</span>
                  </span>
                </div>
              )}

              {p.key === "visual" && (
                <div className="mt-auto pt-1">
                  <span className="inline-flex items-center text-[11px] text-white/50">
                    Planned like the e-book library · not live yet
                  </span>
                </div>
              )}

              {p.key === "donate" && (
                <div className="mt-auto pt-1">
                  <span className="inline-flex items-center text-xs text-white/60">
                    Optional, long-arc support — no expectation
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Music alt bölümü */}
      <section id="music-section" className="mb-10 md:mb-14">
        <div className="flex items-baseline justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">
              Music Packs · Episode 1
            </h2>
            <p className="text-xs md:text-sm text-white/60">
              The first YouTube episode&apos;s music, released as a focused
              pack through Lemon Squeezy.
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 flex flex-col gap-3 md:gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-orange-200/70 mb-1">
              From YouTube · Episode 1
            </p>
            <h3 className="text-sm md:text-base font-semibold">
              SWB-AI | Understanding the Psyche System — AI, Awareness &amp;
              Mental Structure
            </h3>
          </div>

          <p className="text-xs md:text-sm text-white/70">
            Intro and background music used in the first YouTube video. Packaged
            for creators who want the same atmosphere in their own work. Please
            check the license details on Lemon Squeezy before using it in
            commercial projects.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-[11px] md:text-xs text-white/50">
              • Built for the Psyche System intro  
              • Ideal for spoken-word / podcast-style videos  
              • Instant digital delivery
            </div>

            <Link
              href={LEMON_MUSIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs md:text-sm px-3 py-2 rounded-lg border border-orange-300/70 text-orange-200 hover:bg-orange-300/10 transition"
              onClick={() =>
                swbTrackClick("studio", "music_lemon_open", {
                  source: "episode_1_card",
                })
              }
            >
              Open on Lemon Squeezy
              <span className="ml-1">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="pt-2">
        <Link
          href="/"
          className="text-sm text-orange-300 hover:text-orange-200"
          onClick={() =>
            swbTrackClick("studio", "back_to_home", { from: "studio" })
          }
        >
          ← Back to I AM
        </Link>
      </div>
    </div>
  );
}
