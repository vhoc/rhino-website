import clsx from "clsx"

interface HeroSectionProps {
  caption?: string
  heading?: string
  bgVideo?: string
  bgVideoPoster?: string
  excertp?: string
  excertpClassName?: string
  className?: string
}

export default function HeroSection({
  caption,
  heading,
  bgVideo,
  bgVideoPoster = "/video/hero02-poster.png",
  excertp,
  excertpClassName,
  className,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className={clsx(` relative z-10 
        flex flex-col items-center 
        w-full 
        px-6 sm:px-14 lg:px-[94px] xl:px-[94px] 
        ${className}
      `)}
    >
      {/* Background Video */}
      <video
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover 2xl:object-contain object-top pointer-events-none z-0 "
        src={bgVideo}
        poster={bgVideoPoster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />


      <div
        className={` relative z-10
          container flex flex-col items-center justify-center 
          max-w-7xl w-full 
          pt-10 pb-10 md:pt-[120px] md:pb-[108px] 
        `}
      >

        {/* TOP CAPTION */}
        <p className="
          font-calsans text-lg text-coolgray-500 text-center font-normal 
          md:text-xl md:font-medium 
          max-w-3xl 
        ">
          {caption}
        </p>

        <hr className="h-8" />

        <h1
          className="
            font-calsans text-coolgray-900 text-[40px] leading-[120%] text-center 
            md:text-[64px] md:leading-[120%] 
            max-w-sm sm:max-w-96 md:max-w-3xl 
          "
        >
          {heading}
        </h1>

        <hr className="h-10 " />

        <p
          className={clsx(`font-medium text-coolgray-500 text-center lg:max-w-3xl sm:text-lg`, excertpClassName)}
        >
          {excertp}
        </p>

      </div>

    </section>
  )
}