<script lang="ts">
    export let data;
  
    if (!data.studio) {
      throw new Error('Not Found');
    }
  </script>
  
  {#if data.studio}
    <iframe 
      src={data.studio.url} 
      title="Sanity Studio"
      style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    ></iframe>
  {/if}