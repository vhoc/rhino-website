"use server"

export default async function fetchNetworks() {


  const query = `{
	networks(first:1000) {
		stage,
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
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result = await response.json();
  return result.data;

}