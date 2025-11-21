"use client";

import Link from "next/link";

export function SocialLinks() {
  return (
    <div className="flex gap-2 text-[11px] text-white/70">
      {/* YouTube */}
      <Link
        href="http://www.youtube.com/@Swb-ai"
        target="_blank"
        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/15 hover:text-orange-200 transition"
        aria-label="YouTube"
      >
        YT
      </Link>

      {/* Instagram */}
      <Link
        href="https://www.instagram.com/ai.swb"
        target="_blank"
        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/15 hover:text-orange-200 transition"
        aria-label="Instagram"
      >
        IG
      </Link>

      {/* Twitter / X */}
      <Link
        href="https://twitter.com/AiSwb74785"
        target="_blank"
        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/15 hover:text-orange-200 transition"
        aria-label="Twitter"
      >
        X
      </Link>

      {/* Snapchat */}
      <Link
        href="https://www.snapchat.com/add/swb.ai"
        target="_blank"
        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/15 hover:text-orange-200 transition"
        aria-label="Snapchat"
      >
        SC
      </Link>
    </div>
  );
}
