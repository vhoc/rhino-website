import Image from "next/image"
import { type StaticImport } from "next/dist/shared/lib/get-img-props"

interface ServiceBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string | StaticImport
  className?: string
  name?: string
  description?: string
}

export default function ServiceBox({
  icon,
  className,
  name,
  description,
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

      <p className="font-calsans text-2xl text-coolgray-900 mt-6 text-center md:text-left">{name}</p>
      <p className="font-medium text-lg text-coolgray-500 mt-4 text-center md:text-left">{description}</p>
    </div>
  )

}