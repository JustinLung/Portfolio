<script lang="ts">
	import Arrow from './iconComponents/Arrow.svelte';
	export let projectImage: string;
	export let projectTitle: string;
	export let projectDescription: string;
	export let projectLink: string;
</script>

<article>
	<img src={projectImage} alt={projectTitle} />
	<h2>{projectTitle}</h2>
	<p>
		{projectDescription}
	</p>
	<a href={projectLink}>{projectTitle}<Arrow /></a>
</article>

<style>
	article {
		margin-top: 2rem;
	}

	img {
		width: 100%;
		border-radius: 0.5rem;
	}

	h2 {
		font-size: var(--font-size-lg);
		padding: 1rem 0;
	}

	p {
		color: var(--color-grey);
		font-size: var(--font-size-sm);
		line-height: 2rem;
		margin-bottom: 1.5rem;
	}

	a {
		cursor: pointer;
		text-decoration: none;
		padding: 0.8rem 1rem;
		border-radius: 1rem;
		background-color: var(--color-pink);
		color: var(--color-white);
		opacity: 0.8;
		transition: all 0.3s;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 12rem;
	}

	a:hover {
		opacity: 1;
	}
</style>
