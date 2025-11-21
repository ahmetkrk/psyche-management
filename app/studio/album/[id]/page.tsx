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

type AlbumTracks = {
  tracks: { id: string; title: string; shortDescription?: string }[];
};

function getAlbumData(id: string): { metadata: AlbumMetadata; tracks: AlbumTracks } | null {
  const albumDir = path.join(process.cwd(), "content", "music-albums", id);
  if (!fs.existsSync(albumDir)) return null;

  const metadataRaw = fs.readFileSync(
    path.join(albumDir, "metadata.json"),
    "utf8"
  );
  const tracksRaw = fs.readFileSync(
    path.join(albumDir, "tracks.json"),
    "utf8"
  );

  const metadata = JSON.parse(metadataRaw) as AlbumMetadata;
  const tracks = JSON.parse(tracksRaw) as AlbumTracks;

  return { metadata, tracks };
}

export default function MusicAlbumPage({ params }: { params: { id: string } }) {
  const data = getAlbumData(params.id);
  if (!data) notFound();

  const { metadata, tracks } = data;

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
        {tracks.tracks.map((track) => (
          <article
            key={track.id}
            className="border border-white/15 rounded-xl p-4 bg-white/5"
          >
            <h3 className="text-lg font-semibold">{track.title}</h3>
            {track.shortDescription && (
              <p className="text-sm text-white/70 mt-2">
                {track.shortDescription}
              </p>
            )}
            <div className="mt-3">
              <Link
                href={`/studio/track/${track.id}`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-white/20 hover:bg-white/10 text-sm"
              >
                Open Pack →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
