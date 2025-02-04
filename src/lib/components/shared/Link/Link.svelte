<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import './Link.css';
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';

	interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
		href: string;
		preload?: boolean;
		underline?: boolean;
		children: Snippet;
	}

	const { href, preload, children, underline, ...rest }: LinkProps = $props();

	const isExternal = href.startsWith('http');
	const externalProps = () =>
		!isExternal
			? {}
			: {
					rel: 'noopener noreferrer',
					target: '_blank'
				};

	const isCurrent = $derived(page.url.pathname === String(href).split('?')[0]);
</script>

<a
	class="Link {underline && 'underline'}"
	data-sveltekit-preload-data={preload ? 'hover' : false}
	aria-current={isCurrent ?? undefined}
	{href}
	{...externalProps()}
	{...rest}
>
	{@render children()}
</a>
