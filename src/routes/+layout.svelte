<script lang="ts">
	import Header from '$lib/components/features/layout/Header/Header.svelte';
	import Footer from '$lib/components/features/layout/Footer/Footer.svelte';

	import '$lib/css/app.css';
	import '$lib/css/fonts.css';
	import '$lib/css/grid.css';
	import '$lib/css/lenis.css';
	import '$lib/css/normalize.css';
	import '$lib/css/scrollbar.css';
	import '$lib/css/typography.css';
	import '$lib/css/variables.css';
	import '$lib/css/colors.css';
	import '$lib/css/buttonLinks.css';

	import Favicons from '$components/features/Favicons.svelte';
	import DesignHelper from '$components/features/DesignHelper/DesignHelper.svelte';
	import PageTransition from '$components/shared/PageTransition/PageTransition.svelte';
	import Lenis from '$components/shared/Lenis/Lenis.svelte';
	import { dev } from '$app/environment';
	import { useVhFix } from '$lib/util/useVhFix.svelte';

	const { children } = $props();

	useVhFix();

	import { gsap } from 'gsap';

	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		if (dev) {
			console.log('gsap', gsap);
			console.log('ScrollTrigger', ScrollTrigger);
		}
	});
</script>

<Lenis />
<Favicons />

<Header />
<main class="container">
	{@render children()}
</main>
<Footer />
<PageTransition />
