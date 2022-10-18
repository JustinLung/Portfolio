<section>
	<h2>Featured Projects</h2>
	<slot />
</section>

<style>
	h2 {
		margin-top: 3rem;
		font-size: var(--font-size-xl);
	}
	section {
		max-width: 55rem;
		margin: 0 auto;
	}

	@media (max-width: 40rem) {
		h2 {
			font-size: var(--font-size-md);
		}
	}
</style>
