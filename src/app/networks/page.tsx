import HeroSection from "@/components/sections/HeroSection"
import StandardSection from "@/components/sections/StandardSection"
import Heading2 from "@/components/ui/Text/Heading2"
import HoverCardsGroup from "@/components/ui/HoverCardsGroup/HoverCardsGroup"
import HoverCard from "@/components/ui/HoverCardsGroup/HoverCard"
import ServiceBox from "@/components/ui/ServiceBox"
import iconIbc from "@/../public/img/icon-ibc.svg"
import iconRocket from "@/../public/img/icon-rocket.svg";
import iconRpc from "@/../public/img/icon-rpc.svg";
import iconValidator from "@/../public/img/icon-validator.svg";
import iconGlobal from "@/../public/img/icon-global.svg";
import fetchNetworks from "../services/networks"
import fetchLogos from "../services/logos"
import { type INetworksResponse } from "@/util/types"
import BlockchainsGrid from "@/components/ui/BlockchainsGrid/BlockchainGrid"
import PreFooter from "@/components/sections/PreFooter"
import { type StaticImport } from "next/dist/shared/lib/get-img-props"
import gifBg from "@/../public/video/hovercard-networks-bg-noloop.gif"
import poster from "@/../public/video/hovercard-networks-bg-poster.png"
import ResponsiveGrid from "@/components/ui/ResponsiveGrid/ResponsiveGrid"

