import { type IResourcesResponse } from "@/util/types";

export default async function fetchResources(limit = 1000): Promise<IResourcesResponse> {
  "use server";

  const query = `{
	resources(first:${limit}, stage: PUBLISHED) {
		stage,
		publishedAt,
		createdAt,
    updatedAt,
		id,
		slug,
		name,
		description,
		url,
    active,
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
    throw new Error('Resource response was not ok');
  }

  const result: IResourcesResponse = await response.json() as IResourcesResponse;
  return result;

}

export async function fetchOneResource(slug: string): Promise<IResourcesResponse> {

  const query = `{
    resources(where: { slug: "${slug}" }, stage: PUBLISHED) {
      stage,
      publishedAt,
      createdAt,
      updatedAt,
      id,
      slug,
      name,
      description,
      url,
      active,
      logo {
        url
      },
      aboutChain {
        html
      }
    }
  }`;

  const response = await fetch(process.env.GRAPHQL_ENDPOINT!, {
    cache: 'no-store',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Resource response was not ok');
  }

  const result: IResourcesResponse = await response.json() as IResourcesResponse;
  return result;

}