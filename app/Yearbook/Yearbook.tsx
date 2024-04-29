"use client";

import clsx from "clsx";
import styles from "./Yearbook.module.css";
import { YearbookPage } from "./YearbookPage";
import { YearbookThumbnail } from "./YearbookThumbnail";
import { useActiveIndexState } from "./hooks/useActiveIndexState";
import { Student } from "./utils/studentsFromImageDir";

interface Props {
  students: Student[];
}

export const Yearbook = ({ students }: Props) => {
  const activeIndex = useActiveIndexState({ max: students.length });
  const activeStudent = students[activeIndex.value];

  return (
    <>
      <ul
        className={clsx(styles.list, {
          [styles.listInactive ?? ""]: activeStudent,
        })}
      >
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
