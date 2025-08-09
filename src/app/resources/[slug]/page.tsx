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


    </main>
  )

}