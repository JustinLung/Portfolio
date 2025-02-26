<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Image from '../Image/Image.svelte';
	import './CardStack.css';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	interface CardStackProps {
		title: string;
		cardImages: {
			url: string;
			alt: string;
		}[];
	}

	const { title = 'Captured moments', cardImages }: CardStackProps = $props();

	gsap.registerPlugin(ScrollTrigger);

	let cards: HTMLElement[];
	let rotations = [-12, 10, -5, 5, -5, -2];
	let totalCards: number;
	let progressPerCard: number;

	const setupCards = () => {
		cards = gsap.utils.toArray('.card') as HTMLElement[];
		totalCards = cards.length;
		progressPerCard = 1 / totalCards;

		cards.forEach((card, index) => {
			gsap.set(card, {
				y: window.innerHeight,
				rotate: rotations[index] || 0
			});
		});
	};

	const updateCardPositions = (progress: number) => {
		cards.forEach((card, index) => {
			const cardStart = index * progressPerCard;
			let cardProgress = (progress - cardStart) / progressPerCard;
			cardProgress = Math.min(Math.max(cardProgress, 0), 1);

			let yPos = window.innerHeight * (1 - cardProgress);
			let xPos = 0;

			if (cardProgress === 1 && index < totalCards - 1) {
				const remainingProgress =
					(progress - (cardStart + progressPerCard)) / (1 - (cardStart + progressPerCard));

				if (remainingProgress > 0) {
					const distanceMultiplier = 1 - index * 0.15;
					xPos = -window.innerWidth * 0.3 * distanceMultiplier * remainingProgress;
					yPos = -window.innerHeight * 0.3 * distanceMultiplier * remainingProgress;
				}
			}

			gsap.to(card, {
				y: yPos,
				x: xPos,
				duration: 0,
				ease: 'none'
			});
		});
	};

	onMount(() => {
		gsap.ticker.lagSmoothing(0);

		setupCards();

		ScrollTrigger.create({
			trigger: '.sticky-cards',
			start: 'top top',
			end: `+=${window.innerHeight + 8}px`,
			pin: true,
			pinSpacing: true,
			scrub: 1,
			onUpdate: (self) => {
				const progress = self.progress;
				updateCardPositions(progress);
			}
		});

		const handleResize = () => {
			setupCards();
		};

		onDestroy(() => {
			window.removeEventListener('resize', handleResize);
		});
	});
</script>

<section class="sticky-cards">
	<h2 class="title">{title}</h2>
	{#each cardImages as image, index}
		<div class="card">
			<div class="card-image">
				<Image src={image.url} alt={image.alt} />
			</div>
		</div>
	{/each}
</section>
