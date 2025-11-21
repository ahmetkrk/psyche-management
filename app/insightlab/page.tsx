import Link from "next/link";

export default function InsightLabPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-semibold mb-8">InsightLab</h1>

      {/* Episode 1 card */}
      <section className="border border-white/15 rounded-2xl p-6 md:p-8 bg-white/5">
        <p className="text-xs tracking-wide text-white/60">
          InsightLab · Episode 1
        </p>

        <h2 className="text-2xl font-semibold mt-2">
          Scientific Foundations of the Psyche
        </h2>

        <p className="text-white/70 mt-3 leading-relaxed">
          Introduction to the Psyche System: why modern people get stuck and how story turns into action.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/insightlab/episode/1"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 text-sm font-medium transition"
          >
            Open Episode →
          </Link>
        </div>
      </section>
    </main>
  );
}
