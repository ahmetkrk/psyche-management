const categories = [
  {
    title: "AI Music / Sound Packs",
    desc: "Videolar ve içerikler için hazırlanmış paket müzikler.",
  },
  {
    title: "AI Visuals / Posters",
    desc: "Podcasts ve sahne görselleri için yüksek çözünürlüklü AI görseller.",
  },
  {
    title: "Digital Guides / PDFs",
    desc: "Sistem dokümanları, flow deck'ler, rehberler.",
  },
  {
    title: "Automation & Templates",
    desc: "n8n, prompt ve workflow şablonları.",
  },
];

export default function FlowPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Flow</h1>
        <p className="text-slate-300 max-w-2xl">
          Üretim hattından çıkan satılabilir dijital ürünler. InsightLab'daki fikirlerin ürünleşmiş halleri.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <div key={cat.title} className="border border-slate-800 rounded-lg p-5 bg-slate-950/40">
            <h2 className="font-semibold mb-2">{cat.title}</h2>
            <p className="text-sm text-slate-400 mb-4">{cat.desc}</p>
            <button className="text-sm bg-slate-100 text-slate-900 px-3 py-1.5 rounded-md">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
