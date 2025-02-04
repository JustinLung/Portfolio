<script lang="ts">
	import Lenis from 'lenis';

	$effect(() => {
		// Initialize Lenis
		const lenis = new Lenis();

		window.Lenis = lenis;

		// Use requestAnimationFrame to continuously update the scroll
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>
