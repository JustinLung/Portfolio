<script lang="ts">
	import { onMount } from 'svelte';
	import './Projects.css';
	import { gsap } from 'gsap';

	interface ProjectsProps {
		title: string;
	}

	const { title = 'Projects' }: ProjectsProps = $props();

	export const projects = [
		{
			title: 'Project Title 1',
			tag: 'Web Development',
			image: '/images/me.jpg'
		},
		{
			title: 'Project Title 2',
			tag: 'Mobile App',
			image:
				'https://images.unsplash.com/photo-1738363436637-ee6f4a910715?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'Project Title 3',
			tag: 'UI/UX Design',
			image: '/images/me.jpg'
		},
		{
			title: 'Project Title 4',
			tag: 'Data Science',
			image: '/images/me.jpg'
		},
		{
			title: 'Project Title 5',
			tag: 'Machine Learning',
			image: '/images/me.jpg'
		}
	];

	let imageRef: HTMLDivElement | null = null;

	const handleMouseMove = (event: MouseEvent, imageSrc: string) => {
		if (!imageRef) return;

		const { clientX: x, clientY: y } = event;

		gsap.to(imageRef, {
			x,
			y,
			opacity: 1,
			duration: 0.2,
			ease: 'power3.out'
		});

		imageRef.style.backgroundImage = `url(${imageSrc})`;
	};

	const handleMouseLeave = () => {
		if (!imageRef) return;

		gsap.to(imageRef, {
			opacity: 0,
			duration: 0.3
		});
	};

	onMount(() => {
		const tl = gsap.timeline();

		tl.from(
			'.projects__title .letter',
			{
				opacity: 0,
				y: 30,
				stagger: 0.07,
				duration: 1,
				ease: 'expo.out'
			},
			0.4
		);

		tl.from(
			'.projects__list-item',
			{
				opacity: 0,
				y: 20,
				stagger: 0.1,
				duration: 0.8,
				ease: 'expo.out'
			},
			0.6
		);
	});
</script>

<section class="projects container">
	<h1 class="projects__title">
		{#each title.split('') as letter}
			<span class="letter">{letter}</span>
		{/each}
	</h1>

	<ul class="projects__list">
		{#each projects as project}
			<li
				class="projects__list-item"
				onmousemove={(e) => handleMouseMove(e, project.image)}
				onmouseleave={handleMouseLeave}
			>
				<a href="" class="projects__list-link">
					<span class="project__title">{project.title}</span>
					<span class="project__tag">{project.tag}</span>
				</a>
			</li>
		{/each}
	</ul>

	<!-- Floating image element -->
	<div bind:this={imageRef} class="project-image-trail"></div>
</section>
