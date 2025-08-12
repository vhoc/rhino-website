import clsx from "clsx"
import Link from "next/link"
import { fetchOneResource } from "@/app/services/resources";
import fetchResourceEnvironments from "@/app/services/resourceEnvironments";
import { fetchOneLogo } from "@/app/services/logos";
import Image from "next/image";
import DataBlock from "@/components/ui/DataBlock/DataBlock";
import { fetchAllSnapshots } from "@/app/services/snapshots";
import SnapshotItem from "@/components/ui/SnapshotItem/SnapshotItem";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import "./page.css";

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  // Prepare the resource data
  const { slug } = await params;

  const resource = await fetchOneResource(slug);
  const snapshots = await fetchAllSnapshots();
  const resourceName = resource?.data?.resources[0]?.name.split(' ')[0] ?? "Resource";
  const resourceDescription = resource?.data?.resources[0]?.description && resource?.data?.resources[0]?.description.length > 0 ? resource?.data?.resources[0]?.description : null;
  const resourceAbout = resource?.data?.resources[0]?.aboutChain?.html ?? null;

  const { data } = await fetchResourceEnvironments(slug);
  const unsortedEnvironments = data?.resourceEnvironments ?? [];

  // Create a new environments array sorted by ascending weight
  const environments = [...unsortedEnvironments].sort((a, b) => {
    const aw = typeof a?.weight === 'number' ? a.weight : Number.MAX_SAFE_INTEGER;
    const bw = typeof b?.weight === 'number' ? b.weight : Number.MAX_SAFE_INTEGER;
    return aw - bw;
  });

  const logo = await fetchOneLogo(slug);


  // CSS filter tuned to approximate #FF233B across a variety of source logos
  // Adjust if your source assets vary significantly in brightness/contrast
  const rhinoRedFilter = "brightness(0) saturate(100%) invert(18%) sepia(96%) saturate(5125%) hue-rotate(343deg) brightness(103%) contrast(110%)";

  return (
    <main
      className={clsx(
        "flex flex-col items-center w-full",
        "min-h-[100dvh] ",
        "pt-0 px-0"
      )}
    >
      {/* HERO */}
      <section
        className={clsx(
          "w-full max-w-[1465px]",
          "px-6 sm:px-14 lg:px-[94px]"
        )}
      >
        <div
          className={clsx(
            "mt-6",
            "flex flex-col gap-8",
            "md:bg-[url('/img/backgrounds/bg-hero-resource.svg')] bg-no-repeat bg-right bg-contain",
            "pb-[69px] lg:pb-[144px] md:pt-[32px] lg:pt-[82px]"
          )}
        >

          <div className="text-sm text-coolgray-500">
            <Link href="/resources" className="hover:text-coolgray-700">Resources</Link> / <span>{resourceName} Endpoints</span>
          </div>

          <div className="w-[72px] h-[72px]">
            <Image
              src={logo!}
              alt={resourceName}
              width={72}
              height={72}
              className="object-contain object-center w-full h-full"
              style={{ filter: rhinoRedFilter }}
            />
          </div>

          <h1 className="font-calsans text-4xl text-coolgray-900">
            {resourceName} Endpoints
          </h1>

          {
            resourceDescription ?
              <p
                className="text-coolgray-500 font-medium md:w-2/3 max-w-[822px]"
              >
                {resourceDescription}
              </p>
              :
              null
          }

        </div>
      </section>

      <section
        className={clsx(
          "grid grid-cols-1 lg:grid-cols-[225px_1fr] items-stretch lg:gap-x-16 xl:gap-x-[147px]",
          "w-full h-full max-w-[1465px]",
          "px-6 sm:px-14 lg:px-[94px]"
        )}
      >
        {/* STATIC MENU */}
        <div
          className="hidden lg:flex lg:flex-col lg:sticky lg:top-20 lg:self-start"
        >
          <p className="font-calsans text-coolgray-900 text-xl capitalize">{resourceName}</p>
          <p className="text-black">Connectivity Instructions</p>

          {/* MENU */}
          <div className="mt-6 flex flex-col gap-2">
            <ul>
              {environments.length > 0 &&
                environments.map((env, index) => (
                  <li
                    key={`menu-env-${index}-${env.environment}`}
                    className={clsx(
                      "h-[35px] flex items-center text-lg text-coolgray-900 transition-discrete duration-300 ease-in-out border-b-2 border-b-transparent",
                      "hover:text-brightred-500 hover:pl-2 hover:border-b-2 hover:border-b-solid hover:border-b-brightred-500",
                    )}
                  >
                    <Link className="w-full" href={`#section-${env.environment}-${index}`}>{env.environment}</Link>
                  </li>
                ))
              }
              <li
                className={clsx(
                  "h-[35px] flex items-center text-lg text-coolgray-900 transition-discrete duration-300 ease-in-out border-b-2 border-b-transparent",
                  "hover:text-brightred-500 hover:pl-2 hover:border-b-2 hover:border-b-solid hover:border-b-brightred-500",
                )}
              >
                <Link className="w-full" href="#section-faq">FAQ</Link>
              </li>
              <li
                className={clsx(
                  "h-[35px] flex items-center text-lg text-coolgray-900 transition-discrete duration-300 ease-in-out border-b-2 border-b-transparent",
                  "hover:text-brightred-500 hover:pl-2 hover:border-b-2 hover:border-b-solid hover:border-b-brightred-500",
                )}
              >
                <Link className="w-full" href="#section-about">About</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CONTENT */}
        <div className="h-full lg:h-full lg:overflow-y-auto">

          {
            environments.length > 0 ?
              <div>
                {
                  environments.map((env, index) => {
                    // console.log("Environment: ", env);
                    return (
                      <div id={`section-${env.environment}-${index}`} key={`env-${index}-${env.environment}`} className="mt-16" >

                        <div className="bg-white md:flex md:flex-row md:justify-between md:items-center md:gap-4 border-b border-b-solid border-b-coolgray-50 py-4">
                          <h3 className="font-calsans text-2xl text-coolgray-900 bg-white">{env.environment}</h3>
                          {/* STATUS BADGE */}
                          {env.status_badge && env.status_badge.length > 0 ? <div className="bg-white!" dangerouslySetInnerHTML={{ __html: env.status_badge }} /> : null}
                        </div>

                        <div className="data-content flex flex-col gap-4">

                          {/* ENDPOINTS */}
                          {
                            env.endpoints?.html && env.endpoints.html.length > 0 ?
                              <DataBlock title="Endpoints:">
                                <div className="dangerouslySetInnerHTML lg:w-1/2" dangerouslySetInnerHTML={{ __html: env.endpoints.html }} />
                              </DataBlock>
                              :
                              null
                          }

                          {/* RATE LIMIT */}
                          {
                            env.rateLimit && env.rateLimit.length > 0 ?
                              <DataBlock title="Rate Limit:">
                                <span className="text-coolgray-500 lg:w-1/2">{env.rateLimit}</span>
                              </DataBlock>
                              :
                              null
                          }

                          {/* BACKING NODES */}
                          {
                            env.backingNodes && env.backingNodes.length > 0 ?
                              <DataBlock title="Backing Nodes:">
                                <span className="text-coolgray-500 lg:w-1/2">{env.backingNodes}</span>
                              </DataBlock>
                              :
                              null
                          }

                          {/* NODE LOCATIONS */}
                          {
                            env.nodeLocations && env.nodeLocations.length > 0 ?
                              <DataBlock title="Node Locations:">
                                <span className="text-coolgray-500 lg:w-1/2">{env.nodeLocations}</span>
                              </DataBlock>
                              :
                              null
                          }

                          {/* PRIVATE ACCESS */}
                          {
                            env.privateAccess && env.privateAccess.html && env.privateAccess.html.length > 0 ?
                              <DataBlock title="Private access:">
                                <div className="dangerouslySetInnerHTML lg:w-1/2" dangerouslySetInnerHTML={{ __html: env.privateAccess.html }} />
                              </DataBlock>
                              :
                              null
                          }


                          {/* SNAPSHOTS */}

                          {
                            env.snapshotName && snapshots && snapshots.length >= 1 && snapshots.find(snapshot => snapshot.snapshotName === env.snapshotName) ?
                              <DataBlock title="Snapshots:" className="lg:flex-col! lg:justify-start">
                                {
                                  snapshots.filter(snapshot => snapshot.snapshotName === env.snapshotName).map((snapshot, index) => {
                                    return (
                                      <SnapshotItem key={`snapshot-${index}-${snapshot.name}`} snapshot={snapshot} />
                                    )
                                  })
                                }
                              </DataBlock>
                              : null
                          }
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              :
              null
          }
          {/* FAQ */}
          <h3 id={"section-faq"} className="font-calsans text-2xl md:text-[32px] text-coolgray-900 mt-16 border-b border-b-solid border-b-coolgray-50 py-4">Frequently Asked Questions</h3>
          <div className="mt-4 mb-16">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >

              <AccordionItem value="item-1" className="border-none data-[state=open]:bg-coolgray-25 py-0 px-3 rounded-[8px]">
                <AccordionTrigger className="font-bold text-coolgray-900 cursor-pointer">
                  Are these APIs free to use?
                </AccordionTrigger>

                <AccordionContent>
                  <p className="text-coolgray-500 leading-[160%] ">
                    RHINO provides free, unlimited access to testnet APIs. For mainnet, these interfaces are rate limited to 50,000 requests per 24 hour period. If it is determined that these interfaces are being abused in testnet, the RHINO team will ban IP addresses, or enforce rate-limiting keys in the future. All rate limits subject to change.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Added FAQ items */}
              <AccordionItem value="item-2" className="border-none data-[state=open]:bg-coolgray-25 py-0 px-3 rounded-[8px]">
                <AccordionTrigger className="font-bold text-coolgray-900 cursor-pointer">
                  What if my project needs more requests per day?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-coolgray-500 leading-[160%]">
                    Contact the RHINO team for higher limits or unlimited usage. Email <Link href="mailto:info@rhinostake.com" className="underline hover:text-coolgray-700">info@rhinostake.com</Link> or <Link href="https://calendly.com/rhino-eric/rpc-api-capacity-and-pricing-discussion" className="underline hover:text-coolgray-700">schedule a meeting</Link>.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none data-[state=open]:bg-coolgray-25 py-0 px-3 rounded-[8px]">
                <AccordionTrigger className="font-bold text-coolgray-900 cursor-pointer">
                  Do you offer an SLA?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-coolgray-500 leading-[160%]">
                    Yes. We include an SLA with unlimited-use plans. Our multi-region, multi-tier stack&mdash;geo-routing, load balancing, state sync, and continuous monitoring&mdash;is built for high availability.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none data-[state=open]:bg-coolgray-25 py-0 px-3 rounded-[8px]">
                <AccordionTrigger className="font-bold text-coolgray-900 cursor-pointer">
                  How do I implement authorization to bypass the rate limiter?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-coolgray-500 leading-[160%]">
                    Once you receive an API key for sei-apis.com, add the header <code>x-apikey</code> to your requests. We can also whitelist IP subnets for backend services or indexers.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none data-[state=open]:bg-coolgray-25 py-0 px-3 rounded-[8px]">
                <AccordionTrigger className="font-bold text-coolgray-900 cursor-pointer">
                  Is custom reporting available?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-coolgray-500 leading-[160%]">
                    Yes. We can provide a custom dashboard showing front-end metrics (requests, unique users) and back-end metrics (latency, node health), tailored to your needs.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-none data-[state=open]:bg-coolgray-25 py-0 px-3 rounded-[8px]">
                <AccordionTrigger className="font-bold text-coolgray-900 cursor-pointer">
                  Do you take crypto?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-coolgray-500 leading-[160%]">
                    Yes. We accept USD as well as stablecoins like USDC and USDT on the Cosmos, Ethereum, or Polygon networks.
                  </p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>

          {/* ABOUT */}
          {
            resourceAbout && resourceAbout.length > 0 ?
              <div id="section-about" className="mb-[96px] md:mb-[120px]">
                <h3 id={"section-faq"} className="font-calsans text-2xl md:text-[32px] text-coolgray-900 mt-16 border-b border-b-solid border-b-coolgray-50 py-4">
                  About {resourceName}
                </h3>
                <div className="bg-white! text-coolgray-500 mt-4 px-3 py-2" dangerouslySetInnerHTML={{ __html: resourceAbout }} />
              </div>
              :
              null
          }


        </div>

      </section>

    </main>
  )

}