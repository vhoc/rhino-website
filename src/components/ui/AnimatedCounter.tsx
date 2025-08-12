"use client";
import { useState, useEffect, useRef } from "react"
import { useInView } from "@/hooks/useInView"

interface AnimatedCounterProps {
  title?: string;
  amount: number;
  currency_sign?: string;
  className?: string
}

export default function AnimatedCounter({
  title,
  amount,
  currency_sign,
  className
}: AnimatedCounterProps) {
  const [animatedAmount, setAnimatedAmount] = useState<number>(0)
  const [ref, inView] = useInView<HTMLDivElement>()
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 1600; // ms
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = Math.min(frame / totalFrames, 1);
        setAnimatedAmount(Math.floor(progress * amount));
        if (progress === 1) clearInterval(counter);
      }, frameRate);
      return () => clearInterval(counter);
    }
  }, [inView, amount]);

  return (
    <div
      ref={ref}
      className={`flex w-full flex-col items-center justify-between lg:items-start gap-y-6  ${className}`}
    >
      <p className={`font-calsans text-coolgray-900 text-center lg:text-left text-xl`}>
        {title}
      </p>

      <div className={`font-calsans text-coolgray-900 text-center lg:text-left text-[32px] lg:text-[40px] xl:text-[52px] 2xl:text-[56px]`}>
        {`${currency_sign ?? ""}${animatedAmount.toLocaleString()}`}
      </div>
    </div>
  )
}
