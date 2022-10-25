<section>
	<h2>Featured Projects</h2>
	<p>
		Some of the recent projects that has been shipped. Look at more <a href="/projects">projects</a
		>!
	</p>
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
		color: var(--color-grey);
		font-size: var(--font-size-sm);
		padding-top: 1rem;
	}

	a {
		color: var(--color-white);
		font-weight: bold;
		transition: 0.3s ease-in-out;
	}

	a:hover {
		color: var(--color-pink);
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
	}

	@media (max-width: 35rem) {
		p {
			font-size: var(--font-size-normal);
		}
	}

	@media (max-width: 40rem) {
		h2 {
			font-size: var(--font-size-md);
		}
	}

	@media (max-width: 50rem) {
		div {
			gap: 0;
			flex-direction: column;
		}
	}
</style>
