"use client";

import clsx from "clsx";
import { Suspense, useCallback } from "react";
import { Cover } from "../Cover";
import { Navigation } from "../Navigation";
import styles from "./Yearbook.module.css";
import { YearbookPage } from "./YearbookPage";
import { YearbookThumbnail } from "./YearbookThumbnail";
import { useActiveIndexState } from "./hooks/useActiveIndexState";
import { useSlideshow } from "./hooks/useSlideshow";
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
  const { setValue, student, previous, next, reset, shuffle } =
    useActiveIndexState({
      students,
      searchParam: STUDENT_SEARCH_PARAM,
    });

  const { isPlaying, setIsPlaying } = useSlideshow({
    onNext: next,
  });

  const toggleSlideshow = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      shuffle();
      setIsPlaying(true);
    }
  };

  const close = useCallback(() => {
    reset();
    setIsPlaying(false);
  }, [reset, setIsPlaying]);

  return (
    <>
      <YearbookStaticContent
        students={students}
        setActiveIndex={setValue}
        isInactive={!!student}
      />
      {!!student && (
        <YearbookPage
          student={student}
          onPrevious={previous}
          onNext={next}
          onClose={close}
          isPlayingSlideshow={isPlaying}
          onToggleSlideshow={toggleSlideshow}
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
      <header>
        <Navigation className={styles.navigation} />
        <Cover />
      </header>
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
