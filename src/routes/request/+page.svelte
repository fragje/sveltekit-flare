<script>
  /** @type {import('./$types').PageData} */
  export let data;
  console.log(Object.values(data));
</script>


<div>
{#each Object.values(data) as person}
  <p>{person.ContactName}</p>
{/each}
</div>

<p>Hei from sveltekit and cloudflare pages with d1 alpha</p>
