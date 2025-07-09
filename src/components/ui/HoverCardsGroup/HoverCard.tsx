"use client"
import React, { useState } from "react";
import Image from "next/image";

interface HoverCardProps {
  defaultItemBgClass?: string
  hoveredItemBgImage?: string
  itemRadius?: string
  key: React.Key
  topCaption?: string
  icon: string
  icon_hover: string
  title?: string
  subtitle?: string
  body?: string
}

export default function HoverCard({
  defaultItemBgClass = 'bg-coolgray-900',
  itemRadius = '5px',
  key,
  topCaption,
  icon,
  icon_hover,
  title,
  subtitle,
  body,
}: HoverCardProps) {

  const [hovered, setHovered] = useState<React.Key | null>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  // Helper to determine if touch is a tap or a swipe
  const isTap = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const dx = Math.abs(start.x - end.x);
    const dy = Math.abs(start.y - end.y);
    return dx < 10 && dy < 10; // 10px threshold
  };

  return (
    <div
      key={key}
      className={
        `min-h-[50px] transition-all duration-300 ease-in-out relative lg:h-[450px] w-full
        lg:max-h-[450px] 
        ${hovered === key ? 'max-lg:h-1/2' : 'max-lg:h-1/4'}
        ${hovered === key ? 'lg:w-1/2' : 'lg:w-1/4'}
        ${defaultItemBgClass}
        `
      }
      onMouseEnter={() => setHovered(key)}
      onMouseLeave={() => setHovered(null)}
      onTouchStart={e => {
        if (e.touches.length === 1 && e.touches[0]) {
          setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        }
      }}
      onTouchEnd={e => {
        if (touchStart && e.changedTouches.length === 1 && e.changedTouches[0]) {
          const end = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
          if (isTap(touchStart, end)) {
            setHovered(hovered === key ? null : key);
          }
        }
        setTouchStart(null);
      }}
    >
      <div className="text-white absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-between px-14 py-12">
        <div>
          {
            topCaption && topCaption.length >= 1 ?
              <p >{topCaption}</p>
              :
              null
          }
        </div>

        <div>

          {// ICON
            icon && icon.length >= 1 ?
              <div className="w-14 h-14 relative mb-8">
                <Image
                  src={ hovered === key ? icon_hover : icon }
                  alt={title ?? "Icon"}
                  fill
                  className="object-contain object-left-top"
                />
              </div>
              :
              null
          }


          <p className="font-calsans text-xl text-white mb-4">{title}</p>

          <p className="min-h-[84px] text-lg text-white mb-4 font-medium line-clamp-3" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {subtitle}
          </p>

          <p className={`text-white transition-all duration-300 ${ hovered === key ? 'block opacity-100' : 'opacity-0 hidden' }`}>
            {body}
          </p>
        </div>
      </div>

      <div
        className="w-full h-full overflow-hidden flex items-center justify-center relative"
        style={{ borderRadius: itemRadius }}
      >

        <Image
          src={"/img/item-hover-bg.svg"}
          width={584}
          height={450}
          className={
            `object-center transition-all duration-300 ease-in-out relative z-0 
            ${hovered === key ? 'opacity-100 scale-280' : 'opacity-0 scale-[20]'} `
          }
          alt=""
        />


      </div>
    </div >
  )

}