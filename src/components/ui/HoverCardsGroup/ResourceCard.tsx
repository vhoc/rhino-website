"use client";
import React, { useState, useRef, useEffect } from "react";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import useIsIphone from "@/hooks/useIsIphone";
import Image from "next/image";
import gifBg from "@/../public/video/resourcecard-animated-bg-noloop.gif";
import imgResourcesCardPoster from "@/../public/video/hovercard-resources-poster.png"
import Link from "next/link";
import clsx from "clsx";

interface ResourceCardProps {
  defaultItemBgClass?: string;
  itemRadius?: string;
  itemWidth?: string;
  itemWidthHover?: string;
  itemHeight?: string;
  itemHeightHover?: string;
  key: React.Key;
  title?: string;
  icon?: string;
  body?: string | React.ReactNode;
  bodyHoverClassName?: string;
  bgVideo?: string;
  bgVideoPoster?: string;
  bgGif?: string | StaticImport;// For iOS only
  bgImage?: string | StaticImport;// For iOS only
  cta_url?: string;
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
  icon,
  body,
  bodyHoverClassName = "pointer-events-auto h-[80px] opacity-100",
  bgVideo = "/video/resources.webm",
  bgVideoPoster = "/video/hovercard-resources-poster.png",
  bgGif = gifBg,
  bgImage = imgResourcesCardPoster,
  cta_url,
}: ResourceCardProps) {


  const rhinoWhiteFilter = "brightness(0) saturate(100%) invert(100%)";
  const rhinoBlueGrayFilter = "brightness(0) saturate(100%) invert(86%) sepia(7%) saturate(680%) hue-rotate(186deg) brightness(98%) contrast(91%)";


  const isIphone = useIsIphone();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState<React.Key | null>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null,
  );

  console.log("Icon URL in ResourceCard:", icon);

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
  }, [hovered, key])

  return (
    <div
      key={key}
      className={`
        relative min-h-[50px] w-full transition-all duration-300 ease-in-out lg:h-[500px] lg:max-h-[500px] rounded-md
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
          className={`flex flex-col justify-end gap-x-4 sm:flex-row sm:justify-start lg:h-auto lg:flex-col lg:justify-end lg:gap-y-6 `}
        >

          <div
            className={`mt-2 flex flex-col justify-end sm:mt-0 sm:justify-start lg:justify-end `}
          >
            {
              icon ?
                <div
                  className={`relative h-14 min-h-8 w-14 min-w-8 sm:min-h-14 sm:min-w-14`}
                >
                  <Image
                    src={icon}
                    alt={title ?? "Icon"}
                    fill
                    className={clsx(
                      "object-contain object-left-top",
                      "transition-colors duration-300 ease-in-out",
                    )}
                    style={{ filter: hovered === key ? rhinoWhiteFilter : rhinoBlueGrayFilter }}
                  />
                </div>
                :
                null
            }
            <p
              className={clsx(
                `font-calsans mt-4 mb-4 line-clamp-1 min-h-[38px] overflow-hidden text-[28px] text-nowrap transition-none`,
                hovered === key ? "text-white" : "text-coolgray-50",
              )}
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
                    overflow-hidden text-white transition-all duration-300 text-lg 
                    ${hovered === key ? bodyHoverClassName : "pointer-events-none h-0 opacity-0"} 
                  `}
                >
                  {body}
                </p>
                :
                body
            }

            {/* CTA */}
            <div
              className={`
                w-2/3 flex justify-between items-center gap-1 border-b border-solid border-white h-10
                transition-all duration-500 ease-in-out group/link1 px-1.5 
                active:bg-[#DF1A30] active:rounded-t-sm 
                ${hovered === key ? 'opacity-100 h-10 mt-6' : 'opacity-0 h-0! mt-0'}
              `}
            >
              <Link
                href={cta_url ?? "#"}
                className={clsx(
                  "font-calsans text-xl text-white w-full transition-all duration-300 ease-out group-hover/link1:translate-x-[4px]",
                  hovered === key ? "opacity-100 h-10" : "opacity-0 h-0"
                )}
              >
                Read more
              </Link>
              <p
                className={clsx(
                  "font-calsans text-xl text-white font-bold transition-all duration-300 ease-out group-hover/link1:translate-x-[-4px]",
                  hovered === key ? "opacity-100 h-10" : "opacity-0 h-0"
                )}
              >
                &#43;
              </p>
            </div>


          </div>
        </div>
      </div>

      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden"
        style={{ borderRadius: itemRadius }}
      >
        {
          isIphone ?// iOS devices
            hovered === key ?
              <Image
                src={bgGif as StaticImport}
                alt="Background Animation"
                className="relative z-0 h-full w-full object-cover object-center pointer-events-none"
              />
              :
              <Image
                src={bgImage as StaticImport}
                alt="Background"
                className="relative z-0 h-full w-full object-cover object-center pointer-events-none"
              />
            :
            <video
              ref={videoRef}
              className="relative z-0 h-full w-full object-cover object-center pointer-events-none"
              poster={bgVideoPoster}
              src={bgVideo}
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
            />
        }

      </div>
    </div>
  );
}
