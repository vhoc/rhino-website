
import clsx from "clsx";

interface HoverCardsGroupProps {
  height?: string;
  children: React.ReactNode[] | React.ReactNode
}

export default function HoverCardsGroup({
  height,
  children
}: HoverCardsGroupProps) {
  return (
    <div
      className={clsx(
        "flex w-full max-w-[1440px] flex-col",
        "lg:flex-row lg:gap-x-2",
        "transition-all duration-300 ease-in-out",
        "max-lg:gap-y-2",
        height && height.length >= 1 ? height : "h-[1024px] sm:h-[672px] md:h-[793px] lg:h-[450px]"
      )}
    >
      {children}
    </div>
  );
}
