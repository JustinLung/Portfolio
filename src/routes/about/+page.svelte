<script lang="ts">
	import { fadein } from '$lib/actions/fadeIn';
	import Contact from '$lib/components/Contact.svelte';
	import Divider from '$lib/components/Divider.svelte';
</script>

<section class="about-hero" use:fadein={{ loop: true, y: 25, stagger: 0.2 }}>
	<h1 class="about-title">Creative Frontend Developer</h1>
	<p class="about-description">
		I’m Justin Lung. A creative frontend developer, from Amsterdam specialized in interactive
		products
	</p>
</section>

<section class="content">
	<div class="content-container" use:fadein={{ loop: true, y: 25, stagger: 0.2 }}>
		<article>
			<h2>What i do</h2>
			<p>
				Working collaboratively with brands. Developing websites and applications with a focus on
				interaction, motion and visual experience.
			</p>
		</article>
		<article>
			<h2>History</h2>
			<p>
				I studied at Mediacollege Amsterdam as a software developer, then pursued FDND (Frontend
				Design and Development) at the Amsterdam University of Applied Sciences. Now, as a Creative
				Frontend Developer at Merlin Studio, I merge design and technical expertise to create
				impressive digital solutions, leaving a lasting impact on Amsterdam's digital landscape.
			</p>
		</article>
	</div>
	<figure use:fadein={{ y: 25, stagger: 0.2 }}>
		<img src="/images/hero.jpeg" alt="Justin" />
	</figure>
</section>
<div class="divider">
	<Divider />
</div>
<Contact />

<style>
	section {
		padding: 1.5rem;
	}

	h1 {
		font-family: 'Migra';
		font-size: clamp(2rem, 10vw, 7rem);
		font-weight: 100;
		padding: 0;
		margin: 0;
	}

	.about-description {
		font-size: clamp(1rem, 2vw, 1.5rem);
		max-width: 40rem;
		font-weight: 200;
	}

	.about-hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100svh;
		width: 100%;
		max-width: 80rem;
		margin: 0 auto;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 2rem;

		max-width: 80rem;
		margin: 0 auto;
	}

	article > h2 {
		font-weight: 300;
		padding: 0;
		margin: 0;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
	}

	article > p {
		padding: 0;
		margin: 0;
		font-size: clamp(1rem, 2vw, 1.5rem);
		max-width: 40rem;
		font-weight: 200;
	}

	article:last-child {
		margin-top: 2rem;
	}

	figure {
		margin: 0;
		padding: 0;
		width: 575px;
		height: 700px;
	}

	img {
		width: 100%;
		height: 100%;
		margin-top: -10rem;
		object-fit: cover;
	}

	.divider {
		max-width: 80rem;
		padding: 0 1.5rem;
		margin: 0 auto;
	}

	@media (max-width: 50rem) {
		.about-hero {
			height: 70svh;
		}

		.content {
			flex-direction: column-reverse;
		}

		figure {
			width: 100%;
			height: 100%;
		}

		img {
			margin-top: 0;
		}
	}
</style>
