"use client"
import React, { useState } from "react";
import Image from "next/image";

interface HoverCardProps {
  height?: string
  defaultItemBgClass?: string
  hoveredItemBgImage?: string
  itemRadius?: string
  key: React.Key
  topCaption?: string
}

export default function HoverCard({
  height = '450px',
  defaultItemBgClass = 'bg-coolgray-900',
  itemRadius = '5px',
  key,
  topCaption
}: HoverCardProps) {

  const [hovered, setHovered] = useState<React.Key | null>(null);

  return (
    <div
      key={key}
      className={`min-h-[50px] transition-all duration-300 ease-in-out relative h-[176px] lg:h-[450px] lg:max-h-[450px]
      ${hovered === key ? 'flex-[2/3] lg:flex-[2.5]' : hovered !== null ? 'lg:flex-[0.75]' : 'flex-[1/2] lg:flex-1'} ${defaultItemBgClass}`}
      onMouseEnter={() => setHovered(key)}
      onMouseLeave={() => setHovered(null)}
      onTouchStart={() => setHovered(key)}
      onTouchEnd={() => setHovered(null)}
      onTouchCancel={() => setHovered(null)}
    >
      <div className="text-white absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-between px-14 py-12">        
        <div>
          {
            topCaption && topCaption.length >= 1 ?
              <p >{topCaption}</p>
            :
              null
          }
          Top Section
        </div>

        <div>
          Bottom Section
        </div>
      </div>
      
      <div
        className="w-full h-full overflow-hidden flex items-center justify-center relative"
        style={{ borderRadius: itemRadius, height }}
      >     

        <Image
          src={"/img/item-hover-bg.svg"}
          width={584}
          height={450}
          className={`object-center transition-all duration-300 ease-in-out relative z-0 ${hovered === key ? 'opacity-100 scale-280' : 'opacity-0 scale-[20]'} h-[176px] lg:h-[${height}`}
          alt=""
        />


      </div>
    </div>
  )

}