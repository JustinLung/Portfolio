<div class="grid">
	<h1>hi</h1>
	<h1>hi</h1>
	<h1>hi</h1>
	<h1>hi</h1>
	<h1>hi</h1>
	<h1>hi</h1>
</div>

<style lang="postcss">
	.grid {
		display: grid;
        /* grid-template-columns: repeat(1, 1fr); */

		@media (--sm) {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
