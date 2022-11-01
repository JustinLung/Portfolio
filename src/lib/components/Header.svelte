<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<a href="/" data-sveltekit-prefetch>justin.dev</a>
	<nav>
		<a href="/" class:active={$page.url.pathname === '/'} data-sveltekit-prefetch>Home</a>
		<a href="/about" class:active={$page.url.pathname === '/about'} data-sveltekit-prefetch>About</a
		>
		<a href="/projects" class:active={$page.url.pathname === '/projects'} data-sveltekit-prefetch
			>Projects</a
		>
	</nav>
</header>

<style>
	header {
		width: 100%;
		max-width: 55rem;
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		background-color: var(--color-dark-transparent);
		backdrop-filter: blur(24px);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 0;
		z-index: 1;
	}

	header > a {
		font-size: var(--font-size-md);
	}

	nav > a {
		padding: 0.5rem 1rem;
		border-radius: 0.2rem;
		transition: all 0.3s;
	}

	nav > a:hover,
	.active {
		background-color: var(--color-pink);
	}

	a {
		color: var(--color-white);
		font-size: var(--font-size-normal);
		font-weight: bold;
	}

	@media (max-width: 55rem) {
		header {
			padding: 1.5rem;
		}

		header > a,
		a {
			font-size: 0.9rem;
		}
	}
</style>
