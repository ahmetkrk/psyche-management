// components/TrackedButton.tsx
"use client";

import React from "react";
import { swbTrackClick } from "@/lib/analytics";

interface TrackedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  section: string;
  action: string;
  meta?: Record<string, any>;
}

export function TrackedButton({ section, action, meta = {}, onClick, ...rest }: TrackedButtonProps) {
  return (
    <button
      onClick={(e) => {
        swbTrackClick(section, action, meta);
        onClick?.(e);
      }}
      {...rest}
    />
  );
}
