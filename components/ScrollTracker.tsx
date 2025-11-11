// components/ScrollTracker.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { mapPathToSection, swbTrackScroll } from "@/lib/analytics";

export function ScrollTracker() {
  const firedRef = useRef<{ [key: number]: boolean }>({});
  const pathname = usePathname();

  useEffect(() => {
    firedRef.current = {};
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      const section = mapPathToSection(pathname || "/");
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      if (scrollHeight <= 0) return;
      const percent = Math.round((scrollTop / scrollHeight) * 100);
      const checkpoints = [25, 50, 75, 100];
      for (const cp of checkpoints) {
        if (percent >= cp && !firedRef.current[cp]) {
          firedRef.current[cp] = true;
          swbTrackScroll(section, cp);
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
