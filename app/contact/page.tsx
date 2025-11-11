"use client";

import { useEffect } from "react";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function Page() {
  useEffect(() => {
    swbTrackPage("contact", { source: "page_component" });
  }, []);
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-6" data-analytics-id="contact_page">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-orange-200/70">Contact</p>
        <h1 className="text-3xl font-bold text-white">Let’s talk</h1>
        <p className="text-white/60 text-sm">For collaborations, coaching, or studio work.</p>
      </div>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); swbTrackClick("contact", "submit_form", {}); }}>
        <div className="grid md:grid-cols-2 gap-4">
          <input className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm" placeholder="Name" />
          <input className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm" placeholder="Email" />
        </div>
        <input className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm w-full" placeholder="Topic" />
        <textarea className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm w-full min-h-[140px]" placeholder="Your message"></textarea>
        <button className="px-5 py-2 bg-orange-500 rounded-md text-sm font-medium text-white hover:bg-orange-400 transition">Send message</button>
      </form>
    </div>
  );
}
