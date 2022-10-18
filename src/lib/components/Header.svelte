<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<a href="/">justin.dev</a>
	<nav>
		<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
		<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
		<a href="/projects" class:active={$page.url.pathname === '/projects'}>Projects</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
	}

	header > a {
		font-size: 1.5rem;
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
		text-decoration: none;
		font-size: 1rem;
		font-weight: bold;
	}

	@media (max-width: 55rem) {
		header {
			padding: 1rem;
		}
	}
</style>
