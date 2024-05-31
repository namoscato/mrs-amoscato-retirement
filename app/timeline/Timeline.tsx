import { PageLayout } from "../PageLayout";
import styles from "./Timeline.module.scss";
import { TimelineYear } from "./TimelineYear";
import { SCHOOL_YEARS } from "./utils/schoolYears";

export const Timeline = () => {
  return (
    <PageLayout title="32 years of imagining, creating, and learning.">
      <ul className={styles.root}>
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
    </PageLayout>
  );
};
