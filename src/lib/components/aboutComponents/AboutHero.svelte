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
		margin: 9rem auto 2rem;
	}
	h1 {
		font-size: var(--font-size-xl);
		margin-top: 2rem;
	}

	img {
		border-radius: 0.5rem;
		width: 100%;
	}

	@media (max-width: 55rem) {
		section {
			margin: 4rem auto 2rem;
		}
	}
</style>
