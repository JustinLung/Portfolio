<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	type Props = SVGAttributes<SVGElement>;

	const { ...rest }: Props = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" fill="none" viewBox="0 0 8 9" {...rest}
	><path fill="currentColor" d="M.9 0H0v7.668h5.22v1.176l2.136-1.596L5.22 5.652v1.176H.9z" /></svg
>
