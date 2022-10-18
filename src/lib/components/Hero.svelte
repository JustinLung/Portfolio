<script lang="ts">
	import Instagram from './iconComponents/Instagram.svelte';
	import Github from './iconComponents/Github.svelte';
	import Twitter from './iconComponents/Twitter.svelte';
</script>

<section id="home">
	<h1>Frontend Developer creating immersive websites.</h1>
	<p>
		My name is Justin Lung I am 21 years old, born and raised in a small country called The
		Netherlands. Currently studying at Amsterdam University of Applied Sciences.
	</p>
	<p>
		I started as a Front End Developer in 2018. Since then I have been dedicating my life to build
		beautiful digital products made with <span>React</span> and <span>Svelte</span> (also made some
		projects with <span>Vue.js</span> & <span>Nuxt.js</span> 🎉). I’m never done with learning new things
		and hope to learn more along the road.
	</p>
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

	p {
		color: var(--color-grey);
		font-size: var(--font-size-sm);
		line-height: 2rem;
		padding-top: 1rem;
	}

	span {
		font-weight: bold;
		border-bottom: 2px solid var(--color-crimson);
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
		text-decoration: none;
	}

	a:last-child {
		padding: 0.5rem 1.5rem;
		border-radius: 1rem;
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
