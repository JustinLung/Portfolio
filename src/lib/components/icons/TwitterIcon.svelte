<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	type Props = SVGAttributes<SVGElement>;

	const { ...rest }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="19"
	height="15"
	fill="none"
	viewBox="0 0 19 15"
	{...rest}
	><path
		fill="currentColor"
		fill-rule="evenodd"
		d="M5.664 15c6.797 0 10.514-5.77 10.514-10.774q0-.246-.011-.49a7.6 7.6 0 0 0 1.843-1.96 7.2 7.2 0 0 1-2.122.596A3.79 3.79 0 0 0 17.513.278a7.3 7.3 0 0 1-2.346.919A3.65 3.65 0 0 0 12.47 0c-2.041 0-3.696 1.695-3.696 3.786q0 .447.096.863C5.8 4.492 3.076 2.985 1.254.694c-.318.56-.5 1.21-.5 1.903 0 1.314.652 2.474 1.643 3.152a3.6 3.6 0 0 1-1.673-.474v.049c0 1.834 1.273 3.365 2.964 3.712a3.6 3.6 0 0 1-1.67.065c.471 1.504 1.835 2.599 3.453 2.63A7.3 7.3 0 0 1 0 13.299a10.3 10.3 0 0 0 5.664 1.7"
		clip-rule="evenodd"
	/></svg
>
