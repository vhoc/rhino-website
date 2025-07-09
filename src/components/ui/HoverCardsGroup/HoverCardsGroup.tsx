
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
    <div
      className={
        `max-w-[1440px] flex flex-col lg:flex-row w-full transition-all duration-300 ease-in-out max-lg:gap-y-2 lg:gap-x-2
        h-[1219px] sm:h-[867px] md:h-[867px] lg:h-[${height}]`
      }
    >
      <HoverCard
        defaultItemBgClass={defaultItemBgClass}
        itemRadius={itemRadius}
        key={0}
        icon="/img/upward-arrow.svg"
        icon_hover="/img/red-square.svg"
        title="Experience"
        subtitle="Proven track record since 2020"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
      />

      <HoverCard
        defaultItemBgClass={defaultItemBgClass}
        itemRadius={itemRadius}
        key={1}
        icon="/img/upward-arrow.svg"
        icon_hover="/img/red-square.svg"
        title="Security"
        subtitle="ISO 27001-aligned security protocols and process definition"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
      />

      <HoverCard
        defaultItemBgClass={defaultItemBgClass}
        itemRadius={itemRadius}
        key={2}
        icon="/img/upward-arrow.svg"
        icon_hover="/img/red-square.svg"
        title="Support"
        subtitle="Proven track record since 2020"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
      />

      <HoverCard
        defaultItemBgClass={defaultItemBgClass}
        itemRadius={itemRadius}
        key={3}
        icon="/img/upward-arrow.svg"
        icon_hover="/img/red-square.svg"
        title="+50 Blockchains"
        subtitle="ISO 27001-aligned security protocols and process definition"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
      />
    </div>
  );
}