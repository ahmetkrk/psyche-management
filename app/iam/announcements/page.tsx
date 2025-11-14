"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function IamAnnouncementsPage() {
  useEffect(() => {
    swbTrackPage("iam_announcements_detail", { source: "iam_announcements_link" });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 space-y-8" data-analytics-id="iam_announcements_detail">
      <header className="space-y-3 text-left md:text-center">
        <p className="text-orange-300/80 text-[10px] tracking-[0.35em] uppercase">
          Announcements
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          How I use announcements in PSYCHE & SWB-AI
        </h1>
      </header>

      <section className="space-y-4 text-left text-sm text-white/80">
        <p>
          This page is not for hype; it&apos;s for orientation. Announcements are where I tell you what is actually
          live and what is being tested: episodes, experiments, studio releases, cohorts, tools and new projects.
        </p>
        <p>
          I don&apos;t want followers waiting for a perfect launch. I want a small group of people who understand that
          this is a long-term ecosystem. Some things will be rough, some things will be sharp. Announcements are the
          map: what is happening now, and where the next energy is going.
        </p>
        <p>
          Over time this section will connect to concrete things: PSYCHE episodes, AI music packs, live cohorts, deep-dive
          calls and experimental tools. If you read this page, you&apos;re already a few layers deeper than someone who
          only sees a random clip on social media.
        </p>
      </section>

      <div className="pt-4">
        <Link
          href="/"
          onClick={() =>
            swbTrackClick("iam_announcements_detail", "back_to_iam", { from: "announcements" })
          }
          className="text-sm text-orange-300 hover:text-orange-200"
        >
          ← Back to I AM
        </Link>
      </div>
    </div>
  );
}
