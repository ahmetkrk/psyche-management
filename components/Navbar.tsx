"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { swbTrackClick } from "@/lib/analytics";

const LINKS = [
  { href: "/", label: "I AM", section: "iam" },
  { href: "/insightlab", label: "InsightLab", section: "insidelab" },
  { href: "/studio", label: "Studio", section: "studio" },
  { href: "/echoes", label: "Echoes", section: "echoes" },
  { href: "/contact", label: "Contact", section: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="border-b border-white/5 bg-black/40 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center gap-6 h-16 px-4">
        <span className="text-sm tracking-[0.35em] uppercase text-orange-300/80">SWB-AI</span>
        <div className="flex gap-4 text-sm">
          {LINKS.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-analytics-id={`nav_${item.section}`}
                onClick={() => swbTrackClick(item.section, `nav_${item.section}`, { href: item.href })}
                className={active ? "text-orange-300 font-medium" : "text-white/70 hover:text-white transition"}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
