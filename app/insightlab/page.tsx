import fs from "fs";
import path from "path";
import Link from "next/link";

export default function InsightLabPage() {
  const albumsDir = path.join(process.cwd(), "content", "albums");
  const albumFolders = fs.readdirSync(albumsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const albums = albumFolders.map((dir) => {
    const metadata = JSON.parse(
      fs.readFileSync(path.join(albumsDir, dir, "metadata.json"), "utf8")
    );
    return metadata;
  });

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-semibold mb-8">InsightLab</h1>

      {/* Album List */}
      <section className="space-y-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="border border-white/15 rounded-2xl p-6 bg-white/5"
          >
            <h2 className="text-2xl font-semibold">{album.title}</h2>
            <p className="text-white/70 mt-2">{album.description}</p>

            <div className="mt-4">
              <Link
                href={`/insightlab/album/${album.id}`}
                className="inline-block text-sm border border-white/20 px-5 py-2.5 rounded-md hover:bg-white/10 transition"
              >
                Open Album →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
