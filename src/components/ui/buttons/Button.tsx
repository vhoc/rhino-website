import Link from "next/link"

interface ButtonProps {
  type?: "button" | "link"
  href?: string
  variant?: "primary" | "secondary"
  label?: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export default function Button({
  type = "link",
  href,
  variant = "primary",
  label,
  className,
  onClick
}: ButtonProps) {

  if (type === "button") {
    return (
      <button
        className={`
        flex justify-center items-center px-[22px] py-3 
        rounded-lg border border-solid border-white cursor-pointer 
        ${variant === "primary" ?
            "bg-brightred-500 hover:bg-brightred-600 "
            :
            "bg-coolgray-900 hover:bg-coolgray-700 "
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
      </button>
    )
  }

  return (
    <Link
      href={href ?? '#'}
      className={`
        flex justify-center items-center px-[22px] py-3 
        rounded-lg border border-solid border-white
        ${variant === "primary" ?
          "bg-brightred-500 hover:bg-brightred-600 "
          :
          "bg-coolgray-900 hover:bg-coolgray-700 "
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