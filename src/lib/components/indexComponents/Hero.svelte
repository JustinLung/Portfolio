<script lang="ts">
	import AboutText from '../aboutComponents/AboutText.svelte';
	import Instagram from '../iconComponents/Instagram.svelte';
	import Github from '../iconComponents/Github.svelte';
	import Twitter from '../iconComponents/Twitter.svelte';
</script>

<section id="home">
	<h1>Frontend Developer creating immersive websites.</h1>
	<AboutText />
	<div>
		<a href="https://instagram.com/justinlung_" target="_blank" rel="noreferrer"><Instagram /></a>
		<a href="http://twitter.com/justinlung_" target="_blank" rel="noreferrer"><Twitter /></a>
		<a href="http://github.com/justinlung" target="_blank" rel="noreferrer"><Github /></a>
		<a href="mailto:justinlung77@gmail.com">Email me</a>
	</div>
</section>

<style>
	section {
		max-width: 55rem;
		margin: 9rem auto 0;
	}

	h1 {
		font-size: var(--font-size-2xl);
		line-height: 5rem;
	}

	div {
		display: flex;
		gap: 1rem;
		padding: 2rem 0;
	}

	a {
		transition: all 0.3s;
		opacity: 0.8;
		color: var(--color-white);
		border-radius: 0.2rem;
		background: var(--color-pink);
		padding: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a:last-child {
		padding: 0.5rem 1.5rem;
		margin-left: 3rem;
	}

	a:hover {
		opacity: 1;
	}

	@media (max-width: 40rem) {
		section {
			margin-top: 4rem;
		}
		h1 {
			font-size: var(--font-size-lg);
			line-height: 2.5rem;
		}

		a:last-child {
			margin-left: 2rem;
		}
	}
</style>
