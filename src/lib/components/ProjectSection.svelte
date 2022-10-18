<script lang="ts">
	import Seperator from './Seperator.svelte';
</script>

<section>
	<h1>Projects</h1>
	<p>Here are some of my most proud made projects on the web.</p>
	<Seperator />
	<slot />
</section>

<style>
	section {
		max-width: 55rem;
		margin: 9rem auto 0;
	}

	h1 {
	}
</style>
