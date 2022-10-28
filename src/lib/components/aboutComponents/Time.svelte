<script lang="ts">
	import Spacer from '../Spacer.svelte';
	export let timeLink: string;
	export let timeTitle: string;
	export let timeDescription: string;
	export let timeStart: number;
	export let timeEnd: number;
</script>

<a href={timeLink} target="_blank" rel="noreferrer" data-sveltekit-prefetch>
	<span class="title">{timeTitle}</span>
	<Spacer />
	<div>
		<span>{timeDescription}</span>
		<span>{timeStart}-{timeEnd}</span>
	</div>
</a>

<style>
	a {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-content: stretch;
		align-items: flex-start;
		color: var(--color-white);
		margin-top: 1rem;
		font-size: var(--font-size-sm);
	}

	a:hover .title {
		color: var(--color-crimson);
	}

	div {
		color: var(--color-grey);
	}

	span:last-child {
		margin-left: 1rem;
	}

	@media (max-width: 100rem) {
		a {
			flex-wrap: wrap;
			justify-content: flex-start;
			align-content: flex-start;
			align-items: flex-start;
		}
	}

	@media (max-width: 35rem) {
		a {
			font-size: var(--font-size-normal);
		}
	}
</style>
