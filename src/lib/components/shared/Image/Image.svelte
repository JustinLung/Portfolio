<script lang="ts">
	import { optimize } from '$components/shared/Image/optimize';
	import type { HTMLAttributes } from 'svelte/elements';

	interface ImageProps extends HTMLAttributes<HTMLImageElement> {
		src: string;
		filename?: string;
		id?: string;
		alt?: string;
		priority?: boolean;
		width?: number;
		height?: number;
	}

	const { src, filename, id, alt, priority, width, height, ...rest }: ImageProps = $props();

	const _src = optimize({
		url: src,
		filename,
		id
	});
</script>

<img
	fetchpriority={priority ? 'high' : 'auto'}
	loading={priority ? 'eager' : 'lazy'}
	srcset={_src}
	{width}
	{height}
	decoding="async"
	{alt}
/>
