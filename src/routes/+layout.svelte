<script lang="ts">
	import '../styles/style.css';
	import '../styles/theme.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
