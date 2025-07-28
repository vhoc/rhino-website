"use server"

export default async function fetchResources(limit: number = 1000) {


  const query = `{
	resources(first:${limit}) {
		stage,
		publishedAt,
		createdAt,
    updatedAt,
		id,
		slug,
		name,
		description,,
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

  const result = await response.json();
  return result.data;

}