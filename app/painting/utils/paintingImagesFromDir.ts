import { schoolYearFromYear } from "@/app/utils/schoolYearFromYear";
import { promises as fs } from "fs";
import sizeOf from "image-size";
import { orderBy } from "lodash";
import { join } from "path";
import { Image } from "react-grid-gallery";

interface PaintingImage extends Image {
  year: number;
  description: string;
}

export async function paintingImagesFromDir(
  dir: string,
): Promise<PaintingImage[]> {
  const files = await fs.readdir(join(process.cwd(), "public", dir));

  const images = files.reduce<PaintingImage[]>((result, file) => {
    if (!file.endsWith(".jpg")) {
      return result;
    }

    const { width, height } = sizeOf(join(process.cwd(), "public", dir, file));

    if (!width || !height) {
      throw new Error(`Could not get dimensions for ${file}`);
    }

    const [year] = file.split("_");

    if (!year) {
      throw new Error(`Could not extract year from ${file}`);
    }

    result.push({
      src: `/${dir}/${file}`,
      width,
      height,
      year: Number(year),
      description: `${schoolYearFromYear(Number(year))} School Year`,
    });

    return result;
  }, []);

  return orderBy(images, ["year"], ["desc"]);
}
