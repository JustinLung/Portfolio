<script>
	import { fadein } from '$lib/actions/fadeIn';
	import { Expo } from 'gsap';
	import Divider from './Divider.svelte';
	import Button from './Button.svelte';
	import { stagger } from 'motion';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section id="works">
	<Divider />
	<div class="works-header" use:fadein={{ loop: true, y: 20, stagger: 0.1 }}>
		<h2>Recent Case Studies</h2>
		<Button href="/works">VIEW ALL</Button>
	</div>

	<ProjectCard />
</section>

<style>
	section {
		padding: 2rem;
		max-width: 85rem;
		margin: 0 auto;
	}

	h2 {
		font-family: 'Migra';
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		font-weight: 100;
	}

	.works-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>
