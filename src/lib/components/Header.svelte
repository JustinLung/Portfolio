<script lang="ts">
	import gsap, { Expo } from 'gsap';

	let menu = false;

	function openMenu() {
		menu = true;

		gsap.to('nav', {
			opacity: 1
		});
	}

	function closeMenu() {
		menu = false;
		gsap.to('nav', {
			opacity: 0
		});
	}

	const items = [
		{ title: 'HOME', href: '/' },
		{ title: 'WORK', href: '/work' },
		{ title: 'ABOUT', href: '/about' },
		{ title: 'CONTACT', href: '/contact' }
	];
</script>

<header>
	<div class="container">
		<a href="/">PORTFOLIO</a>
		{#if !menu}
			<button on:click={openMenu}>MENU</button>
			{:else}
			<button on:click={closeMenu}>CLOSE</button>
		{/if}
		<!-- <button
			on:click={!menu ? openMenu() : closeMenu()}
			class="button {menu ? 'menu-open' : 'menu-close'}">{!menu ? 'MENU' : 'CLOSE'}</button
		> -->
	</div>

	<nav class:active={menu}>
		<ul class="container">
			{#each items as item}
				<li class="nav-item"><a href={item.href}>{item.title}</a></li>
			{/each}
		</ul>
	</nav>
</header>

<style lang="postcss">
	header {
		font-family: 'FKScreamer';
		text-transform: uppercase;
		font-weight: 700;
		font-size: 2rem;

		position: relative;
		z-index: 1;

		div {
			position: fixed;
			z-index: 1;
			display: flex;
			justify-content: space-between;
			left: 50%;
			transform: translateX(-50%);
			width: 100%;
		}

		button {
			border: none;
			background-color: transparent;
			color: var(--white);
			cursor: pointer;
		}

		ul {
			display: none;
		}

		nav {
			opacity: 0;
			transform: scale(1.5);
		}

		nav.active {
			left: 0;
			top: 0;
			height: 100svh;
			width: 100%;
			position: fixed;
			backdrop-filter: blur(50px);
			background-color: rgba(0, 0, 0, 0.1);

			display: flex;
			align-items: center;
			justify-content: center;

			ul {
				display: block;
				text-align: center;
				font-size: 3rem;
			}
		}
	}
</style>
