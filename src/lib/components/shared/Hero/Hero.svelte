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
		gsap.from('.hero__subtitle, .hero__title', {
			opacity: 0,
			y: 30,
			stagger: 0.15,
			duration: 1,
			ease: 'expo.out',
			delay: .2,
		});
	});
</script>

<section class="hero">
	<span class="hero__subtitle">{description}</span>
	<h1 class="hero__title">{title}</h1>
</section>
