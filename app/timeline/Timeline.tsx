import { Navigation } from "../Navigation";
import styles from "./Timeline.module.scss";
import { TimelineYear } from "./TimelineYear";
import { SCHOOL_YEARS } from "./utils/schoolYears";

export const Timeline = () => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Navigation />
        <h1 className={styles.headerTitle}>
          32 years of imagining, creating, and learning.
        </h1>
      </header>
      <ul className={styles.list}>
        {SCHOOL_YEARS.slice()
          .reverse()
          .map((schoolYear, index) => (
            <li key={schoolYear.year}>
              <TimelineYear
                number={SCHOOL_YEARS.length - index}
                schoolYear={schoolYear}
                imagePriority={index < 2}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
