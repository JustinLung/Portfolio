<script lang="ts">
	export let repeat = 3;
</script>

<div class="marquee">
	{#each new Array(repeat) as _}
		<div class="inner">
			<slot />
		</div>
	{/each}
</div>

<style lang="postcss">
	.marquee {
		grid-column: 1/-1;
		width: max-content;
		display: flex;
		gap: 5rem;

		.inner {
			display: flex;
			white-space: nowrap;
			min-width: max-content;
			animation: marquee 8s linear infinite;
		}
	}

	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}

		100% {
			transform: translateX(calc(-100% - 5rem));
		}
	}
</style>
