<script lang="ts">
	export let technologyTitle: string;
	export let technologyImage: string;
</script>

<figure>
	<img src={technologyImage} alt={technologyTitle} />
	<figcaption>{technologyTitle}</figcaption>
</figure>

<style>
	figure {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	figcaption {
		font-weight: bold;
		font-size: var(--font-size-md);
	}

	img {
		filter: grayscale(1);
		transition: 0.3s ease-in-out;
		width: 11rem;
	}

	img:hover {
		filter: grayscale(0);
	}
</style>
