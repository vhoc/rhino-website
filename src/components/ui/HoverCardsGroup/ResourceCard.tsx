"use client";
import React, { useState, useRef, useEffect } from "react";

interface ResourceCardProps {
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
  bgVideo?: string;
}

export default function ResourceCard({
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
  bgVideo = "/video/resources.webm",
}: ResourceCardProps) {

  const videoRef = useRef<HTMLVideoElement>(null);
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

  // Control the video playback based on hover state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (hovered === key) {
      void video.play()
    } else {
      void video.pause()
      video.currentTime = 0; // Reset video to start
    }
  }, [hovered])

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
        className="relative flex h-full w-full items-center justify-center overflow-hidden"
        style={{ borderRadius: itemRadius }}
      >
        <video
          ref={videoRef}
          className="relative z-0 h-full w-full object-cover object-center pointer-events-none"
          src={bgVideo}
          muted
          preload="auto"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
