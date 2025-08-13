"use server"
import { type ISnapshotsResponse, type ISnapshot } from "@/util/types"

export default async function fetchSnapshots(snapshotName: string): Promise<ISnapshot[]> {

  if (snapshotName && snapshotName.length > 0) {

    const response = await fetch("https://snapshots.rhinostake.com/snapshot_list", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })

    if (!response.ok) {
      console.error('Snapshots response was not ok');
      return []
    }

    const json = await response.json() as ISnapshotsResponse;

    // Check if the json object contains a key that matches snapshotName
    const { result: _result, ...rest } = json;
    const snapshotsObject = rest as Record<string, ISnapshot[]>;

    if (Object.prototype.hasOwnProperty.call(snapshotsObject, snapshotName)) {
      const arr = snapshotsObject[snapshotName];
      if (arr && arr.length > 0) {
        return arr
      } else {
        return []
      }
    }
  }

  return [];
}

export async function fetchAllSnapshots(): Promise<ISnapshot[] | null> {
  const response = await fetch("https://snapshots.rhinostake.com/snapshot_list", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  });

  if (!response.ok) {
    console.error('Snapshots response was not ok');
    return null;
  }

  const json = await response.json() as ISnapshotsResponse;

  // Remove any non-snapshot keys like "result" and flatten
  const { result: _result, ...rest } = json as Record<string, unknown>;

  const flattened: (ISnapshot)[] = [];

  for (const [snapshotName, value] of Object.entries(rest)) {
    if (Array.isArray(value)) {
      for (const item of value as ISnapshot[]) {
        flattened.push({ ...item, snapshotName });
      }
    }
  }

  if (flattened && flattened.length >= 1) {
    return flattened
  }

  return [];



}