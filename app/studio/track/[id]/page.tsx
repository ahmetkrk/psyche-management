import { notFound } from "next/navigation";
import { StudioMusicVol1 } from "@/components/StudioMusicVol1";

export async function generateStaticParams() {
  return [{ id: "vol1" }];
}

export default function TrackPage({ params }: { params: { id: string } }) {
  if (params.id !== "vol1") {
    notFound();
  }

  return <StudioMusicVol1 />;
}
