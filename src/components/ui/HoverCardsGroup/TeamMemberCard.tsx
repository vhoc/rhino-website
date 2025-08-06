"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface TeamMemberCardProps {
  defaultItemBgClass?: string;
  itemRadius?: string;
  itemWidth?: string;
  itemWidthHover?: string;
  itemHeight?: string;
  itemHeightHover?: string;
  cardKey: React.Key;
  title?: string;
  caption?: string;
  body?: string | React.ReactNode;
  bodyHoverClassName?: string;
  bgImage?: string;
  bgImageHoverClass?: string
  bgImageRestClass?: string
  hovered: React.Key | null;
  setHovered: React.Dispatch<React.SetStateAction<React.Key | null>>;
  touchStart: { x: number; y: number } | null;
  setTouchStart: React.Dispatch<React.SetStateAction<{ x: number; y: number } | null>>;
  isTap: (start: { x: number; y: number }, end: { x: number; y: number }) => boolean;
}

export default function TeamMemberCard({
  defaultItemBgClass = "bg-coolgray-900",
  itemRadius = "5px",
  itemWidth = "lg:w-1/4",
  itemWidthHover = "lg:w-1/2",
  itemHeight = "max-lg:h-1/4",
  itemHeightHover = "max-lg:h-1/2",
  cardKey,
  title,
  caption,
  body,
  bodyHoverClassName = "pointer-events-auto h-[80px] opacity-100",
  bgImage = "/img/item-hover-bg.svg",
  bgImageHoverClass = "scale-280 opacity-100",
  bgImageRestClass = "scale-[20] opacity-0",
  hovered,
  setHovered,
  touchStart,
  setTouchStart,
  isTap
}: TeamMemberCardProps) {

  return (
    <div
      className={`
        relative min-h-[50px] w-full transition-all duration-300 ease-in-out lg:h-[450px] lg:max-h-[450px] rounded-md
        ${hovered === cardKey ? itemHeightHover : itemHeight} 
        ${hovered === cardKey ? itemWidthHover : itemWidth} 
        ${defaultItemBgClass}
      `}
      onMouseEnter={() => setHovered(cardKey)}
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
            setHovered(hovered === cardKey ? null : cardKey);
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
              className={`font-calsans line-clamp-1 min-h-[38px] overflow-hidden text-3xl text-nowrap text-white`}
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

            <p className="font-calsans text-xl text-white mt-1">
              {caption}
            </p>

            {
              typeof body === "string" ?
                <p
                  className={` mt-3.5
                overflow-hidden text-white transition-all duration-300 
                ${hovered === cardKey ? bodyHoverClassName : "pointer-events-none h-0 opacity-0"} 
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
          className={clsx(
            "object-center transition-all duration-700 ease-in-out object-cover",
            "min-w-[454px] min-h-[408px]",
            hovered === cardKey ? bgImageHoverClass : bgImageRestClass,
            // hovered !== null && hovered !== cardKey ? "translate-x-[-15%]" : "translate-x-0"
            hovered !== null ?
              hovered !== cardKey ?
                hovered === 0 ?
                  "translate-x-[20%]"
                  :
                  "translate-x-[-20%]"
                :
                "translate-x-0"
              :
              "translate-x-0"
          )}
          alt=""
        />
      </div>
    </div>
  );
}
