import HeroSection from "@/components/sections/HeroSection"
import StandardSection from "@/components/sections/StandardSection"
import ServiceBox from "@/components/ui/ServiceBox"
import iconIbc from "@/../public/img/icon-ibc.svg"
import iconTestnet from "@/../public/img/icon-testnet.svg";
import iconRpc from "@/../public/img/icon-rpc.svg";
import iconValidator from "@/../public/img/icon-validator.svg";
import HoverCardsGroup from "@/components/ui/HoverCardsGroup/HoverCardsGroup";
import HoverCard from "@/components/ui/HoverCardsGroup/HoverCard";
import Heading2 from "@/components/ui/Text/Heading2";
import Image from "next/image";
import iconTeraSwitch from "@/../public/img/placeholder-teraswitch.svg";
import PreFooter from "@/components/sections/PreFooter";

export default function InvestmentPage() {
  return (
    <main
      className={`
        flex min-h-screen flex-col items-center justify-start 
        pt-0 px-0
      `}
    >

      <HeroSection
        caption="Investment"
        heading="Funding Success in Web3"
        bgVideo="/video/cloudy.mp4"
        className={`
          sm:bg-[url('/img/backgrounds/texture-hero.png')] sm:bg-no-repeat sm:bg-top sm:bg-contain 
          md:bg-none 
        `}
        excertp="Beyond infrastructure, RHINO strategically invests in teams building
          the next generation of blockchain technology. We combine capital with
          our deep technical expertise to help promising projects reach their full potential."
      />

      <StandardSection
        innerClassName="
            !pb-0 !md:pt-0"
      >
        <div
          className={`
            w-full flex flex-col gap-6 
            lg:flex-row lg:items-end lg:gap-[100px] 
          `}
        >

          <h2 className="font-calsans text-[40px] text-coolgray-900 text-center leading-[120%] md:text-[64px] lg:text-left">
            Our Investment Philosophy
          </h2>

          <p className="font-medium text-coolgray-500 text-center md:text-[20px] lg:text-[18px] lg:text-left">
            We partner with founders who share our vision of blockchain technology transforming traditional systems. Our investments focus on:
          </p>

        </div>
      </StandardSection>

      <StandardSection
        className="flex flex-col items-center"
        contentClassName={`
          grid grid-cols-1 gap-8 items-start justify-center
          md:grid-cols-2 xl:grid-cols-4 
        `}
        innerClassName="!py-[72px] !lg:pb-[96px] !lg:pt-[96px] !xl:pb-[129px] !xl:pt-[140px]"
      >
        <ServiceBox
          icon={iconIbc}
          name={'IBC Channel Support'}
          description="Seamless cross-chain connectivity and maintenance"
          className="max-w-full"
        />

        <ServiceBox
          icon={iconTestnet}
          name={"Testnet to Mainnet"}
          description={"Full lifecycle support from testing to production"}
          className="max-w-full"
        />

        <ServiceBox
          icon={iconRpc}
          name={"RPC Infrastructure"}
          description={"High-performance API endpoints with global load balancing"}
          className="max-w-full"
        />

        <ServiceBox
          icon={iconValidator}
          name={"Validator Operations"}
          description={"Enterprise-grade staking with institutional security"}
          className="max-w-full"
        />
      </StandardSection>

      <StandardSection
        className="bg-coolgray-900 pt-[72px] lg:pt-24 xl:pt-[120px]"
        innerClassName="!py-0"
      >
        <h2 className="font-calsans text-[40px] text-white text-center leading-[120%] md:text-[64px] lg:text-left">
          Value Beyond Capital
        </h2>

        <p className="text-lg text-white max-w-lg text-center mt-8">
          As operators of critical blockchain infrastructure since 2020, we bring unique insights to our portfolio companies:
        </p>

        <HoverCardsGroup height="h-[600px]! sm:h-[464px]! lg:h-[458px]! mt-[84px] mb-2 lg:mb-0">
          <HoverCard
            defaultItemBgClass="bg-coolgray-800"
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
            bgImage={"/img/backgrounds/item-hover-2.svg"}
          />

          <HoverCard
            defaultItemBgClass="bg-coolgray-800"
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
            bgImage={"/img/backgrounds/item-hover-2.svg"}
          />
        </HoverCardsGroup>
      </StandardSection>

      <StandardSection
        innerClassName={`
          !pt-0 
        `}
        style={{
          background: 'linear-gradient(to top, white 0%, white 50%, #011219 50%, #011219 100%)'
        }}
      >
        <HoverCardsGroup>
          <HoverCard
            defaultItemBgClass="bg-coolgray-800"
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
            bgImage={"/img/backgrounds/item-hover-2.svg"}
          />

          <HoverCard
            defaultItemBgClass="bg-coolgray-800"
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
            bgImage={"/img/backgrounds/item-hover-2.svg"}
          />

          <HoverCard
            defaultItemBgClass="bg-coolgray-800"
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
            bgImage={"/img/backgrounds/item-hover-2.svg"}
          />
        </HoverCardsGroup>
      </StandardSection>

      <StandardSection
        contentClassName="max-w-[822px]"
        innerClassName="!py-[72px] !lg:pb-[96px] !lg:pt-[96px] !xl:pb-[129px] !xl:pt-[140px]"
      >
        <Heading2>
          Portfolio Success Stories
        </Heading2>

        <p className="font-medium text-sm text-coolgray-500 mt-6 text-center md:text-xl">
          Our investments have gone on to raise additional funding, launch successful mainnets, and build sustainable businesses in the Web3 ecosystem. We're proud to support teams that are defining the future of decentralized technology.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 w-full mt-8 md:mt-14 gap-x-2">
          {/* Column 1 */}
          <div className="mx-auto">
            <Image
              src={iconTeraSwitch}
              alt="Placeholder"
              style={{ width: '100%', height: 'auto', maxWidth: '93px' }}
            />
          </div>
          {/* Column 2 */}
          <div className="mx-auto">
            <Image
              src={iconTeraSwitch}
              alt="Placeholder"
              style={{ width: '100%', height: 'auto', maxWidth: '93px' }}
            />
          </div>
          {/* Column 3 */}
          <div className="hidden mx-auto sm:block">
            <Image
              src={iconTeraSwitch}
              alt="Placeholder"
              style={{ width: '100%', height: 'auto', maxWidth: '93px' }}
            />
          </div>
          {/* Column 4 */}
          <div className="hidden mx-auto xl:block">
            <Image
              src={iconTeraSwitch}
              alt="Placeholder"
              style={{ width: '100%', height: 'auto', maxWidth: '93px' }}
            />
          </div>
          {/* Column 5 */}
          <div className="hidden mx-auto xl:block">
            <Image
              src={iconTeraSwitch}
              alt="Placeholder"
              style={{ width: '100%', height: 'auto', maxWidth: '93px' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 w-full mt-10 gap-x-2 xl:hidden">
          {/* Column 1 */}
          <div className="mx-auto">
            <Image
              src={iconTeraSwitch}
              alt="Placeholder"
              style={{ width: '100%', height: 'auto', maxWidth: '120px' }}
            />
          </div>
          {/* Column 2 */}
          <div className="mx-auto">
            <Image
              src={iconTeraSwitch}
              alt="Placeholder"
              style={{ width: '100%', height: 'auto', maxWidth: '120px' }}
            />
          </div>
          {/* Column 3 */}
          <div className="hidden mx-auto md:block">
            <Image
              src={iconTeraSwitch}
              alt="Placeholder"
              style={{ width: '100%', height: 'auto', maxWidth: '120px' }}
            />
          </div>
        </div>
      </StandardSection>

      <PreFooter />

    </main>
  )
}