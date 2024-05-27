import Image from "next/image";
import styles from "./YearbookThumbnail.module.scss";
import { schoolYearFromYear } from "../utils/schoolYearFromYear";
import { Student } from "./utils/studentsFromImageDir";

interface Props {
  student: Student;
  onClick: (() => void) | undefined;
}

export const YearbookThumbnail = ({ student, onClick }: Props) => {
  const alt = `${schoolYearFromYear(student.year)} styled head shot`;

  return (
    <li className={styles.root} key={student.id}>
      <button className={styles.button} onClick={onClick} disabled={!onClick}>
        <Image
          src={student.portraitImage.styledSrc}
          alt={alt}
          className={styles.image}
          width={256}
          height={256}
          unoptimized
        />
      </button>
    </li>
  );
};
