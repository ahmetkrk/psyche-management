"use client";

import { useEffect } from "react";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

const PRODUCTS = [
  { key: "ai_music", title: "AI Music", desc: "Royalty-safe background tracks for your content.", tag: "Lemon Squeezy" },
  { key: "ai_visual", title: "AI Visualization", desc: "High-impact AI visuals and cover artwork.", tag: "Lemon Squeezy" },
  { key: "ebook", title: "E-book", desc: "Frameworks, prompts, and system maps.", tag: "Lemon Squeezy" },
  { key: "donate", title: "Donate & Support", desc: "Support the studio to create more.", tag: "Support" },
];

export default function Page() {
  useEffect(() => {
    swbTrackPage("studio", { source: "page_component" });
  }, []);
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-10" data-analytics-id="studio_page">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-orange-200/70">Studio</p>
        <h1 className="text-3xl font-bold text-white">Products & Custom Work</h1>
        <p className="text-white/55 max-w-2xl text-sm">
          Everything here is designed to be sold via Lemon Squeezy. Choose what you need — or request a slot for automation work.
        </p>
      </header>
      <div className="grid md:grid-cols-4 gap-5">
        {PRODUCTS.map((p) => (
          <div key={p.key} className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-3" data-analytics-id={`studio_${p.key}`}>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-orange-200/70 mb-1">{p.tag}</p>
              <h2 className="text-sm font-semibold text-white">{p.title}</h2>
            </div>
            <p className="text-xs text-white/50 flex-1">{p.desc}</p>
            <button
              className="text-xs mt-auto inline-flex items-center gap-1 text-orange-200 hover:text-white transition"
              onClick={() => swbTrackClick("studio", "open_product", { key: p.key })}
            >
              View / Buy <span aria-hidden="true">→</span>
            </button>
          </div>
        ))}
      </div>
      <section className="bg-white/5 border border-white/5 rounded-xl p-6 space-y-4" data-analytics-id="studio_automation_demand">
        <h2 className="text-lg font-semibold text-white">Automation Demands</h2>
        <p className="text-sm text-white/55 max-w-3xl">
          Ongoing projects get priority. Tell me what you want to automate — I will return when a slot is available.
        </p>
        <form className="grid md:grid-cols-3 gap-4" onSubmit={(e) => { e.preventDefault(); swbTrackClick("studio", "submit_automation", {}); }}>
          <input className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm" placeholder="Your email" />
          <input className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm" placeholder="Topic (e.g. YouTube automation)" />
          <button className="bg-orange-500 rounded-md text-sm font-medium px-4 py-2 hover:bg-orange-400 transition">Send request</button>
        </form>
      </section>
    </div>
  );
}
