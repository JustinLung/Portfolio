<script lang="ts">
	export let href: string | null = null;
	const component = href ? 'a' : 'button';
</script>

<svelte:element
	this={component}
	rel={href?.includes('http') ? 'noopener noreferrer' : undefined}
	target={href?.includes('http') ? '_blank' : undefined}
	class="button"
	{href}
	{...$$restProps}
>
	<slot />
</svelte:element>

<style>
	.button {
		color: currentColor;
		all: unset;
		cursor: pointer;
		border: 1px solid;
		padding: 0.5em 1rem;
		border-radius: 18px;
		font-size: 0.875rem;
		transition: 0.2s color ease-out;
	}

	.button:hover {
		background-color: var(--raisin-black);
		color: var(--ash);
	}
</style>
