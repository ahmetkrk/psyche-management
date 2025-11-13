"use client";

import { useEffect } from "react";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function Page() {
  useEffect(() => {
    swbTrackPage("iam", { source: "psyche_home_v3" });
  }, []);

  return (
    <div
      className="min-h-screen max-w-5xl mx-auto py-16 px-4 space-y-16 text-center flex flex-col justify-center"
      data-analytics-id="iam_page"
    >
      {/* QUOTE */}
      <section className="space-y-4" data-analytics-id="iam_quote">
        <p className="text-orange-300/80 text-xs tracking-[0.35em] uppercase">
          PSYCHE · SWB-AI
        </p>
        <blockquote className="text-xl md:text-2xl text-white/90 italic mx-auto max-w-3xl">
          “The psyche doesn’t transform in one big moment, but in a thousand
          honest conversations you have with yourself.”
        </blockquote>
        <p className="text-xs text-white/40">— SWB-AI</p>
      </section>

      {/* WHO AM I */}
      <section className="space-y-4" data-analytics-id="iam_about">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Who am I?</h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I am the creator of SWB-AI. My background blends law, industrial
          engineering, machine learning and long-term practice in psychology and
          self-experimentation. I&apos;ve spent years testing ideas in sport,
          behavior, performance and inner work — not just in theory, but in
          real life, under pressure.
        </p>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          The Psyche framework is a 200-step map for inner alignment: from raw
          impulses and chaos, to clarity, responsibility, emotional depth and
          long-term resilience. Through videos, experiments, music and selective
          1:1 coaching, I&apos;m building an ecosystem for people who want to do
          the hard, unglamorous work of real change.
        </p>
      </section>

      {/* COACHING */}
      <section
        className="space-y-4"
        data-analytics-id="iam_coaching_section"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          1:1 Coaching (Very Limited)
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          1:1 coaching is intentionally limited. I only work with a small number
          of people at a time. There is no automatic calendar link on purpose —
          the first step is a short, honest email.
        </p>

        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          We work on things like: inner alignment, discipline that survives real
          life, focus, systems for creative work, and untangling patterns that
          keep repeating in your psyche. It&apos;s practical, direct and
          sometimes uncomfortable — but always pointed at real change, not hype.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3 max-w-xl mx-auto text-left md:text-center">
          <p className="text-sm text-white/60">
            If you&apos;re interested, send a short email:
          </p>
          <a
            href="mailto:contact@swb-ai.com?subject=Coaching%20Application"
            className="text-lg font-semibold text-orange-300 hover:text-orange-200 break-all"
            data-analytics-id="iam_coaching_email"
            onClick={() =>
              swbTrackClick("iam", "coaching_email_click", {
                destination: "mailto_contact",
              })
            }
          >
            contact@swb-ai.com
          </a>
          <p className="text-xs text-white/50">
            In your email, please include:
            <br />– Who you are in 2–3 sentences
            <br />– What you want coaching on (psyche, focus, performance, patterns…)
            <br />– Your rough time and budget expectation
          </p>
          <p className="text-xs text-white/40">
            I review requests manually. If there are no open slots, I&apos;ll
            let you know and can place you on a waiting list.
          </p>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section
        className="space-y-4"
        data-analytics-id="iam_announcements"
      >
        <h2 className="text-lg font-semibold text-white">Announcements</h2>
        <p className="text-white/50 text-sm max-w-2xl mx-auto">
          This space will be updated based on what&apos;s actually live:
          episodes, experiments, music packs, cohorts and new projects.
        </p>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <h3 className="text-sm font-medium text-white">
              Psyche video series
            </h3>
            <p className="text-xs text-white/50">
              Long-form episodes exploring the 200-step psyche map.
            </p>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <h3 className="text-sm font-medium text-white">
              AI music experiments
            </h3>
            <p className="text-xs text-white/50">
              Royalty-safe background tracks for deep work and reflection.
            </p>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <h3 className="text-sm font-medium text-white">
              Coaching slots & waitlist
            </h3>
            <p className="text-xs text-white/50">
              Spots open irregularly. Announced here and via email first.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
