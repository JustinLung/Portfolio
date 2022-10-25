<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import ProjectCard from '$lib/components/projectComponents/ProjectCard.svelte';
	import ProjectSection from '$lib/components/projectComponents/ProjectSection.svelte';
	import ProjectTag from '$lib/components/projectComponents/ProjectTag.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const pageTitle = 'Projects';

	console.log(data);
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
			>
				{#each project.projectTags as projectTag}
					<ProjectTag tagTitle={projectTag.title} />
				{/each}
			</ProjectCard>
		{/each}
	</ProjectSection>
</PageTransition>
