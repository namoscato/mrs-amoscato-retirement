import Image from "next/image";
import { Figure } from "./Figure";
import styles from "./OldAlbumCovers.module.scss";
import { getPublicImages } from "./utils/getPublicImages";

export const OldAlbumCovers = async () => {
  const albumCovers = await getPublicImages("images/old-album-covers");

  return (
    <Figure caption="Photo album cover graphics from 2007-2008" bordered>
      <ul className={styles.root}>
        <li className={styles.leftPadding}></li>
        {albumCovers.map(({ src, width, height }) => (
          <li key={src} className={styles.imageItem}>
            <Image alt="" src={src} width={width} height={height} unoptimized />
          </li>
        ))}
      </ul>
    </Figure>
  );
};
