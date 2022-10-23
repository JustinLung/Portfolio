<script lang="ts">
	export let technologyTitle: string;
	export let technologyImage: string;
</script>

<figure>
	<figcaption>{technologyTitle}</figcaption>
	<img src={technologyImage} alt={technologyTitle} />
</figure>

<style>
	figure {
		color: var(--color-white);
		animation: slide 10s linear infinite;
		margin: 0.5rem;
		border-radius: 0.5rem;
		padding: 2rem;
		gap: 1rem;
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}

	figcaption {
		font-weight: bold;
		font-size: var(--font-size-md);
	}

	img {
		width: 7rem;
	}

	@keyframes slide {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(-700px, 0, 0);
		}
	}
</style>
