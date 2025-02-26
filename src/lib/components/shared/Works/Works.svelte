<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import Project from '../Project/Project.svelte';
	import './Works.css';
	import Link from '../Link/Link.svelte';
	import { dummyProjects } from '$lib/util/projects';

	interface WorksProps {
		title: string;
		description: string;
		featuredProjects: any[];
	}

	const { title, description, featuredProjects }: WorksProps = $props();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			'.works__title',
			{ y: -30, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: 'expo.out',
				scrollTrigger: {
					trigger: '.works__header',
					start: 'top 80%',
					end: 'bottom 20%'
				}
			}
		);

		gsap.fromTo(
			'.works__description',
			{ y: -30, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: 'expo.out',
				delay: 0.2,
				scrollTrigger: {
					trigger: '.works__header',
					start: 'top 80%',
					end: 'bottom 20%'
				}
			}
		);

		gsap.fromTo(
			'.works__projects > *',
			{ y: 30, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: 'expo.out',
				stagger: 0.2,
				scrollTrigger: {
					trigger: '.works__projects',
					start: 'top 80%',
					end: 'bottom 20%'
				}
			}
		);
	});
</script>

<section class="works container">
	<div class="works__header">
		<h2 class="works__title">{title}</h2>
		<p class="works__description">{description}</p>
	</div>
	<div class="works__projects">
		{#each featuredProjects as project}
			<Project
				name={project.title as string}
				tags={project.tags}
				image={project.image.url}
				alt={project.image.alt}
			/>
		{/each}
	</div>
</section>
