import { useState, useEffect } from "react";

export function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth)
    };

    window.addEventListener("resize", handleResize);

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, []);

  return viewportWidth;
}