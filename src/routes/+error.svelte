<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { onMount } from 'svelte';
	import { gsap, Expo } from 'gsap';

	onMount(() => {
		const tl = gsap.timeline();

		tl.fromTo(
			'.notfound-title',
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
			'.notfound-description',
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
		gsap.fromTo(
			'.notfound-button',
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
				delay: 0.6
			}
		);
	});
</script>

<section>
	<h1 class="notfound-title">Dude! Where's my page?</h1>
	<p class="notfound-description">
		The internet is a mysterious and powerful place, and it's mystery is only exceeded by it's
		power.
	</p>
	<div class="notfound-button">
		<Button href="/">Go Home</Button>
	</div>
</section>

<style>
	h1,
	p {
		padding: 0;
		margin: 0;
	}

	h1 {
		font-family: 'Migra';
		font-size: clamp(2rem, 4vw, 3.8rem);
		font-weight: 100;
	}

	p {
		max-width: 30rem;
		text-align: center;
	}

	section {
		height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 0 1.5rem;
	}
</style>
