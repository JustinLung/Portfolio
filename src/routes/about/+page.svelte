<script lang="ts">
	import AboutHero from '$lib/components/aboutComponents/AboutHero.svelte';
	import Technologies from '$lib/components/aboutComponents/Technologies.svelte';
	import Technology from '$lib/components/aboutComponents/Technology.svelte';
	import Time from '$lib/components/aboutComponents/Time.svelte';
	import Timeline from '$lib/components/aboutComponents/Timeline.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Seperator from '$lib/components/Seperator.svelte';
	import type { PageData } from './$types';

	const pageTitle = 'About';
	export let data: PageData;
</script>

<svelte:head>
	<title>justin.dev &#183; {pageTitle}</title>
</svelte:head>

<PageTransition>
	<AboutHero />
	<Seperator />
	<Technologies>
		<Technology technologyImage="/assets/images/svelte-logo.png" technologyTitle="Sveltekit" />
		<Technology technologyImage="/assets/images/svelte-logo.png" technologyTitle="Sveltekit" />
		<Technology technologyImage="/assets/images/svelte-logo.png" technologyTitle="Sveltekit" />
		<Technology technologyImage="/assets/images/svelte-logo.png" technologyTitle="Sveltekit" />
		<Technology technologyImage="/assets/images/svelte-logo.png" technologyTitle="Sveltekit" />
		<Technology technologyImage="/assets/images/svelte-logo.png" technologyTitle="Sveltekit" />
	</Technologies>
	<Seperator />
	<Timeline>
		{#each data.timelines as timeline}
			<Time
				timeTitle={timeline.title}
				timeDescription={timeline.description}
				timeLink={timeline.link}
				timeStart={timeline.timeStart}
				timeEnd={timeline.timeEnd}
			/>
		{/each}
	</Timeline>
</PageTransition>
