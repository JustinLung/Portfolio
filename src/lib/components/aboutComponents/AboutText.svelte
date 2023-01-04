<p>
	My name is Justin Lung I am 22 years old, born and raised in a small country called The
	Netherlands. Currently studying at Amsterdam University of Applied Sciences.
</p>
<p>
	I started as a Front End Developer in 2018. Since then I have been dedicating my life to build
	beautiful digital products made with <span>React</span> and <span>Svelte</span> (also made some
	projects with <span>Vue.js</span> & <span>Nuxt.js</span> 🎉). I’m never done with learning new things
	and hope to learn more along the road.
</p>

<style>
	span {
		font-weight: bold;
		position: relative;
	}

	span:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: var(--color-crimson);
		transform-origin: bottom left;
		animation: animationUnderline 1s ease-in-out;
	}

	@keyframes animationUnderline {
		0% {
			opacity: 0;
			transform: scale(0);
		}
		100% {
			opacity: 1;
			transform: scaleX(1);
		}
	}

	p {
		font-size: var(--font-size-sm);
		color: var(--color-grey);
		line-height: 2rem;
		padding-top: 1rem;
	}

	@media (max-width: 35rem) {
		p {
			font-size: var(--font-size-normal);
		}
	}
</style>
