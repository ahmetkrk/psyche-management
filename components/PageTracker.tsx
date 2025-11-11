// components/PageTracker.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { mapPathToSection, swbTrackPage } from "@/lib/analytics";

export function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const section = mapPathToSection(pathname || "/");
    swbTrackPage(section, { source: "layout_autotrack" });
  }, [pathname]);

  return null;
}
