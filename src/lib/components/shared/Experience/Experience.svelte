<script lang="ts">
	import { onMount } from 'svelte';
	import './Experience.css';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	interface ExperienceProps {
		title: string;
		experiences: {
			company: string;
			jobPosition: string;
			startyear: number;
			endyear: number;
			url: string;
		}[];
	}

	const { title = 'Experience', experiences }: ExperienceProps = $props();
	// 	{
	// 		company: 'Merlin Studio',
	// 		position: 'Creative Frontend Developer',
	// 		date: '2023 - 2024',
	// 		url: 'https://merlin.studio'
	// 	},
	// 	{
	// 		company: 'Merlin Studio',
	// 		position: 'Creative Frontend Developer',
	// 		date: '2023 - 2024',
	// 		url: 'https://merlin.studio'
	// 	},
	// 	{
	// 		company: 'Merlin Studio',
	// 		position: 'Creative Frontend Developer',
	// 		date: '2023 - 2024',
	// 		url: 'https://merlin.studio'
	// 	},
	// 	{
	// 		company: 'Merlin Studio',
	// 		position: 'Creative Frontend Developer',
	// 		date: '2023 - 2024',
	// 		url: 'https://merlin.studio'
	// 	},
	// 	{
	// 		company: 'Merlin Studio',
	// 		position: 'Creative Frontend Developer',
	// 		date: '2023 - 2024',
	// 		url: 'https://merlin.studio'
	// 	},
	// 	{
	// 		company: 'Merlin Studio',
	// 		position: 'Creative Frontend Developer',
	// 		date: '2023 - 2024',
	// 		url: 'https://merlin.studio'
	// 	}
	// ];

	onMount(() => {
		gsap.from('.experience__title', {
			opacity: 0,
			y: 50,
			duration: 0.8,
			ease: 'expo.out',
			scrollTrigger: {
				trigger: '.experience__title',
				start: 'top 80%',
				end: 'bottom 20%',
				toggleActions: 'play none none none'
			}
		});

		gsap.from('.experience__item', {
			opacity: 0,
			y: 50,
			stagger: 0.1,
			duration: 0.8,
			ease: 'expo.out',
			scrollTrigger: {
				trigger: '.experience',
				start: 'top 80%',
				end: 'bottom 20%',
				toggleActions: 'play none none none'
			}
		});
	});
</script>

<section class="experience container">
	<h2 class="experience__title">{title}</h2>
	{#each experiences as experience}
		<a href={experience.url} class="experience__item" target="_blank" rel="noopener noreferrer">
			<h3 class="experience__item-title">{experience.company}</h3>
			<div class="experience__item-details">
				<p>{experience.jobPosition}</p>
				<p>{experience.startyear} - {experience.endyear}</p>
			</div>
		</a>
	{/each}
</section>
