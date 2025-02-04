<script lang="ts">
	import { onMount } from 'svelte';
	import './Hero.css';
	import { gsap } from 'gsap';

	interface HeroProps {
		title: string;
		description: string;
	}

	const { title, description }: HeroProps = $props();

	onMount(() => {
		const tl = gsap.timeline();

		tl.from('.hero__subtitle', {
			opacity: 0,
			y: 30,
			duration: 1,
			ease: 'expo.out',
			delay: 0.2
		})

			.from(
				'.hero__title .letter',
				{
					opacity: 0,
					y: 30,
					stagger: 0.07,
					duration: 1,
					ease: 'expo.out'
				},
				0.4
			);
	});
</script>

<section class="hero">
	<span class="hero__subtitle">{description}</span>
	<h1 class="hero__title">
		{#each title.split('') as letter}
			<span class="letter">{letter}</span>
		{/each}
	</h1>
</section>
