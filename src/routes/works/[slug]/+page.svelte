<script lang="ts">
	import { fadein } from '$lib/actions/fadeIn';
	import Button from '$lib/components/Button.svelte';
	import ProjectHeader from '$lib/components/ProjectHeader.svelte';
</script>

<ProjectHeader title="Scrollbook" description="Creative Development" githubHref="/" liveHref="/" />
<section>
	<picture>
		<img src="/images/hero.jpeg" alt="Hero" />
	</picture>
</section>

<section class="content">
	<p>
		At FDND, we needed to build a project for Scrollbook. Scrollbook is a concept developed to
		enthuse young people to read for relaxation and promote deep reading. Animation on scroll was
		very important in this project.
	</p>
	<div class="button">
		<Button href="/" class="button">VIEW LIVE</Button>
	</div>
</section>

<section class="next-project" use:fadein={{ loop: true, stagger: 0.15 }}>
	<a href="/">Next Project</a>
	<span>Scrollbook</span>
</section>

<style>
	picture {
		width: 100%;
		height: 1080px;
		padding: 0;
		margin: 0;
	}

	picture img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.content {
		max-width: 55rem;
		margin: 0 auto;
	}

	.button {
		margin-left: auto;
	}

	@media (max-width: 55rem) {
		.content {
			padding: 1.5rem;
		}
	}

	.content p {
		max-width: 30rem;
		font-size: 1.2rem;
		padding: 0;
		margin-bottom: 1.5rem;
		font-weight: 100;
	}

	.next-project {
		height: 50svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: 0.5rem;
	}

	.next-project a {
		font-family: 'Migra';
		font-weight: 300;
		font-size: clamp(2rem, 4vw, 4rem);
	}

	.next-project span {
		font-family: 'Migra';
		font-weight: 300;
		font-size: 1.3rem;
	}
</style>
