import Image from "next/image";
import { Figure } from "./Figure";
import homepageImage from "./images/redesign_homepage.png";
import styles from "./RedesignHomepage.module.scss";

export const RedesignHomepage = () => {
  return (
    <Figure caption="Homepage graphics from 2010 redesign" fullWidth>
      <div className={styles.root}>
        <Image
          src={homepageImage}
          alt="Mrs. Amoscato's Website Homepage"
          unoptimized
          className={styles.image}
        />
      </div>
    </Figure>
  );
};
