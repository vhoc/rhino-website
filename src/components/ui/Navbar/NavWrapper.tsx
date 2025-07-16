"use client"
import React, { useEffect, useRef, useState } from "react"

interface NavWrapperProps {
  children: React.ReactNode | React.ReactNode[]
}

export default function NavWrapper({ children }: NavWrapperProps) {
  const [navbarTop, setNavbarTop] = useState("0");
  const prevScrollPos = useRef(0);

  useEffect(() => {
    prevScrollPos.current = window.pageYOffset

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos.current > currentScrollPos) {
        setNavbarTop("0");
      } else {
        setNavbarTop("-93px");
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div
      className={`fixed z-50 top-0 w-full transition-all duration-300 flex justify-center bg-white`}
      style={{
        top: navbarTop,
      }}
    >
      {children}
    </div>
  )
}