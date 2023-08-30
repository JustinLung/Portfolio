<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from '@studio-freight/lenis';

	onMount(() => {
		const lenis = new Lenis();

		window.Lenis = lenis;

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>
