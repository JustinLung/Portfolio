<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, Expo } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	const projects = [
		{
			title: 'scrollbook',
			src: 'https://images.unsplash.com/photo-1679065949530-7bb1fba3ccb3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			alt: 'hi'
		},
		{
			title: 'scrollbook',
			src: 'https://images.unsplash.com/photo-1679065949530-7bb1fba3ccb3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			alt: 'hi'
		},
		{
			title: 'scrollbook',
			src: 'https://images.unsplash.com/photo-1679065949530-7bb1fba3ccb3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			alt: 'hi'
		}
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.batch('.project-title', {
			interval: 0.01,
			start: 'top center',
			onEnter: (batch) =>
				gsap.to(batch, { autoAlpha: 1, stagger: 0.15, opacity: 1, y: 0, ease: Expo.easeOut })
		});
	});
</script>

<div class="project-container">
	{#each projects as project}
		<section class="project">
			<h2 class="project-title">{project.title}</h2>
			<div>
				<img src={project.src} alt={project.alt} class="project-img" />
			</div>
		</section>
	{/each}
</div>

<style lang="postcss">
	section {
		position: sticky;
		top: 0;
		width: 100%;
		height: 100svh;

		display: grid;
		place-content: center;
		background-color: var(--black);
		h2 {
			font-family: 'FKScreamer';
			text-transform: uppercase;
			font-size: 15vw;
			position: relative;
			z-index: 1;
			opacity: 0;
			transform: translateY(100px);
		}

		div {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			max-width: 432px;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
