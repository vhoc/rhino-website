import StandardSection from "@/components/sections/StandardSection"
import HeroSection from "@/components/sections/HeroSection"
import HoverCardsGroup from "@/components/ui/HoverCardsGroup/HoverCardsGroup"
import TeamMemberCard from "@/components/ui/HoverCardsGroup/TeamMemberCard"
import Heading2 from "@/components/ui/Text/Heading2"
import ServiceBox from "@/components/ui/ServiceBox"
import iconIbc from "@/../public/img/icon-ibc.svg"
import iconTestnet from "@/../public/img/icon-testnet.svg";
import iconRpc from "@/../public/img/icon-rpc.svg";
import iconValidator from "@/../public/img/icon-validator.svg";
import iconGlobal from "@/../public/img/icon-global.svg";
import PreFooter from "@/components/sections/PreFooter"
import fetchResources from "../services/resources"
import type { IResource } from "@/util/types"

export default async function ResourcesPage() {

  let { resources }: { resources: IResource[] } = await fetchResources(4);
  // console.log('Fetched resources data:', resources);

  return (
    <main
      className={`
        flex min-h-screen flex-col items-center justify-start 
        pt-0 px-0
      `}
    >

      <HeroSection
        caption="Resources"
        heading="Enterprise-Grade Blockchains APIs"
        bgVideo="/video/cloudy.mp4"
        excertp="RHINO provides public and private API infrastructure for leading blockchain networks. Our endpoints are built for production applications that demand reliability, speed, and comprehensive data access."
      />

      <StandardSection
        className="lg:bg-[linear-gradient(to_bottom,white_0%,white_50%,#011219_50%,#011219_100%)]"
      >
        <HoverCardsGroup>
          {
            resources && resources.length >= 1 ?
              resources.map((resource, index) => (
                <TeamMemberCard
                  key={`resource-${index}-${resource.slug}`}
                  // itemWidth={'lg:w-1/3'}
                  // itemWidthHover={'lg:w-2/3'}
                  // itemHeight={'h-1/4 sm:h-3/10 md:h-2/8'}
                  itemHeight={'h-1/6 sm:h-3/10 md:h-2/10'}
                  // itemHeightHover={'max-lg:h-6/8'}
                  itemHeightHover={'h-2/6 sm:h-1/2 md:h-1/4'}
                  title={resource.name}
                  defaultItemBgClass="bg-coolgray-800 group"
                  // truncateSubtitle={false}
                  body={resource.description}
                  bodyHoverClassName="pointer-events-auto h-[140px] opacity-100"
                />
              ))
              :
              null
          }
        </HoverCardsGroup>
      </StandardSection>

      {/* BUILT FOR PRODUCTION */}
      <StandardSection
        className="bg-coolgray-900"
        innerClassName="xl:py-[120px]"
        contentClassName="flex flex-col gap-[32px] lg:flex-row lg:items-center"
      >
        <div
          className={`
            flex flex-col gap-14 
            xl:flex-row lg:pt-[40px]
          `}
        >

          <div className="flex flex-col md:flex-row xl:flex-col gap-6 xl:w-4/12">
            <Heading2 className="md:text-left md:w-1/2 xl:w-full text-white">
              Built for Production
            </Heading2>

            <p className="font-medium text-xl text-coolgray-50 text-center md:text-left md:w-1/2 xl:w-full">
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
              icon={iconIbc}
              name={'99.99% uptime commitment with real-time monitoring'}
              nameClassName="text-white"
            />

            <ServiceBox
              icon={iconTestnet}
              name={"Enterprise-grade security with ISO 27001-aligned protocols"}
              nameClassName="text-white"
            />

            <ServiceBox
              icon={iconRpc}
              name={"Global load balancing across US, Europe, East Asia, and Southeast Asia clusters"}
              nameClassName="text-white"
            />

            <ServiceBox
              icon={iconValidator}
              name={"Instant failover and automated incident response"}
              nameClassName="text-white"
            />

            <ServiceBox
              icon={iconGlobal}
              name={"Custom rate limiting and access controls"}
              nameClassName="text-white"
            />

          </div>

        </div>

      </StandardSection>

      {/* DEVELOPER FIRST APPROACH */}
      <StandardSection
        innerClassName="xl:py-[120px]"
        contentClassName="flex flex-col gap-[32px] items-center"
      >
        <div
          className={`
            flex flex-col gap-14 
            lg:pt-[40px] items-center
          `}
        >

          <div className="flex flex-col gap-6 items-center">
            <Heading2 className="">
              Developer-First Approach
            </Heading2>

            <p className="font-medium text-xl text-coolgray-500 text-center max-w-xl">
              Our APls are designed for developers who need reliable infrastructure without complexity:
            </p>
          </div>

          <div
            className={`
              flex flex-col gap-8 items-center 
              md:grid md:grid-cols-2 xl:flex xl:flex-row xl:justify-center xl:items-start
              xl:8/12 
            `}
          >

            <ServiceBox
              icon={iconIbc}
              description={'Comprehensive documentation and examples'}
            />

            <ServiceBox
              icon={iconTestnet}
              description={"Multiple response formats (JSON-RCP, REST, WebSocket)"}
            />

            <ServiceBox
              icon={iconRpc}
              description={"Multiple response formats (JSON-RCP, REST, WebSocket)"}
            />

            <ServiceBox
              icon={iconValidator}
              description={"24/7 technical support from blockchain security experts"}
            />

            <ServiceBox
              icon={iconGlobal}
              description={"Free public endpoints supporting the broader ecosytem"}
            />

          </div>

        </div>

      </StandardSection>

      <PreFooter />

    </main>
  )
}