<script lang="ts">
	import { socials, links } from '$lib/data/links';
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
				{ opacity: 0, y: -20 },
				{ duration: 0.5, opacity: 1, stagger: 0.15, y: 0, delay: 0.4 }
			);
			animation = gsap.fromTo('nav', { y: '-100%' }, { duration: 0.5, y: '0', display: 'flex' });
			animation = gsap.fromTo('.nav-footer', { opacity: 0 }, { opacity: 1, delay: 1.3 });
			return;
		}

		animation = gsap.to('nav', { duration: 0.5, y: '-100%', display: 'flex' });
		animation = gsap.fromTo('.nav-footer', { opacity: 1 }, { opacity: 0 });
	}

	function handleWindowKeyDown(event: any) {
		if (event.key === 'Escape') {
			isActive = false;
			animation = gsap.to('nav', { duration: 0.5, y: '-100%', display: 'flex' });
			animation = gsap.fromTo('.nav-footer', { opacity: 1 }, { opacity: 0 });
		}
	}
</script>

<div>
	<header class="header">
		<a href="/" class="logo" class:active={isActive}>JYTL</a>
		<nav class:active={isActive} bind:this={nav}>
			<ul class="navigation">
				{#each links as link}
					<li class="item">
						<a
							href={link.href}
							class:active={$page.url.pathname === link.href}
							data-sveltekit-preload-data="hover">{link.title}</a
						>
					</li>
				{/each}
			</ul>
			<div class="nav-footer">
				<a href="mailto:info@justinlung.nl" class="email">INFO@JUSTINLUNG.NL</a>
				<ul class="socials">
					{#each socials as social}
						<li><a href={social.href}>{social.title}</a></li>
					{/each}
				</ul>
			</div>
		</nav>
		<button
			on:click={openNav}
			class="hamburger"
			class:active={isActive}
			on:keydown={handleWindowKeyDown}
		>
			<span />
			<span />
			<span />
		</button>
	</header>
</div>

<style>
	header {
		position: absolute;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
		padding: 1.5rem 4rem;
		max-width: 85rem;
		margin: 0 auto;
		left: 50%;
		transform: translateX(-50%);
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a:first-child {
		position: relative;
		z-index: 1;
		transition: 0.3s ease-in-out color;
	}

	a:first-child.active {
		color: var(--ash);
	}

	button {
		all: unset;
		position: relative;
		z-index: 1;
		cursor: pointer;
		margin-left: auto;
	}

	button span {
		display: block;
		width: 2rem;
		height: 0.1rem;
		margin-bottom: 5px;
		position: relative;
		background-color: var(--raisin-black);
		border-radius: 6px;
		transform-origin: 0 0;
		transition: 0.4s;
	}
	button span:last-child {
		margin: 0;
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
		background-color: var(--ash);
	}
	nav.active {
		display: flex;
	}

	nav {
		display: none;

		position: fixed;
		transform: translateY(-100%);
		inset: 0;

		font-weight: bold;

		width: 100%;
		height: 100vh;

		background-color: var(--raisin-black);
		color: var(--ash);

		overflow: hidden;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.navigation {
		padding: 1.5rem 1rem;
		margin: 10rem auto;
		max-width: 85rem;
		flex-direction: column;
		width: 100%;
		font-size: calc(5rem + 1vw);
	}

	nav div {
		width: 100%;
		max-width: 85rem;
		margin-top: auto;
		padding: 1.5rem 1rem;
		font-weight: 500;
	}

	a.active {
		background-color: var(--color-dark);
	}

	.navigation a:hover {
		color: transparent;
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: var(--ash);
	}

	.socials {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
	}

	@media (max-width: 50rem) {
		header {
			padding: 1rem;
		}
		.navigation {
			margin-top: 6rem;
			align-self: flex-start;
			font-size: calc(2rem + 1vw);
		}
	}
</style>
