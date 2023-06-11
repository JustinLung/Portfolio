<script>
	import { fadein } from '$lib/actions/fadeIn';
	import Button from './Button.svelte';
</script>

<section id="works">
	<div class="divider" />
	<header use:fadein={{ loop: true, stagger: 0.15 }}>
		<h2>
			Recent Case Studies
		</h2>
		<Button href="/work">VIEW ALL WORKS</Button>
	</header>
	<div class="container">
		<slot />
	</div>
</section>

<style>
	section {
		padding: 2rem;
		max-width: 85rem;
		margin: 0 auto;
	}

	h2 {
		font-family: 'Migra';
		font-size: clamp(1.3rem, 4vw, 3rem);
		font-weight: 300;
	}

	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.divider {
		height: 1px;
		width: 100%;
		background: var(--raisin-black);
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 auto;

		gap: 1rem;
	}
</style>
