import StandardSection from "@/components/sections/StandardSection"
import HeroSection from "@/components/sections/HeroSection"
import HoverCardsGroup from "@/components/ui/HoverCardsGroup/HoverCardsGroup"
import ResourceCard from "@/components/ui/HoverCardsGroup/ResourceCard"
import Heading2 from "@/components/ui/Text/Heading2"
import ServiceBox from "@/components/ui/ServiceBox"
import iconClock from "@/../public/img/icon-clock.svg"
import iconGlobe from "@/../public/img/globe-red.svg";
import iconRpc from "@/../public/img/icon-rpc.svg";
import iconGear from "@/../public/img/gear-red.svg";
import iconSafe2 from "@/../public/img/safe2-red.svg";
import iconArticles from "@/../public/img/articles-red.svg";
import iconList from "@/../public/img/icon-list-red.svg";
import iconCode from "@/../public/img/icon-code-red.svg";
import iconPeople from "@/../public/img/icon-people-red.svg";
import PreFooter from "@/components/sections/PreFooter"
import fetchResources from "../services/resources"
import type { IResourcesResponse } from "@/util/types"
import { type StaticImport } from "next/dist/shared/lib/get-img-props"

export default async function ResourcesPage() {

  const { data }: IResourcesResponse = await fetchResources(4);
  const resources = data?.resources

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
        bgVideo="/video/hero02.webm"
        excertp="RHINO provides public and private API infrastructure for leading blockchain networks. Our endpoints are built for production applications that demand reliability, speed, and comprehensive data access."
      />

      <StandardSection
        className="lg:bg-[linear-gradient(to_bottom,white_0%,white_50%,#011219_50%,#011219_100%)]"
      >
        <HoverCardsGroup>
          {
            resources && resources.length >= 1 ?
              resources.map((resource, index) => (
                <ResourceCard
                  key={`resource-${index}-${resource.slug}`}
                  itemHeight={'h-2/6 sm:h-3/10 md:h-2/10'}
                  itemHeightHover={'h-5/6 sm:h-2/3 md:h-2/4'}
                  title={resource.name}
                  defaultItemBgClass="bg-coolgray-800 group"
                  body={resource.description}
                  bodyHoverClassName="pointer-events-auto h-[240px] sm:h-[100px] lg:h-[200px] xl:h-[140px] 2xl:h-[120px] opacity-100 delay-150"
                  cta_url={resource.url}
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
              icon={iconClock as StaticImport}
              name={'99.99% uptime commitment with real-time monitoring'}
              nameClassName="text-white"
            />

            <ServiceBox
              icon={iconGlobe as StaticImport}
              name={"Enterprise-grade security with ISO 27001-aligned protocols"}
              nameClassName="text-white"
            />

            <ServiceBox
              icon={iconRpc as StaticImport}
              name={"Global load balancing across US, Europe, East Asia, and Southeast Asia clusters"}
              nameClassName="text-white"
            />

            <ServiceBox
              icon={iconGear as StaticImport}
              name={"Instant failover and automated incident response"}
              nameClassName="text-white"
            />

            <ServiceBox
              icon={iconSafe2 as StaticImport}
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
              icon={iconList as StaticImport}
              description={'Comprehensive documentation and examples'}
            />

            <ServiceBox
              icon={iconCode as StaticImport}
              description={"Multiple response formats (JSON-RCP, REST, WebSocket)"}
            />

            <ServiceBox
              icon={iconArticles as StaticImport}
              description={"Detailed erros handling and status reporting"}
            />

            <ServiceBox
              icon={iconClock as StaticImport}
              description={"24/7 technical support from blockchain security experts"}
            />

            <ServiceBox
              icon={iconPeople as StaticImport}
              description={"Free public endpoints supporting the broader ecosytem"}
            />

          </div>

        </div>

      </StandardSection>

      <PreFooter />

    </main>
  )
}