import Link from "next/link"
import { Slot } from "@radix-ui/react-slot"

interface ButtonProps {
  type?: "button" | "link"
  href?: string
  target?: "_blank" | "_self" | "_parent" | "_top" | string
  variant?: "primary" | "secondary"
  label?: string
  className?: string
  asChild?: boolean
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
  onClick,
  ...props
}: ButtonProps & { asChild?: boolean }) {

  if (type === "button") {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={`
        flex justify-center items-center px-[22px] py-3 
        rounded-lg cursor-pointer 
        ${variant === "primary" ?
            "bg-brightred-500 hover:bg-brightred-600 "
            :
            "bg-coolgray-900 hover:bg-coolgray-700 border border-solid border-white "
          }
        ${className}
      `}
        onClick={onClick}
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
        flex justify-center items-center px-[22px] py-3 
        rounded-lg cursor-pointer 
        ${variant === "primary" ?
          "bg-brightred-500 hover:bg-brightred-600 "
          :
          "bg-coolgray-900 hover:bg-coolgray-700 border border-solid border-white "
        }
        ${className}
      `}
    >
      {
        label && label.length >= 1 ?
          <span className="font-bold text-white">
            {label}
          </span>
          :
          null
      }
    </Link>
  )
}