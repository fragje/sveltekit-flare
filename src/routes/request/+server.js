import { json } from '@sveltejs/kit';

export async function GET({ request, platform }) {

  const response = await platform.env.FLARE('count');
  // const test = 'hello world';
  
  return json(response);
}
