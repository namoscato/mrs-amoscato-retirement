import Image from "next/image";
import { Figure } from "./Figure";
import clickHereImage from "./images/old_tribute_click_here.jpg";
import headerImage from "./images/old_tribute_header.jpg";
import styles from "./OldTribute.module.scss";

export const OldTribute = () => {
  return (
    <Figure caption="Graphics from 2007-2008 tribute splash page" fullWidth>
      <div className={styles.root}>
        <Image
          src={headerImage}
          alt="A tribute to Mrs. Amoscato's 1B"
          unoptimized
        />
        <div className={styles.content}>
          <Image
            src={clickHereImage}
            alt="Click here"
            unoptimized
            className={styles.clickHere}
          />
          <iframe
            width="600"
            height="450"
            src="https://www.youtube-nocookie.com/embed/yV6TZcIlP54"
            title="YouTube video player"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={styles.video}
          />
        </div>
      </div>
    </Figure>
  );
};
