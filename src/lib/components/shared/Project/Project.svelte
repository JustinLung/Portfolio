<script lang="ts">
	import ArrowIcon from '$components/icons/ArrowIcon.svelte';
	import { onMount } from 'svelte';
	import Image from '../Image/Image.svelte';
	import Link from '../Link/Link.svelte';
	import { gsap } from 'gsap';
	import './Project.css';

	interface ProjectProps {
		name?: string;
	}

	const { name = 'Project' }: ProjectProps = $props();

	export const tags = ['web', 'design', 'development'];
</script>

<article class="project">
	<picture class="project__image">
		<Image
			src="https://images.unsplash.com/photo-1730128302222-4459bc00028d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Project"
			width={800}
			height={900}
		/>
	</picture>
	<div class="project__tags">
		{#each tags as tag, i}
			<span>{tag} {i < tags.length - 1 ? '·' : ''} {' '}</span>
		{/each}
	</div>
	<Link href="/" class="project__name"
		><span class="arrow">
			<ArrowIcon />
		</span>
		<span class="project__name-text">
			{name}
		</span>
	</Link>
</article>
