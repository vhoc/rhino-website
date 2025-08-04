import { useEffect, useState } from "react";

/**
 * Custom hook to detect if the device is mobile or touch-enabled (phones, tablets, iPads, etc.)
 */
export default function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Check for touch support
      const hasTouch =
        typeof window !== "undefined" &&
        ("ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          // @ts-expect-error: msMaxTouchPoints is not standard but used by IE
          navigator.msMaxTouchPoints > 0);

      // Check user agent for mobile devices
      const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet|Windows Phone/i.test(ua);

      setIsMobile(hasTouch || isMobileUA);
    };

    checkMobile();
  }, []);

  return isMobile;
}
