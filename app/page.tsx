"use client";

import { useEffect } from "react";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function Page() {
  useEffect(() => {
    swbTrackPage("iam", { source: "psyche_home_v2" });
  }, []);

  return (
    <div
      className="max-w-6xl mx-auto py-10 px-4 space-y-10"
      data-analytics-id="iam_page"
    >
      {/* QUOTE */}
      <section className="space-y-4" data-analytics-id="iam_quote">
        <p className="text-orange-300/80 text-xs tracking-[0.35em] uppercase">
          PSYCHE · SWB-AI
        </p>
        <blockquote className="border-l-2 border-orange-400/70 pl-4 text-lg md:text-2xl text-white/90 italic">
          “The psyche doesn’t transform in one big moment, but in a thousand
          honest conversations you have with yourself.”
        </blockquote>
        <p className="text-xs text-white/40">— SWB-AI</p>
      </section>

      {/* WHO AM I */}
      <section className="space-y-4" data-analytics-id="iam_about">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Who am I?</h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          I am the creator of SWB-AI. My background blends law, industrial
          engineering, machine learning and long-term practice in psychology and
          self-experimentation. I&apos;ve spent years testing ideas in sport,
          behavior, performance and inner work — not just in theory, but in
          real life, under pressure.
        </p>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          The Psyche framework is a 200-step map for inner alignment: from raw
          impulses and chaos, to clarity, responsibility, emotional depth and
          long-term resilience. Through videos, experiments, music and selective
          1:1 coaching, I&apos;m building an ecosystem for people who want to do
          the hard, boring, unglamorous work of real change.
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

        <p className="text-gray-300 leading-relaxed max-w-3xl">
          1:1 coaching is not a mass product here. I keep it intentionally
          limited and only take on a small number of people at a time. If you
          want to work together, the first step is a short email — there is no
          automatic booking link on purpose.
        </p>

        <p className="text-gray-300 leading-relaxed max-w-3xl">
          In coaching we work on things like: inner alignment, discipline that
          actually survives real life, focus, building systems for creative
          work, and untangling patterns that keep repeating in your psyche.
          It&apos;s practical, direct and sometimes uncomfortable — but always
          pointed at real change, not motivational hype.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
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
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">Announcements</h2>
          <span className="text-xs text-white/40">
            Updated based on current focus
          </span>
        </div>

        {/* 
          These cards are placeholders.
          You can change the titles and text anytime to match
          your current agenda (new videos, music packs, cohorts, etc.).
        */}
        <div className="grid md:grid-cols-3 gap-4">
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
