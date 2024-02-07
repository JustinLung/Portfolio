<script lang="ts">
	import { gsap, Expo } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.paragraph',
				scrub: 1,
				start: '10% top',
				end: 'bottom bottom'
			}
		});

		tl.fromTo(
			'.about',
			{ opacity: 0.3, },
			{
				opacity: 1,
				clipPath: "0% 0% 0% 0%",
				stagger: 0.5,
				ease: Expo.easeOut
			}
		);
	});
</script>

<div class="container">
	<p class="about">
		Creative Front End Developer with a passion for crafting visually appealing and intuitive
		digital experiences. I build innovative designs into seamless, user-friendly websites. Dedicated
		to bring ideas to life on the interwebs.
	</p>
</div>

<style lang="postcss">

	p {
		opacity: 0.1;
		font-size: 2rem;

		@media (--md) {
			font-size: 3.5rem;
		}
	}
</style>
