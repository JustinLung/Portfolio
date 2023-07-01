<script lang="ts">
	import '../css/app.css';
	import '../css/fonts.css';
	import '../css/variables.css';
	
	import Header from '$lib/components/layout/Header.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Lenis from '$lib/components/Lenis.svelte';
	import Preloader from '$lib/components/Preloader.svelte';
</script>

<Lenis />
<Header />
<main>
	<slot />
</main>
<Footer />
