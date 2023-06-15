<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, Expo } from 'gsap';

    export let title: string;
    export let description: string;

	onMount(() => {
		const tl = gsap.timeline();

		tl.fromTo(
			'.project-hero-title',
			{
				skewY: '10deg',
				opacity: 0,
				y: 100
			},
			{
				skewY: '0deg',
				opacity: 1,
				y: 0,
				ease: Expo.easeOut,
				duration: 1,
				delay: 0.4
			}
		);

		gsap.fromTo(
			'.project-hero-description',
			{
				skewY: '10deg',
				opacity: 0,
				y: 100
			},
			{
				skewY: '0deg',
				opacity: 1,
				y: 0,
				ease: Expo.easeOut,
				duration: 1,
				delay: 0.5
			}
		);
	});
</script>

<section>
	<span class="project-hero-description">{description}</span>
	<h1 class="project-hero-title">{title}</h1>
</section>

<style>
	h1 {
		font-family: 'Migra';
		font-weight: 300;
		font-size: clamp(4rem, 4vw, 3.8rem);

		padding: 0;
		margin: 0;
	}

	span {
		font-size: clamp(0.75rem, 4vw, 0.875rem);
	}

	section {
		height: 70svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
</style>
