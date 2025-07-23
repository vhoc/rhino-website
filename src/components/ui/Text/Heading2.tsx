interface Heading2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string
  children?: string
}

export default function Heading2({
  className,
  children,
}: Heading2Props) {

  return (
    <h2
      className={`
          font-calsans text-[40px] md:text-[56px] xl:text-[64px] xl:leading-[120%] text-center 
          ${className} 
      `}
    >
      {children}
    </h2>
  )

}