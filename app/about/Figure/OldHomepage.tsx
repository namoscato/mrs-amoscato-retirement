import Image from "next/image";
import { Figure } from "./Figure";
import oldHomepageNav from "./images/old_homepage_nav.jpg";
import styles from "./OldHomepage.module.scss";
import { getPublicImages } from "./utils/getPublicImages";

export const OldHomepage = async () => {
  const titleImages = await getPublicImages("images/old-homepage-titles");

  return (
    <Figure
      caption="Original 2006 website layout with themed homepage graphics from 2007-2008"
      bordered
    >
      <div className={styles.root}>
        <div className={styles.title}>
          <ul className={styles.titleImages}>
            {titleImages.map(({ src, width, height }) => (
              <li key={src}>
                <Image
                  alt="Mrs. Karen Amoscato - First Grade"
                  src={src}
                  width={width}
                  height={height}
                  unoptimized
                  className={styles.titleImage}
                />
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={oldHomepageNav}
          alt="Star website navigation"
          width={668}
          unoptimized
          className={styles.navigationImage}
        />
      </div>
    </Figure>
  );
};
