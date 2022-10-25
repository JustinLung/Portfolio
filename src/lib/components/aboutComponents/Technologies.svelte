<section>
	<div>
		<slot />
	</div>
</section>

<style>
	section {
		height: 20rem;
		margin: auto;
		overflow: hidden;
		position: relative;
		width: 100%;
		max-width: 55rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	section::before,
	section::after {
		background: linear-gradient(to right, var(--color-dark), rgba(255, 255, 255, 0) 100%);
		content: '';
		height: 100%;
		position: absolute;
		width: 2rem;
		z-index: 2;
	}
	section::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}
	section::before {
		left: 0;
		top: 0;
	}
	section div {
		-webkit-animation: scroll 20s linear infinite;
		animation: scroll 20s linear infinite;
		display: flex;
		width: calc(11rem * 14);
	}

	@-webkit-keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(11rem * 7));
		}
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-250px * 7));
		}
	}
</style>
