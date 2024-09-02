import Image from "next/image";
import styles from "./CarleSwatches.module.scss";
import { Figure } from "./Figure";
import { getSwatchImages } from "./utils/getSwatchImages";

export const CarleSwatches = async () => {
  const swatches = await getSwatchImages();

  return (
    <Figure
      caption="Cropped Eric Carle illustrations input to style transfer model"
      bordered
    >
      <ul className={styles.root}>
        <li className={styles.leftPadding}></li>
        {swatches.map(({ src, width, height }) => (
          <li key={src} className={styles.imageItem}>
            <Image alt="" src={src} width={width} height={height} unoptimized />
          </li>
        ))}
      </ul>
    </Figure>
  );
};
