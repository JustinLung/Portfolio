<script lang="ts">
	import { links, socials } from '$lib/scripts/links';
	import { gsap, Expo } from 'gsap';
	import { page } from '$app/stores';

	let isActive = false;
	let nav: HTMLElement;
	let animation;

	function openNav() {
		isActive = !isActive;
		if (isActive) {
			animation = gsap.fromTo(
				'.item',
				{ opacity: 0, x: -20 },
				{ duration: 1, opacity: 1, stagger: 0.15, x: 0, delay: 0.4, ease: Expo.easeOut }
			);

			animation = gsap.fromTo(
				'.divider',
				{
					opacity: 0,
					width: '0%'
				},
				{
					opacity: 1,
					width: '70%',
					delay: 1,
					ease: Expo.easeOut
				}
			);
			animation = gsap.fromTo(
				'nav',
				{ x: '100%' },
				{ duration: 1, x: '70', display: 'flex', ease: Expo.easeOut }
			);
			animation = gsap.fromTo(
				'.nav-footer',
				{ opacity: 0 },
				{ opacity: 1, delay: 1.3, ease: Expo.easeOut }
			);
			return;
		}
		animation = gsap.to('nav', { duration: 0.5, x: '100%', display: 'flex' });
	}
	function handleWindowKeyDown(event: any) {
		if (event.key === 'Escape') {
			isActive = false;
			animation = gsap.to('nav', { duration: 0.5, x: '100%', display: 'flex' });
			animation = gsap.fromTo('.nav-footer', { opacity: 1 }, { opacity: 0 });
		}
	}
</script>

<header>
	<a href="/" class="logo" class:active={isActive}>JL</a>
	<nav class:active={isActive} bind:this={nav}>
		<ul class="navigation-list">
			{#each links as link}
				<li class="item">
					<a
						href={link.href}
						class="link"
						class:active={$page.url.pathname === link.href && isActive}
						data-sveltekit-preload-data="hover">{link.title}</a
					>
				</li>
			{/each}
		</ul>
		<div class="divider" />
		<ul class="nav-footer">
			{#each socials as link}
				<li class="item">
					<a
						href={link.href}
						class="link"
						class:active={$page.url.pathname === link.href && isActive}
						data-sveltekit-preload-data="hover">{link.title}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
	<button on:click={openNav} class:active={isActive} on:keydown={handleWindowKeyDown}>
		<span />
		<span />
		<span />
	</button>
</header>

<style lang="postcss">
	header {
		position: relative;
		z-index: 1;

		display: flex;
		justify-content: center;
		align-items: center;

		max-width: 85rem;

		margin: 0 auto;
		padding: 1.5rem 1rem;

		@media (--md) {
			justify-content: space-between;
		}

		.link {
			color: var(--black);

			@media(--md) {
				color: var(--white);
			}
		}

		button {
			display: block;

			all: unset;
			position: relative;
			z-index: 1;

			cursor: pointer;

			margin-left: auto;

			span {
				display: block;

				width: 2rem;
				height: 0.1rem;

				border-radius: 6px;
				margin-bottom: 5px;

				position: relative;

				background-color: var(--white);

				transform-origin: 0 0;
				transition: 0.4s;

				&:last-child {
					margin: 0;
				}
			}

			@media (--md) {
				display: none;
			}
		}

		button.active span:nth-child(1) {
			transform: translate(0px, -2px) rotate(45deg);
		}
		button.active span:nth-child(2) {
			opacity: 0;
			transform: translateX(12px);
		}
		button.active span:nth-child(3) {
			transform: translate(-3px, 6px) rotate(-45deg);
		}
		button.active span {
			background-color: var(--black);
		}

		nav {
			position: fixed;
			inset: 0;
			transform: translatex(-100%);

			background-color: var(--white);
			color: var(--black);

			font-weight: bold;

			width: 100%;
			height: 100vh;

			overflow: hidden;

			flex-direction: column;
			justify-content: center;

			@media (--md) {
				background-color: transparent;
				color: var(--white);

				width: unset;
				height: auto;
				position: unset;
				transform: unset;
			}

			&.active {
				display: flex;
			}

			.divider {
				height: 1px;
				width: 70%;
				background-color: var(--black);
				margin-left: 1rem;

				@media (--md) {
					display: none;
				}
			}
		}

		.navigation-list {
			display: flex;
			flex-direction: column;
			align-self: flex-start;

			width: 100%;
			max-width: 85rem;

			padding: 1.5rem 1rem;

			font-size: calc(2rem + 1vw);

			text-transform: uppercase;

			@media (--md) {
				flex-direction: row;
				font-size: 1rem;
				padding: 0;

				gap: .5rem;

				font-weight: normal;
			}
		}

		.nav-footer {
			display: flex;
			gap: 0.5rem;
			padding: 1rem;

			font-size: 0.8rem;

			@media (--md) {
				display: none;
			}
		}
	}
</style>
