import { shuffle } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Student } from "../utils/studentsFromImageDir";

interface Props {
  students: Student[];
  searchParam: string;
}

interface Result {
  value: number;
  setValue: (value: number) => void;
  student: Student | undefined;
  previous: () => void;
  next: () => void;
  shuffle: () => void;
  reset: () => void;
}

export function useActiveIndexState(props: Props): Result {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [students, setStudents] = useState(props.students);

  const [index, setIndex] = useState(() =>
    students.findIndex(({ id }) => id === searchParams.get(props.searchParam)),
  );
  const setValue = useCallback(
    (value: number) => {
      setIndex(value);

      const studentId = students[value]?.id;
      router.replace(studentId ? `?${props.searchParam}=${studentId}` : "/", {
        scroll: false,
      });
    },
    [router, props.searchParam, students],
  );

  const previous = useCallback(() => {
    if (index <= 0) {
      setValue(students.length - 1);
    } else {
      setValue(index - 1);
    }
  }, [index, setValue, students.length]);

  const max = students.length;
  const next = useCallback(() => {
    if (index >= max - 1) {
      setValue(0);
    } else {
      setValue(index + 1);
    }
  }, [index, max, setValue]);

  const shuffleStudents = useCallback(() => {
    setStudents(shuffle(props.students));
  }, [props.students]);

  const reset = useCallback(() => {
    setValue(-1);
    setStudents(props.students);
  }, [props.students, setValue]);

  return {
    value: index,
    setValue,
    student: students[index],
    previous,
    next,
    shuffle: shuffleStudents,
    reset: reset,
  };
}
