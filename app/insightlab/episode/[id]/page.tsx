import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/BackButton";

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

function getEpisodeData(id: string) {
  const baseDir = path.join(process.cwd(), "content", "episodes", id);

  if (!fs.existsSync(baseDir)) return null;

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

  const summaryParagraphs = summaryRaw
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  extracts.sort((a, b) => a.order - b.order);

  return { metadata, summaryParagraphs, extracts };
}

export async function generateStaticParams() {
  const episodesDir = path.join(process.cwd(), "content", "episodes");
  if (!fs.existsSync(episodesDir)) return [];

  const entries = fs.readdirSync(episodesDir, { withFileTypes: true });
  const ids = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  return ids.map((id) => ({ id }));
}

export default function EpisodePage({ params }: { params: { id: string } }) {
  const data = getEpisodeData(params.id);

  if (!data) notFound();

  const { metadata, summaryParagraphs, extracts } = data;

  return (
    <main id="top" className="max-w-3xl mx-auto px-6 py-16 text-white">
      {/* Back = bir önceki sayfa */}
      <div className="mb-6">
        <BackButton />
      </div>

      {/* Üst kart */}
      <section className="border border-white/15 rounded-2xl p-6 md:p-8 bg-white/5">
        <p className="text-xs tracking-wide text-white/60">
          InsightLab · Episode {metadata.episode}
        </p>

        <h1 className="text-2xl md:text-3xl font-semibold mt-2">
          {metadata.title}
        </h1>

        <p className="text-white/70 mt-3 leading-relaxed">
          {metadata.tagline}
        </p>

        <div className="mt-4 text-[11px] text-white/50 space-x-2">
          <span>{metadata.date}</span>
          <span>•</span>
          <span>{metadata.duration}</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={metadata.youtube}
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 text-sm font-medium transition"
          >
            Watch Episode on YouTube →
          </Link>

          <a
            href="#episode-output"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-white/15 hover:bg-white/10 text-sm font-medium text-white/80 transition"
          >
            View outputs & insights ↓
          </a>
        </div>
      </section>

      {/* Outputs */}
      <section id="episode-output" className="mt-16">
        <h2 className="text-sm tracking-wide text-white/60">
          Episode {metadata.episode} · Outputs
        </h2>

        <div className="mt-4 space-y-4">
          {summaryParagraphs.map((paragraph, idx) => (
            <p key={idx} className="text-white/80 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold">
            Key Extracts from Episode {metadata.episode}
          </h3>
          <div className="mt-6 space-y-4">
            {extracts.map((extract) => (
              <article
                key={extract.id}
                className="border border-white/10 rounded-xl p-4 bg-white/5"
              >
                <h4 className="text-lg font-semibold">{extract.title}</h4>
                <p className="text-sm text-white/80 mt-2 leading-relaxed">
                  {extract.summary}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 mb-24 flex items-center justify-between text-xs text-white/60">
          <BackButton />

          <a
            href="#top"
            className="inline-flex items-center gap-1 hover:text-white transition"
          >
            <span>↑</span>
            <span>Back to top</span>
          </a>
        </div>
      </section>
    </main>
  );
}
