<script lang="ts">
	import Link from '$components/shared/Link/Link.svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

	interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
		children: Snippet;
		href?: string | null;
		type?: HTMLButtonAttributes['type'] & undefined;
	}

	const { href, type, children, ...rest }: ButtonProps = $props();
	const linkClass = href && 'link';
</script>

{#if href}
	<Link {href} {...rest} class={[linkClass, 'button', rest.class]}>
		{@render children()}
	</Link>
{:else}
	<button {type} {...rest} class={[linkClass, 'button', rest.class]}>
		{@render children()}
	</button>
{/if}
