<script>
  import { error } from '@sveltejs/kit';
  export let data;

  $: if (data.studio === null) {
    throw error(404, { message: 'Studio not available' });
  }
</script>

{#if data.studio}
  <div class="sanity-studio-container">
    <iframe
      src={data.studio.url}
      title="Sanity Studio"
      width="100%"
      height="100%"
      frameborder="0"
    ></iframe>
  </div>
{/if}

<style>
  .sanity-studio-container {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>