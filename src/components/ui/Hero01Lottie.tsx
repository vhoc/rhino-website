"use client";
import heroAnimation from "@/../public/json/hero01.json";
import Lottie from "lottie-react";

export default function Hero01Lottie() {


  return (
    <Lottie
      animationData={heroAnimation}
      loop={true}
      autoplay={true}
      className="hidden md:block absolute top-0 left-0 w-full h-full object-cover 2xl:object-contain object-top pointer-events-none z-0"
    />
  )
}