import HoverCardsGroup from "@/components/ui/HoverCardsGroup/HoverCardsGroup";
import HoverCard from "@/components/ui/HoverCardsGroup/HoverCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ChainlinkCard from "@/components/ui/ChainlinkCard/ChainlinkCard";
// import BlockchainsGrid from "@/components/ui/BlockchainsGrid/BlockchainGrid";
// import { sample_blockchains } from "@/util/sample_data";

export default async function SandboxPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-12 px-0 py-16">
        <h1
          className={`font-calsans text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]`}
        >
          Sandbox Page
        </h1>

        {/* <BlockchainsGrid
          networks={sample_blockchains}
        /> */}

        <div
          className={`
            border-4 border-dashed border-purple-800
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 
            max-w-7xl
          `}
        >

          <ChainlinkCard
            name={'Chainlink'}
            body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
            author="John Doe"
            author_position="Chief Technology Officer"
          />

          <ChainlinkCard
            name={'Chainlink'}
            body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
            author="John Doe"
            author_position="Chief Technology Officer"
          />

          <ChainlinkCard
            name={'Chainlink'}
            body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
            author="John Doe"
            author_position="Chief Technology Officer"
          />

          <ChainlinkCard
            name={'Chainlink'}
            body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
            author="John Doe"
            author_position="Chief Technology Officer"
          />

        </div>

        <section className="flex flex-col gap-2">
          <HoverCardsGroup>
            <HoverCard
              key={0}
              icon="/img/upward-arrow.svg"
              icon_hover="/img/red-square.svg"
              title="Experience"
              subtitle="Proven track record since 2020"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            />

            <HoverCard
              key={1}
              icon="/img/upward-arrow.svg"
              icon_hover="/img/red-square.svg"
              title="Security"
              subtitle="ISO 27001-aligned security protocols and process definition"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            />

            <HoverCard
              key={2}
              icon="/img/upward-arrow.svg"
              icon_hover="/img/red-square.svg"
              title="Support"
              subtitle="Proven track record since 2020"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            />

            <HoverCard
              key={3}
              icon="/img/upward-arrow.svg"
              icon_hover="/img/red-square.svg"
              title="+50 Blockchains"
              subtitle="ISO 27001-aligned security protocols and process definition"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            />
          </HoverCardsGroup>
        </section>

        <section className="flex flex-col gap-2 w-full items-center">
          <HoverCardsGroup height="h-[600px]! sm:h-[500px]!">
            <HoverCard
              key={0}
              itemWidth={'lg:w-1/2'}
              itemWidthHover={'lg:w-1/1'}
              itemHeight={'max-lg:h-1/2'}
              itemHeightHover={'max-lg:h-1/1'}
              icon="/img/upward-arrow.svg"
              icon_hover="/img/red-square.svg"
              title="Experience"
              subtitle="Proven track record since 2020"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            />

            <HoverCard
              key={1}
              itemWidth={'lg:w-1/2'}
              itemWidthHover={'lg:w-1/1'}
              itemHeight={'max-lg:h-1/2'}
              itemHeightHover={'max-lg:h-1/1'}
              icon="/img/upward-arrow.svg"
              icon_hover="/img/red-square.svg"
              title="Security"
              subtitle="ISO 27001-aligned security protocols and process definition"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            />
          </HoverCardsGroup>

          <HoverCardsGroup>
            <HoverCard
              key={0}
              itemWidth={'lg:w-1/3'}
              itemWidthHover={'lg:w-2/3'}
              itemHeight={'max-lg:h-1/3'}
              itemHeightHover={'max-lg:h-2/3'}
              icon="/img/upward-arrow.svg"
              icon_hover="/img/red-square.svg"
              title="Experience"
              subtitle="Proven track record since 2020"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            />

            <HoverCard
              key={1}
              itemWidth={'lg:w-1/3'}
              itemWidthHover={'lg:w-2/3'}
              itemHeight={'max-lg:h-1/3'}
              itemHeightHover={'max-lg:h-2/3'}
              icon="/img/upward-arrow.svg"
              icon_hover="/img/red-square.svg"
              title="Security"
              subtitle="ISO 27001-aligned security protocols and process definition"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            />

            <HoverCard
              key={2}
              itemWidth={'lg:w-1/3'}
              itemWidthHover={'lg:w-2/3'}
              itemHeight={'max-lg:h-1/3'}
              itemHeightHover={'max-lg:h-2/3'}
              icon="/img/upward-arrow.svg"
              icon_hover="/img/red-square.svg"
              title="Support"
              subtitle="Proven track record since 2020"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            />
          </HoverCardsGroup>
        </section>

        <AnimatedCounter
          title="Total Value Locked"
          amount={900000000}
          currency_sign="$"
        />

        <AnimatedCounter
          title="RPC request handled"
          amount={12900000000}
        />
      </div>
    </main>
  );
}
