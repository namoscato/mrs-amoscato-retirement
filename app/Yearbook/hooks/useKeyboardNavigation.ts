import { useEffect } from "react";

interface Props {
  onPrevious: () => void;
  onNext: () => void;
  onClose: () => void;
}

export function useKeyboardNavigation({
  onPrevious,
  onNext,
  onClose,
}: Props): void {
  useEffect(() => {
    const handleKeydown = ({ key }: KeyboardEvent) => {
      switch (key) {
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "Escape":
          onClose();
          break;
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose, onNext, onPrevious]);
}
