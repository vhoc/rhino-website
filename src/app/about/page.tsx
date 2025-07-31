import HeroSection from "@/components/sections/HeroSection"
import StandardSection from "@/components/sections/StandardSection"
import Heading2 from "@/components/ui/Text/Heading2"
import ServiceBox from "@/components/ui/ServiceBox"
import iconStar from "@/../public/img/icon-star.svg"
import iconShield from "@/../public/img/icon-shield.svg";
import iconTestnet from "@/../public/img/icon-testnet.svg";
import iconClock from "@/../public/img/icon-clock.svg";
import iconGlobal from "@/../public/img/icon-global.svg";
import iconNodes from "@/../public/img/icon-nodes.svg";
import Image from "next/image"
import imgJeff from "@/../public/img/jeff.png"
import imgEric from "@/../public/img/eric.png"
import imgCommitment from "@/../public/img/commitment.png"
import HoverCardsGroup from "@/components/ui/HoverCardsGroup/HoverCardsGroup"
import TeamMemberCard from "@/components/ui/HoverCardsGroup/TeamMemberCard"
import PreFooter from "@/components/sections/PreFooter"
import type { StaticImport } from "next/dist/shared/lib/get-img-props"

export default function AboutPage() {
  return (
    <main
      className={`
        flex min-h-screen flex-col items-center justify-start 
        pt-0 px-0
      `}
    >

      <HeroSection
        caption="About Us"
        heading="Enterprise Blockchain Infrastructure You Can Trust"
        excertp="Rhinostake (RHINO) is the premier blockchain infrastructure provider for enterprises building the future of Web3. We deliver mission-critical node operations, RPC services, and cross-chain connectivity solutions with enterprise-grade reliability and 24/7 support."
        className={`
          sm:bg-[url('/img/backgrounds/texture-hero-about.svg')] sm:bg-no-repeat sm:bg-top sm:bg-contain 
          md:bg-none 
        `}
        bgVideo="/video/cloudy.mp4"
      />

      <StandardSection
        innerClassName=""
      >
        <Heading2>Our Foundation</Heading2>
        <p className="font-medium text-base sm:text-xl md:text-lg text-coolgray-500 text-center mt-6 max-w-[822px]">
          {"Since 2020, RHINO has been at the forefront of blockchain infrastructure evolution. Founded by blockchain veterans with deep technical expertise, we emerged from a simple observation: the blockchain industry needed infrastructure partners who understand both cutting-edge technology and enterprise requirements. Over five years, we've built the robust, scalable infrastructure that serious blockchain projects demand."}
        </p>
      </StandardSection>

      {/* WHAT SETS UP APART */}
      <StandardSection>
        <div
          className={`
            flex flex-col gap-14 
            xl:flex-row lg:pt-[40px]
          `}
        >

          <div className="flex flex-col md:flex-row xl:flex-col gap-6 xl:w-4/12">
            <Heading2 className="md:text-left md:w-1/2 xl:w-full">
              What Sets Us Apart
            </Heading2>

            <p className="font-medium text-xl text-coolgray-500 text-center md:text-left md:w-1/2 xl:w-full">
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
              icon={iconStar as StaticImport}
              name={'5+ Years of Proven Experience'}
              description="Building enterprise blockchain infrastructure since 2020"
            />

            <ServiceBox
              icon={iconShield as StaticImport}
              name={"Security-First Operations"}
              description={"ISO 27001 certification in progress, with enterprise-grade security protocols"}
            />

            <ServiceBox
              icon={iconClock as StaticImport}
              name={"Enterprise SLA Commitments"}
              description={"99.9% to 99.99% uptime guarantees backed by real accountability"}
            />

            <ServiceBox
              icon={iconTestnet as StaticImport}
              name={"Validator Operations"}
              description={"Dedicated support teams ensuring rapid incident response and resolution"}
            />

            <ServiceBox
              icon={iconGlobal as StaticImport}
              name={"Global Infrastructure Clusters"}
              description={"Load-balanced infrastructure across US, Europe, East Asia, and Southeast Asia"}
            />

            <ServiceBox
              icon={iconNodes as StaticImport}
              name={"Protocol Partnership"}
              description={"We actively contribute free public infrastructure back to the networks we support"}
            />

          </div>

        </div>

      </StandardSection>

      <StandardSection
        className="bg-coolgray-900 lg:bg-white "
        innerClassName="md:py-24 lg:px-0"
        contentClassName="lg:max-w-5xl"
      >
        <div className="flex flex-col gap-6 lg:gap-x-10 lg:flex-row lg:items-center">
          <Heading2 className="text-white lg:text-coolgray-900 lg:text-nowrap">Our Team</Heading2>

          <p
            className="mt-10 text-white font-medium text-xl lg:text-lg text-center lg:text-left lg:text-coolgray-500 lg:mt-0"
          >
            {"Led by [Partner Name], our team combines decades of experience in distributed systems, blockchain technology, and enterprise infrastructure. We're not just service providers - we're technical partners invested in your success."}
          </p>
        </div>



        {/* FOUNDERS */}
        <div
          className={`
            flex flex-col gap-14 mt-24 
            lg:hidden
          `}
        >



          {/* JEFF */}
          <div
            className={`
            flex flex-col gap-6 
            md:flex-row md:items-center
          `}
          >
            <Image
              src={imgJeff}
              alt="Jeff's photo"
              className="w-full"
            />

            <div>
              <p className="font-calsans text-[32px] text-white">Jeff.</p>
              <p className="mt-2 text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>

          {/* ERIC B. */}
          <div
            className={`
            flex flex-col gap-6 
            md:flex-row md:items-center
          `}
          >
            <Image
              src={imgEric}
              alt="Eric B.'s photo"
              className="w-full"
            />

            <div>
              <p className="font-calsans text-[32px] text-white">Eric B.</p>
              <p className="mt-2 text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>

        </div>


      </StandardSection>

      {/* TEAM MEMBERS - DESKTOP+ VERSION */}
      <StandardSection
        className="hidden lg:block"
        style={{
          background: 'linear-gradient(to bottom, white 0%, white 50%, #011219 50%, #011219 100%)'
        }}
      >
        <HoverCardsGroup height="h-[600px]! sm:h-[500px]! max-w-[915px]!">
          <TeamMemberCard
            key={0}
            itemWidth={'lg:w-1/2'}
            itemWidthHover={'lg:w-1/1'}
            itemHeight={'max-lg:h-1/2'}
            itemHeightHover={'max-lg:h-1/1'}
            title="Jeff."
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris. Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgImage={"/img/eric-transparent.png"}
            bgImageHoverClass="scale-100 opacity-100"
            bgImageRestClass="scale-100 opacity-100"

          />

          <TeamMemberCard
            key={1}
            itemWidth={'lg:w-1/2'}
            itemWidthHover={'lg:w-1/1'}
            itemHeight={'max-lg:h-1/2'}
            itemHeightHover={'max-lg:h-1/1'}
            title="Eric B."
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacinia mauris. Suspendisse lacinia euismod quam, a vulputate turpis tincidunt at. Nunc at blandit orci."
            bgImage={"/img/eric-transparent.png"}
            bgImageHoverClass="scale-100 opacity-100"
            bgImageRestClass="scale-100 opacity-100"
          />
        </HoverCardsGroup>
      </StandardSection>

      <StandardSection
        className="bg-coolgray-900"
        contentClassName="flex flex-col gap-[32px] lg:flex-row lg:items-center"
      >
        <Image
          src={imgCommitment}
          alt="Our Commitment"
          className="hidden lg:block w-5/12 max-w-[503px]"
        />

        <div
          className="flex flex-col gap-[32px]"
        >
          <Heading2 className="text-white lg:text-left">
            Our Commitment
          </Heading2>

          <p className="text-coolgray-50 text-center lg:text-left">
            {`
            Every service we deliver is backed by commercial-grade SLAs, enterprise security standards,
            and our ISO 27001-aligned information security management system.
            When you need blockchain infrastructure that won't fail when it matters most, you need RHINO's proven reliability.
            `}
          </p>
        </div>
      </StandardSection>

      <PreFooter />

    </main>
  )
}