<script lang="ts">
	import Header from '../lib/components/Header.svelte';
	import '../app.css';

	let { children } = $props();

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let activeSection = 0;
	const sections = [
		{ 
			route: '/', 
			title: 'Introduction', 
			content: 'Welcome to my portfolio',
			background: 'bg-gradient-to-r from-blue-500 to-purple-600'
		},
		{ 
			route: '/about', 
			title: 'Projects', 
			content: 'Featured work and achievements',
			background: 'bg-gradient-to-r from-green-400 to-blue-500'
		},
		{ 
			route: '/sverdle', 
			title: 'About Me', 
			content: 'My skills, experience, and journey',
			background: 'bg-gradient-to-r from-yellow-400 to-red-500'
		}
	];

	function handleWheel(event: any) {
		// Prevent default scrolling
		event.preventDefault();

		// Determine scroll direction
		const direction = event.deltaY > 0 ? 1 : -1;
		
		// Calculate new active section
		let newActiveSection = activeSection + direction;
		
		// Ensure we stay within section bounds
		newActiveSection = Math.max(0, Math.min(newActiveSection, sections.length - 1));
		
		if (newActiveSection !== activeSection) {
			activeSection = newActiveSection;
			
			// Navigate to new route
			goto(sections[activeSection].route, { 
				replaceState: true 
			});
		}
	}

	function handleTouchStart(event: TouchEvent) {
		const touchStartY = event.touches[0].clientY;

		function handleTouchMove(event: TouchEvent) {
			const touchEndY = event.touches[0].clientY;
			const direction = touchStartY > touchEndY ? 1 : -1;

			let newActiveSection = activeSection + direction;
			newActiveSection = Math.max(0, Math.min(newActiveSection, sections.length - 1));

			if (newActiveSection !== activeSection) {
				activeSection = newActiveSection;
				goto(sections[activeSection].route, { replaceState: true });
			}

			window.removeEventListener('touchmove', handleTouchMove);
		}

		window.addEventListener('touchmove', handleTouchMove, { passive: false });
	}

	onMount(() => {
		window.addEventListener('wheel', handleWheel, { passive: false });
		window.addEventListener('touchstart', handleTouchStart, { passive: false });
		return () => {
			window.removeEventListener('wheel', handleWheel);
			window.removeEventListener('touchstart', handleTouchStart);
		};
	});
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>
			@{new Date().getFullYear()} Daniel Tay. All rights reserved.
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer p {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
