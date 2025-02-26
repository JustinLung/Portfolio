<script lang="ts">
	import ArrowIcon from '$components/icons/ArrowIcon.svelte';
	import { onMount } from 'svelte';
	import Image from '../Image/Image.svelte';
	import Link from '../Link/Link.svelte';
	import './Carousel.css';
	import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	interface CarouselProps {
		title: string;
		items: Array<{
			title: string;
			description: string;
			src: string;
			alt: string;
		}>;
	}

	const { title, items }: CarouselProps = $props();

	let embla: EmblaCarouselType;
	let emblaNode: HTMLDivElement;

	let canPrev = $state(false);
	let canNext = $state(false);

	const options = {
		loop: false
	};

	$effect(() => {
		embla = EmblaCarousel(emblaNode, options);

		const updateButtonStates = () => {
			canPrev = embla.canScrollPrev();
			canNext = embla.canScrollNext();
		};

		embla.on('select', updateButtonStates);
		updateButtonStates();

		return () => {
			embla.destroy();
		};
	});

	const prev = () => {
		if (embla) embla.scrollPrev();
	};

	const next = () => {
		if (embla) embla.scrollNext();
	};

	onMount(() => {
		gsap.from('.carousel__header-title', {
			opacity: 0,
			y: 20,
			duration: 1,
			ease: 'expo.out',
			scrollTrigger: {
				trigger: '.carousel__header-title',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		gsap.from('.embla__slide', {
			opacity: 0,
			y: 20,
			stagger: 0.15,
			duration: 0.8,
			ease: 'expo.out',
			delay: 0.1,
			scrollTrigger: {
				trigger: '.embla',
				start: 'top 85%',
				toggleActions: 'play none none none'
			}
		});
	});
</script>

{#if items.length === 0}{:else}
	<section class="carousel container">
		<div class="carousel__header">
			<h2 class="carousel__header-title">{title}</h2>
			<div class="carousel__button-container">
				<button on:click={prev} disabled={!canPrev} class="carousel__button"
					><ArrowIcon class="previous-icon" /></button
				>
				<button on:click={next} disabled={!canNext} class="carousel__button"
					><ArrowIcon class="next-icon" /></button
				>
			</div>
		</div>

		<div class="embla" bind:this={emblaNode}>
			<div class="embla__container">
				{#each items as item}
					<article class="embla__slide">
						<Image src={item.src} alt={item.alt} class="carousel__image" />
						<div>
							<h3>{item.title}</h3>
							<p>
								{item.description}
							</p>
							<Link href="/" class="link">Read more <ArrowIcon class="icon" /></Link>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>
{/if}
