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
    title: "Music Studio",
    desc: "AI-created background music and producer stem packs for videos, podcasts and deep-work sessions.",
    tag: "Available now",
  },
  {
    key: "visual",
    title: "AI Visualization",
    desc: "Upcoming visual packs: psyche maps, chapter art and AI-generated backgrounds for the Psyche System journey.",
    tag: "In preparation",
  },
  {
    key: "ebook",
    title: "Psyche System E-Book",
    desc: "A structured guide to the 200-step Nafs + IQ/EQ roadmap, with practical exercises and reflections.",
    tag: "Writing in progress",
  },
  {
    key: "donate",
    title: "Support & Donation",
    desc: "Support the long-form content, research, AI tooling and free education around the Psyche System.",
    tag: "Direct support",
  },
];

function getHrefForProduct(key: ProductKey): string {
  switch (key) {
    case "music":
      return "/studio/music";
    case "visual":
      return "/studio/visual";
    case "ebook":
      return "/studio/ebooks";
    case "donate":
      return "https://swb-ai.lemonsqueezy.com/buy/5383f5a9-5a17-4e90-96d9-bb4cd3fff4d6";
    default:
      return "/studio";
  }
}

export default function StudioPage() {
  useEffect(() => {
    swbTrackPage("studio", { source: "nav_studio" });
  }, []);

  return (
    <div
      className="max-w-5xl mx-auto py-16 px-4 space-y-10"
      data-analytics-id="studio"
    >
      {/* Header */}
      <header className="space-y-3 text-left md:text-center">
        <p className="text-orange-300/80 text-[10px] tracking-[0.35em] uppercase">
          Studio
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          SWB-AI Studio
        </h1>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-0 md:mx-auto">
          A focused space for everything that comes out of the Psyche System:
          music, AI visualizations, e-books and direct support for the project.
        </p>
      </header>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRODUCTS.map((product) => {
          const href = getHrefForProduct(product.key);
          const isDonate = product.key === "donate";

          const cardClasses = [
            "group relative flex flex-col justify-between rounded-2xl border border-orange-500/20 bg-black/60 p-6 hover:border-orange-400/60 hover:bg-black/80 transition",
            isDonate ? "md:col-span-2 md:flex-row md:items-center" : "",
          ].join(" ");

          const inner = (
            <>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg md:text-xl font-semibold text-white">
                    {product.title}
                  </h2>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-orange-300/80">
                    {product.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-300">{product.desc}</p>
              </div>

              <div className="mt-4 md:mt-0 md:text-right">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-orange-200 group-hover:text-white">
                  {isDonate ? "Open donation checkout" : "Enter section"}
                  <span className="text-orange-300 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </span>
              </div>
            </>
          );

          if (isDonate) {
            return (
              <a
                key={product.key}
                href={href}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  swbTrackClick("studio", "open_product", {
                    product: product.key,
                    via: "card",
                  })
                }
                className={cardClasses}
              >
                {inner}
              </a>
            );
          }

          return (
            <Link
              key={product.key}
              href={href}
              onClick={() =>
                swbTrackClick("studio", "open_product", {
                  product: product.key,
                  via: "card",
                })
              }
              className={cardClasses}
            >
              {inner}
            </Link>
          );
        })}
      </section>

      {/* Back */}
      <div className="pt-4">
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
