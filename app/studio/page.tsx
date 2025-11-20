"use client";

import Link from "next/link";

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* PAGE TITLE */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">SWB-AI Studio</h1>
          <p className="text-gray-400">Music Packs, Stems, Donations & Upcoming E-Book</p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* MUSIC PACK */}
          <div className="border border-gray-700 rounded-2xl p-8 bg-gray-900/40 hover:bg-gray-900/70 duration-200">
            <h2 className="text-2xl font-semibold mb-3">Music Pack</h2>
            <p className="text-gray-400 mb-6">
              AI-created cinematic background tracks for content creators. Volume 1 available soon.
            </p>
            <Link
              href="#"
              className="inline-block px-5 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-300 duration-150"
            >
              Coming Soon
            </Link>
          </div>

          {/* STEM PACK */}
          <div className="border border-gray-700 rounded-2xl p-8 bg-gray-900/40 hover:bg-gray-900/70 duration-200">
            <h2 className="text-2xl font-semibold mb-3">Producer Stem Pack</h2>
            <p className="text-gray-400 mb-6">
              Full quality WAV stems for producers and sound designers. Commercial license included.
            </p>
            <Link
              href="https://swb-ai.lemonsqueezy.com/buy/e34480a1-860d-44c2-b9d5-a79f4b986798"
              className="inline-block px-5 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-300 duration-150"
            >
              Buy Stems Pack
            </Link>
          </div>
        </div>

        {/* DONATION BOX */}
        <div className="mt-10 border border-yellow-500 rounded-2xl p-10 bg-yellow-500/10 text-center">
          <h2 className="text-3xl font-bold mb-3">Support the SWB-AI Project</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Help the development of long-form educational content, research, AI-generated music and the Psyche System framework.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-4 bg-yellow-500 text-black rounded-xl font-semibold hover:bg-yellow-400 duration-150"
          >
            Donate
          </Link>
        </div>

        {/* EBOOK PREVIEW */}
        <div className="mt-20 border border-gray-700 rounded-2xl p-10 bg-gray-900/40">
          <h2 className="text-3xl font-semibold mb-4">Upcoming E-Book</h2>
          <p className="text-gray-400 max-w-2xl mb-6">
            Detailed explanation of the Psyche System, structural awareness model, mental architecture
            and practical applications. Coming soon.
          </p>
          <div className="text-gray-600 italic">E-Book is in preparation. Release date will be announced.</div>
        </div>

      </div>
    </div>
  );
}
