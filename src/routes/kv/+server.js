import { json } from "@sveltejs/kit";

export async function GET({platform}) {
  console.log(platform);
  const { results } = await platform.env.KV('count');

  return json(results);
}
