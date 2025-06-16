import { useEffect, RefObject } from "react";

export function useClickedOutsideDetector<T extends HTMLElement>(
  ref: RefObject<T>,
  onOutsideClick: () => void
): void {
  useEffect(() => {
    function handleClick(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, onOutsideClick]);
}
