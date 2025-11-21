import { notFound } from "next/navigation";
import { StudioMusicVol1 } from "@/components/StudioMusicVol1";

export async function generateStaticParams() {
  return [{ id: "vol1" }];
}

export default function TrackPage({ params }: { params: { id: string } }) {
  // Şimdilik sadece vol1 var
  if (params.id !== "vol1") {
    notFound();
  }

  // Eski /studio/music sayfanda gördüğün tasarım
  return <StudioMusicVol1 />;
}
