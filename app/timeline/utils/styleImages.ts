import { styleNameSourceMap } from "@/app/timeline/utils/styleNameSourceMap";
import { StyleName } from "@/app/timeline/utils/styleNames";
import sizeOf from "image-size";
import { sortBy } from "lodash";
import { join } from "path";

export interface StyleImage {
  name: StyleName;
  src: string;
  width: number;
  height: number;
}

export const styleImages = sortBy(
  Object.entries(styleNameSourceMap),
  ([, { title }]) => title.toLowerCase().replace(/^(“|the )/, ""),
).map<StyleImage>(([name]) => {
  const src = `/images/styles/${name}.jpg`;
  const { width, height } = sizeOf(join(process.cwd(), "public", src));

  if (!width || !height) {
    throw new Error(`Could not get dimensions for ${src}`);
  }

  return {
    name: name as StyleName,
    src,
    width,
    height,
  };
});
