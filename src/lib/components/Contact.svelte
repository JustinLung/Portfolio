<script lang="ts">
	import {Expo} from 'gsap'
	import { fadein } from '$lib/actions/fadeIn';
</script>

<section>
	<p use:fadein={{ loop: true, y: 25, delay: 0.2 }}>if you've got any questions</p>
	<a href="mailto:info@justinlung.nl" use:fadein={{ loop: true, y: 25, delay: 0.3 }}>
		Send an email
		<span
			use:fadein={{
				delay: 0,
				loop: true,
				duration: 1,
				easing: Expo.easeInOut,
				animationValues: {
					start: {
						scaleX: 0,
						y: 0,
						opacity: 1
					},
					end: {
						scaleX: [0, 1],
						y: [0, 0],
						opacity: [1, 1]
					}
				}
			}}
		/>
	</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 10rem 0;
	}

	p {
		font-size: 0.875rem;
		text-transform: uppercase;
	}

	a {
		color: currentColor;
		font-family: Migra;
		font-size: clamp(2rem, 4vw, 3.8rem);
	}

	a > span {
		width: 100%;
		height: 2px;
		display: block;
		background-color: var(--raisin-black);
		transform-origin: left;
		transition: .3s width ease-out;
	}
	a:hover > span {
		width: 0%;
	}
</style>
