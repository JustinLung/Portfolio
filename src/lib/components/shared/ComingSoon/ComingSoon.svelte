<script lang="ts">
	import { onMount } from 'svelte';
	import './ComingSoon.css';
	import gsap from 'gsap';
	import Link from '$components/shared/Link/Link.svelte';

	interface ErrorPageProps {
		title: string;
		description?: string;
	}

	const { title, description }: ErrorPageProps = $props();

	onMount(() => {
		const tl = gsap.timeline();

		tl.from('.coming-soon__title', {
			opacity: 0,
			y: 30,
			stagger: 0.07,
			duration: 1,
			ease: 'expo.out',
			delay: 0.2
		})
			.from(
				'.coming-soon__description',
				{
					opacity: 0,
					y: 30,
					duration: 1,
					ease: 'expo.out'
				},
				0.4
			)
			.from(
				'.coming-soon__title .letter',
				{
					opacity: 0,
					y: 30,
					stagger: 0.07,
					duration: 1,
					ease: 'expo.out'
				},
				0.4
			)
			.from(
				'.link',
				{
					opacity: 0,
					y: 30,
					duration: 1,
					ease: 'expo.out'
				},
				0.6
			);
	});
</script>

<section class="coming-soon">
	<h1 class="coming-soon__title">
		{#each title.split('') as letter}
			<span class="letter">{letter}</span>
		{/each}
	</h1>
	<p class="coming-soon__description">{description}</p>
	<Link href="/" class="link">Go back to home</Link>
</section>
