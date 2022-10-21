<section>
	<h2>Featured Projects</h2>
	<p>Some of the recent projects that has been shipped.</p>
	<div>
		<slot />
	</div>
</section>

<style>
	h2 {
		margin-top: 3rem;
		font-size: var(--font-size-xl);
	}

	p {
		font-size: var(--font-size-sm);
		padding-top: 1rem;
	}

	section {
		max-width: 55rem;
		margin: 0 auto;
	}

	div {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: space-around;
		align-items: center;
	}

	@media (max-width: 40rem) {
		h2 {
			font-size: var(--font-size-md);
		}
	}

	@media (max-width: 50rem) {
		div {
			flex-direction: column;
		}
	}
</style>
