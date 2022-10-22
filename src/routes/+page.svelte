<script lang="ts">
	import Hero from '$lib/components/indexComponents/Hero.svelte';
	import FeaturedProjects from '$lib/components/indexComponents/FeaturedProjects.svelte';
	import Seperator from '$lib/components/Seperator.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import ProjectCard from '$lib/components/projectComponents/ProjectCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>justin.dev</title>
</svelte:head>

<PageTransition>
	<Hero />
	<Seperator />
	<FeaturedProjects>
		{#each data.projects as project}
			<ProjectCard
				projectTitle={project.title}
				projectDescription={project.description}
				projectLink={project.projectLink}
				githubLink={project.githubLink}
				projectImage="/assets/images/goconnect-bookings.png"
			/>
		{/each}
	</FeaturedProjects>
</PageTransition>
