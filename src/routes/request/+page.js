import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({fetch, params }) {
  const res = await fetch(`/request`);
  const item = await res.json();

  return Object.values(item);
 
  // throw error(404, 'Not found');
}
