import { json } from '@sveltejs/kit';

export async function GET({ request, platform }) {

  // const response = await request.env.FLARE('count');
  
  return json(platform);
}
