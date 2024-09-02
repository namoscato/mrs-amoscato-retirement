import { studentsFromImageDir } from "@/app/Yearbook";
import { ImageMetadata } from "./getPublicImages";

export async function getSwatchImages(): Promise<ImageMetadata[]> {
  const students = await studentsFromImageDir("images");

  const sources = new Set<string>();
  const images: ImageMetadata[] = [];

  for (const { styleImage } of students) {
    if (sources.has(styleImage.src)) {
      break;
    }

    sources.add(styleImage.src);
    images.push({
      src: styleImage.src,
      width: 256,
      height: 256,
    });
  }

  return images;
}
