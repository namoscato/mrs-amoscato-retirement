import { readdir } from "fs/promises";
import sizeOf from "image-size";
import { join } from "path";

export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
}

export async function getPublicImages(dir: string): Promise<ImageMetadata[]> {
  const dirPath = join(process.cwd(), "public", dir);
  const files = await readdir(dirPath);

  return files.reduce<ImageMetadata[]>((images, src) => {
    if (!src.endsWith(".jpg")) {
      return images;
    }

    const { width, height } = sizeOf(join(dirPath, src));

    if (!width || !height) {
      throw new Error(`Could not get dimensions for ${src}`);
    }

    images.push({
      src: `/${dir}/${src}`,
      width,
      height,
    });

    return images;
  }, []);
}
