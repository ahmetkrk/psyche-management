"use client";

import { useEffect } from "react";
import { swbTrackPage } from "@/lib/analytics";

export default function EchoTopicPage() {
  useEffect(() => {
    swbTrackPage("echoes_topic", { topic: "content-youtube" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-8" data-analytics-id="echoes_topic_content-youtube">
      <header className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-orange-200/80">Echoes · Topic</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Content & YouTube – deep-dive & strategy
        </h1>
      </header>

      <section className="space-y-3">
          <p className="text-sm text-white/70 max-w-3xl">Here the focus is on content as a long-term craft: YouTube as a lab, not just a platform.</p>
          <p className="text-sm text-white/70 max-w-3xl">The questions are about signal, honesty, consistency and how to use content as a record of your own Psyche work.</p>
          <p className="text-sm text-white/70 max-w-3xl">Over time this page will connect video breakdowns, strategy notes and real analytics experiments.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-white">Questions to sit with</h2>
        <ul className="space-y-2">
            <li className="text-sm text-white/70">• If someone only watched your content, what would they believe you care about?</li>
            <li className="text-sm text-white/70">• Where do you feel most resistance when you think about publishing?</li>
            <li className="text-sm text-white/70">• What would ‘honest but sustainable’ content look like for you over 3 years, not 3 weeks?</li>
        </ul>
      </section>
    </div>
  );
}
