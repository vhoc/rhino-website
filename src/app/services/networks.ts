"use server"

import type { INetworksResponse } from "@/util/types";

export default async function fetchNetworks(): Promise<INetworksResponse> {


  const query = `{
	networks(first:1000) {
		stage,
    weight,
		publishedAt,
		createdAt,
		id,
		slug,
		name,
		active,
		blockchainurl,
		stakeurl,
		logo {
			url
		}
	}
}`;

  const response = await fetch(process.env.GRAPHQL_ENDPOINT!, {
    cache: "no-store",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result: INetworksResponse = await response.json() as INetworksResponse;
  return result;

}