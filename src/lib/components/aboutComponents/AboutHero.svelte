<script lang="ts">
	import AboutText from './AboutText.svelte';
</script>

<section>
	<img src="/assets/images/profile.JPG" alt="profile" />
	<h1>About</h1>
	<AboutText />
</section>

<style>
	section {
		max-width: 55rem;
		margin: 0 auto;
		margin-top: 4rem;
	}

	h1 {
		font-size: var(--font-size-xl);
		padding-top: 1rem;
	}

	img {
		border-radius: 0.5rem;
		width: 100%;
	}
</style>
