import { type IBlockchain } from "@/util/types"
import Image from "next/image"

interface BlockchainBoxProps extends IBlockchain {
  className?: string
}

export default function BlockchainBox({
  icon, name, stake_url, className
}: BlockchainBoxProps) {
  return (
    <div
      className={`
          aspect-square min-w-[300px] min-h-[300px] px-10 py-12 rounded-[5px] 
          bg-coolgray-800 hover:bg-brightred-500 transition-all 
          flex flex-col justify-between items-center gap-y-16 
          group 
          ${className}
      `}
    >

      {/* ICON */}
      <div
        className={`
          relative w-14 h-14 max-w-14 max-h-14 flex justify-center 
        `}
      >
        <Image
          src={icon as string}
          fill
          className="object-contain object-center-top"
          alt={name}
        />
      </div>

      {/* BUTTONS */}
      <div
        className={`
          flex flex-col gap-2 items-end w-full
        `}
      >
        <div className="w-full flex justify-between items-center gap-1 border-b border-solid border-white">
          <p className="font-calsans text-xl text-white">{name}</p>
          <p className="font-calsans text-xl text-white font-bold">&#43;</p>
        </div>

        <div
          className={`
              w-full justify-between items-center gap-1 border-b border-solid border-white
              hidden h-0 opacity-0 group-hover:flex group-hover:h-full group-hover:opacity-100 transition-all
          `}
        >
          <p className="font-calsans text-xl text-white">Stake Now</p>
          <p className="font-calsans text-xl text-white font-bold">&#43;</p>
        </div>
      </div>

    </div>
  )
}