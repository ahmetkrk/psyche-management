"use client";

import { useEffect } from "react";
import { swbTrackPage } from "@/lib/analytics";

export default function EchoTopicPage() {
  useEffect(() => {
    swbTrackPage("echoes_topic", { topic: "automation-systems" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-8" data-analytics-id="echoes_topic_automation-systems">
      <header className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-orange-200/80">Echoes · Topic</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Automation & systems – tools, workflows, code
        </h1>
      </header>

      <section className="space-y-3">
          <p className="text-sm text-white/70 max-w-3xl">This space will collect thoughts, experiments and case studies on automation.</p>
          <p className="text-sm text-white/70 max-w-3xl">From YouTube workflows and n8n graphs to Raspberry Pi setups and API-based tools, the focus here is practical: what actually saves time, energy and mental load in real life.</p>
          <p className="text-sm text-white/70 max-w-3xl">Over time, this page will link to breakdowns of real systems I build or review.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-white">Questions to sit with</h2>
        <ul className="space-y-2">
            <li className="text-sm text-white/70">• Where do you lose the most time or energy every week?</li>
            <li className="text-sm text-white/70">• Which tools are you already using (or avoiding)?</li>
            <li className="text-sm text-white/70">• If one process in your life became 10x smoother, which one would change the most things downstream?</li>
        </ul>
      </section>
    </div>
  );
}
