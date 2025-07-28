import Image from "next/image"
import { type StaticImport } from "next/dist/shared/lib/get-img-props"
import clsx from "clsx"
import { de } from "zod/v4/locales"

interface ServiceBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string | StaticImport
  className?: string
  name?: string
  description?: string
  nameClassName?: string
  descriptionClassName?: string
}

export default function ServiceBox({
  icon,
  className,
  name,
  description,
  nameClassName = "",
  descriptionClassName = "",
  ...props
}: ServiceBoxProps) {

  return (
    <div
      className={`
        flex flex-col items-center 
        md:items-start 
        max-w-[342px] 
        ${className} 
      `}
      {...props}
    >
      <div className="w-[60px] max-w-[60px] h-[60px] max-h-[60px]">
        <Image
          src={icon}
          alt="IBC Channel Support"
          className="w-full h-auto"
          style={{
            objectPosition: 'contain'
          }}
        />
      </div>

      {
        name && name.length > 0 ?
          <p className={clsx("font-calsans text-2xl text-coolgray-900 mt-6 text-center md:text-left ", nameClassName)}>{name}</p>
          :
          null
      }

      {
        description && description.length > 0 ?
          <p className={clsx("font-medium text-lg text-coolgray-500 mt-4 text-center md:text-left ", descriptionClassName)}>{description}</p>
          :
          null
      }

    </div>
  )

}