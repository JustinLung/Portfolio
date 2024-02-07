<script lang="ts">
	import { gsap, Expo } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	// onMount(() => {
	// 	gsap.registerPlugin(ScrollTrigger);
	// 	const tl = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: '.paragraph',
	// 			scrub: false,
	// 			start: '20% top',
	// 			end: 'bottom bottom',
	// 			once: true
	// 		}
	// 	});

	// 	tl.fromTo(
	// 		'.divider',
	// 		{ scaleX: '0%' },
	// 		{
	// 			scaleX: '100%',
	// 			duration: .7,
	// 			ease: Expo.easeOut
	// 		}
	// 	);
	// });
</script>

<span class="divider" />

<style lang="postcss">
	.divider {
		max-width: 85rem;
		margin-inline: auto;
		width: 100%;
		height: 1px;
		display: block;
		background-color: var(--white);
		transform-origin: left;
	}
</style>
