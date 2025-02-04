<script lang="ts">
	import './PreFooter.css';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	interface PreFooterProps {
		title: string;
		description: string;
	}

	const { title = 'Any Ideas?', description }: PreFooterProps = $props();

	// onMount(() => {
	// 	gsap.registerPlugin(ScrollTrigger);

	// 	gsap.from('.title', {
	// 		opacity: 0,
	// 		y: 50,
	// 		duration: 0.5,
	// 		ease: 'expo.out',
	// 		scrollTrigger: {
	// 			trigger: '.prefooter',
	// 			start: 'top 80%',
	// 			toggleActions: 'play none none none'
	// 		}
	// 	});
	// });
</script>

<section class="prefooter">
	<div class="container">
		<div>
			<h2 class="prefooter__title">{title}</h2>
			<p class="prefooter__description">{description}</p>
		</div>
		<a href="mailto:justinlung77@gmail.com" class="link">Start a project</a>
	</div>
</section>
