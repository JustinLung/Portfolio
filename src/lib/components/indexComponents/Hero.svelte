<script lang="ts">
	import AboutText from '../aboutComponents/AboutText.svelte';
	import Instagram from '../iconComponents/Instagram.svelte';
	import Github from '../iconComponents/Github.svelte';
	import Twitter from '../iconComponents/Twitter.svelte';
	import Linkedin from '../iconComponents/Linkedin.svelte';
	import Discord from '../iconComponents/Discord.svelte';

	function discordAlert() {
		alert('Discord: JUSTIN#6904');
	}
</script>

<section id="home">
	<h1>Frontend Developer creating <span>immersive</span> websites.</h1>
	<AboutText />
	<div>
		<a href="https://instagram.com/justinlung_" target="_blank" rel="noreferrer"><Instagram /></a>
		<a href="https://www.linkedin.com/in/justin-lung-1a0753127/" target="_blank" rel="noreferrer"
			><Linkedin /></a
		>
		<a href="http://twitter.com/justinlung_" target="_blank" rel="noreferrer"><Twitter /></a>
		<a href="http://github.com/justinlung" target="_blank" rel="noreferrer"><Github /></a>
		<button target="_blank" rel="noreferrer" on:click={discordAlert}><Discord /></button>
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
		gap: 0.5rem;
		padding: 2rem 0;
	}

	a,
	button {
		cursor: pointer;
		transition: all 0.3s;
		opacity: 0.8 !important;
		color: var(--color-white);
		border-radius: 0.2rem;
		background: var(--color-pink);
		padding: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		border: 0;
	}

	a:last-child {
		padding: 0.5rem 1.5rem;
		margin-left: 3rem;
	}

	a:hover,
	button:hover {
		opacity: 1;
	}

	span {
		background: linear-gradient(
			-225deg,
			var(--color-dark) 0%,
			var(--color-purple) 29%,
			var(--color-pink) 67%,
			var(--color-yellow) 100%
		);
		background-size: auto auto;
		background-clip: border-box;
		background-size: 200% auto;
		color: var(--color-white);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: gradient 3s linear infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
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
			padding: 1rem;
			align-self: flex-end;
			margin-left: 0;
		}
	}
</style>
