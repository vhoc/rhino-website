"use server"

export default async function fetchLogos(limit: number = 1000) {


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

  const { data } = await response.json();

  // Flatten into a simple string array
  const urls = data.networks.map((network: { logoMark: { url: string } }) => network.logoMark.url);

  // Create a new array with randomized elements using Fisher-Yates shuffle
  const randomized = [...urls];
  for (let i = randomized.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomized[i], randomized[j]] = [randomized[j], randomized[i]];
  }

  // console.log('Fetched logos:', randomized);
  return randomized;

}