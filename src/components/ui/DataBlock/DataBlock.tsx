"use client"
import clsx from "clsx"

interface DataBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  className?: string
  children?: React.ReactNode | React.ReactNode[]
}

export default function DataBlock({ title, className, children, ...props }: DataBlockProps) {
  return (
    <div
      className={clsx(
        "py-2 px-3 flex flex-col gap-2.5",
        "lg:flex-row lg:justify-between lg:items-start",
        "rounded-[8px]",
        className
      )}
      {...props}
    >
      {
        title && title.length > 0 ?
          <h4 className="font-bold text-lg text-coolgray-900 lg:w-1/2">
            {title}
          </h4>
          :
          null
      }

      {children}
    </div>
  )
}