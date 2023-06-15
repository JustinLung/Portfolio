<script lang="ts">
	import { fadein } from '$lib/actions/fadeIn';
</script>

<section>
	<p use:fadein={{ loop: true, y: 25, delay: 0.2 }}>if you've got any questions</p>
	<a href="mailto:info@justinlung.nl" use:fadein={{ loop: true, y: 25, delay: 0.3 }}>Send an email</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 10rem 0;
	}

	p {
		font-size: 0.875rem;
		text-transform: uppercase;
	}

	a {
		color: currentColor;
		font-family: Migra;
		font-size: clamp(2rem, 4vw, 3.8rem);
		border-bottom: 2px solid;
	}
</style>
