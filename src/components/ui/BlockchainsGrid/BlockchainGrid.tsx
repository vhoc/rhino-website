"use client"
import { useState, useEffect } from "react"
import { type IBlockchain } from "@/util/types"
import BlockchainBox from "./BlockchainBox"
import { useViewportWidth } from "@/hooks/useViewportWidth"
import Button from "../buttons/Button"

interface BlockchainsGridProps {
  blockchains: IBlockchain[]
  className?: string
}

export default function BlockchainsGrid({
  blockchains,
  className,
}: BlockchainsGridProps) {

  const viewportWidth = useViewportWidth()

  const [loadMore, setLoadMore] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  let displayedBlockchains = blockchains;
  if (!loadMore) {
    if (viewportWidth < 640) {
      displayedBlockchains = blockchains.slice(0, 6);
    } else if (viewportWidth >= 640 && viewportWidth < 1024) {
      displayedBlockchains = blockchains.slice(0, 8);
    }
    // >=1024 or loadMore: show all
  }

  // Prevent hydration error
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // Optionally, render a skeleton or nothing
    return null;
  }

  return (
    <div
      className="flex flex-col items-center w-full border-4 border-dashed border-b-brightred-600 bg-coolgray-900"
    >
      <div
        className={`
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 
            ${className}
        `}
      >
        {
          displayedBlockchains.map((item, index) => (
            <BlockchainBox
              key={`grid-item-${index}-${item.name}`}
              icon={item.icon}
              name={item.name}
              stake_url={item.stake_url}
            />
          ))
        }
      </div>

      {
        viewportWidth < 1024 && !loadMore ?
          <Button
            type="button"
            label="Load More"
            variant="secondary"
            className="w-fit mt-8"
            onClick={() => setLoadMore(true)}
          />
          :
          null
      }

    </div>
  )
}