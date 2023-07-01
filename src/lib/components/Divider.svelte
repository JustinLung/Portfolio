<script lang="ts">
	import { fadein } from '$lib/actions/fadeIn';
	import { Expo } from 'gsap';
</script>

<div
	class="divider"
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

<style>
	.divider {
		height: 1px;
		width: 100%;
		background: var(--raisin-black);
		transform-origin: left;
	}
</style>
