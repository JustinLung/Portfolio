<script lang="ts">
	import ArrowIcon from '$components/icons/ArrowIcon.svelte';
	import './Carousel.css';
	import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';

	interface CarouselProps {
		title: string;
		items: Array<{
			tag: string;
			media: {
				url: string;
				mimeType: string;
				alt?: string;
				video?: { thumbnailUrl?: string };
			};
		}>;
	}

	const title = 'Blog';
	const items: CarouselProps['items'] = [
		{
			tag: 'image1',
			media: {
				url: 'https://via.placeholder.com/800x400?text=Image+1',
				mimeType: 'image/jpeg',
				alt: 'Placeholder image 1'
			}
		},
		{
			tag: 'image2',
			media: {
				url: 'https://via.placeholder.com/800x400?text=Image+2',
				mimeType: 'image/jpeg',
				alt: 'Placeholder image 2'
			}
		},
		{
			tag: 'video1',
			media: {
				url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
				mimeType: 'video/mp4'
			}
		},
		{
			tag: 'image3',
			media: {
				url: 'https://via.placeholder.com/800x400?text=Image+3',
				mimeType: 'image/jpeg',
				alt: 'Placeholder image 3'
			}
		}
	];

	let embla: EmblaCarouselType;
	let emblaNode: HTMLDivElement;

	let canPrev = $state(false);
	let canNext = $state(false);

	const options = {
		loop: false
	};

	$effect(() => {
		// Initialize EmblaCarousel
		embla = EmblaCarousel(emblaNode, options);

		const updateButtonStates = () => {
			canPrev = embla.canScrollPrev();
			canNext = embla.canScrollNext();
		};

		// Bind event listeners
		embla.on('select', updateButtonStates);
		updateButtonStates(); // Initial state

		return () => {
			// Cleanup
			embla.destroy();
		};
	});

	// Navigation functions
	const prev = () => {
		if (embla) embla.scrollPrev();
	};

	const next = () => {
		if (embla) embla.scrollNext();
	};
</script>

<section class="carousel">
	<div class="carousel__header">
		<h2 class="carousel__header-title">{title}</h2>
		<div class="carousel__button-container">
			<button on:click={prev} disabled={!canPrev} class="carousel__button"><ArrowIcon class="previous-icon"/></button>
			<button on:click={next} disabled={!canNext} class="carousel__button"><ArrowIcon class="next-icon"/></button>
		</div>
	</div>

	<div class="embla" bind:this={emblaNode}>
		<div class="embla__container">
			{#each items as item (item.tag)}
				<div class="embla__slide">
					{#if item.media.mimeType.startsWith('image/')}
						<img src={item.media.url} alt={item.media.alt || 'Carousel image'} />
					{:else if item.media.mimeType === 'video/mp4'}
						<video controls>
							<source src={item.media.url} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					{:else}
						<div>Unsupported media type</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
