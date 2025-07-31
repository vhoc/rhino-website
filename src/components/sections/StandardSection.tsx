import { type HTMLAttributes } from "react"

interface StandardSection extends HTMLAttributes<HTMLElement> {
  id?: string
  outerContent?: React.ReactNode
  children?: React.ReactNode | React.ReactNode[]
  className?: string
  innerClassName?: string
  contentClassName?: string
  contentStyle?: React.CSSProperties
}

export default function StandardSection({ id, outerContent, children, className, innerClassName, contentClassName, contentStyle, ...props }: StandardSection) {

  return (
    <section
      id={id}
      className={`relative w-full ${className}`}
      {...props}
    >
      {outerContent}

      <div
        className={`relative z-10 
          flex flex-col items-center 
          w-full 
          px-6 py-10 md:py-12 lg:py-[60px] 
          sm:px-14 lg:px-[94px] xl:px-[94px] 
          md:bg-none 
          ${innerClassName}
        `}
      >

        <div
          className={`
            container flex flex-col items-center justify-center md:justify-start
            max-w-7xl w-full 
            ${contentClassName}
          `}
          style={contentStyle}
        >

          {children}

        </div>

      </div>
    </section>
  )

}