<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	type Props = SVGAttributes<SVGElement>;

	const { ...rest }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="20"
	height="14"
	fill="none"
	viewBox="0 0 20 14"
	{...rest}
	><path fill="currentColor" d="m13 14 7-7-7-7-1.05 1.05 5.2 5.2H0v1.5h17.15l-5.2 5.2z" /></svg
>
