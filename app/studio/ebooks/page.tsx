"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function StudioEbooksPage() {
  useEffect(() => {
    swbTrackPage("studio_ebooks", { source: "studio_ebooks_link" });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 space-y-8" data-analytics-id="studio_ebooks">
      <header className="space-y-3 text-left md:text-center">
        <p className="text-orange-300/80 text-[10px] tracking-[0.35em] uppercase">
          Studio · E-books
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Experimental e-books from real daily moments
        </h1>
      </header>

      <section className="space-y-4 text-sm text-white/80">
        <p>
          The e-books I&apos;m building here are not traditional &quot;self-help&quot; volumes. They&apos;re short,
          focused pieces built from real situations: travel, fatigue, training, conflict, alignment, misalignment.
        </p>
        <p>
          Each one is closer to a field report than a polished essay — snapshots of how psyche work, systems thinking and
          Trial &amp; Error show up in actual days. You can read them in one sitting and come back to specific passages
          when you need a pattern or a question.
        </p>
        <p>
          Over time there will be multiple small e-books instead of one giant book: different angles, different seasons,
          different questions. When they&apos;re ready, they&apos;ll appear here and in the Studio overview.
        </p>
      </section>

      <div className="pt-4">
        <Link
          href="/studio"
          onClick={() =>
            swbTrackClick("studio_ebooks", "back_to_studio", {})
          }
          className="text-sm text-orange-300 hover:text-orange-200"
        >
          ← Back to Studio
        </Link>
      </div>
    </div>
  );
}
