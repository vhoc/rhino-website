"use server"
import { type ISnapshotsResponse, type ISnapshot } from "@/util/types"

export default async function fetchSnapshots(slug?: string): Promise<ISnapshot[]> {

  const resourceName = slug?.split('-')[0]?.toLowerCase()

  const response = await fetch(process.env.SNAPSHOTS_URL!, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

  if (!response.ok) {
    console.error('Logos response was not ok');
    return []
  }

  const json = await response.json() as ISnapshotsResponse;
  const { result: _, ...snapshotsObject } = json; // Remove the `result` property
  const snapshots = Object.entries(snapshotsObject).flatMap(([key, arr]) =>
    arr.map(obj => ({ ...obj, resourceName: key }))
  )

  // console.log('Fetched snapshots:', snapshots);

  if (resourceName && resourceName.length > 0) {
    const filteredSnapshots = snapshots.filter(snapshot => snapshot.resourceName === resourceName);
    console.log('Filtered snapshots:', filteredSnapshots);
    return filteredSnapshots;
  }

  if (snapshots.length >= 1) {
    return snapshots;
  }

  return [];
}