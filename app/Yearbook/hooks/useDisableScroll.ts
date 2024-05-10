import { useEffect } from "react";

export function useDisableScroll(): void {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);
}
