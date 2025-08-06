
"use client";
import React, { useState } from "react";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMemberCardsGroupProps {
  height?: string;
}

export default function TeamMemberCardsGroup({
  height = "sm:h-[672px] md:h-[793px] lg:h-[450px]",
}: TeamMemberCardsGroupProps) {
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
      className={`
        flex h-[1024px] w-full max-w-[1440px] flex-col 
        lg:flex-row lg:gap-x-2 
        transition-all duration-300 ease-in-out 
        max-lg:gap-y-2 ${height} 
      `}
    >
      <TeamMemberCard
        cardKey={0}
        itemWidth={'lg:w-1/2'}
        itemWidthHover={'lg:w-1/1'}
        itemHeight={'max-lg:h-1/2'}
        itemHeightHover={'max-lg:h-1/1'}
        title="Eric"
        caption="CEO/CTO"
        body="Serial entrepreneur with 30+ years enterprise infrastructure expertise. Leads RHINO’s technology vision, strategic partnerships, and investment initiatives while architecting ISO 27001-aligned global blockchain infrastructure serving institutional clients."
        bodyHoverClassName={"pointer-events-auto h-[130px] opacity-100"}
        bgImage={"/img/profile-eric.png"}
        bgImageHoverClass="scale-100 opacity-100"
        bgImageRestClass="scale-100 opacity-100"
        hovered={hovered}
        setHovered={setHovered}
        touchStart={touchStart}
        setTouchStart={setTouchStart}
        isTap={isTap}

      />

      <TeamMemberCard
        cardKey={1}
        itemWidth={'lg:w-1/2'}
        itemWidthHover={'lg:w-1/1'}
        itemHeight={'max-lg:h-1/2'}
        itemHeightHover={'max-lg:h-1/1'}
        title="Jeff."
        caption="CISO"
        body="30+ year security architect specializing in cryptography and threat detection. Spearheads RHINO’s ISO 27001 certification and enterprise-grade security protocols protecting hundreds of millions in staked assets across mission-critical blockchain infrastructure."
        bodyHoverClassName={"pointer-events-auto h-[130px] opacity-100"}
        bgImage={"/img/profile-jeff.png"}
        bgImageHoverClass="scale-100 opacity-100"
        bgImageRestClass="scale-100 opacity-100"
        hovered={hovered}
        setHovered={setHovered}
        touchStart={touchStart}
        setTouchStart={setTouchStart}
        isTap={isTap}
      />
    </div>
  );
}
