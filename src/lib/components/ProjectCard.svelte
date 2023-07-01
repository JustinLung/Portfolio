<script lang="ts">
	import { fadein } from '$lib/actions/fadeIn';
	import Divider from './Divider.svelte';

	export let title: string;
	export let year: string;
	export let tag: string;
	export let src: string;
	export let alt: string;
	export let current: number;
	export let last: number;
</script>

<article>
	<div
		class="project-header"
		use:fadein={{
			loop: true,
			y: 20,
			stagger: 0.2
		}}
	>
		<span>0{current} — 0{last}</span>
		<h3>{title}</h3>
		<div class="tags">
			<p>{year}</p>
			<p>{tag}</p>
		</div>
	</div>
	<div
		class="img-container"
		use:fadein={{
			loop: true,
			y: 20,
			delay: 0.3
		}}
	>
		<img {src} {alt} />
	</div>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	p {
		padding: 0;
		margin: 0;
	}

	h3 {
		font-family: 'Migra';
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 100;
	}

	.project-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.img-container {
		width: 100%;
		height: 100%;
		max-width: 45rem;
		height: 70svh;
		margin-left: auto;
        margin-bottom: 2rem;
	}

	img {
		width: 100%;
		height: 100%;

		object-fit: cover;
		border-radius: 8px;
	}

	@media (max-width: 50rem) {
		.tags {
			display: none;
		}
	}
</style>
