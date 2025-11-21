import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/BackButton";

type AlbumMetadata = {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
};

type AlbumEpisodes = {
  episodes: { id: string; title: string }[];
};

function getAlbumData(id: string): { metadata: AlbumMetadata; episodes: AlbumEpisodes } | null {
  const albumDir = path.join(process.cwd(), "content", "albums", id);

  if (!fs.existsSync(albumDir)) return null;

  const metadataRaw = fs.readFileSync(
    path.join(albumDir, "metadata.json"),
    "utf8"
  );
  const episodesRaw = fs.readFileSync(
    path.join(albumDir, "episodes.json"),
    "utf8"
  );

  const metadata = JSON.parse(metadataRaw) as AlbumMetadata;
  const episodes = JSON.parse(episodesRaw) as AlbumEpisodes;

  return { metadata, episodes };
}

export default function AlbumPage({ params }: { params: { id: string } }) {
  const data = getAlbumData(params.id);

  if (!data) {
    notFound();
  }

  const { metadata, episodes } = data!;

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <div className="mb-6">
        <BackButton />
      </div>

      <h1 className="text-3xl font-semibold">{metadata.title}</h1>
      <p className="text-white/70 mt-3 leading-relaxed">
        {metadata.description}
      </p>

      <section className="mt-10 space-y-4">
        {episodes.episodes.map((ep) => (
          <article
            key={ep.id}
            className="border border-white/15 rounded-xl p-4 bg-white/5"
          >
            <h3 className="text-lg font-semibold">
              {ep.title}
            </h3>
            <div className="mt-3">
              <Link
                href={`/insightlab/episode/${ep.id}`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-white/20 hover:bg-white/10 text-sm"
              >
                Open Episode →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
