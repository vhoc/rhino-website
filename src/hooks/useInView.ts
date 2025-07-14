import { useRef, useState, useEffect } from "react";

/**
 * useInView - React hook to detect when an element enters the viewport using Intersection Observer.
 *
 * @template T - The type of the element to observe (extends HTMLElement).
 * @param {Object} [options] - IntersectionObserver options (optional).
 * @param {number} [options.threshold=0.1] - Percentage of element visibility to trigger inView (0-1).
 * @returns {[React.RefObject<T>, boolean]} - A tuple: [ref, inView]. Attach ref to the element to observe.
 *
 * Usage:
 *   const [ref, inView] = useInView<HTMLDivElement>();
 *   <div ref={ref}> ... </div>
 */
export function useInView<T extends HTMLElement>(options?: { threshold?: number }): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: options?.threshold ?? 0.1 }
    );
    observer.observe(ref.current as T);
    return () => observer.disconnect();
  }, [options?.threshold]);

  return [ref, inView];
} 