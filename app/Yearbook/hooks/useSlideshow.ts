import { useEffect, useState } from "react";

const DELAY_MS = 7_000;

interface Props {
  onNext: () => void;
}

interface Result {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
}

export function useSlideshow({ onNext }: Props): Result {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const timeoutId = setTimeout(() => {
      onNext();
    }, DELAY_MS);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPlaying, onNext]);

  return {
    isPlaying,
    setIsPlaying,
  };
}
