<script lang="ts">
	import AboutText from '$lib/components/AboutComponents/AboutText.svelte';
	import Timeline from '$lib/components/aboutComponents/Timeline.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Seperator from '$lib/components/Seperator.svelte';

	const pageTitle = 'About';
</script>

<svelte:head>
	<title>justin.dev &#183; {pageTitle}</title>
</svelte:head>

<PageTransition>
	<AboutText />
	<Timeline />
</PageTransition>
