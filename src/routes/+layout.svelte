<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Lenis from '$lib/components/Lenis.svelte';

	import '$lib/css/app.css';
	import '$lib/css/media.css';
	import '$lib/css/fonts.css';
	import '$lib/css/normalize.css';
	import '$lib/css/variables.css';
</script>

<Lenis />
<Header />
<main class="main">
	<slot />
</main>
<Footer />
