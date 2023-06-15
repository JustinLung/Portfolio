<script lang="ts">
	import { socials } from '$lib/data/links';
	import { gsap, Expo } from 'gsap';
	import Button from './Button.svelte';
	import { onMount } from 'svelte';

	export let job: string;
	export let href: string;

	onMount(() => {
		const tl = gsap.timeline();

		tl.fromTo(
			'.hero-title',
			{
				skewY: '10deg',
				opacity: 0,
				y: 100
			},
			{
				skewY: '0deg',
				opacity: 1,
				y: 0,
				ease: Expo.easeOut,
				duration: 1,
				delay: 0.4
			}
		);

		gsap.fromTo(
			'.tag-text',
			{
				skewY: '10deg',
				opacity: 0,
				y: 100
			},
			{
				skewY: '0deg',
				opacity: 1,
				y: 0,
				ease: Expo.easeOut,
				duration: 1,
				delay: 0.5
			}
		);

		gsap.fromTo(
			'.hero-description',
			{
				skewY: '10deg',
				opacity: 0,
				y: 100
			},
			{
				skewY: '0deg',
				opacity: 1,
				y: 0,
				ease: Expo.easeOut,
				duration: 1,
				delay: 0.5
			}
		);

		gsap.fromTo(
			'.hero-button',
			{
				skewY: '10deg',
				opacity: 0,
				y: 100
			},
			{
				skewY: '0deg',
				opacity: 1,
				y: 0,
				ease: Expo.easeOut,
				duration: 1,
				delay: 0.6
			}
		);

		gsap.fromTo(
			'.social',
			{ opacity: 0 },
			{ duration: 0.5, opacity: 1, stagger: 0.15, y: 0, delay: 0.6 }
		);
	});
</script>

<section>
	<span class="tag-text">hello there</span>
	<h1 class="hero-title">
		I’m Justin Lung. A creative frontend developer, from <span class="italic">Amsterdam</span>
		specialized in <span class="italic">interactive</span>
		products
	</h1>
	<p class="hero-description">
		Currently working at <a {href} target="_blank" rel="noopener noreferrer">{job}</a>
	</p>
	<Button href="/#works" class="hero-button">EXPLORE WORK</Button>
	<ul>
		{#each socials as social}
			<li>
				<a class="social" href={social.href} target="_blank" rel="noopener noreferrer"
					>{social.title}</a
				>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
		position: relative;
		max-width: 85rem;
		margin: auto;
	}

	.hero-button {
		color: var(--raisin-black);
	}

	.tag-text {
		font-size: clamp(0.75rem, 4vw, 0.875rem);
		text-transform: uppercase;
	}

	.italic {
		font-style: italic;
		font-weight: 400;
		border-bottom: 2px solid;
	}

	h1 {
		font-family: 'Migra';
		font-size: clamp(1.5rem, 4vw, 3.8rem);
		font-weight: 100;
		text-align: center;
		max-width: 55rem;
		padding: 0;
		margin: 0;
	}

	p {
		font-family: 'Migra';
		font-size: clamp(0.875rem, 4vw, 2rem);
		padding: 0;
		margin: 0;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		position: absolute;
		left: 0;
		bottom: 1.5rem;
		font-size: 0.75rem;

		max-width: 85rem;
		margin: auto;

		padding: 1.5rem 2rem;
	}

	@media (max-width: 50rem) {
		section {
			padding: 1rem;
		}

		ul {
			left: 50%;
			transform: translateX(-50%);
			padding: 1.5rem 1rem;
		}
	}
</style>
