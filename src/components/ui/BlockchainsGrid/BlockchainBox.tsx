"use client";
import { type INetwork } from "@/util/types";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import useIsMobile from "@/hooks/useIsMobile";

interface BlockchainBoxProps extends Omit<INetwork, "id" | "slug" | "active" | "weight"> {
  className?: string
}

export default function BlockchainBox({
  logo, name, blockchainurl, stakeurl, className
}: BlockchainBoxProps) {

  const isMobile = useIsMobile();// We don't want to toggle the hover state with hover action on mobile devices
  const [hovered, setHovered] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; } | null>(null)

  // Helper to determine if touch is a tap or a swipe
  const isTap = (
    start: { x: number; y: number },
    end: { x: number; y: number },
  ) => {
    const dx = Math.abs(start.x - end.x);
    const dy = Math.abs(start.y - end.y);
    return dx < 10 && dy < 10; // 10px threshold
  };

  return (
    <div
      className={`
          relative aspect-[304/148] min-w-[304px] min-h-[148px] px-6 py-4 rounded-[5px] 
          ${hovered ? 'bg-[#FF233B]' : 'bg-coolgray-800'} 
          transition-all 
          flex flex-col justify-center items-center 
          group 
          ${className ?? ""}
      `}
      onMouseEnter={() => {
        if (!isMobile) {
          setHovered(true);
          setShowButtons(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setHovered(false);
          setShowButtons(false);
        }
      }}
      onTouchStart={(e) => {
        if (e.touches.length === 1 && e.touches[0]) {
          setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        }
      }}
      onTouchEnd={(e) => {
        if (
          touchStart &&
          e.changedTouches.length === 1 &&
          e.changedTouches[0]
        ) {
          // If the tap is on a link or button, do not toggle hovered state
          const target = e.target as HTMLElement;
          if (target.closest('a,button')) {
            setTouchStart(null);
            return;
          }
          const end = {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY,
          };
          if (isTap(touchStart, end)) {
            if (!hovered) {
              setHovered(true);
              setTimeout(() => setShowButtons(true), 120);
            } else {
              setHovered(false);
              setShowButtons(false);
            }
          }
        }
        setTouchStart(null);
      }}
    >

      {/* ICON */}
      <div
        className={clsx(
          "absolute top-1/3 w-full max-h-10 max-w-3/4 flex justify-center transition-all duration-500 ease-in-out h-14 ",
          hovered ? "opacity-0" : "opacity-100"
        )}
      >
        <Image
          src={logo!.url}
          fill
          className={`
            object-contain object-center-top transition-all duration-300 ease-in-out 
          `}
          alt={name}
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      {/* BUTTONS */}
      {
        showButtons ?
          <div
            className={clsx(
              "absolute top-0 flex flex-col gap-2 items-center justify-center w-full h-full transition-all duration-500 ease-in-out py-8 px-6 z-0",
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          >
            <div
              className={`
                w-full flex justify-between items-center gap-1 border-b border-solid border-white h-10
                transition-all duration-500 ease-in-out group/link1 px-1.5
                active:bg-[#DF1A30] active:rounded-t-sm 
                ${hovered ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              `}
            >
              <Link href={blockchainurl ?? "#"} className="font-calsans text-xl text-white w-full transition-all duration-300 ease-out group-hover/link1:translate-x-[4px]" target="_blank">
                {name}
              </Link>
              <p
                className={"font-calsans text-xl text-white font-bold transition-all duration-300 ease-out group-hover/link1:translate-x-[-4px]"}
              >
                &#43;
              </p>
            </div>



            {
              stakeurl && stakeurl.length >= 1 ?
                <div
                  className={`
              w-full flex justify-between items-center gap-1 border-b border-solid border-white h-10
              transition-all duration-500 ease-in-out group/link2 px-1.5
              active:bg-[#DF1A30] active:rounded-t-sm 
              ${hovered ? 'opacity-100' : 'opacity-0'}
            `}
                >
                  <Link href={stakeurl ?? "#"} className="font-calsans text-xl text-white w-full transition-all duration-300 ease-out group-hover/link2:translate-x-[4px]" target="_blank">
                    Stake Now
                  </Link>
                  <p
                    className={"font-calsans text-xl text-white font-bold transition-all duration-300 ease-out group-hover/link2:translate-x-[-4px]"}
                  >
                    &#43;
                  </p>
                </div>
                :
                null
            }

          </div>
          :
          null
      }


    </div>
  )
}