<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Lenis from '$lib/components/Lenis.svelte';

	import '$lib/css/app.css';
	import '$lib/css/media.css';
	import '$lib/css/normalize.css';
	import '$lib/css/variables.css';
</script>

<Lenis />
<Header />
<main>
	<slot />
</main>

<Footer />
<div class="noise" />

<style lang="postcss">
	.noise {
		--src: 0;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 11;

		&:after {
			position: absolute;
			top: -10rem;
			left: -10rem;
			-webkit-animation: noise 1s steps(2) infinite;
			animation: noise 1s steps(2) infinite;
			background-image: url(../../../images/noise.png);
			background-position: 50%;
			width: calc(100% + 20rem);
			height: calc(100% + 20rem);
			content: '';
		}
	}
</style>
