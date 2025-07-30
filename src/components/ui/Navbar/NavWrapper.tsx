"use client";
import React, { useEffect, useRef, useState } from "react";

interface NavWrapperProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function NavWrapper({ children }: NavWrapperProps) {
  const [navbarTop, setNavbarTop] = useState("0");
  const prevScrollPos = useRef(0);
  const isBouncing = useRef(false); // New ref to track bounce state

  useEffect(() => {
    prevScrollPos.current = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Handle the Safari bounce effect
      // If currentScrollPos is 0 or very close to 0, and prevScrollPos was also small,
      // it's likely a bounce or at the very top.
      if (currentScrollPos <= 5 && prevScrollPos.current <= 5) {
        isBouncing.current = true;
        setNavbarTop("0"); // Always show navbar at the very top
        prevScrollPos.current = currentScrollPos; // Update for next comparison
        return;
      }

      // Reset bounce state if we've scrolled significantly away from the top
      if (currentScrollPos > 10) {
        isBouncing.current = false;
      }

      // Only hide if not bouncing and scrolling down significantly
      // Introduce a scroll threshold to prevent flickering on small movements
      const scrollDifference = currentScrollPos - prevScrollPos.current;
      const scrollThreshold = 10; // Pixels to scroll before hiding/showing

      if (prevScrollPos.current > currentScrollPos) {
        // Scrolling up
        setNavbarTop("0");
      } else if (
        !isBouncing.current &&
        scrollDifference > scrollThreshold &&
        currentScrollPos > 0
      ) {
        // Scrolling down and not bouncing
        setNavbarTop("-99px");
      }

      prevScrollPos.current = currentScrollPos;
    };

    // Use passive event listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return (
    <div
      className={"fixed z-50 top-0 w-full flex justify-center items-center bg-white px-6 h-[70px] transition-all duration-300 ease-in-out sm:px-14 lg:px-[94px] xl:px-[94px]"}
      style={{
        top: navbarTop,
      }}
    >
      {children}
    </div>
  );
}