export default async function NetworksPage() {

  const { data }: INetworksResponse = await fetchNetworks();
  const networks = data?.networks

  const logos: string[] = await fetchLogos(48);

  return (
    <main
      className={`
        flex min-h-screen flex-col items-center justify-start 
        pt-0 px-0
      `}
    >

      <HeroSection
        caption="Rhino Networks"
        heading="Powering Tomorrow's Blockchain Networks"
        excertp="For over five years, RHINO has selectively partnered with groundbreaking blockchain protocols that are reshaping finance, interoperability, and decentralized computing."
        excertpClassName="lg:hidden mt-[32px] text-base!"
        className={`
          sm:bg-[url('/img/backgrounds/texture-hero-about.svg')] sm:bg-no-repeat sm:bg-top sm:bg-contain 
          md:bg-none min-h-0! lg:min-h-[570px]! 
        `}
        innerClassName="min-h-0! lg:min-h-[570px]! md:pb-[24px]!"
        bgVideo="/video/hero02.webm"
      />

      {/* <HeroSection
        caption="Rhino Networks"
        heading="Powering Tomorrow's Blockchain Networks"
        bgVideo="/video/hero02.webm"
        className={`
          sm:bg-[url('/img/backgrounds/texture-hero-networks.png')] sm:bg-no-repeat sm:bg-top sm:bg-contain 
          md:bg-none 
        `}
        excertp="For over five years, RHINO has selectively partnered with groundbreaking blockchain protocols that are reshaping finance, interoperability, and decentralized computing."
        excertpClassName="sm:mt-8 lg:mt-[86px] max-w-[822px] sm:text-base!"
        // innerClassName="max-sm:pb-0 md:pb-0! md:h-fit! md:min-h-0!"
        // innerClassName="max-sm:pb-0"
      /> */}

      <StandardSection
        className="flex flex-col items-center"
        // outerContent={
        //   <>
        //     <div className="relative z-10 
        //   flex flex-col items-center 
        //   w-full 
        //   px-6  
        //   sm:px-14 lg:px-[94px] xl:px-[94px] 
        //   md:bg-none ">
        //       <p
        //         className={`md:block font-medium text-coolgray-500 text-center lg:max-w-3xl`}
        //       >
        //         For over five years, RHINO has selectively partnered with groundbreaking blockchain protocols that are reshaping finance, interoperability, and decentralized computing.
        //       </p>
        //     </div>
        //   </>
        // }
      >
        <p className="font-medium text-base leading-[160%] text-coolgray-500 max-w-[822px] text-center mb-[67px] md:mb-[86px] hidden lg:block">
          {"For over five years, RHINO has selectively partnered with groundbreaking blockchain protocols that are reshaping finance, interoperability, and decentralized computing."}
        </p>

        {
          logos && logos.length >= 1 ?
            <ResponsiveGrid
              defaultCols={8}
            >
              {
                logos.map((logo, index) => (
                  <div
                    key={index}
                    className={"object-contain w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"}
                    style={{
                      maskImage: `url('${logo}')`,
                      WebkitMaskImage: `url('${logo}')`, // for Safari
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                      backgroundColor: '#466883',
                      display: 'inline-block'
                    }}
                  />
                ))
              }
            </ResponsiveGrid>
            :
            null
        }

        <h3 className="block text-xl text-coolgray-500 font-bold text-center mt-[67px] md:mt-[86px] md:hidden">
          {"We don't just run nodes"}
        </h3>

        <p className="font-medium text-base text-coolgray-500 text-center mt-2 md:mt-[86px] max-w-3xl">
          <span className="hidden md:inline">{"We don't just run nodes "} </span>{"- we provide comprehensive infrastructure solutions that enable networks to scale with confidence while aiving back to the ecosystem through free public resources."}
        </p>

      </StandardSection>

      <StandardSection>
        <Heading2>Our Network Criteria</Heading2>

        <p className="text-lg md:font-calsans md:text-xl text-coolgray-500 text-center mt-6 max-w-2xl">
          We choose networks based on technical innovation, strong fundamentals, and long-term viability. Our portfolio includes leading protocols in:
        </p>
      </StandardSection>

      <StandardSection
        innerClassName={`
          lg:px-0!
        `}
        contentClassName="max-w-[1440px]"
      >
        <HoverCardsGroup>
          <HoverCard
            key={0}
            icon="/img/building.svg"
            icon_hover="/img/building-red.svg"
            subtitle="Cross-chain interoperability (IBC-enabled networks)"
            subtitleLineClamp={2}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgVideo="/video/hovercard-networks-bg.mp4"
            bgImage={poster as StaticImport}
            bgGif={gifBg as StaticImport}
          />

          <HoverCard
            key={1}
            icon="/img/speed.svg"
            icon_hover="/img/speed-red.svg"
            subtitle="High-performance consensus mechanisms"
            subtitleLineClamp={2}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgVideo="/video/hovercard-networks-bg.mp4"
            bgImage={poster as StaticImport}
            bgGif={gifBg as StaticImport}
          />

          <HoverCard
            key={2}
            icon="/img/icon-ibc-gray.svg"
            icon_hover="/img/icon-ibc.svg"
            subtitle="Enterprise-focused blockchain solutions"
            subtitleLineClamp={2}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgVideo="/video/hovercard-networks-bg.mp4"
            bgImage={poster as StaticImport}
            bgGif={gifBg as StaticImport}
          />

          <HoverCard
            key={3}
            icon="/img/note.svg"
            icon_hover="/img/note-red.svg"
            subtitle="Emerging DeFi and institutional protocols"
            subtitleLineClamp={2}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgVideo="/video/hovercard-networks-bg.mp4"
            bgImage={poster as StaticImport}
            bgGif={gifBg as StaticImport}
          />
        </HoverCardsGroup>
      </StandardSection>

      {/* SERVICES WE PROVIDE */}
      <StandardSection>
        <div
          className={`
            flex flex-col gap-14 
            xl:flex-row lg:pt-[40px]
          `}
        >

          <div className="flex flex-col gap-6 xl:w-4/12">
            <Heading2 className="xl:text-left">
              Services We Provide
            </Heading2>

            <p className="font-medium text-xl text-coolgray-500 text-center xl:text-left">
              Institutional staking, secure infrastructure, enterprise blockchain solutions. Your partner in building the decentralized future.
            </p>
          </div>

          <div
            className={`
              flex flex-col gap-12 md:gap-y-14 items-center 
              md:grid md:grid-cols-2 
              xl:8/12 
            `}
          >

            <ServiceBox
              icon={iconIbc as StaticImport}
              name={'IBC Channel Support'}
              description="Seamless cross-chain connectivity and maintenance"
            />

            <ServiceBox
              icon={iconRocket as StaticImport}
              name={"Testnet to Mainnet"}
              description={"Full lifecycle support from testing to production"}
            />

            <ServiceBox
              icon={iconRpc as StaticImport}
              name={"RPC Infrastructure"}
              description={"High-performance API endpoints with global load balancing"}
            />

            <ServiceBox
              icon={iconValidator as StaticImport}
              name={"Validator Operations"}
              description={"Enterprise-grade staking with institutional security"}
            />

            <ServiceBox
              icon={iconGlobal as StaticImport}
              name={"Global Node Clusters"}
              description={"Load-balanced infrastructure across US, Europe, East Asia, and Southeast Asia"}
            />

          </div>

        </div>

      </StandardSection>

      <StandardSection
        style={{
          background: 'linear-gradient(to bottom, white 0%, white 10%, #011219 10%, #011219 100%)'
        }}
      >
        {
          networks && networks.length >= 1 ?
            <BlockchainsGrid
              networks={networks}
              className="mt-10"
            />
            :
            null
        }
      </StandardSection>

      <PreFooter />

    </main>
  )
}