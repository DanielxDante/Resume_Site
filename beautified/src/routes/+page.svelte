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

<!-- SPA -->

<section id="landing" class="flex flex-col items-center justify-center h-full py-10 border-b-2 border-dashed">
	<Canvas>
		<Scene />
	</Canvas>
	<span class="w-full text-xl text-center tracking-tight bg-zinc-600 rounded-md p-3" style="font-family: 'Neue Montreal'">
		Hi! I'm a full-stack software engineer based in Singapore.
	</span>
</section>

<section id="about" class="scroll-mt-16 flex flex-col items-left justify-center h-full py-10 border-b-2 border-dashed">
	<span class="text-xl font-bold border-b-4 border-zinc-600 self-start" style="font-family: 'Neue Montreal'">
		About me...
	</span>
	<p class="text-lg py-3 text-justify" style="font-family: 'Neue Montreal'">
		Freshly graduated from NTU with a First Class Honours in Computer Science, I am a software engineer with a focus on DevSecOps.
	</p>
	<p class="text-lg py-3 text-justify" style="font-family: 'Neue Montreal'">
		I have a passion for all things technology and security, from software engineering & machine learning to cloud ops and red teaming.
		I like to work on machine learning projects in my free time too.
	</p>
	<p class="text-lg py-3 text-justify" style="font-family: 'Neue Montreal'">
		Below are details of some of the projects I have developed over the years ⬇️
	</p>
</section>

<section id="projects" class="scroll-mt-16 flex flex-col items-center justify-center h-full py-10 border-b-2 border-dashed">
	<span class="text-xl font-bold border-b-4 border-zinc-600 self-start" style="font-family: 'Neue Montreal'">
		Projects
	</span>
	<!-- JustTravel -->
	<div class="py-3 text-center">
		<img src="/justtravel.jpg" alt="JustTravel Home Page" class="rounded-lg mb-2 w-[1000px] h-auto">
		<span class="text-lg" style="font-family: 'Neue Montreal'">
			JustTravel
		</span>
		<!-- Consider putting the technologies in the detailed page for projects -->
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
			AI-enhanced itinerary planning web application
		</p>
	</div>
	<div class="w-[50%] my-5 h-px border-t-2 border-dotted"></div>
	<!-- NaviLoo -->
	<div class="py-3 text-center">
		<img src="/naviloo.gif" alt="JustTravel Home Page" class="rounded-lg mb-2 w-[1000px] h-auto">
		<span class="text-lg" style="font-family: 'Neue Montreal'">
			NaviLoo
		</span>
		<div class="flex flex-wrap justify-center">
			<div class="m-2 p-2 bg-zinc-600 rounded-md text-white" style="font-family: 'Neue Montreal'">
				NextJS
			</div>
			<div class="m-2 p-2 bg-zinc-600 rounded-md text-white" style="font-family: 'Neue Montreal'">
				Django
			</div>
			<div class="m-2 p-2 bg-zinc-600 rounded-md text-white" style="font-family: 'Neue Montreal'">
				Vercel
			</div>
		</div>
		<p class="text-md" style="font-family: 'Neue Montreal'">
			Waze-like single page application for finding the nearest public toilet near you
		</p>
	</div>
	<div class="w-[50%] my-5 h-px border-t-2 border-dotted"></div>
	<!-- SuccessSculptors -->
	<div class="py-3 text-center">
		<img src="/success_sculptors.jpg" alt="JustTravel Home Page" class="rounded-lg mb-2 w-[1000px] h-auto">
		<span class="text-lg" style="font-family: 'Neue Montreal'">
			SAP SuccessSculptors
		</span>
		<div class="flex flex-wrap justify-center">
			<div class="m-2 p-2 bg-zinc-600 rounded-md text-white" style="font-family: 'Neue Montreal'">
				NextJS
			</div>
			<div class="m-2 p-2 bg-zinc-600 rounded-md text-white" style="font-family: 'Neue Montreal'">
				Django
			</div>
			<div class="m-2 p-2 bg-zinc-600 rounded-md text-white" style="font-family: 'Neue Montreal'">
				Vercel
			</div>
		</div>
		<p class="text-md" style="font-family: 'Neue Montreal'">
			Prompt-based Interviewer tool with generative AI (GPT4o) and Joule AI integration
		</p>
	</div>
	<!-- <div class="w-[50%] my-5 h-px border-t-2 border-dotted"></div>
	<div class="pt-3 text-center">
		<p class="text-md" style="font-family: 'Neue Montreal'">
			Reach out to my
			<a
				href="https://www.google.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<u class="text-cyan-300 transform transition-transform duration-300 hover:scale-110 cursor-pointer inline-block">GitHub</u>
			</a>
			page for more projects!
		</p>
	</div> -->
</section>

<section id="contact" class="scroll-mt-16 flex flex-col items-center justify-center h-full py-10">
	<span class="text-xl font-bold border-b-4 border-zinc-600 self-start" style="font-family: 'Neue Montreal'">
		Contact Me!
	</span>
	<ul class="self-start">
		<li class="pt-3">
			<a
				href="https://github.com/DanielxDante"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg class="inline-block w-5 h-5 mr-2 fill-cyan-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 0C5.37 0 0 5.37 0 12C0 17.3 3.438 21.8 8.205 23.385C8.805 23.475 9.025 23.145 9.025 22.845C9.025 22.575 9.015 21.885 9.01 20.935C5.672 21.635 4.968 19.335 4.968 19.335C4.422 17.985 3.633 17.635 3.633 17.635C2.546 16.935 3.713 16.95 3.713 16.95C4.922 17.035 5.548 18.195 5.548 18.195C6.635 20.035 8.422 19.535 9.205 19.235C9.305 18.485 9.605 17.985 9.945 17.685C7.22 17.385 4.39 16.335 4.39 11.635C4.39 10.335 4.83 9.285 5.548 8.485C5.428 8.185 5.048 6.935 5.668 5.235C5.668 5.235 6.668 4.935 9.005 6.485C9.945 6.195 10.945 6.045 11.945 6.045C12.945 6.045 13.945 6.195 14.885 6.485C17.222 4.935 18.222 5.235 18.222 5.235C18.842 6.935 18.462 8.185 18.342 8.485C19.06 9.285 19.5 10.335 19.5 11.635C19.5 16.345 16.67 17.385 13.945 17.685C14.345 18.035 14.745 18.735 14.745 19.835C14.745 21.335 14.735 22.435 14.735 22.845C14.735 23.145 14.955 23.485 15.555 23.385C20.322 21.8 23.76 17.3 23.76 12C23.76 5.37 18.63 0 12 0Z"/>
				</svg>
				<span class="text-cyan-300 transform transition-transform duration-300 hover:scale-110 cursor-pointer inline-block" style="font-family: 'Neue Montreal'">
					@DanielxDante
				</span>
			</a>
		</li>
		<li class="pt-3">
			<a
				href="https://www.linkedin.com/in/danieltaysg/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg class="inline-block w-5 h-5 mr-2 fill-cyan-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.57z"/>
				</svg>
				<span class="text-cyan-300 transform transition-transform duration-300 hover:scale-110 cursor-pointer inline-block" style="font-family: 'Neue Montreal'">
					@danieltaysg
				</span>
			</a>
		</li>
	</ul>
	<button
		on:click={downloadFile}
		class="cursor-pointer px-3 py-2 text-lg font-bold text-black bg-cyan-300 rounded-md mt-5 transform transition-transform duration-300 hover:scale-110"
		type="button"
	>
		<span class="text-sm">
			My Resume
		</span>
	</button>
</section>

<style>
</style>


