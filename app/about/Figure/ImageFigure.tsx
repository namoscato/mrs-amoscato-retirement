import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Figure } from "./Figure";
import styles from "./ImageFigure.module.scss";
import clsx from "clsx";

interface Props {
  caption: string;
  src: StaticImport;
  bordered?: boolean;
}

export const ImageFigure = ({ caption, src, bordered }: Props) => {
  return (
    <Figure caption={caption} bordered={bordered}>
      <Image
        src={src}
        alt={caption}
        unoptimized
        width={850}
        className={clsx(styles.image, {
          [styles.imageBordered ?? ""]: bordered,
        })}
      />
    </Figure>
  );
};
