<script lang="ts">
	import { gsap } from 'gsap';
	import Button from './Button.svelte';
	import { onMount } from 'svelte';

	export let job: string;
</script>

<section>
	<span class="tag-text">hello there</span>
	<h1>
		I’m Justin Lung. A creative frontend developer, from <span class="italic">Amsterdam</span>
		specialized in <span class="italic">interactive</span>
		products
	</h1>
	<p>Currently working at {job}</p>
	<Button href="/work" class="button">EXPLORE WORK</Button>
</section>

<style>
	section {
		height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		gap: 1.5rem;
	}

	.tag-text {
		font-size: clamp(0.75rem, 4vw, 0.875rem);
		text-transform: uppercase;
	}

	.italic {
		font-style: italic;
		font-weight: 400;
		border-bottom: 2px solid;
	}

	h1 {
		font-family: 'Migra';
		font-size: clamp(1.5rem, 4vw, 3.8rem);
		font-weight: 100;
		text-align: center;
		max-width: 55rem;
		padding: 0;
		margin: 0;
	}

	p {
		font-family: 'Migra';
		font-size: clamp(0.875rem, 4vw, 2rem);
		padding: 0;
		margin: 0;
	}
</style>
