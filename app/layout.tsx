// app/layout.tsx
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { PageTracker } from "@/components/PageTracker";
import { ScrollTracker } from "@/components/ScrollTracker";
import { GTM } from "./(tracking)/gtm";
import { Clarity } from "./(tracking)/clarity";
import { Hotjar } from "./(tracking)/hotjar";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer"; // 🔹 footer import

export const metadata: Metadata = {
  title: "SWB-AI Studio",
  description: "SWB-AI experimental studio with eternal analytics format",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex flex-col">
        <GTM />
        <Clarity />
        <Hotjar />
        <Navbar />
        <PageTracker />
        <ScrollTracker />

        {/* Sayfa içeriği */}
        <main className="flex-1">{children}</main>

        {/* Tüm site için ortak footer */}
        <Footer />
      </body>
    </html>
  );
}
