/* eslint-disable @next/next/no-img-element */

import { StyleSourceSummary } from "./StyleSourceSummary";
import styles from "./YearbookPage.module.scss";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
import { schoolYearFromYear } from "./utils/schoolYearFromYear";
import { Student } from "./utils/studentsFromImageDir";

interface Props {
  student: Student;
  onPrevious: (() => void) | undefined;
  onNext: (() => void) | undefined;
  onClose: () => void;
}

export const YearbookPage = ({
  student,
  onPrevious,
  onNext,
  onClose,
}: Props) => {
  useKeyboardNavigation({ onNext, onPrevious });

  return (
    <div className={styles.root} onClick={onClose}>
      <img
        className={styles.backgroundImage}
        src={student.portraitImage.styledSrc}
        alt="Blurred background accent"
      />
      <div className={styles.container}>
        <figure className={styles.figure}>
          <img
            className={styles.portraitImage}
            src={student.portraitImage.src}
            alt="Student portrait"
          />
          <figcaption className={styles.figcaption}>
            <img
              className={styles.styledPortraitImage}
              src={student.portraitImage.styledSrc}
              alt="Styled student head shot"
            />
            <div className={styles.caption}>
              <h2>Franklin Elementary School</h2>
              <h1>{schoolYearFromYear(student.year)} School Year</h1>
              <p>
                styled via <StyleSourceSummary name={student.styleImage.name} />
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
