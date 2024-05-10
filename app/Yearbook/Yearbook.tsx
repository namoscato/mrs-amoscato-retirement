"use client";

import clsx from "clsx";
import { Suspense } from "react";
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
  return (
    <Suspense
      fallback={
        <YearbookStaticContent
          students={students}
          setActiveIndex={undefined}
          isInactive={false}
        />
      }
    >
      <YearbookRender students={students} />
    </Suspense>
  );
};

const YearbookRender = ({ students }: Props) => {
  const activeIndex = useActiveIndexState({
    students,
    searchParam: STUDENT_SEARCH_PARAM,
  });

  const activeStudent = students[activeIndex.value];

  return (
    <>
      <YearbookStaticContent
        students={students}
        setActiveIndex={activeIndex.setValue}
        isInactive={!!activeStudent}
      />
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

interface StaticContentProps extends Props {
  setActiveIndex: ((index: number) => void) | undefined;
  isInactive: boolean;
}

const YearbookStaticContent = ({
  students,
  setActiveIndex,
  isInactive,
}: StaticContentProps) => {
  return (
    <div className={clsx({ [styles.inactive ?? ""]: isInactive })}>
      <Cover />
      <ul className={styles.list}>
        {students.map((student, index) => (
          <YearbookThumbnail
            key={student.id}
            student={student}
            onClick={setActiveIndex ? () => setActiveIndex(index) : undefined}
          />
        ))}
      </ul>
    </div>
  );
};
