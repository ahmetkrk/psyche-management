import fs from "fs";
import path from "path";
import Link from "next/link";

type AlbumMetadata = {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
};

function getAlbums(): AlbumMetadata[] {
  const albumsDir = path.join(process.cwd(), "content", "albums");

  if (!fs.existsSync(albumsDir)) {
    return [];
  }

  const folders = fs.readdirSync(albumsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const albums: AlbumMetadata[] = folders.map((folder) => {
    const metadataRaw = fs.readFileSync(
      path.join(albumsDir, folder, "metadata.json"),
      "utf8"
    );
    return JSON.parse(metadataRaw) as AlbumMetadata;
  });

  return albums;
}

export default function InsightLabPage() {
  const albums = getAlbums();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-semibold mb-8">InsightLab</h1>

      {albums.length === 0 && (
        <p className="text-white/60 text-sm">
          No albums have been published yet.
        </p>
      )}

      <section className="space-y-6">
        {albums.map((album) => (
          <article
            key={album.id}
            className="border border-white/15 rounded-2xl p-6 md:p-8 bg-white/5"
          >
            <h2 className="text-2xl font-semibold">{album.title}</h2>
            <p className="text-white/70 mt-3 leading-relaxed">
              {album.description}
            </p>

            <div className="mt-6">
              <Link
                href={`/insightlab/album/${album.id}`}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 text-sm font-medium transition"
              >
                Open Album →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
