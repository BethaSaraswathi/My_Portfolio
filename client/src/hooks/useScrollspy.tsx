import { useState, useEffect } from "react";

export function useScrollspy(elementIds: string[], options?: { offset?: number }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = options?.offset || 0;
      const scrollPosition = window.scrollY + offset;

      for (let i = elementIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(elementIds[i]);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveId(elementIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementIds, options?.offset]);

  return activeId;
}
