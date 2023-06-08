<script lang="ts">
	import '../css/app.css';
	import '../css/fonts.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Lenis from '$lib/components/Lenis.svelte';
</script>

<Lenis />
<Navigation />
<main>
	<slot />
</main>
<Footer />
