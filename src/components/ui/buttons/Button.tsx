import Link from "next/link"
import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

export interface ButtonProps {
  type?: "button" | "link"
  href?: string
  target?: "_blank" | "_self" | "_parent" | "_top"
  variant?: "primary" | "secondary" | "outline"
  label?: string
  className?: string
  asChild?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export default function Button({
  type = "link",
  href,
  target = "_self",
  variant = "primary",
  label,
  className,
  asChild = false,
  disabled = false,
  onClick,
}: ButtonProps & { asChild?: boolean }) {

  if (type === "button") {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={clsx(`
        flex justify-center items-center px-[22px] py-3 
        rounded-lg cursor-pointer 
        ${variant === "primary" ?
            "bg-brightred-500 hover:bg-brightred-600 "
            : variant === "secondary" ?
              "bg-coolgray-900 hover:bg-coolgray-700 border border-solid border-white "
              :
              "bg-transparent border border-solid border-black hover:bg-coolgray-200 text-black"
          }
        ${disabled ? "opacity-50 cursor-not-allowed!" : ""} 
        ${className}
      `)}
        onClick={onClick}
        disabled={disabled}
        style={{
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        {
          label && label.length >= 1 ?
            <span className="font-bold text-white">
              {label}
            </span>
            :
            null
        }
      </Comp>
    )
  }

  return (
    <Link
      href={href ?? '#'}
      target={target}
      className={`
        flex justify-center items-center px-[22px] h-[42px] py-0  
        rounded-lg cursor-pointer! 
        ${variant === "primary" ?
          "bg-brightred-500 hover:bg-brightred-600 "
          : variant === "secondary" ?
            "bg-coolgray-900 hover:bg-coolgray-700 border border-solid border-white "
            :
            "bg-transparent border border-solid border-black hover:bg-coolgray-25 text-black"
        }
        ${className}
      `}
    >
      {
        label && label.length >= 1 ?
          <span
            className={clsx(
              "font-bold m-0 p-0",
              variant === "outline" ? "text-black" : "text-white"
            )}
          >
            {label}
          </span>
          :
          null
      }
    </Link>
  )
}