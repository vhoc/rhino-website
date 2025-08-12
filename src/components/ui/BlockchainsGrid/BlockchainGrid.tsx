"use client"
import { useState, useEffect, useMemo } from "react"
import { type INetwork } from "@/util/types"
import BlockchainBox from "./BlockchainBox"
import { useViewportWidth } from "@/hooks/useViewportWidth"
import Button from "../buttons/Button"

interface BlockchainsGridProps {
  networks: INetwork[]
  className?: string
}

export default function BlockchainsGrid({
  networks,
  className,
}: BlockchainsGridProps) {

  const viewportWidth = useViewportWidth()

  const [loadMore, setLoadMore] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  // Sort by weight (asc), then by name (A→Z). Items without weight are placed last.
  const sortedNetworks = useMemo(() => {
    return [...networks].sort((a, b) => {
      const aw = a.weight ?? Number.POSITIVE_INFINITY
      const bw = b.weight ?? Number.POSITIVE_INFINITY
      if (aw !== bw) return aw - bw
      return a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    })
  }, [networks])

  let displayedNetworks = sortedNetworks;
  if (!loadMore) {
    if (viewportWidth < 640) {
      displayedNetworks = networks.slice(0, 6);
    } else if (viewportWidth >= 640 && viewportWidth < 1024) {
      displayedNetworks = networks.slice(0, 8);
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
      className="flex flex-col items-center w-full "
    >
      <div
        className={`
            grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 
            ${className}
        `}
      >
        {
          displayedNetworks.map((item, index) => (
            <BlockchainBox
              key={`grid-item-${index}-${item.name}`}
              logo={item.logo ?? { url: "/img/icon-placeholder.svg" }}
              name={item.name}
              stakeurl={item.stakeurl}
              blockchainurl={item.blockchainurl}
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