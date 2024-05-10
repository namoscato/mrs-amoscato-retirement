import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { Student } from "../utils/studentsFromImageDir";

interface Props {
  students: Pick<Student, "id">[];
  searchParam: string;
}

interface Result {
  value: number;
  setValue: (value: number) => void;
  previous: (() => void) | undefined;
  next: (() => void) | undefined;
  clear: () => void;
}

export function useActiveIndexState({ students, searchParam }: Props): Result {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [index, setIndex] = useState(() =>
    students.findIndex(({ id }) => id === searchParams.get(searchParam)),
  );
  const setValue = useCallback(
    (value: number) => {
      setIndex(value);

      const studentId = students[value]?.id;
      router.replace(studentId ? `?${searchParam}=${studentId}` : "/");
    },
    [router, searchParam, students],
  );

  const previous = useMemo(() => {
    if (index <= 0) {
      return;
    }

    return () => {
      setValue(index - 1);
    };
  }, [index, setValue]);

  const max = students.length;
  const next = useMemo(() => {
    if (index >= max - 1) {
      return;
    }

    return () => {
      setValue(index + 1);
    };
  }, [index, max, setValue]);

  const clear = useCallback(() => {
    setValue(-1);
  }, [setValue]);

  return {
    value: index,
    setValue,
    previous,
    next,
    clear,
  };
}
