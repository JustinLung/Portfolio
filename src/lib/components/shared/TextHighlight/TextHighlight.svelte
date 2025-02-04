<script lang="ts">
	import './TextHighlight.css';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	interface TextHighlightProps {
		text: string;
	}

	const { text }: TextHighlightProps = $props();

	gsap.registerPlugin(ScrollTrigger);

	let textElement: HTMLElement;
	let letters: HTMLElement[];

	const splitText = (text: string) => {
		return text
			.split('')
			.map((char) => `<span class="letter">${char === ' ' ? '&nbsp;' : char}</span>`)
			.join('');
	};

	onMount(() => {
		letters = Array.from(textElement.querySelectorAll('.letter'));

		gsap.fromTo(
			letters,
			{ opacity: 0.3 },
			{
				opacity: 1,
				duration: 0.5,
				ease: 'power1.inOut',
				scrollTrigger: {
					trigger: textElement,
					start: '50% center',
					scrub: true,
					pin: true,
					onUpdate: (self) => {
						letters.forEach((letter, index) => {
							if (self.progress >= 1) {
								letter.style.opacity = '1';
							} else if (index < Math.floor(self.progress * letters.length)) {
								letter.style.opacity = '1';
							} else {
								letter.style.opacity = '0.3';
							}
						});
					}
				}
			}
		);
	});
</script>

<section class="TextHighlight" bind:this={textElement}>
	<p>{@html splitText(text)}</p>
</section>
