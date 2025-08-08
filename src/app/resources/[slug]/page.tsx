import clsx from "clsx"
import Link from "next/link"
import { fetchOneResource } from "@/app/services/resources";
import fetchResourceEnvironments from "@/app/services/resourceEnvironments";
import { fetchOneLogo } from "@/app/services/logos";
import Image from "next/image";
import DataBlock from "@/components/ui/DataBlock/DataBlock";
import fetchSnapshots from "@/app/services/snapshots";
import SnapshotItem from "@/components/ui/SnapshotItem/SnapshotItem";
import "./page.css";

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  // Prepare the resource data
  const { slug } = await params;

  const resource = await fetchOneResource(slug);
  const resourceName = resource?.data?.resources[0]?.name.split(' ')[0] ?? "Resource";

  const resourceDescription = resource?.data?.resources[0]?.description && resource?.data?.resources[0]?.description.length > 0 ? resource?.data?.resources[0]?.description : null;

  const { data } = await fetchResourceEnvironments(slug);
  const environments = data?.resourceEnvironments ?? [];
  // console.log("resourceEnvironments:", JSON.stringify(environments, null, 2));

  const logo = await fetchOneLogo(slug);
  const snapshots = await fetchSnapshots(slug);
  console.log("snapshots:", JSON.stringify(snapshots, null, 2));

  // CSS filter tuned to approximate #FF233B across a variety of source logos
  // Adjust if your source assets vary significantly in brightness/contrast
  const rhinoRedFilter = "brightness(0) saturate(100%) invert(18%) sepia(96%) saturate(5125%) hue-rotate(343deg) brightness(103%) contrast(110%)";

  return (
    <main
      className={clsx(
        "flex flex-col items-center w-full",
        "lg:overflow-hidden",
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
          className="hidden lg:flex lg:flex-col lg:h-full lg:overflow-hidden"
        >
          [ MENU UNDER DEVELOPMENT... ]
        </div>

        {/* CONTENT */}
        <div className="h-full lg:h-full lg:overflow-y-auto">

          {
            environments.length > 0 ?
              <div>
                {
                  environments.map((env, index) => {
                    return (
                      <div key={`env-${index}-${env.environment}`} className="mt-16" >

                        <div className="bg-white md:flex md:flex-row md:justify-between md:items-center md:gap-4">
                          <h3 className="font-calsans text-2xl text-coolgray-900 bg-white">{env.environment}</h3>
                          {/* STATUS BADGE */}
                          {env.status_badge ? <div className="bg-white!" dangerouslySetInnerHTML={{ __html: env.status_badge }} /> : null}
                        </div>

                        <div className="data-content flex flex-col gap-4">

                          {/* ENDPOINTS */}
                          {
                            env.endpoints?.html && env.endpoints.html.length > 0 ?
                              <DataBlock title="Endpoints:">
                                <div className="dangerouslySetInnerHTML" dangerouslySetInnerHTML={{ __html: env.endpoints.html }} />
                              </DataBlock>
                              :
                              null
                          }

                          {/* RATE LIMIT */}
                          {
                            env.rateLimit && env.rateLimit.length > 0 ?
                              <DataBlock title="Rate Limit:">
                                <span className="text-coolgray-500">{env.rateLimit}</span>
                              </DataBlock>
                              :
                              null
                          }

                          {/* BACKING NODES */}
                          {
                            env.backingNodes && env.backingNodes.length > 0 ?
                              <DataBlock title="Backing Nodes:">
                                <span className="text-coolgray-500">{env.backingNodes}</span>
                              </DataBlock>
                              :
                              null
                          }

                          {/* NODE LOCATIONS */}
                          {
                            env.nodeLocations && env.nodeLocations.length > 0 ?
                              <DataBlock title="Node Locations:">
                                <span className="text-coolgray-500">{env.nodeLocations}</span>
                              </DataBlock>
                              :
                              null
                          }

                          {/* PRIVATE ACCESS */}
                          <DataBlock title="Private access:">
                            <span className="text-brightred-500">Schedule some time to get unlimited access</span>
                          </DataBlock>

                          {/* SNAPSHOTS */}
                          {
                            snapshots.length > 0 ?
                              <DataBlock title="Snapshots:">
                                {
                                  snapshots.map((snapshot, index) => {
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
          <div className="mt-16">
            [ FAQ SECTION UNDER DEVELOPMENT... ]
          </div>

          {/* ABOUT */}
          <div className="my-16">
            [ ABOUT SECTION UNDER DEVELOPMENT... ]
          </div>

        </div>

      </section>

    </main>
  )

}