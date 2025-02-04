<script lang="ts">
	import Image from '../Image/Image.svelte';
	import './About.css';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	interface AboutProps {}

	const {}: AboutProps = $props();

	onMount(() => {
		gsap.fromTo(
			'.about__inner h1',
			{
				opacity: 0,
				y: 50
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				delay: 0.1,
				ease: 'expo.out'
			}
		);

		gsap.fromTo(
			'.intro',
			{
				opacity: 0,
				y: 30
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				delay: 0.2,
				ease: 'expo.out'
			}
		);

		gsap.fromTo(
			'.description',
			{
				opacity: 0,
				y: 30
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				delay: 0.3,
				ease: 'expo.out'
			}
		);

		gsap.fromTo(
			'.about__image-container',
			{
				clipPath: 'inset(100% 0% 0% 0%)'
			},
			{
				clipPath: 'inset(0% 0% 0% 0%)',
				duration: .8,
				delay: 0.4,
				ease: 'expo.out'
			}
		);
	});
</script>

<section class="about">
	<div class="about__inner">
		<h1>About me</h1>
		<p class="intro">
			A creative frontend developer with a passion for crafting intuitive web experiences, a
			part-time powerlifter dedicated to strength training, and a videography hobbyist with a keen
			eye for storytelling through film.
		</p>
		<p class="description">
			I'm Justin Lung, a 23-year-old creative coder based in the vibrant city of Amsterdam. My
			passion lies in crafting accessible animations using GSAP and Framer Motion, bringing digital
			experiences to life with a touch of creativity and innovation. I'm an avid fan of modern web
			development frameworks like Next.js and SvelteKit, constantly exploring their potentials to
			push the boundaries of what's possible on the web. I graduated from Mediacollege Amsterdam as
			a Software Developer in 2020, and more recently, I earned an Associate Degree in Frontend
			Development and Design from the University of Applied Sciences in Amsterdam in 2023. My
			academic journey has equipped me with a solid foundation in both theoretical knowledge and
			practical skills, enabling me to excel in the dynamic field of web development and animation.
			Beyond the screen, I have a strong passion for fitness and powerlifting. I believe in
			maintaining a balanced lifestyle, and the gym is where I channel my energy and stay motivated.
			Powerlifting has taught me discipline, perseverance, and the importance of setting and
			achieving goals, qualities that I bring into my professional life as well. Whether it's coding
			the next interactive web project or hitting a new personal record at the gym, I'm driven by a
			desire to learn, grow, and create.
		</p>
	</div>
	<picture class="about__image-container">
		<Image src="/images/me.jpg" alt="me" />
	</picture>
</section>
