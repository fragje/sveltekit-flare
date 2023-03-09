import { json } from "@sveltejs/kit";

export async function GET({platform}) {
  console.log(platform);
  const count = platform.env.KV.get('count');

  return json(count);
}
