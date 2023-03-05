import { json } from '@sveltejs/kit';

export function GET({ request, platform }) {

  return json({...request, ...platform});
}
