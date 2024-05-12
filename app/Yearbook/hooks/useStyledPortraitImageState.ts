import { useCallback, useEffect, useState } from "react";

interface Result {
  state: boolean;
  toggleState: () => void;
}

export function useToggleState(resetDependency: string): Result {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(false);
  }, [resetDependency]);

  const toggleState = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (" " === event.key) {
        event.preventDefault();
        toggleState();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [toggleState]);

  return { state, toggleState };
}
