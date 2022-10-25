<script lang="ts">
	import Arrow from '../iconComponents/Arrow.svelte';
	import Github from '../iconComponents/Github.svelte';

	export let projectImage: string;
	export let projectTitle: string;
	export let projectDescription: string;
	export let projectLink: string;
	export let githubLink: string;
</script>

<article>
	<img src={projectImage} alt={projectTitle} />
	<h2>{projectTitle}</h2>
	<div>
		<slot />
	</div>
	<p>
		{projectDescription}
	</p>
	<div>
		<a href={projectLink} target="_blank" rel="noreferrer">Live Link<Arrow /></a>
		<a href={githubLink} target="_blank" rel="noreferrer">Github Repo<Github /></a>
	</div>
</article>

<style>
	article {
		margin-top: 2rem;
		flex-basis: 50%;
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
		padding: 1rem 0;
	}

	div:first-of-type {
		display: flex;
		flex-wrap: wrap;
		max-width: 40rem;
		gap: 0.5rem;
	}

	div:last-child {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}

	a {
		cursor: pointer;
		padding: 0.5rem 1rem;
		border-radius: 1rem;
		background-color: var(--color-pink);
		color: var(--color-white);
		opacity: 0.8;
		transition: all 0.3s;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.3rem;
	}

	a:hover {
		opacity: 1;
	}

	@media (max-width: 50rem) {
		p {
			font-size: var(--font-size-normal);
		}
	}
</style>
