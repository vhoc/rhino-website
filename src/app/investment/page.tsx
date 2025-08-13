import HeroSection from "@/components/sections/HeroSection"
import StandardSection from "@/components/sections/StandardSection"
import ServiceBox from "@/components/ui/ServiceBox"
import iconRoads from "@/../public/img/icon-roads.svg"
import iconIbc from "@/../public/img/icon-ibc.svg";
import iconFocus from "@/../public/img/icon-focus.svg";
import iconTestnet from "@/../public/img/icon-testnet.svg";
import HoverCardsGroup from "@/components/ui/HoverCardsGroup/HoverCardsGroup";
import HoverCard from "@/components/ui/HoverCardsGroup/HoverCard";
import Heading2 from "@/components/ui/Text/Heading2";
import Image from "next/image";
import iconOptfun from "@/../public/img/icon-optfun.svg";
import iconMevvy from "@/../public/img/icon-mevvy.svg";
import iconSilo from "@/../public/img/icon-silo.svg";
import iconPlaza from "@/../public/img/icon-plaza.svg";
import PreFooter from "@/components/sections/PreFooter";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import gifInvestmentAnimated from "@/../public/video/investmentcard-animated-bg-noloop.gif";
import posterInvestmentCard from "@/../public/video/investmentcard-poster.png"

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
        bgVideo="/video/hero02.webm"
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
        innerClassName="py-[72px]! sm:pb-[96px]! sm:pt-[56px]! md:pb-[114px]! md:pt-[122px]!"
      >
        <ServiceBox
          icon={iconRoads as StaticImport}
          description="Infrastructure and tooling that enhances blockchain adoption"
          className="max-w-full"
        />

        <ServiceBox
          icon={iconIbc as StaticImport}
          description={"Cross-chain solutions and interoperability protocols"}
          className="max-w-full"
        />

        <ServiceBox
          icon={iconFocus as StaticImport}
          description={"Enterprise-focused blockchain applications"}
          className="max-w-full"
        />

        <ServiceBox
          icon={iconTestnet as StaticImport}
          description={"Teams with proven technical execution capability"}
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
            icon="/img/building.svg"
            icon_hover="/img/building-red.svg"
            subtitle="Technical expertise in scaling blockchain systems with enterprise-grade security"
            subtitleLineClamp={2}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgVideo={"/video/investment.webm"}
            bgGif={gifInvestmentAnimated as StaticImport}// For iOS devices
            bgImage={posterInvestmentCard as StaticImport}// For iOS devices
            bgVideoPoster={"/video/investmentcard-poster.png"}
          />

          <HoverCard
            defaultItemBgClass="bg-coolgray-800"
            key={1}
            itemWidth={'lg:w-1/2'}
            itemWidthHover={'lg:w-1/1'}
            itemHeight={'max-lg:h-1/2'}
            itemHeightHover={'max-lg:h-1/1'}
            icon="/img/icon-ibc-gray.svg"
            icon_hover="/img/icon-ibc.svg"
            subtitle="Deep network effects across multiple ecosystems"
            subtitleLineClamp={2}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgVideo={"/video/investment.webm"}
            bgGif={gifInvestmentAnimated as StaticImport}// For iOS devices
            bgImage={posterInvestmentCard as StaticImport}// For iOS devices
            bgVideoPoster={"/video/investmentcard-poster.png"}
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
            icon="/img/article.svg"
            icon_hover="/img/articles-red.svg"
            subtitle="Enterprise customer insights and connections"
            subtitleLineClamp={3}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgVideo={"/video/investment.webm"}
            bgGif={gifInvestmentAnimated as StaticImport}// For iOS devices
            bgImage={posterInvestmentCard as StaticImport}// For iOS devices
            bgVideoPoster={"/video/investmentcard-poster.png"}
          />

          <HoverCard
            defaultItemBgClass="bg-coolgray-800"
            key={1}
            itemWidth={'lg:w-1/3'}
            itemWidthHover={'lg:w-2/3'}
            itemHeight={'max-lg:h-1/3'}
            itemHeightHover={'max-lg:h-2/3'}
            icon="/img/clock.svg"
            icon_hover="/img/clock-red.svg"
            subtitle="Operational knowledge from running production systems with 99.99% uptime"
            subtitleLineClamp={3}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgVideo={"/video/investment.webm"}
            bgGif={gifInvestmentAnimated as StaticImport}// For iOS devices
            bgImage={posterInvestmentCard as StaticImport}// For iOS devices
            bgVideoPoster={"/video/investmentcard-poster.png"}
          />

          <HoverCard
            defaultItemBgClass="bg-coolgray-800"
            key={2}
            itemWidth={'lg:w-1/3'}
            itemWidthHover={'lg:w-2/3'}
            itemHeight={'max-lg:h-1/3'}
            itemHeightHover={'max-lg:h-2/3'}
            icon="/img/globe.svg"
            icon_hover="/img/globe-red.svg"
            subtitle="Security best practices and ISO 27001-aligned governance frameworks"
            subtitleLineClamp={3}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgVideo={"/video/investment.webm"}
            bgGif={gifInvestmentAnimated as StaticImport}// For iOS devices
            bgImage={posterInvestmentCard as StaticImport}// For iOS devices
            bgVideoPoster={"/video/investmentcard-poster.png"}
          />
        </HoverCardsGroup>
      </StandardSection>

      {/* PORFOLIO SUCCESS STORIES */}
      <StandardSection
        contentClassName="max-w-[822px]"
        innerClassName="!py-[72px] !lg:pb-[96px] !lg:pt-[96px] !xl:pb-[129px] !xl:pt-[140px]"
      >
        <Heading2>
          Portfolio Success Stories
        </Heading2>

        <p className="font-medium text-sm text-coolgray-500 mt-6 text-center md:text-xl">
          {"Our investments have gone on to raise additional funding, launch successful mainnets, and build sustainable businesses in the Web3 ecosystem. We're proud to support teams that are defining the future of decentralized technology."}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 w-full mt-8 md:mt-14 gap-x-8 gap-y-16 items-center">
          {/* Column 1 */}
          <div className="mx-auto w-full h-auto max-w-[171px]">
            <Image
              src={iconOptfun as StaticImport}
              alt="Placeholder"
              width={171}
              height={44}
            />
          </div>
          {/* Column 2 */}
          <div className="mx-auto">
            <Image
              src={iconMevvy as StaticImport}
              alt="Placeholder"
              width={151}
              height={38}
            />
          </div>
          {/* Column 3 */}
          <div className="mx-auto">
            <Image
              src={iconSilo as StaticImport}
              alt="Placeholder"
              width={58}
              height={48}
            />
          </div>
          {/* Column 4 */}
          <div className="mx-auto">
            <Image
              src={iconPlaza as StaticImport}
              alt="Placeholder"
              width={139}
              height={46}
            />
          </div>
        </div>

      </StandardSection>

      <PreFooter />

    </main>
  )
}