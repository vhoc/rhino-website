// Custom hook to detect any kind of iPhone device
import { useEffect, useState } from "react";

export default function useIsIphone(): boolean {
  const [isIphone, setIsIphone] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera || "";
    if (/iPhone/i.test(ua)) {
      setIsIphone(true);
      return;
    }
    if (/Macintosh/i.test(ua) && 'ontouchend' in document) {
      setIsIphone(false); // iPad, not iPhone
      return;
    }
    setIsIphone(false);
  }, []);
  return isIphone;
}