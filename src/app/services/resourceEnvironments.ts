import { type IResourceEnvironmentResponse } from "@/util/types";

export default async function fetchResourceEnvironments(slug: string): Promise<IResourceEnvironmentResponse> {

  const query = `{
  resourceEnvironments(where: { resource: { slug: "${slug}" } }, stage: PUBLISHED) {
      chain_id
      weight
      endpoints {
        html
      }
      environment
      nodeLocations
      rateLimit
      backingNodes
      snapshotName
      status_badge
      privateAccess {
        html
      }
      resource {
          slug
          name
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

  const result: IResourceEnvironmentResponse = await response.json() as IResourceEnvironmentResponse;
  return result;

}