<script lang="ts">
	import { Canvas } from '@threlte/core'
  	import Scene from '$lib/components/Scene.svelte'

	  function downloadFile() {
		const link = document.createElement('a');
		link.href = '/resume.pdf';
		link.download = 'daniel_tay_resume.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
</script>


<section id="landing" class="flex flex-col items-center justify-center h-full py-10 border-b-2 border-dashed">
	<Canvas>
		<Scene />
	</Canvas>
	<span class="w-full text-xl text-center tracking-tight bg-zinc-600 rounded-md p-3" style="font-family: 'Neue Montreal'">
		Hi! I'm a software engineer based in Singapore.
	</span>
</section>

<section id="about" class="scroll-mt-16 flex flex-col items-left justify-center h-full py-10 border-b-2 border-dashed">
	<span class="text-xl font-bold border-b-4 border-zinc-600 self-start" style="font-family: 'Neue Montreal'">
		About me...
	</span>
	<p class="text-lg py-3" style="font-family: 'Neue Montreal'">
		Freshly graduated from NTU with a First Class Honours in Computer Science, I am a software engineer with a focus on DevSecOps.
	</p>
	<p class="text-lg py-3" style="font-family: 'Neue Montreal'">
		I have a passion for all things technology and security, from software engineering & machine learning to cloud ops and red teaming.
		I like to work on machine learning projects in my free time too.
	</p>
	<p class="text-lg py-3" style="font-family: 'Neue Montreal'">
		Below are details of some of the projects I have developed over the years.
	</p>
</section>

<section id="projects" class="scroll-mt-16 flex flex-col items-center justify-center h-full py-10 border-b-2 border-dashed">
	<span class="text-xl font-bold border-b-4 border-zinc-600 self-start" style="font-family: 'Neue Montreal'">
		Academic Projects
	</span>
	<div class="py-3 text-center">
		<img src="/justtravel.jpg" alt="JustTravel Home Page" class="rounded-lg mb-2">
		<span class="text-lg" style="font-family: 'Neue Montreal'">
			JustTravel
		</span>
		<div class="flex flex-wrap justify-center">
			<div class="m-2 p-2 bg-zinc-600 rounded-md text-white" style="font-family: 'Neue Montreal'">
				NextJS
			</div>
			<div class="m-2 p-2 bg-zinc-600 rounded-md text-white" style="font-family: 'Neue Montreal'">
				Flask
			</div>
			<div class="m-2 p-2 bg-zinc-600 rounded-md text-white" style="font-family: 'Neue Montreal'">
				AWS
			</div>
			<div class="m-2 p-2 bg-zinc-600 rounded-md text-white" style="font-family: 'Neue Montreal'">
				Prompt Engineering
			</div>
		</div>
		<p class="text-md" style="font-family: 'Neue Montreal'">
			An AI-enhanced itinerary planning web application
		</p>
	</div>
</section>

<section id="contact" class="scroll-mt-16 flex flex-col items-center justify-center h-full py-10">
	<span class="text-xl font-bold border-b-4 border-zinc-600 self-start" style="font-family: 'Neue Montreal'">
		Contact Me!
	</span>
	<button
		on:click={downloadFile}
		class="cursor-pointer px-3 py-2 text-lg font-bold text-black bg-cyan-300 rounded-md mt-5"
		type="button"
	>
		<span class="text-sm">
			My Resume
		</span>
	</button>
</section>



<style>
</style>


