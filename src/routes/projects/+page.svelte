<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectSection from '$lib/components/ProjectSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const pageTitle = 'Projects';
</script>

<svelte:head>
	<title>justin.dev &#183; {pageTitle}</title>
</svelte:head>

<PageTransition>
	<ProjectSection>
		{#each data.projects as project}
			<ProjectCard
				projectImage="/assets/images/goconnect-bookings.png"
				projectTitle={project.title}
				projectDescription={project.description}
				projectLink={project.projectLinkl}
				githubLink={project.githubLink}
			/>
		{/each}
	</ProjectSection>
</PageTransition>
