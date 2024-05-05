import Image from "next/image";
import muralImage from "../../public/images/amoscato_mural.png";
import styles from "./Cover.module.css";
import { PickllleHeading } from "../PickllleHeading";

export const Cover = () => {
  return (
    <header className={styles.root}>
      <div className={styles.content}>
        <div>
          <PickllleHeading
            component="h1"
            cutout={250}
            jumble={200}
            stagger={200}
            className={styles.title}
          >
            Teacher,
            <br className={styles.titleTeacherBr} />
            Teacher,
            <br />
            What do you see?
          </PickllleHeading>
          <PickllleHeading
            component="h2"
            cutout={150}
            jumble={150}
            stagger={150}
            className={styles.subtitle}
          >
            Mrs. Karen Amoscato&lsquo;s education legacy
          </PickllleHeading>
        </div>
        <Image
          src={muralImage}
          alt="Mrs. Amoscato and student mural painting"
          priority
          className={styles.muralImage}
        />
      </div>
    </header>
  );
};
