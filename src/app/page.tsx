import StandardSection from "@/components/sections/StandardSection";
import Button from "@/components/ui/buttons/Button";
import Image from "next/image";
import iconChainlink from "@/../public/img/icon-chainlink.svg";
import iconAptos from "@/../public/img/icon-aptos.svg";
import iconInterchain from "@/../public/img/icon-interchain.svg";
import iconSei from "@/../public/img/icon-sei.svg";
import iconDydx from "@/../public/img/icon-dydx.svg";
import HoverCardsGroup from "@/components/ui/HoverCardsGroup/HoverCardsGroup";
import HoverCard from "@/components/ui/HoverCardsGroup/HoverCard";
import Heading2 from "@/components/ui/Text/Heading2";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ServiceBox from "@/components/ui/ServiceBox";
import fetchLogos from "./services/logos";
import iconIbc from "@/../public/img/icon-ibc.svg"
import iconRocket from "@/../public/img/icon-rocket.svg";
import iconRpc from "@/../public/img/icon-rpc.svg";
import iconValidator from "@/../public/img/icon-validator.svg";
import iconGlobal from "@/../public/img/icon-global.svg";
import ChainlinkCard from "@/components/ui/ChainlinkCard/ChainlinkCard";
import PreFooter from "@/components/sections/PreFooter";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import ResponsiveGrid from "@/components/ui/ResponsiveGrid/ResponsiveGrid";
import clsx from "clsx";

