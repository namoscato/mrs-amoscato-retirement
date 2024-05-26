/* eslint-disable @next/next/no-img-element */

import { PickllleHeading } from "../PickllleHeading";
import { StyleSourceSummary } from "../Yearbook/StyleSourceSummary";
import { styleNameSourceMap } from "../Yearbook/utils/styleNameSourceMap";
import { schoolYearFromYear } from "../utils/schoolYearFromYear";
import styles from "./TimelineYear.module.scss";
import { SchoolYear } from "./utils/schoolYears";

interface Props {
  number: number;
  schoolYear: SchoolYear;
}

export const TimelineYear = ({ number, schoolYear }: Props) => {
  const style = styleNameSourceMap[schoolYear.styleName];
  const src = `/images/styles/${schoolYear.styleName}.jpg`;

  return (
    <li>
      <figure className={styles.figure}>
        <img src={src} alt={style.title} className={styles.figureImage} />
        <figcaption className={styles.figureCaption}>
          <PickllleHeading component="h1">
            Year {number} / {schoolYearFromYear(schoolYear.year)}
          </PickllleHeading>
          <PickllleHeading component="h2">
            {schoolYear.role}, {schoolYear.school}
          </PickllleHeading>
          <p>
            from <StyleSourceSummary name={schoolYear.styleName} />
          </p>
        </figcaption>
      </figure>
    </li>
  );
};
