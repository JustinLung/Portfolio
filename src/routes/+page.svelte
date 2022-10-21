<script lang="ts">
	import Hero from '$lib/components/indexComponents/Hero.svelte';
	import FeaturedProjects from '$lib/components/indexComponents/FeaturedProjects.svelte';
	import Seperator from '$lib/components/Seperator.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import ProjectCard from '$lib/components/projectComponents/ProjectCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<svelte:head>
	<title>justin.dev</title>
</svelte:head>

<PageTransition>
	<Hero />
	<Seperator />
	<FeaturedProjects>
		<ProjectCard projectImage="/assets/images/goconnect-bookings.png" />
		<ProjectCard projectImage="/assets/images/goconnect-bookings.png" />
	</FeaturedProjects>
</PageTransition>
