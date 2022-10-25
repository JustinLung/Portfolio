<script lang="ts">
	import Hero from '$lib/components/indexComponents/Hero.svelte';
	import FeaturedProjects from '$lib/components/indexComponents/FeaturedProjects.svelte';
	import Seperator from '$lib/components/Seperator.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import ProjectCard from '$lib/components/projectComponents/ProjectCard.svelte';
	import type { PageData } from './$types';
	import ProjectTag from '$lib/components/projectComponents/ProjectTag.svelte';

	export let data: PageData;
	const pageTitle = 'Home';
</script>

<svelte:head>
	<title>justin.dev &#183; {pageTitle}</title>
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
				projectImage={project.image.url}
			>
				{#each project.projectTags as projectTag}
					<ProjectTag tagTitle={projectTag.title} />
				{/each}
			</ProjectCard>
		{/each}
	</FeaturedProjects>
</PageTransition>
