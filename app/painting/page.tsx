import type { Metadata } from "next";
import { PaintingGallery } from "./PaintingGallery";
import { paintingImagesFromDir } from "./utils/paintingImagesFromDir";

export const metadata: Metadata = {
  title: "Painting Like Eric Carle",
};

export default async function PaintingPage() {
  const images = await paintingImagesFromDir("images/painting");

  return <PaintingGallery images={images} />;
}
