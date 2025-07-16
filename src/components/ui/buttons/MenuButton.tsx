"use client"
import { useState, useRef, useEffect } from "react"
import { type ITextLink } from "@/util/types"
// import NavSheet from "@/components/ui/Navbar/NavSheet"

interface MenuButtonProps {
  variant?: "primary" | "secondary"
  className?: string
  links: ITextLink[]
  contact_us_link: ITextLink
  // onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export default function MenuButton({
  variant = "primary",
  className,
  links,
  contact_us_link,
  // onClick
}: MenuButtonProps) {

  const [pressed, setPressed] = useState(false)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pressed) return;
    function handleClickOutside(event: MouseEvent) {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setPressed(false)
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPressed(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [pressed])

  return (
    <div
      ref={buttonRef}
      data-slot="button"
      className={`
      w-[44px] h-[45px] group relative z-40
      flex justify-center items-center px-[15px] py-3 flex-col gap-[4px]!
      rounded-lg border border-solid border-white cursor-pointer 
      ${variant === "primary" ?
          "bg-brightred-500 hover:bg-brightred-600 "
          :
          "bg-coolgray-900 hover:bg-coolgray-700 "
        }
      ${pressed && variant === "primary" ? "bg-brightred-600 " : ''}
      ${pressed && variant === "secondary" ? "bg-coolgray-700 " : ''}
      ${className}
      `}
      onClick={() => setPressed(prevState => !prevState)}
    >
      <div
        className={`
            h-[2px] bg-white w-[14px] rounded-full relative             
            transition-all duration-300 ease-in-out
            ${pressed ? 'rotate-[225deg] translate-y-[5px] w-[16px]' : ''}
        `}
      >
      </div>

      <div
        className={`
          h-[2px] bg-white w-[14px] rounded-full relative 
      `}
        style={{
          width: pressed ? 0 : 14,
          height: pressed ? 0 : 2,
          transition: 'all 0.1s linear',
        }}
      >
      </div>

      <div
        className={`
          h-[2px] bg-white w-[14px] rounded-full 
          transition-all duration-300 ease-in-out 
          ${pressed ? 'rotate-[-225deg] translate-y-[-5px] w-[16px]' : ''}
      `}
      >
      </div>
    </div>

  )
}