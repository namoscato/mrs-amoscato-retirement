"use client";

import clsx from "clsx";
import { Cover } from "../Cover";
import styles from "./Yearbook.module.css";
import { YearbookPage } from "./YearbookPage";
import { YearbookThumbnail } from "./YearbookThumbnail";
import { useActiveIndexState } from "./hooks/useActiveIndexState";
import { Student } from "./utils/studentsFromImageDir";

const STUDENT_SEARCH_PARAM = "student";

interface Props {
  students: Student[];
}

export const Yearbook = ({ students }: Props) => {
  const activeIndex = useActiveIndexState({
    students,
    searchParam: STUDENT_SEARCH_PARAM,
  });

  const activeStudent = students[activeIndex.value];

  return (
    <>
      <div className={clsx({ [styles.inactive ?? ""]: activeStudent })}>
        <Cover />
        <ul className={styles.list}>
          {students.map((student, index) => (
            <YearbookThumbnail
              key={student.id}
              student={student}
              onClick={() => {
                activeIndex.setValue(index);
              }}
            />
          ))}
        </ul>
      </div>
      {!!activeStudent && (
        <YearbookPage
          student={activeStudent}
          onPrevious={activeIndex.previous}
          onNext={activeIndex.next}
          onClose={activeIndex.clear}
        />
      )}
    </>
  );
};
