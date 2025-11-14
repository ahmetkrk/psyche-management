
"use client";

import { useEffect } from "react";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

const TOPICS = [
  "Coaching / Mentorship – psyche & performance",
  "YouTube deep-dive – episode or channel review",
  "Psyche reflections – where you feel stuck",
  "AI music – mood, use-case, long-term vibe",
  "Automation & systems – n8n, Raspberry Pi, custom flows",
  "Strategic thinking – decisions, career, long-term bets",
];

function buildMailTo(subject: string, bodyLines: string[]): string {
  const base = "mailto:swbaiglobal@gmail.com";
  const params = new URLSearchParams({
    subject,
    body: bodyLines.join("\n"),
  });
  return `${base}?${params.toString()}`;
}

export default function Page() {
  useEffect(() => {
    swbTrackPage("echoes", { source: "page_component_v2" });
  }, []);

  const handleClick = (topic: string) => {
    swbTrackClick("echoes", "topic_click", { topic });
    let subject = "Echoes – " + topic;
    let bodyLines: string[] = [];

    if (topic.startsWith("Coaching / Mentorship")) {
      subject = "Echoes – Coaching / Mentorship";
      bodyLines = [
        "You can write in English or Turkish.",
        "",
        "Please share:",
        "- Who you are (2–3 sentences)",
        "- What you want help with (psyche, focus, performance, patterns…)",
        "- Your rough time & budget range",
        "",
        "I will reply if there is a slot or to place you on a waiting list.",
      ];
    } else if (topic.startsWith("YouTube deep-dive")) {
      subject = "Echoes – YouTube Deep-Dive";
      bodyLines = [
        "You can write in English or Turkish.",
        "",
        "Please share:",
        "- Link to the video or channel",
        "- What kind of feedback or analysis you want",
        "- Anything specific you want me to look at",
      ];
    } else if (topic.startsWith("Psyche reflections")) {
      subject = "Echoes – Psyche Reflections";
      bodyLines = [
        "You can write in English or Turkish.",
        "",
        "You can respond to one or more of these prompts:",
        "- Where in your psyche do you feel most stuck right now?",
        "- What patterns keep repeating in your life?",
        "- What part of the Psyche framework hits you the most?",
      ];
    } else if (topic.startsWith("AI music")) {
      subject = "Echoes – AI Music Request";
      bodyLines = [
        "You can write in English or Turkish.",
        "",
        "Please share:",
        "- Mood (for example: adventure, dark-to-light, inner alignment)",
        "- Approximate length (for example: 30s, 60s, 90s)",
        "- Where you want to use it (YouTube, podcast, background, etc.)",
      ];
    } else if (topic.startsWith("Automation & systems")) {
      subject = "Echoes – Automation & Systems";
      bodyLines = [
        "You can write in English or Turkish.",
        "",
        "Please share:",
        "- What you want to automate",
        "- Your current tools (YouTube, n8n, Raspberry Pi, etc.)",
        "- How technical you are right now",
      ];
    } else if (topic.startsWith("Strategic thinking")) {
      subject = "Echoes – Strategic Thinking";
      bodyLines = [
        "You can write in English or Turkish.",
        "",
        "Please share:",
        "- What decision or situation you are thinking about",
        "- The main options you see",
        "- What you are afraid of getting wrong",
      ];
    }

    const mailto = buildMailTo(subject, bodyLines);
    window.location.href = mailto;
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-8" data-analytics-id="echoes_page">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-orange-200/70">Echoes</p>
        <h1 className="text-3xl font-bold text-white">Tell me what you want from me</h1>
        <p className="text-white/50 max-w-2xl text-sm">
          Pick a path and send me an email. Each option opens a mail draft with the right subject and a few prompts,
          so you don&apos;t have to start from a blank page. Your echoes help me tune future content, systems,
          music and coaching around you.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-3">
        {TOPICS.map((topic) => (
          <button
            key={topic}
            onClick={() => handleClick(topic)}
            className="text-left bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:border-orange-200/50 transition"
          >
            {topic}
          </button>
        ))}
      </div>

      <section className="bg-white/5 border border-white/5 rounded-xl p-6 space-y-4" data-analytics-id="echoes_request">
        <h2 className="text-lg font-semibold text-white">Or write your own request</h2>
        <p className="text-sm text-white/55">
          If none of the options above fit, you can still send a free-form email.
        </p>
        <a
          href={buildMailTo("Echoes – Free-form request", [
            "You can write in English or Turkish.",
            "",
            "Tell me what you want, and why it matters to you:",
            "",
          ])}
          className="inline-flex items-center gap-2 text-sm text-orange-300 hover:text-white transition"
          onClick={() => swbTrackClick("echoes", "free_form_click", { destination: "mailto" })}
        >
          Open a blank-ish email ↗
        </a>
      </section>
    </div>
  );
}
