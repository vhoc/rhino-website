"use server"
import { type INetworksResponse, type INetwork } from "@/util/types";

export default async function fetchLogos(limit = 1000): Promise<string[]> {


  const query = `{
	networks(first:${limit}, where: {
    logoMark: {}
  }) {
		logoMark {url}
	}
}`;

  const response = await fetch(process.env.GRAPHQL_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Logos response was not ok');
  }

  const { data }: INetworksResponse = await response.json() as INetworksResponse;

  if (data?.networks && data.networks.length >= 1) {
    // 1. Map to potential URLs (still can be string | undefined)
    const rawUrls = data.networks.map(
      (network: INetwork) => network.logoMark?.url,
    );

    // 2. Filter out undefined values and explicitly declare the type of `urls` as `string[]`
    const urls: string[] = rawUrls.filter(
      (url): url is string => url !== undefined,
    );

    if (urls.length >= 1) {
      // Create a new array that is explicitly typed as string[]
      const randomized: string[] = [...urls]; // This ensures `randomized` is `string[]`

      for (let i = randomized.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        // Use a temporary variable for the swap
        // TypeScript now knows randomized[i] is a string because `randomized` is `string[]`
        const temp: string = randomized[i] ?? "";
        randomized[i] = randomized[j] ?? "";
        randomized[j] = temp;
      }

      // console.log('Fetched logos:', randomized);
      return randomized;
    }
  }

  return []

}