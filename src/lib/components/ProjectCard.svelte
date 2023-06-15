<script lang="ts">
	import { fadein } from '$lib/actions/fadeIn';
	import Button from './Button.svelte';

	export let title: string;
	export let description: string;
	export let src: string;
	export let alt: string;
	export let href: string;
</script>

<article>
	<picture use:fadein={{ loop: true, y: 25, delay: 0.2 }}>
		<a {href}>
			<img {src} {alt} />
		</a>
	</picture>
	<div class="container">
		<h3 use:fadein={{ loop: true, delay: 0.3, y: 25 }}>{title}</h3>
		<p use:fadein={{ loop: true, delay: 0.4, y: 25 }}>{description}</p>
		<div use:fadein={{ loop: true, delay: 0.5, y: 25 }}>
			<Button {href} class="button">VIEW CASE STUDY</Button>
			<Button {href} class="button">GITHUB REPOSITORY</Button>
		</div>
	</div>
</article>

<style>
	article {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		transition: 0.3s transform ease-out;
		cursor: pointer;
	}

	picture {
		overflow: hidden;
		flex: 1;
		border-radius: 8px;
		height: 700px;
		width: 100%;
	}

	img:hover {
		border-radius: 8px;
		transform: scale(1.1);
	}

	.container {
		flex: 1;
		padding: 2rem;
	}

	h3 {
		font-family: 'Migra';
		font-weight: 300;
		font-size: clamp(1.5rem, 4vw, 3rem);

		padding: 0;
		margin: 0;
	}

	p {
		font-weight: 300;
		font-size: 1.2rem;
		max-width: 25rem;
		padding: 0;
		margin: 1rem 0;
	}

	@media (max-width: 55rem) {
		article {
			align-items: flex-start;
			flex-direction: column;
		}

		.container {
			padding: 1rem 0;
		}

		p {
			font-size: 1rem;
		}
	}
</style>
