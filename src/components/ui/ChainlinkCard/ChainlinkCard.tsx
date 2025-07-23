
import styles from './ChainlinkCard.module.css'
import Image from 'next/image'

interface ChainlinkCardProps {
  icon?: string
  name: string
  body?: string
  author?: string
  author_position?: string
  className?: string
}

export default function ChainlinkCard({
  icon = '/img/icon-placeholder.svg',
  name,
  body,
  author,
  author_position,
  className
}: ChainlinkCardProps) {
  return (
    <div
      className={`
        ${styles.animatedBg} ${styles.bgBase} 
        flex flex-col justify-between gap-x-4 gap-y-14 lg:gap-y-[138px] 
        min-w-32 
        py-[52px] px-8 rounded-[5px] 
        relative z-0
        ${className || ''}
      `}
    >

      {/* ICON & NAME */}
      <div
        className={`
          h-[41px]
          flex gap-[11px] items-center
          relative z-1 
        `}
      >
        {
          icon && icon.length >= 1 ?
            <div className='w-[41px] h-[41px]'>
              <Image
                src={icon}
                fill
                className="object-contain object-left-top"
                alt={name}
              />
            </div>
            :
            null
        }

        <div className="text-white text-lg font-medium">{name}</div>

      </div>

      {/* BODY AND AUTHOR */}
      <div
        className={`
          flex flex-col justify-end gap-4 
          relative z-1 
        `}
      >

        <p className="text-white text-sm">
          {body}
        </p>

        <div className="flex flex-col">
          <p className="text-white font-bold text-sm">{author}</p>
          <p className="text-white text-sm">{author_position}</p>
        </div>

      </div>

    </div>
  )
}