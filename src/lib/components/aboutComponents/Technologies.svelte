<section>
	<h2>Technologies</h2>
	<div>
		<slot />
	</div>
</section>

<style>
	section {
		max-width: 55rem;
		margin: 2rem auto 0;
		position: relative;
	}

	h2 {
		font-size: var(--font-size-lg);
		margin-bottom: 1rem;
	}

	div {
		overflow: hidden;
		display: flex;
		margin: 0 auto;
	}

	section:after {
		content: '';
		background: linear-gradient(to left, var(--color-dark), transparent);
		height: 100%;
		width: 10rem;
		position: absolute;
		z-index: 1;
		top: 0;
		right: 0;
	}
</style>
