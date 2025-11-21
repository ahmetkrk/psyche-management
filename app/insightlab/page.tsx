import fs from "fs";
import path from "path";
import Link from "next/link";

type EpisodeMetadata = {
  episode: number;
  slug: string;
  title: string;
  tagline: string;
  youtube: string;
  date: string;
  duration: string;
  tags: string[];
};

type EpisodeExtract = {
  id: string;
  title: string;
  summary: string;
  order: number;
};

function getEpisode1Data() {
  const baseDir = path.join(process.cwd(), "content", "episodes", "1");

  const metadataRaw = fs.readFileSync(
    path.join(baseDir, "metadata.json"),
    "utf8"
  );
  const summaryRaw = fs.readFileSync(
    path.join(baseDir, "summary.md"),
    "utf8"
  );
  const extractsRaw = fs.readFileSync(
    path.join(baseDir, "extracts.json"),
    "utf8"
  );

  const metadata = JSON.parse(metadataRaw) as EpisodeMetadata;
  const extracts = JSON.parse(extractsRaw) as EpisodeExtract[];

  // Split markdown into paragraphs by empty line
  const summaryParagraphs = summaryRaw
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  // Sort extracts by "order"
  extracts.sort((a, b) => a.order - b.order);

  return { metadata, summaryParagraphs, extracts };
}

export default function InsightLabEpisode1Page() {
  const { metadata, summaryParagraphs, extracts } = getEpisode1Data();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      {/* Small label */}
      <p className="text-sm tracking-wide text-white/60">
        InsightLab · Episode {metadata.episode}
      </p>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold mt-2">
        {metadata.title}
      </h1>

      {/* Tagline */}
      <p className="text-white/70 mt-4 leading-relaxed">
        {metadata.tagline}
      </p>

      {/* Watch on YouTube */}
      <div className="mt-8">
        <Link
          href={metadata.youtube}
          target="_blank"
          className="inline-block border border-white/20 px-5 py-3 rounded-md hover:bg-white/10 transition"
        >
          Watch Episode on YouTube →
        </Link>
      </div>

      {/* Optional meta info */}
      <div className="mt-4 text-xs text-white/50 space-x-3">
        <span>{metadata.date}</span>
        <span>•</span>
        <span>{metadata.duration}</span>
      </div>

      {/* Summary content from summary.md */}
      <section className="mt-12 space-y-4">
        {summaryParagraphs.map((paragraph, idx) => (
          <p key={idx} className="text-white/80 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>

      {/* Extract cards */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Key Extracts from Episode 1</h2>
        <div className="mt-6 space-y-4">
          {extracts.map((extract) => (
            <div
              key={extract.id}
              className="border border-white/10 rounded-lg p-4 bg-white/5"
            >
              <h3 className="text-lg font-semibold">{extract.title}</h3>
              <p className="text-sm text-white/80 mt-2 leading-relaxed">
                {extract.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tags */}
      {metadata.tags && metadata.tags.length > 0 && (
        <section className="mt-12 mb-24">
          <h2 className="text-sm font-medium text-white/60 mb-3">
            Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {metadata.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
