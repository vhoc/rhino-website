"use client";
import React, { useState } from "react";
import Image from "next/image";

interface TeamMemberCardProps {
  defaultItemBgClass?: string;
  itemRadius?: string;
  itemWidth?: string;
  itemWidthHover?: string;
  itemHeight?: string;
  itemHeightHover?: string;
  key: React.Key;
  title?: string;
  body?: string | React.ReactNode;
  bodyHoverClassName?: string;
  bgImage?: string;
  bgImageHoverClass?: string
  bgImageRestClass?: string
}

export default function TeamMemberCard({
  defaultItemBgClass = "bg-coolgray-900",
  itemRadius = "5px",
  itemWidth = "lg:w-1/4",
  itemWidthHover = "lg:w-1/2",
  itemHeight = "max-lg:h-1/4",
  itemHeightHover = "max-lg:h-1/2",
  key,
  title,
  body,
  bodyHoverClassName = "pointer-events-auto h-[80px] opacity-100",
  bgImage = "/img/item-hover-bg.svg",
  bgImageHoverClass = "scale-280 opacity-100",
  bgImageRestClass = "scale-[20] opacity-0"
}: TeamMemberCardProps) {
  const [hovered, setHovered] = useState<React.Key | null>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null,
  );

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
      key={key}
      className={`
        relative min-h-[50px] w-full transition-all duration-300 ease-in-out lg:h-[450px] lg:max-h-[450px] rounded-md
        ${hovered === key ? itemHeightHover : itemHeight} 
        ${hovered === key ? itemWidthHover : itemWidth} 
        ${defaultItemBgClass}
      `}
      onMouseEnter={() => setHovered(key)}
      onMouseLeave={() => setHovered(null)}
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
          const end = {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY,
          };
          if (isTap(touchStart, end)) {
            setHovered(hovered === key ? null : key);
          }
        }
        setTouchStart(null);
      }}
    >
      <div
        className={`absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-end px-8 py-8 text-white md:px-14 md:py-12`}
      >

        <div
          className={`flex h-full flex-col justify-end gap-x-4 sm:flex-row sm:justify-start lg:h-auto lg:flex-col lg:justify-end lg:gap-y-6 `}
        >

          <div
            className={`mt-2 flex h-full flex-col justify-end sm:mt-0 sm:justify-start lg:justify-end `}
          >
            <p
              className={`font-calsans mb-4 line-clamp-1 min-h-[38px] overflow-hidden text-3xl text-nowrap text-white`}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </p>

            {
              typeof body === "string" ?
                <p
                  className={`
                overflow-hidden text-white transition-all duration-300 
                ${hovered === key ? bodyHoverClassName : "pointer-events-none h-0 opacity-0"} 
              `}
                >
                  {body}
                </p>
                :
                body
            }


          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 flex-shrink-0 flex items-center justify-center overflow-hidden"
        style={{ borderRadius: itemRadius }}
      >
        <Image
          src={bgImage}
          width={454}
          height={408}
          className={`
            object-center transition-all duration-700 ease-in-out object-cover 
            min-w-[454px] min-h-[408px]
            ${hovered === key ? bgImageHoverClass : bgImageRestClass} 
          `}
          alt=""
        />
      </div>
    </div>
  );
}
