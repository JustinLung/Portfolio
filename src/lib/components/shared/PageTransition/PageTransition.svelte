<script lang="ts">
	import { afterNavigate, onNavigate } from '$app/navigation';
	import { animate } from 'motion';
	import './PageTransition.css';
	import { prefersReducedMotion } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';
	import type { AfterNavigate, OnNavigate } from '@sveltejs/kit';

	interface PageTransitionProps {}

	const {}: PageTransitionProps = $props();

	let ref: HTMLDivElement | undefined = $state();

	onNavigate(show);
	afterNavigate(hide);

	// https://svelte.dev/docs/kit/@sveltejs-kit#NavigationType
	const supportedNavigationTypes = ['link', 'goto', 'popstate'];

	function show(navigation: OnNavigate) {
		return new Promise<void>((resolve) => {
			// Dont't trigger transition when clicking same page link
			if (
				navigation.from?.url.pathname === navigation.to?.url.pathname ||
				!supportedNavigationTypes.includes(navigation.type)
			) {
				resolve();
				return;
			}

			animate(
				ref!,
				{
					opacity: [0, 1],
					visibility: ['hidden', 'visible']
				},
				{
					duration: prefersReducedMotion.current ? 0.0001 : 0.3,
					ease: quadInOut
				}
			).then(() => {
				resolve();
			});
		});
	}

	function hide(navigation: AfterNavigate) {
		if (!supportedNavigationTypes.includes(navigation.type)) return;
		if (navigation.from?.url.pathname === navigation.to?.url.pathname) {
			return;
		}
		animate(
			ref!,
			{
				opacity: [1, 0],
				visibility: ['visible', 'hidden']
			},
			{
				duration: prefersReducedMotion.current ? 0.0001 : 0.6,
				ease: quadInOut
			}
		);
	}
</script>

<div role="presentation" bind:this={ref} class="PageTransition"></div>
