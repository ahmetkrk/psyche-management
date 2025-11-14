
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

const EMAIL = "swbaiglobal@gmail.com";

const TOPICS = [
  "Automation & systems – tools, workflows, code",
  "Practical life changes – habits & daily structure",
  "Psyche reflections – where you feel stuck",
  "AI as a mirror of self",
  "Balancing discipline and intuition",
  "Trial & Error lifestyle – sport, risk, learning",
  "Content & YouTube – deep-dive & strategy",
  "Strategic thinking – long-term bets & decisions",
];


  const subjectEncoded = encodeURIComponent(subject);
  const bodyEncoded = encodeURIComponent(lines.join("\n"));
  window.location.href = `mailto:${EMAIL}?subject=${subjectEncoded}&body=${bodyEncoded}`;
}


export default function Page() {
  const router = useRouter();

  useEffect(() => {
    swbTrackPage("echoes", { source: "page_component_v2" });
  }, []);

  const handleTopicClick = (topic: string) => {
    swbTrackClick("echoes", "topic_selected", { topic });
    const slug = getSlugForTopic(topic);
    router.push(`/echoes/${slug}`);
  };
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-8" data-analytics-id="echoes_page">
      {/* HEADER */}
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-orange-200/70">Echoes</p>
        <h1 className="text-3xl font-bold text-white">Tell me what you want from me</h1>
        <p className="text-white/50 max-w-2xl text-sm">
          Everything you send here goes straight to my inbox. No forms, no bots — just direct signal
          that helps me shape future content, systems, music and coaching.
        </p>
      </header>

      {/* CONTACT LINE */}
      <section className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <p className="text-xs text-white/60">
            You can always write directly. Use the email below, or pick a topic card.
          </p>
        </div>
        <a
          href={`mailto:${EMAIL}`}
          className="text-sm font-mono text-orange-300 hover:text-orange-200 break-all"
          onClick={() =>
            swbTrackClick("echoes", "contact_click", { destination: "mailto_direct" })
          }
        >
          {EMAIL}
        </a>
      </section>

      {/* COACHING / MENTORSHIP CARD */}
      <section className="bg-white/5 border border-orange-300/40 rounded-2xl p-6 space-y-3">
        <p className="text-[10px] uppercase tracking-[0.3em] text-orange-200/80">Coaching · Mentorship</p>
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Coaching & mentorship are very limited — start here if you&apos;re serious.
        </h2>
        <p className="text-sm text-white/70 max-w-3xl">
          I don&apos;t run mass coaching. I work with a small number of people who care about inner alignment,
          high-pressure performance, and long-term creative work. There is no calendar link — the first step is a clear email.
        </p>
        <p className="text-xs text-white/60 max-w-3xl">
          If you want 1:1 coaching or mentorship, you can either use the topics below (for example
          &quot;Practical life changes&quot; or &quot;Strategic thinking&quot;), or simply write directly with
          &quot;Coaching / Mentorship&quot; in your subject line.
        </p>
      </section>

      {/* TOPIC CARDS */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-white">Send an echo by topic</h3>
        <div className="grid md:grid-cols-3 gap-3">
          {TOPICS.map((topic) => (
            <button
              key={topic}
              onClick={() => handleTopicClick(topic)}
              className="text-left bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:border-orange-200/50 transition"
            >
              {topic}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}