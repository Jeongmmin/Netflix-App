import { useEffect } from "react";

export const useCloseOverlay = (ref, handler) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const el = ref?.current;
      if (!el || el.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
};
