<script lang="ts">
	import Seperator from './Seperator.svelte';
</script>

<section>
	<h1>Projects</h1>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque dolore commodi quisquam sunt
		amet, sequi accusamus molestiae eaque pariatur. Ipsam.
	</p>
	<Seperator />
	<slot />
</section>

<style>
	section {
		max-width: 55rem;
		margin: 9rem auto 0;
	}

	h1 {
		font-size: var(--font-size-2xl);
		line-height: 5rem;
	}

	p {
		color: var(--color-grey);
		font-size: var(--font-size-sm);
		line-height: 2rem;
		padding: 1rem 0 2rem;
	}

	@media (max-width: 40rem) {
		section {
			margin: 4rem auto 0;
		}

		h1 {
			font-size: var(--font-size-lg);
			line-height: 2rem;
		}
	}
</style>