export default async function HomePage() {

  const logos: string[] = await fetchLogos();

  return (
    <main
      className={`
        flex min-h-screen flex-col items-center justify-start 
        pt-0 px-0
      `}
    >

      {/* HERO SECTION */}
      <section
        id="hero"
        className={`relative w-full`}
      >

        {/* VIDEO BACKGROUND (TABLET & DESKTOP ONLY) */}
        <video
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover 2xl:object-contain object-top pointer-events-none z-0"
          poster="/video/hero01-poster.png"
          src="/video/hero01.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        <div
          className={`relative z-10 
          flex flex-col items-center 
          w-full 
          px-6 md:pt-20
          sm:px-14 lg:px-[94px] xl:px-[94px] 
          bg-[url('/img/backgrounds/bg-home-hero-1.svg')] 
          bg-no-repeat 
          bg-left 
          md:bg-none
        `}
        >

          <div
            className={`
            container flex flex-col items-center justify-center md:items-start md:justify-start
            max-w-7xl w-full 
            pt-10 
          `}
          >

            {/* TOP CAPTION */}
            <p className="text-lg text-coolgray-500 text-center md:text-left ">
              {"5+ Years. 99.99% Uptime. Global Scale"}
            </p>

            <hr className="h-8" />

            <h1
              className="font-calsans text-coolgray-900 text-[40px] md:text-[64px] leading-[120%] text-center md:text-left md:max-w-xl"
            >
              {"We build trust into every block"}
            </h1>

          </div>
        </div>

        <div
          id="hero"
          className={`relative z-10 
          flex flex-col items-center 
          w-full pt-8 
          px-6 md:pb-40 
          sm:px-14 lg:px-[94px] xl:px-[94px] 
          bg-[url('/img/backgrounds/bg-home-hero-2.svg')] 
          bg-no-repeat 
          bg-right 
          md:bg-none 
        `}
        >
          <div
            className={`
            container flex flex-col items-center md:items-start justify-center 
            max-w-7xl w-full 
            pb-10 
          `}
          >

            <p className="text-coolgray-600 text-center md:text-left md:max-w-xl">
              {"Institutional staking, secure infrastructure, enterprise blockchain solutions. Your partner in building the decentralized future."}
            </p>

            <hr className="h-8" />

            <Button
              type={"link"}
              href={"#"}
              label={"Partner With Us"}
              className="max-sm:w-full"
            />

          </div>

        </div>

      </section>

      {/* TRUSTED BY SECTION */}
      <StandardSection
        id="trusted-by"
        innerClassName="pt-[17.5px]!"
      // className="mt-0"
      >
        <p
          className="
            font-calsans text-xl text-coolgray-500 text-center
          "
        >
          Trusted by leading Web3 companies for mission-critical operations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 w-full mt-8 md:mt-16 gap-x-2 gap-y-6 max-w-[1038px] md:items-center">
          {/* Column 1 */}
          <div className="mx-auto">
            <Image
              src={iconChainlink as StaticImport}
              alt="Placeholder"
              width={107}
              height={27}
              className="lg:w-[157px] lg:h-[40px]"
            />
          </div>
          {/* Column 2 */}
          <div className="mx-auto">
            <Image
              src={iconAptos as StaticImport}
              alt="Placeholder"
              width={106}
              height={26}
              className="lg:w-[155px] lg:h-[38px]"
            />
          </div>
          {/* Column 3 */}
          <div className="mx-auto">
            <Image
              src={iconInterchain as StaticImport}
              alt="Placeholder"
              width={93}
              height={34}
              className="lg:w-[136px] lg:h-[50px]"
            />
          </div>
          {/* Column 4 */}
          <div className=" mx-auto">
            <Image
              src={iconSei as StaticImport}
              alt="Placeholder"
              width={82}
              height={31}
              className="lg:w-[120px] lg:h-[45px]"
            />
          </div>
          {/* Column 5 */}
          <div className="mx-auto max-md:col-span-2">
            <Image
              src={iconDydx as StaticImport}
              alt="Placeholder"
              width={78}
              height={34}
              className="lg:w-[115px] lg:h-[51px]"
            />
          </div>
        </div>

      </StandardSection>

      {/* HOVER CARDS SECTION */}
      <section className="px-6 sm:px-14 lg:px-0 py-10 md:py-12 lg:py-[60px] w-full flex flex-col items-center">
        <HoverCardsGroup>
          <HoverCard
            key={0}
            icon="/img/upward-arrow.svg"
            icon_hover="/img/upward-arrow-red.svg"
            title="Experience"
            subtitle="Proven track record since 2020"
            subtitleLineClamp={2}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
          />

          <HoverCard
            key={1}
            icon="/img/safe.svg"
            icon_hover="/img/safe-red.svg"
            title="Security"
            subtitle="ISO 27001-aligned security protocols and process definition"
            subtitleLineClamp={2}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
          />

          <HoverCard
            key={2}
            icon="/img/speech.svg"
            icon_hover="/img/speech-red.svg"
            title="Support"
            subtitle="Proven track record since 2020"
            subtitleLineClamp={2}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
          />

          <HoverCard
            key={3}
            icon="/img/tiles.svg"
            icon_hover="/img/tiles-red.svg"
            title="+50 Blockchains"
            subtitle="ISO 27001-aligned security protocols and process definition"
            subtitleLineClamp={2}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
          />
        </HoverCardsGroup>
      </section>

      {/* KEY METRICS SECTION */}
      <StandardSection id="key-metrics">
        <Heading2>Key Metrics</Heading2>
        <div
          className="w-full mt-8 flex flex-col lg:grid lg:grid-cols-[33%_67%] lg:grid-rows-[1fr_1fr] gap-x-[37px] lg:gap-x-[36px]"
        >
          {/* Left Column - Row 1 */}
          <div className="max-lg:order-1 py-4 pr-4 border-b border-b-coolgray-100 border-solid">
            <AnimatedCounter
              title="Total Value Locked"
              amount={900000000}
              currency_sign="$"
            />
          </div>
          {/* Right Column - spans both rows */}
          <div
            className="
              max-lg:order-3 row-span-2 p-4 flex flex-col items-center justify-center gap-y-[34px] 
              lg:justify-start 
              md:flex-row md:gap-x-[34px] md:items-start md:pt-16 lg:pt-4 lg:flex-col 
            "
          >
            <p className="font-calsans text-[32px] text-coolgray-900 text-center md:text-left lg:text-xl">
              +50 Blockchains
            </p>
            {
              logos && logos.length >= 1 ?
                <ResponsiveGrid
                  defaultCols={8}
                  className="mx-auto lg:ml-0 lg:mr-auto"
                  gridClassName={clsx(
                    "grid gap-4 grid-cols-8",
                    "sm:grid-cols-8 sm:gap-x-10",
                    "md:grid-cols-8 md:gap-x-8",
                    "lg:grid-cols-8 lg:gap-x-11 lg:gap-y-6",
                    "xl:gap-x-15",
                    "2xl:gap-x-20"
                  )}
                >
                  {
                    logos.map((logo, index) => (
                      <div
                        key={index}
                        className={"object-contain w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"}
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
                // <LogosGrid
                //   items={logos}
                //   className="grid gap-5 grid-cols-10 lg:grid-cols-8 xl:grid-cols-8"
                //   iconSizes="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
                // />
                :
                null
            }
          </div>
          {/* Left Column - Row 2 */}
          <div className="max-lg:order-2 py-4 pr-4 lg:mt-[44px]">
            <AnimatedCounter
              title="RPC request handled"
              amount={12900000000}
            />
          </div>
        </div>

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
              flex flex-col gap-8 items-center 
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

      {/* CHAINLINKS CARDS */}
      <StandardSection
        style={{
          background: 'linear-gradient(to bottom, white 0%, white 50%, #011219 50%, #011219 100%)'
        }}
      >
        <div
          className={`
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
      </StandardSection>

      {/* PRE-FOOTER */}
      <PreFooter />


    </main>
  );
}
