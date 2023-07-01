<script lang="ts">
	let counter: number;

	function startLoader() {
		let currentValue = 0;
		function updateCounter() {
			if (currentValue === 100) {
				return;
			}
			currentValue += Math.floor(Math.random() * 10) + 1;

			if (currentValue > 100) {
				currentValue = 100;
			}

			counter = currentValue;
		}
	}
</script>

<div>
	<span>{counter}%</span>
</div>

<style>
	div {
		position: fixed;
		width: 100vw;
		height: 100svh;
		z-index: 2;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: var(--raisin-black);
	}

	span {
		position: fixed;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: flex-end;
		color: var(--ash);
		font-size: clamp(1.5rem, 4vw, 3.8rem);
		padding: 2rem;
	}
</style>
