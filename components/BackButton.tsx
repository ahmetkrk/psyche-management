"use client";

import { useRouter } from "next/navigation";

type BackButtonProps = {
  label?: string;
  className?: string;
};

export function BackButton({ label = "Back", className = "" }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`inline-flex items-center gap-1 text-xs text-white/60 hover:text-white transition ${className}`}
    >
      <span>←</span>
      <span>{label}</span>
    </button>
  );
}
