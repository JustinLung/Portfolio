<script lang="ts">
	import { onMount } from 'svelte';
	import './Projects.css';
	import { gsap } from 'gsap';
	import { dummyProjects } from '$lib/util/projects';

	interface ProjectsProps {
		title: string;
		projects: any[];
	}

	const { title = 'Projects', projects }: ProjectsProps = $props();
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
				onmousemove={(e) => handleMouseMove(e, project.image.url)}
				onmouseleave={handleMouseLeave}
			>
				<a href="" class="projects__list-link">
					<span class="project__title">{project.title}</span>
					<div class="project__tags">
						{#each project.tags as tag}
							<span class="project__tag"> 
								<span class="middle-dot">&#183;</span>
								{tag.tag}
							</span>
						{/each}
					</div>
				</a>
			</li>
		{/each}
	</ul>

	<!-- Floating image element -->
	<div bind:this={imageRef} class="project-image-trail"></div>
</section>
