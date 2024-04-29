import { useCallback, useMemo, useState } from "react";

interface Props {
  max: number;
}

interface Result {
  value: number;
  setValue: (value: number) => void;
  previous: (() => void) | undefined;
  next: (() => void) | undefined;
  clear: () => void;
}

export function useActiveIndexState({ max }: Props): Result {
  const [value, setValue] = useState(-1);

  const previous = useMemo(() => {
    if (value <= 0) {
      return;
    }

    return () => {
      setValue(value - 1);
    };
  }, [value]);

  const next = useMemo(() => {
    if (value >= max - 1) {
      return;
    }

    return () => {
      setValue(value + 1);
    };
  }, [value, max]);

  const clear = useCallback(() => {
    setValue(-1);
  }, []);

  return {
    value,
    setValue,
    previous,
    next,
    clear,
  };
}
