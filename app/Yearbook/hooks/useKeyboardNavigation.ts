import { useEffect } from "react";

interface Props {
  onPrevious: (() => void) | undefined;
  onNext: (() => void) | undefined;
}

export function useKeyboardNavigation({ onPrevious, onNext }: Props): void {
  useEffect(() => {
    const handleKeydown = ({ key }: KeyboardEvent) => {
      if ("ArrowLeft" === key) {
        onPrevious?.();
      } else if ("ArrowRight" === key) {
        onNext?.();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [onNext, onPrevious]);
}
