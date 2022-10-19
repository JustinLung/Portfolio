<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
	import Seperator from '$lib/components/Seperator.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
</script>

<svelte:head>
	<title>justin.dev</title>
</svelte:head>

<PageTransition>
	<Hero />
	<Seperator />
	<FeaturedProjects />
</PageTransition>
