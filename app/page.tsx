"use client";

import { useEffect } from "react";
import Link from "next/link";
import { swbTrackPage, swbTrackClick } from "@/lib/analytics";

export default function Page() {
  useEffect(() => {
    swbTrackPage("iam", { source: "psyche_home_v1" });
  }, []);

  return (
    <div
      className="max-w-6xl mx-auto py-10 px-4 space-y-16"
      data-analytics-id="iam_page"
    >
      {/* HERO */}
      <section className="space-y-6" data-analytics-id="iam_hero">
        <p className="text-orange-300/80 text-xs tracking-[0.35em] uppercase">
          SWB-AI · PSYCHE
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Psyche, zihin, AI ve müzikle uzun vadeli bir içsel gelişim ekosistemi.
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
          200 basamaklı Psyche yolculuğu, AI destekli müzikler ve modern psikoloji ile
          içsel hizalanma, odaklanma ve dayanıklılık için tasarlanmış deneysel bir alan.
        </p>

        <div className="flex flex-col md:flex-row flex-wrap gap-4">
          {/* SUPPORT */}
          <Link href="#">
            <button
              className="px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 font-semibold"
              data-analytics-id="iam_support_cta"
              onClick={() =>
                swbTrackClick("iam", "support_cta", { destination: "lemon_support" })
              }
            >
              Support SWB-AI
            </button>
          </Link>

          {/* PSYCHE MINI GUIDE */}
          <Link href="#">
            <button
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 font-semibold"
              data-analytics-id="iam_psyche_guide_cta"
              onClick={() =>
                swbTrackClick("iam", "psyche_guide_cta", {
                  destination: "lemon_psyche_guide",
                })
              }
            >
              Get Psyche Mini Guide
            </button>
          </Link>

          {/* MUSIC PACK */}
          <Link href="#">
            <button
              className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 font-semibold"
              data-analytics-id="iam_music_pack_cta"
              onClick={() =>
                swbTrackClick("iam", "music_pack_cta", {
                  destination: "lemon_music_pack_vol1",
                })
              }
            >
              Download Music Pack Vol. 1
            </button>
          </Link>

          {/* COACHING */}
          <a href="#coaching">
            <button
              className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 font-semibold"
              data-analytics-id="iam_coaching_cta"
              onClick={() =>
                swbTrackClick("iam", "coaching_cta", { destination: "coaching_section" })
              }
            >
              1:1 Coaching (Limited)
            </button>
          </a>
        </div>
      </section>

      {/* WHAT IS SWB-AI */}
      <section
        className="space-y-4"
        data-analytics-id="iam_what_is_swbai"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">What is SWB-AI?</h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          SWB-AI, insanın içsel yolculuğunu; psyche katmanları, modern psikoloji,
          yapay zekâ, sanat ve müzikle birleştiren uzun vadeli bir gelişim ekosistemidir.
          Amaç; içsel hizalanma, zihinsel berraklık, dayanıklılık ve kalıcı dönüşüm.
        </p>
      </section>

      {/* PSYCHE 1–200 */}
      <section
        className="space-y-4"
        data-analytics-id="iam_psyche_journey"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">Psyche 1–200 Journey</h2>
        <ul className="space-y-2 text-gray-300">
          <li>• 1–15: Lower Psyche — Dürtüsel benlik ve gölge taraflar</li>
          <li>• 16–29: Self-Critique Layer — Öz-eleştiri ve farkındalık</li>
          <li>• 30–43: Inspired Psyche — İlham ve bilinç uyanışı</li>
          <li>• 44–57: Calm Psyche — İç huzur ve denge</li>
          <li>• 58–100: Mature Psyche — Olgunluk ve derin kabul</li>
          <li>• 101–200: IQ/EQ Development — Zihin-duygu entegrasyonu ve metakognisyon</li>
        </ul>
        <p className="text-gray-400 text-sm">
          Tam 200 basamaklık sistem, Psyche Mini Guide ve video serisi içinde açılacak.
        </p>
      </section>

      {/* COACHING */}
      <section
        id="coaching"
        className="space-y-4"
        data-analytics-id="iam_coaching_section"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          1:1 Coaching (Limited Spots)
        </h2>
        <p className="text-gray-300 leading-relaxed">
          1:1 coaching seansları şu anda sınırlı sayıda ve yoğunluk nedeniyle herkesi
          kabul edemiyorum. Başvuru yapmak için önce bana e-posta ile ulaşman gerekiyor.
          Kısaca kim olduğunu, hangi konuda destek almak istediğini ve şu an nerede
          takıldığını anlat.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Uygun olduğum dönemlerde e-posta üzerinden geri dönüş yapıp detayları
          paylaşıyorum. Eğer şu an yer yoksa, seni bekleme listesine alabiliyorum.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
          <p className="text-sm text-gray-400">Başvuru için e-posta:</p>
          <a
            href="mailto:contact@swb-ai.com?subject=Coaching%20Application"
            className="text-lg font-semibold text-purple-300 hover:text-purple-200 break-all"
            data-analytics-id="iam_coaching_email"
            onClick={() =>
              swbTrackClick("iam", "coaching_email_click", {
                destination: "mailto_contact",
              })
            }
          >
            contact@swb-ai.com
          </a>
          <p className="text-gray-400 text-sm">
            E-postanda lütfen şunları kısaca yaz:
            <br />– Kendini 2–3 cümleyle tanıt
            <br />– Hangi konuda coaching istediğini anlat (psyche, odaklanma, içsel hizalanma, performans vs.)
            <br />– Haftalık / aylık zaman ve bütçe beklentini kabaca belirt
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section
        className="space-y-4 mb-10"
        data-analytics-id="iam_about"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">About</h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          Ben SWB-AI’nin kurucusuyum. Avukatlık, endüstri mühendisliği,
          makine öğrenmesi ve psikoloji alanlarındaki deneyimlerimi,
          200 basamaklı bir Psyche yol haritası, video serileri, AI destekli
          müzikler ve seçili 1:1 coaching seanslarıyla birleştiriyorum.
          Amacım; insanlara uzun vadeli, gerçekçi ve pratik bir içsel dönüşüm
          altyapısı sunmak.
        </p>
      </section>
    </div>
  );
}
