<script lang="ts">
	let isActive = false;

	function toggleNavMenu() {
		isActive = !isActive;

		isActive ? document.body.classList.add('freeze') : document.body.classList.remove('freeze');
	}
	function closeNavMenu() {
		isActive = false;
		document.body.classList.remove('freeze');
	}
</script>

<header>
	<h1>justin.dev</h1>
	<nav class:active={isActive}>
		<a href="/" sveltekit:prefetch on:click={closeNavMenu}>Home</a>
		<a href="/" sveltekit:prefetch on:click={closeNavMenu}>Work</a>
		<a href="/" sveltekit:prefetch on:click={closeNavMenu}>About</a>
		<a href="/" sveltekit:prefetch on:click={closeNavMenu}>Contact</a>
	</nav>
	<button on:click={toggleNavMenu} class:active={isActive}>
		<span />
		<span />
		<span />
	</button>
</header>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		max-width: 70rem;
		margin: 0 auto;
		padding: 2rem 0;
	}

	h1 {
		font-size: 2rem;
		position: relative;
		z-index: 99;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 2rem;
		font-size: 1.2rem;
	}

	a:last-child {
		background-color: var(--color-blue);
		border: 2px solid var(--color-blue);
		border-radius: 1.5rem;
		padding: 0.5rem 1.5rem;
		transition: 0.2s ease-in-out;
	}

	a:last-child:hover {
		background-color: transparent;
	}

	nav.active {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		font-weight: bold;
		gap: 1.5rem;
		inset: 0;
		width: 100%;
		height: 100vh;
		background-color: var(--color-blue);
		overflow: hidden;
		z-index: 20;
	}

	nav.active a {
		background-color: var(--color-cmd-yellow);
		filter: brightness(85%);
		width: 85%;
	}

	nav.active a:last-child {
		background-color: transparent;
		border: none;
		padding: 0;
	}

	button {
		all: unset;
		display: block;
		display: none;
		position: relative;
		z-index: 99;
	}

	button span {
		display: block;
		width: 2rem;
		height: 0.2rem;
		margin-bottom: 5px;
		position: relative;
		background-color: var(--color-cream-white);
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
		transform: translateX(15px);
	}

	button.active span:nth-child(3) {
		transform: translate(-3px, 3px) rotate(-45deg);
	}

	@media (max-width: 80rem) {
		header {
			padding: 1.5rem 1rem;
		}
	}

	@media (max-width: 60rem) {
		nav {
			display: none;
		}
		button {
			display: block;
		}
	}
</style>
