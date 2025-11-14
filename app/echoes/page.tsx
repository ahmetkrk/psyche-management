"use client";

import { useEffect } from "react";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

const TOPICS = [
  "Coaching / Mentorship – psyche & performance",
  "AI as a mirror of self",
  "Balancing discipline and intuition",
  "Building long-form focus in a short-form world",
  "Designing a personal myth",
  "Turning YouTube into a thinking tool",
  "Emotional minimalism",
  "Automation without losing humanity",
  "Systems for spiritual consistency",
  "How to document your becoming",
  "Social media without burnout",
  "Narrative identity with AI",
  "Frictionless daily publishing",
  "Creating from solitude",
  "Trial & Error lifestyle",
  "Curation as a creative act",
  "Business as a learning engine",
  "When to productize, when to explore",
  "Working in public",
  "Creator health baselines",
  "Voice, tone, and persona",
  "AI for ideation, not replacement",
  "Video as a ritual",
  "Making data emotional",
  "Applied behavioral design",
  "Long-term audience trust",
  "Micro communities for creators",
  "What SWB-AI actually is",
  "How to ask better from me",
  "What to automate first",
  "Creative constraints that help",
];


const EMAIL = "swbaiglobal@gmail.com";

function openMailForTopic(topic: string) {
  swbTrackClick("echoes", "topic_click", { topic });
  const baseSubject = "Echoes – " + topic;
  let lines: string[] = [];

  if (topic.startsWith("Coaching / Mentorship")) {
    lines = [
      "You can write in English or Turkish.",
      "",
      "Please share:",
      "- Who you are (2–3 sentences)",
      "- What you want help with (psyche, focus, performance, patterns…)",
      "- Your rough time & budget range",
      "",
      "I will reply if there is a slot or to place you on a waiting list.",
    ];
  } else {
    lines = [
      "You can write in English or Turkish.",
      "",
      "Tell me why this topic matters to you right now, and what you hope to get from me:",
      "",
    ];
  }

  const subject = encodeURIComponent(baseSubject);
  const body = encodeURIComponent(lines.join("\n"));
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}

export default function Page() {
  useEffect(() => {
    swbTrackPage("echoes", { source: "page_component" });
  }, []);
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-8" data-analytics-id="echoes_page">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-orange-200/70">Echoes</p>
        <h1 className="text-3xl font-bold text-white">Tell me what you want from me</h1>
        <p className="text-white/50 max-w-2xl text-sm">Pick a perspective below or write your own. This helps me tune future content, products, and AI pipelines around you.</p>
      </header>
      <div className="grid md:grid-cols-3 gap-3">
        {TOPICS.map((topic) => (
          <button key={topic} onClick={() => openMailForTopic(topic)} className="text-left bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:border-orange-200/50 transition">
            {topic}
          </button>
        ))}
      </div>
      <section className="bg-white/5 border border-white/5 rounded-xl p-6 space-y-4" data-analytics-id="echoes_request">
        <h2 className="text-lg font-semibold text-white">Or write your own request</h2>
        <p className="text-sm text-white/55">Tell me what kind of content, system, or AI-enabled tool you want from me.</p>
        <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); swbTrackClick("echoes", "submit_request", {}); }}>
          <input className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm" placeholder="Your email (optional)" />
          <textarea className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm min-h-[120px]" placeholder="Tell me what you want, and why it matters to you."></textarea>
          <button className="px-5 py-2 bg-orange-500 rounded-md text-sm font-medium text-white hover:bg-orange-400 transition">Send to SWB-AI</button>
        </form>
      </section>
    </div>
  );
}