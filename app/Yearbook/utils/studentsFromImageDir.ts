import { StyleName, isStyleName } from "@/app/timeline/utils/styleNames";
import { promises as fs } from "fs";
import { orderBy } from "lodash";
import { join } from "path";

enum ImageDir {
  Portraits = "portraits",
  StyledPortraits = "styled-portraits",
  Styles = "cropped-styles",
}

export interface Student {
  id: string;
  year: number;
  index: number;
  portraitImage: {
    src: string;
    styledSrc: string;
  };
  styleImage: {
    name: StyleName;
    src: string;
  };
}

export async function studentsFromImageDir(
  imageDir: string,
): Promise<Student[]> {
  const styledPortraits = await fs.readdir(
    join(process.cwd(), "public", imageDir, ImageDir.StyledPortraits),
  );

  const students = styledPortraits.reduce<Student[]>(
    (result, styledPortrait) => {
      const imageParts = imageNameRegex.exec(styledPortrait);

      if (imageParts) {
        const [, year, index, styleName, styleImageSuffix] = imageParts;
        const id = `${year}_${index}`;

        if (!styleName) {
          throw new Error(`Unexpected image name format: ${styledPortrait}`);
        }

        if (!isStyleName(styleName)) {
          throw new Error(
            `"${styledPortrait}" contains unknown style name: ${styleName}`,
          );
        }

        result.push({
          id,
          year: Number(year),
          index: Number(index),
          portraitImage: {
            src: `/${imageDir}/${ImageDir.Portraits}/${id}.jpg`,
            styledSrc: `/${imageDir}/${ImageDir.StyledPortraits}/${styledPortrait}`,
          },
          styleImage: {
            name: styleName,
            src: `/${imageDir}/${ImageDir.Styles}/${styleName}${styleImageSuffix ?? ""}.jpg`,
          },
        });
      }

      return result;
    },
    [],
  );

  return orderBy(students, ["year", "index"], ["desc", "asc"]);
}

/**
 * Parse the image filename into its parts.
 *
 * For example, the filename "2023_01_portrait_butterfly_02.jpg" will
 * match with the following capture groups:
 *
 * 1. year (2023)
 * 2. index (01)
 * 3. style name (portrait_butterfly)
 * 4. optional style image suffix (_02)
 */
const imageNameRegex = /^(\d{4})_(\d{2})_([^\d.]+)(_\d{2})?\.jpg$/;
