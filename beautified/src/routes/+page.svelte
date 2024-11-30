<script lang="ts">
	import { Canvas } from '@threlte/core'
  	import Scene from '$lib/components/Scene.svelte'
</script>

<svelte:head>
	<title>Daniel Tay</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Welcome to my portfolio</h1>
	<Canvas>
		<Scene />
	</Canvas>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
