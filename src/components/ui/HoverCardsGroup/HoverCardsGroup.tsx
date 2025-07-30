
interface HoverCardsGroupProps {
  height?: string;
  children: React.ReactNode[] | React.ReactNode
}

export default function HoverCardsGroup({
  height = "sm:h-[672px] md:h-[793px] lg:h-[450px]",
  children
}: HoverCardsGroupProps) {
  return (
    <div
      className={`
        flex h-[1024px] w-full max-w-[1440px] flex-col 
        lg:flex-row lg:gap-x-2 
        transition-all duration-300 ease-in-out 
        max-lg:gap-y-2 ${height} 
      `}
    >
      {children}
    </div>
  );
}
