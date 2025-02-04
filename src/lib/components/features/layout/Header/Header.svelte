<script lang="ts">
	import Link from '$components/shared/Link/Link.svelte';
	import { gsap } from 'gsap';
	import { links, socials } from '$lib/util/links';
	import './Header.css';

	let menu = $state(false);

	const menuTimeline = gsap.timeline({ paused: true });

	$effect(() => {
		if (!menu) {
			gsap.set('.menu', { x: '100%' });
			gsap.set('.overlay', { opacity: 0, backgroundColor: 'unset' });
		}
	});

	function openMenu() {
		menuTimeline.clear();
		menuTimeline
			.to('.menu', {
				x: 0,
				duration: 0.4,
				ease: 'expo.out'
			})
			.to(
				'.overlay',
				{
					opacity: 1,
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					visibility: 'visible',
					duration: 0.4,
					ease: 'expo.out'
				},
				0
			)
			.from(
				'.menu__item',
				{
					yPercent: 140,
					opacity: 0,
					duration: 1,
					stagger: 0.1,
					ease: 'expo.out'
				},
				'-=0.2'
			)
			.from(
				'.menu__social-link',
				{
					yPercent: 140,
					opacity: 0,
					duration: 1,
					stagger: 0.1,
					ease: 'expo.out'
				},
				'-=0.7'
			);

		menuTimeline.play();
		menu = true;
	}

	function closeMenu() {
		menuTimeline.clear();

		menuTimeline
			.to('.overlay', {
				opacity: 0,
				backgroundColor: 'unset',
				visibility: 'hidden',
				duration: 0.4,
				ease: 'expo.out'
			})
			.to('.menu', {
				x: '100%',
				duration: 0.4,
				ease: 'expo.out'
			});

		menuTimeline.play();
		menu = false;
	}
</script>

<header class="header">
	<div class="header__inner">
		<Link href="/" class="header__link">portfolio</Link>
		<nav class="nav">
			<ul class="nav__list">
				{#each links.slice(1) as link}
					<li>
						<Link href={link.url} class="nav__link underline">{link.name}</Link>
					</li>
				{/each}
			</ul>

			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="hamburger" onclick={() => openMenu()}>
				<span class="hamburger__line"></span>
				<span class="hamburger__line"></span>
				<span class="hamburger__line"></span>
			</button>
		</nav>
	</div>
	{#if menu}
		<div class="overlay" onclick={() => closeMenu()}></div>
	{/if}

	<section class="menu" class:open={menu}>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button class="menu__close" onclick={() => closeMenu()}>
			<span class="menu__close-line"></span>
			<span class="menu__close-line"></span>
		</button>
		<div class="menu__inner">
			<nav class="menu__nav">
				<ul>
					{#each links as link, i}
						<li class="menu__item">
							<span class="menu_nav-number">(0{i + 1})</span>
							<Link href={link.url} onclick={() => closeMenu()} class="menu__link">{link.name}</Link
							>
						</li>
					{/each}
				</ul>
			</nav>
			<div class="menu__additional-links">
				{#each socials as social}
					<Link href={social.url} underline class="menu__social-link underline">{social.name}</Link>
				{/each}
			</div>
		</div>
	</section>
</header>
