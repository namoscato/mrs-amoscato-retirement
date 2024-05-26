/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { PickllleHeading } from "../PickllleHeading";
import { StyleSourceSummary } from "../Yearbook/StyleSourceSummary";
import { schoolYearFromYear } from "../utils/schoolYearFromYear";
import styles from "./TimelineYear.module.scss";
import { SchoolYear } from "./utils/schoolYears";
import { styleNameSourceMap } from "./utils/styleNameSourceMap";

interface Props {
  number: number;
  schoolYear: SchoolYear;
  imagePriority?: boolean;
}

export const TimelineYear = ({
  number,
  schoolYear: { year, role, school, styleImage },
  imagePriority,
}: Props) => {
  const styleName = styleImage.name;
  const style = styleNameSourceMap[styleName];

  return (
    <figure className={styles.figure}>
      <Image
        src={styleImage.src}
        alt={style.title}
        className={styles.figureImage}
        width={styleImage.width}
        height={styleImage.height}
        priority={imagePriority}
      />
      <figcaption className={styles.figureCaption}>
        <PickllleHeading component="h1">
          Year {number} / {schoolYearFromYear(year)}
        </PickllleHeading>
        <PickllleHeading component="h2">
          {role}, {school}
        </PickllleHeading>
        <p>
          from <StyleSourceSummary name={styleName} />
        </p>
      </figcaption>
    </figure>
  );
};
