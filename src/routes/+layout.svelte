<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../styles/global.css';
	import '../styles/theme.css';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		padding: 1rem;
	}
</style>
