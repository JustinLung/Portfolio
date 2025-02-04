<script lang="ts">
	import { onMount } from 'svelte';
	import Link from '../Link/Link.svelte';
	import './ErrorPage.css';
	import gsap from 'gsap';

	interface ErrorPageProps {
		status: string;
		description?: string;
	}

	const { status, description }: ErrorPageProps = $props();

	onMount(() => {
		const tl = gsap.timeline();

		tl.from('.ErrorPage__status', {
			opacity: 0,
			y: 30,
			stagger: 0.07,
			duration: 1,
			ease: 'expo.out',
			delay: 0.2
		})
			.from(
				'.ErrorPage__description',
				{
					opacity: 0,
					y: 30,
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

<section class="ErrorPage">
	<h1 class="ErrorPage__status">
		{#each status.split('') as letter}
			<span class="letter">{letter}</span>
		{/each}
	</h1>
	<p class="ErrorPage__description">{description}</p>
	<Link href="/" class="link">Go back to home</Link>
</section>
