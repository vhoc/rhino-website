
import HoverCard from "./HoverCard"

interface HoverCardsGroupProps {
  height?: string
  defaultItemBgClass?: string
  hoveredItemBgImage?: string
  itemRadius?: string
}

export default function HoverCardsGroup({
  height = '450px',
  defaultItemBgClass = 'bg-coolgray-900',
  itemRadius = '5px',
}: HoverCardsGroupProps ) {
  

  return (
    <div className={`max-w-[1440px] flex flex-col lg:flex-row w-full transition-all duration-300 ease-in-out gap-2 h-auto lg:h-[${height}]`}>
      {[0, 1, 2, 3].map((i) => (
        <HoverCard
          height={height}
          defaultItemBgClass={defaultItemBgClass}
          itemRadius={itemRadius}
          key={i}
        />
      ))}
    </div>
  );
}