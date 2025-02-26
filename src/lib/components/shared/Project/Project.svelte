<script lang="ts">
	import ArrowIcon from '$components/icons/ArrowIcon.svelte';
	import { onMount } from 'svelte';
	import Image from '../Image/Image.svelte';
	import Link from '../Link/Link.svelte';
	import { gsap } from 'gsap';
	import './Project.css';

	interface ProjectProps {
		name?: string;
		tags?: string[];
		image?: string;
		alt?: string;
	}

	const { name = 'Project', tags, image, alt }: ProjectProps = $props();
</script>

<article class="project">
	<picture class="project__image">
		<Image src={image as string} {alt} width={800} height={900} />
	</picture>
	<div class="project__tags">
		{#each tags as tag, i}
			<span>{tag.tag} {i < tags.length - 1 ? '·' : ''} {' '}</span>
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
