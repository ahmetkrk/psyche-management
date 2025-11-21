import fs from "fs";
import path from "path";
import Link from "next/link";

type MusicAlbumMetadata = {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
};

function getMusicAlbums(): MusicAlbumMetadata[] {
  const albumsDir = path.join(process.cwd(), "content", "music-albums");

  if (!fs.existsSync(albumsDir)) return [];

  const folders = fs
    .readdirSync(albumsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  return folders.map((folder) => {
    const raw = fs.readFileSync(
      path.join(albumsDir, folder, "metadata.json"),
      "utf8"
    );
    return JSON.parse(raw) as MusicAlbumMetadata;
  });
}

export default function StudioMusicPage() {
  const albums = getMusicAlbums();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      {/* Üst başlık */}
      <header className="mb-10 space-y-2">
        <p className="text-orange-300/80 text-[10px] tracking-[0.35em] uppercase">
          Studio · Music
        </p>
        <h1 className="text-3xl font-semibold">Music Library</h1>
        <p className="text-sm text-white/70 max-w-2xl">
          Browse SWB-AI music albums and packs – each designed for InsightLab,
          Psyche and long-form content production.
        </p>
      </header>

      {/* Albüm listesi */}
      {albums.length === 0 && (
        <p className="text-sm text-white/60">
          No music albums have been published yet.
        </p>
      )}

      <section className="space-y-6">
        {albums.map((album) => (
          <article
            key={album.id}
            className="border border-orange-500/20 rounded-2xl p-6 md:p-8 bg-black/60"
          >
            <h2 className="text-2xl font-semibold text-white">
              {album.title}
            </h2>
            <p className="text-white/70 mt-3 leading-relaxed">
              {album.description}
            </p>

            <div className="mt-6 flex items-center justify-between text-xs text-white/50">
              <span>Album · SWB-AI Studio</span>
              <Link
                href={`/studio/album/${album.id}`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition"
              >
                Open Album →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Alt geri butonu */}
      <div className="mt-10">
        <Link
          href="/studio"
          className="text-sm text-orange-300 hover:text-orange-200"
        >
          ← Back to Studio
        </Link>
      </div>
    </main>
  );
}
