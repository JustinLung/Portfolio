<script lang="ts">
	import Image from '../Image/Image.svelte';
	import './About.css';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	interface AboutProps {
		title: string;
		intro: string;
		description: string;
		src: string;
		alt: string;
	}

	const { title, intro, description, src, alt }: AboutProps = $props();

	onMount(() => {
		gsap.fromTo(
			'.about__inner h1',
			{
				opacity: 0,
				y: 50
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				delay: 0.1,
				ease: 'expo.out'
			}
		);

		gsap.fromTo(
			'.intro',
			{
				opacity: 0,
				y: 30
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				delay: 0.2,
				ease: 'expo.out'
			}
		);

		gsap.fromTo(
			'.description',
			{
				opacity: 0,
				y: 30
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				delay: 0.3,
				ease: 'expo.out'
			}
		);

		gsap.fromTo(
			'.about__image-container',
			{
				clipPath: 'inset(100% 0% 0% 0%)',
				y: 100
			},
			{
				clipPath: 'inset(0% 0% 0% 0%)',
				duration: 0.8,
				y: 0,
				delay: 0.4,
				ease: 'expo.out'
			}
		);
	});
</script>

<section class="about">
	<div class="about__inner">
		<h1>{title}</h1>
		<p class="intro">
			{intro}
		</p>
		<p class="description">
			{description}
		</p>
	</div>
	<picture class="about__image-container">
		<Image {src} {alt} />
	</picture>
</section>
