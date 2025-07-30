import HeroSection from "@/components/sections/HeroSection"
import StandardSection from "@/components/sections/StandardSection"
import Heading2 from "@/components/ui/Text/Heading2"
import HoverCardsGroup from "@/components/ui/HoverCardsGroup/HoverCardsGroup"
import HoverCard from "@/components/ui/HoverCardsGroup/HoverCard"
import ServiceBox from "@/components/ui/ServiceBox"
import iconIbc from "@/../public/img/icon-ibc.svg"
import iconTestnet from "@/../public/img/icon-testnet.svg";
import iconRpc from "@/../public/img/icon-rpc.svg";
import iconValidator from "@/../public/img/icon-validator.svg";
import iconGlobal from "@/../public/img/icon-global.svg";
import fetchNetworks from "../services/networks"
import fetchLogos from "../services/logos"
import { type INetworksResponse } from "@/util/types"
import BlockchainsGrid from "@/components/ui/BlockchainsGrid/BlockchainGrid"
import PreFooter from "@/components/sections/PreFooter"
import LogosGrid from "@/components/ui/LogosGrid"
import { type StaticImport } from "next/dist/shared/lib/get-img-props"

export default async function NetworksPage() {

  const { data }: INetworksResponse = await fetchNetworks();
  const networks = data?.networks

  const logos: string[] = await fetchLogos();

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
        bgVideo="/video/cloudy.mp4"
        className={`
          sm:bg-[url('/img/backgrounds/texture-hero-networks.png')] sm:bg-no-repeat sm:bg-top sm:bg-contain 
          md:bg-none 
        `}
        excertp="For over five years, RHINO has selectively partnered with groundbreaking blockchain protocols that are reshaping finance, interoperability, and decentralized computing."
        excertpClassName="md:hidden"
      />

      <StandardSection
        className="mt-[27px] flex flex-col items-center"
        outerContent={
          <>
            <div className="relative z-10 
          flex flex-col items-center 
          w-full 
          px-6  
          sm:px-14 lg:px-[94px] xl:px-[94px] 
          md:bg-none ">
              <p
                className={`md:block font-medium text-coolgray-500 text-center lg:max-w-3xl md:text-lg`}
              >
                For over five years, RHINO has selectively partnered with groundbreaking blockchain protocols that are reshaping finance, interoperability, and decentralized computing.
              </p>
            </div>
            {/* <Image
              src={imgTexture}
              alt="Background image"
              className="top-0 left-0 w-full h-full object-cover object-top sm:hidden"
            /> */}
          </>
        }
      >

        {
          logos && logos.length >= 1 ?
            <LogosGrid items={logos} />
            :
            null
        }
        {/* <Image
          src={imgTextureFull}
          alt="Background image"
          className="hidden  w-full h-full object-contain object-top sm:block max-w-[1035px]"
        /> */}

        <h3 className="block text-xl text-coolgray-500 font-bold text-center mt-10 sm:mt-10 md:hidden">
          {"We don't just run nodes"}
        </h3>

        <p className="font-medium text-base text-coolgray-500 text-center mt-2 md:mt-10 lg:mt-14 max-w-3xl">
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
      >
        <HoverCardsGroup>
          <HoverCard
            key={0}
            icon="/img/upward-arrow.svg"
            icon_hover="/img/red-square.svg"
            title="Experience"
            subtitle="Proven track record since 2020"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgImage="/img/backgrounds/item-hover-3.svg"
            bgImageHoverClass="scale-120 opacity-100"
            bgImageRestClass="scale-[20] opacity-0"
          />

          <HoverCard
            key={1}
            icon="/img/upward-arrow.svg"
            icon_hover="/img/red-square.svg"
            title="Security"
            subtitle="ISO 27001-aligned security protocols and process definition"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgImage="/img/backgrounds/item-hover-3.svg"
            bgImageHoverClass="scale-120 opacity-100"
            bgImageRestClass="scale-[20] opacity-0"
          />

          <HoverCard
            key={2}
            icon="/img/upward-arrow.svg"
            icon_hover="/img/red-square.svg"
            title="Support"
            subtitle="Proven track record since 2020"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgImage="/img/backgrounds/item-hover-3.svg"
            bgImageHoverClass="scale-120 opacity-100"
            bgImageRestClass="scale-[20] opacity-0"
          />

          <HoverCard
            key={3}
            icon="/img/upward-arrow.svg"
            icon_hover="/img/red-square.svg"
            title="+50 Blockchains"
            subtitle="ISO 27001-aligned security protocols and process definition"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris.
            Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgImage="/img/backgrounds/item-hover-3.svg"
            bgImageHoverClass="scale-120 opacity-100"
            bgImageRestClass="scale-[20] opacity-0"
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
              icon={iconTestnet as StaticImport}
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