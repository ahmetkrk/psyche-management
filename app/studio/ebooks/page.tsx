"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function StudioEbooksPage() {
  useEffect(() => {
    swbTrackPage("studio_ebooks", { source: "studio" });
  }, []);

  return (
    <div
      className="max-w-4xl mx-auto py-16 px-4 space-y-8"
      data-analytics-id="studio_ebooks"
    >
      <header className="space-y-3 text-left md:text-center">
        <p className="text-orange-300/80 text-[10px] tracking-[0.35em] uppercase">
          Studio · E-books
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Psyche System E-Book
        </h1>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-0 md:mx-auto">
          A written companion to the Psyche System videos: 200 steps of Nafs +
          IQ/EQ development, structured as a practical roadmap instead of
          abstract theory.
        </p>
      </header>

      <section className="space-y-4 text-sm text-gray-200">
        <p>
          The first e-book focuses on the{" "}
          <strong>“200 Basamak: Nefs + IQ/EQ Gelişim Yol Haritası”</strong>.
          It breaks down the journey from Nefs-i Emmâre to higher awareness
          into clear, named stages with concrete examples.
        </p>
        <p>
          Each stage is designed to be <strong>actionable</strong>: what you
          feel, what usually goes wrong, and what micro-actions can move you to
          the next level. The goal is not just to understand the map, but to
          actually move on it.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
          <li>1–100: Nefs stages, from raw impulses to disciplined self.</li>
          <li>IQ & EQ integration: thinking clearly while feeling deeply.</li>
          <li>
            Reflection prompts and journaling questions for each chapter
            (practice, not just reading).
          </li>
          <li>
            Optional checklists to track your own progress along the 200-step
            path.
          </li>
        </ul>
        <p className="pt-2 text-gray-400">
          Status: <span className="text-orange-300">Writing in progress.</span>{" "}
          Early chapters will be tested in video format first, then refined into
          the written version.
        </p>
      </section>

      <section className="space-y-3 text-xs text-gray-500">
        <p>
          If you want this e-book to go live faster, supporting the project via
          the Donation option in Studio directly helps to buy more time and
          tools for writing, editing and translation.
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
