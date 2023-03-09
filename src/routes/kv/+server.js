import { json } from "@sveltejs/kit";

export async function GET({platform}) {
  console.log(platform);
  const result = await platform.env.KV.get('count');

  return json(result);
}
