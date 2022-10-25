<script lang="ts">
	export let tagTitle: string;
</script>

<span>{tagTitle}</span>

<style>
	span {
		background-color: var(--color-pink);
		opacity: 0.8;
		padding: 0.2rem 1rem;
		font-size: var(--font-size-sm);
		border-radius: 0.2rem;
		transition: 0.3s ease-in-out;
		cursor: pointer;
	}

	span:hover {
		opacity: 1;
	}

	@media (max-width: 35rem) {
		span {
			padding: 0.5rem 1rem;
			font-size: var(--font-size-normal);
		}
	}
</style>
